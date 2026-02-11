package repos

import (
	"database/sql"
	"fmt"
	"golang/backend/db"
	"golang/backend/models"
	"net/http"
	"time"
)

func CheckSession(r *http.Request)(bool,*models.Session) {
	var session models.Session
	coockie, err := r.Cookie("session_id")
	if err != nil {
		fmt.Println("Error", err)
		return false ,nil
	}
	row:= db.DataBase.QueryRow(`
	SELECT UserID , ExpiresAt FROM Session WHERE token = ?
	`,coockie.Value)
	err = row.Scan(&session.UserID,&session.ExpiresAt)
	if err == sql.ErrNoRows{
		return false ,nil
	}
	if time.Now().After(session.ExpiresAt){
		return false ,nil
	}
	return true ,&session
}
