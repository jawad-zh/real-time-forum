package repos

import (
	"database/sql"
	"fmt"
	"golang/backend/db"
	"golang/backend/models"
	"net/http"
	"time"
)

func CheckSession(r *http.Request) (error, *models.Session, int) {
	var session models.Session
	cookie, err := r.Cookie("session_id")
	if err != nil {
		fmt.Println("Error", err)
		return err, nil, http.StatusUnauthorized
	}
	row := db.DataBase.QueryRow(`
	SELECT s.UserID, u.Nickname, s.ExpiresAt
	FROM Session s
	JOIN Users u ON s.UserID = u.UserID
	WHERE s.token = ?
`, cookie.Value)
	err = row.Scan(&session.UserID, &session.UserNickname, &session.ExpiresAt)
	if err == sql.ErrNoRows {
		return err, nil, http.StatusUnauthorized
	} else if err != nil {
		fmt.Println("Error scanning session:", err)
		return err, nil, http.StatusInternalServerError
	}
	if time.Now().After(session.ExpiresAt) {
		return err, nil, http.StatusUnauthorized
	}
	return nil, &session, http.StatusOK
}
