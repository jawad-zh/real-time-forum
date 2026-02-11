package handlers

import (
	"database/sql"
	"errors"
	"fmt"
	"log"
	"net/http"
	"time"
)

// HandleLike gère les likes et dislikes sans utiliser JSON
func HandleLike(db *sql.DB) http.HandlerFunc {
	
	return func(w http.ResponseWriter, r *http.Request) {
		// Vérifie la méthode
		if r.Method != http.MethodPost {
			
			w.WriteHeader(http.StatusMethodNotAllowed)
			return
		}

		// Vérifie la session utilisateur
		userID, err := GetUserIDFromSession(r, db)
		if err != nil {
			return
		}

		// Récupère les valeurs envoyées depuis un formulaire HTML
		postID := r.FormValue("post_id")
		value := r.FormValue("value") // "1" pour like, "-1" pour dislike
		var dummy int                 // or matching columns
		err = db.QueryRow("SELECT id FROM posts WHERE id = ?", postID).Scan(&dummy)

		if err == sql.ErrNoRows {
			w.WriteHeader(http.StatusBadRequest)
			return
		}

		if err != nil {

			log.Println("DB error:", err)
			return
		}
		if postID == "" || value == "" {
			
			w.WriteHeader(http.StatusBadRequest)
			return
		}

		// Vérifie si un like existe déjà
		var existing int
		err = db.QueryRow("SELECT kind FROM likes WHERE user_id = ? AND post_id = ?", userID, postID).Scan(&existing)

		if err == sql.ErrNoRows {
			// Premier like
			_, err = db.Exec("INSERT INTO likes (user_id, post_id, kind) VALUES (?, ?, ?)", userID, postID, value)
		} else if err == nil {
			if fmt.Sprint(existing) == value {
				// Même choix -> suppression
				_, err = db.Exec("DELETE FROM likes WHERE user_id = ? AND post_id = ?", userID, postID)
			} else {
				// Changement (like <-> dislike)
				_, err = db.Exec("UPDATE likes SET kind = ? WHERE user_id = ? AND post_id = ?", value, userID, postID)
			}
		}

		if err != nil {
			
			w.WriteHeader(http.StatusInternalServerError)
			return
		}
	}
}

func HandleCommentLike(db *sql.DB) http.HandlerFunc {
	
	return func(w http.ResponseWriter, r *http.Request) {
		// Vérifie la méthode
		if r.Method != http.MethodPost {
			
			w.WriteHeader(http.StatusMethodNotAllowed)
			return
		}
		// Vérifie la session utilisateur
		userID, err := GetUserIDFromSession(r, db)
		if err != nil {
			return
		}
		// Récupère les valeurs envoyées depuis un formulaire HTML
		commentID := r.FormValue("comment_id")
		value := r.FormValue("value") // "1" pour like, "-1" pour dislike
		var dummy int                 // or matching columns
		err = db.QueryRow("SELECT id FROM comments WHERE id = ?", commentID).Scan(&dummy)

		if err == sql.ErrNoRows {
			w.WriteHeader(http.StatusBadRequest)
			return
		}

		if err != nil {

			log.Println("DB error:", err)
			return
		}
		if commentID == "" || value == "" {
			
			w.WriteHeader(http.StatusBadRequest)
			return
		}
		var existing int
		err = db.QueryRow("SELECT kind FROM comments_like WHERE user_id = ? AND comment_id = ?", userID, commentID).Scan(&existing)

		if err == sql.ErrNoRows {
			_, err = db.Exec("INSERT INTO comments_like (user_id, comment_id, kind) VALUES (?, ?, ?)", userID, commentID, value)
		} else if err == nil {
			if fmt.Sprint(existing) == value {
				_, err = db.Exec("DELETE FROM comments_like WHERE user_id = ? AND comment_id = ?", userID, commentID)
			} else {
				_, err = db.Exec("UPDATE comments_like SET kind = ? WHERE user_id = ? AND comment_id = ?", value, userID, commentID)
			}
		}

		if err != nil {
			
			w.WriteHeader(http.StatusInternalServerError)
			return
		}
	}
}

func GetUserIDFromSession(r *http.Request, db *sql.DB) (int, error) {
	// Lire le cookie envoyé par le navigateur
	cookie, err := r.Cookie("session_token")
	if err != nil {
		return 0, errors.New("no session cookie")
	}

	// Chercher le token dans la base
	var userID int
	var expiresAt time.Time
	err = db.QueryRow("SELECT user_id, expires_at FROM sessions WHERE token = ?", cookie.Value).Scan(&userID, &expiresAt)
	if err != nil {
		return 0, errors.New("invalid session")
	}

	// Vérifier si la session est expirée
	if time.Now().After(expiresAt) {
		// Supprimer la session expirée
		db.Exec("DELETE FROM sessions WHERE token = ?", cookie.Value)
		return 0, errors.New("session expired")
	}

	return userID, nil
}