package repos

import (
	"fmt"

	"golang/backend/db"
)

func UpdateMessageStateRepos( ReceiverID int, senderID int) {
	_, err := db.DataBase.Exec(`
	UPDATE PrivateMessages 
	SET IsRead = TRUE 
	WHERE SenderId = ? AND ReceiverId = ?
	`, senderID, ReceiverID)
	if err != nil {
		fmt.Println("Errorrr data base", err)
		return
	}
}
