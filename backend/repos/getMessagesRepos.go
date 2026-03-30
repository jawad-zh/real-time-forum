package repos

import (
	"fmt"
	"golang/backend/db"
	"golang/backend/models"
	"net/http"
)

func GetMessagesRepos(receiverID int, senderID int, offset int) (error, *[]models.PrivateMessage, int) {

	var messages []models.PrivateMessage
	rows, err := db.DataBase.Query(`
   SELECT 
    pm.SenderID,
    u.Nickname AS SenderNickname,
    pm.Content,
    pm.CreatedAt
FROM PrivateMessages pm
JOIN Users u ON u.UserID = pm.SenderID
WHERE 
    (pm.ReceiverID = ? AND pm.SenderID = ?)
    OR
    (pm.ReceiverID = ? AND pm.SenderID = ?)
ORDER BY pm.MessageID DESC
LIMIT 10 OFFSET ?;
	`, receiverID, senderID, senderID, receiverID, offset)
	if err != nil {
		fmt.Println("Select messages err:", err)
		return err, nil, http.StatusInternalServerError
	}
	for rows.Next() {
		var message models.PrivateMessage
		err := rows.Scan(&message.SenderID,&message.Nickname, &message.Content, &message.CreatAt)
		if err != nil {
			fmt.Println("Scan messages Error:", err)
			return err, nil, http.StatusInternalServerError
		}
		messages = append(messages, message)

	}
	return nil, &messages, http.StatusOK
}
