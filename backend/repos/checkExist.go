package repos

import (
	"database/sql"
	"fmt"
	"golang/backend/db"
)

func CheckExist(PostID int) error {
	var id int
	err := db.DataBase.QueryRow(`SELECT PostID FROM Posts WHERE PostID = ?`, PostID).Scan(&id)
	if err == sql.ErrNoRows {
		return fmt.Errorf("post not found")
	}
	return err
}

func CheckUserExist(UserID int) error {
	var id int
	err := db.DataBase.QueryRow(`SELECT UserID FROM Users WHERE UserID = ?`, UserID).Scan(&id)
	if err == sql.ErrNoRows {
		return fmt.Errorf("user not found")
	}
	return err
}
