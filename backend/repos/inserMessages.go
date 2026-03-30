package repos

import (
	"fmt"
	"golang/backend/db"
	"golang/backend/models"
)

func InserMessages(messagInfo *models.PrivateMessage, senderID int) error {
	_, err := db.DataBase.Exec(`
	INSERT INTO PrivateMessages (SenderId,ReceiverId,Content)
	VALUES (?,?,?)
	`, senderID, messagInfo.ReceiverID, messagInfo.Content)
	if err != nil {
		fmt.Println("Isert Data Error:", err)
		return err
	}
	return nil
}
