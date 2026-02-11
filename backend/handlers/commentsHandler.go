package handlers

import (
	"database/sql"
	"fmt"
	"net/http"
)

func HandleAddComment(db *sql.DB) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		// Vérifie la méthode
		if r.Method != http.MethodPost {
			w.WriteHeader(http.StatusBadRequest)
			return
		}

		// Vérifie la session utilisateur
		userID, err := GetUserIDFromSession(r, db)
		if err != nil {
			return
		}

		// Récupère les champs du formulaire
		postID := r.FormValue("post_id")
		content := r.FormValue("comment")
		if postID == "" || content == "" {

			w.WriteHeader(http.StatusBadRequest)
			return
		}
		var dummy int // or matching columns
		err = db.QueryRow("SELECT id FROM posts WHERE id = ?", postID).Scan(&dummy)

		if err == sql.ErrNoRows {
			w.WriteHeader(http.StatusBadRequest)
			return
		}
		// Insérer le commentaire
		_, err = db.Exec("INSERT INTO comments (post_id, user_id, comment) VALUES (?, ?, ?)", postID, userID, content)
		if err != nil {
			fmt.Println(err)

			w.WriteHeader(http.StatusInternalServerError)
			return
		}

		// Récupère la liste mise à jour des commentaires
		rows, err := db.Query(`
			SELECT u.username, c.comment, c.created_at
			FROM comments c
			JOIN users u ON u.id = c.user_id
			WHERE c.post_id = ?
			ORDER BY c.created_at DESC`, postID)
		if err != nil {

			w.WriteHeader(http.StatusInternalServerError)

			return
		}
		defer rows.Close()
	}
}
