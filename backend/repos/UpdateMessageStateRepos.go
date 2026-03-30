package repos

import (
	"fmt"
	"net/http"

	"golang/backend/db"
)

func UpdateMessageStateRepos(ReceiverID int, senderID int) (error, int) {
	_, err := db.DataBase.Exec(`
	UPDATE PrivateMessages 
	SET IsRead = TRUE 
	WHERE SenderId = ? AND ReceiverId = ?
	`, senderID, ReceiverID)
	if err != nil {
		fmt.Println("Errorrr data base", err)
		return err, http.StatusInternalServerError
	}
	return nil, http.StatusOK
}
