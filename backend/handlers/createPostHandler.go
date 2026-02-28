package handlers

import (
	"database/sql"
	"encoding/json"
	"io"
	"net/http"
)

type post struct {
	Title      string `json:"title"`
	Content    string `json:"content"`
	Categories []int  `json:"categories"`
}

func CreatePostHandler(db *sql.DB) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		if r.Method != http.MethodPost {
			w.WriteHeader(http.StatusMethodNotAllowed)
			return
		}
		body, err := io.ReadAll(r.Body)
		if err != nil {
			w.WriteHeader(http.StatusInternalServerError)
			return
		}
		var postData post
		err = json.Unmarshal(body, &postData)
		if err != nil {
			w.WriteHeader(http.StatusBadRequest)
			return
		}
		userid := GetUserIDFromRequest(db, r)
		if userid == 0 {
			w.WriteHeader(http.StatusUnauthorized)
			return
		}
		res, err := db.Exec("INSERT INTO posts (user_id, title, content) VALUES (?, ?, ?)", userid, postData.Title, postData.Content)
		if err != nil {
			w.WriteHeader(http.StatusInternalServerError)
			return
		}

		postID, err := res.LastInsertId()
		if err != nil {
			w.WriteHeader(http.StatusInternalServerError)
			return
		}
		for _, categoryID := range postData.Categories {
			if categoryID <= 0 || categoryID > 7 {
				w.WriteHeader(http.StatusBadRequest)
				return
			}
			_, err = db.Exec("INSERT INTO post_categories (post_id, category_id) VALUES (?, ?)", postID, categoryID)
			if err != nil {
				w.WriteHeader(http.StatusInternalServerError)
				return
			}
		}
		w.WriteHeader(http.StatusCreated)

	}
}

func GetUserIDFromRequest(DB *sql.DB, r *http.Request) int64 {
	c, err := r.Cookie("session_token")
	if err != nil {
		return 0
	}
	token := c.Value

	var userID int64

	err = DB.QueryRow(
		"SELECT user_id FROM sessions WHERE token = ? AND expires_at > datetime('now')",
		token,
	).Scan(&userID)
	if err != nil {
		return 0
	}

	return userID
}