package repos

import (
	"database/sql"
	"fmt"
	"golang/backend/db"
	"golang/backend/models"
	"net/http"
	"time"
)

func CheckSession(r *http.Request)(error,*models.Session) {
	var session models.Session
	coockie, err := r.Cookie("session_id")
	if err != nil {
		fmt.Println("Error", err)
		return err ,nil
	}
	row:= db.DataBase.QueryRow(`
	SELECT UserID , ExpiresAt FROM Session WHERE token = ?
	`,coockie.Value)
	err = row.Scan(&session.UserID,&session.ExpiresAt)
	if err == sql.ErrNoRows{
		return err ,nil
	}
	if time.Now().After(session.ExpiresAt){
		return err ,nil
	}
	return nil ,&session
}
