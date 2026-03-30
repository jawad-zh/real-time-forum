package repos

import (
	"fmt"
	"golang/backend/db"
)

func DeletSession(sessonID string) (bool, int) {
	var deletedUserID int
	err := db.DataBase.QueryRow(`
	SELECT UserID FROM Session WHERE token = ?
	`, sessonID).Scan(&deletedUserID)
	_, err = db.DataBase.Exec(`
	DELETE FROM Session WHERE token = ?
	`, sessonID)
	if err != nil {
		fmt.Println("DeletSessionError", err)
		return false, 0
	}

	return true, deletedUserID
}
