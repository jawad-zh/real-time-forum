package repos

import (
	"fmt"

	"golang/backend/db"
	"golang/backend/models"
)

func SetSession(session *models.Session, user *models.Users) error {
	_, err := db.DataBase.Exec(
		`INSERT INTO Session (UserID , token , ExpiresAt) VALUES (?,?,?)`, user.UserID, session.Token, session.ExpiresAt)
	if err != nil {
		fmt.Println("set session in database error",err)
		return err
	}
	return nil
}
