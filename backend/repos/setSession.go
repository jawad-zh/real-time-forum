package repos

import (
	"database/sql"
	"fmt"

	"golang/backend/db"
	"golang/backend/models"
)

func SetSession(session *models.Session, user *models.Users) error {
	var test string
	 err:= db.DataBase.QueryRow(
		`
		SELECT token FROM Session WHERE UserID = ?
		`,user.UserID).Scan(&test)
		if err == sql.ErrNoRows{
			_, err = db.DataBase.Exec(
		`INSERT INTO Session (UserID , token , ExpiresAt) VALUES (?,?,?)`, user.UserID, session.Token, session.ExpiresAt)
	if err != nil {
		fmt.Println("set session in database error",err)
		return err
	}
	return nil
		}else if err != nil{
			fmt.Println("slect session error")
			return err
		}
		_,err= db.DataBase.Exec(`
		UPDATE Session SET token = ? , ExpiresAt = ?
		WHERE UserID = ?
		`,session.Token,session.ExpiresAt,user.UserID)
		if err != nil{
			fmt.Println("update session err",err)
			return err
		}
	return nil
}
