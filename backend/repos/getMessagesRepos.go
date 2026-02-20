package repos

import (
	"fmt"
	"golang/backend/db"
	"golang/backend/models"
)

func GetMessagesRepos(receiverID int , senderID int)(error,*[]models.PrivateMessage){
	var messages []models.PrivateMessage
	fmt.Println("Receiver:",receiverID)
	fmt.Println("senderID:",senderID)
	rows, err := db.DataBase.Query(`
    SELECT SenderId, Content 
    FROM PrivateMessages 
    WHERE 
	(ReceiverId = ? AND SenderId = ?)
	OR
	(ReceiverId = ? AND SenderId = ?)
	`, receiverID, senderID, senderID, receiverID)
	if err != nil{
		fmt.Println("Select messages err:",err)
		return err ,nil
	}
	for rows.Next(){
		var message models.PrivateMessage
		err:=rows.Scan(&message.SenderID,&message.Content)
		if err != nil{
			fmt.Println("Scan messages Error:",err)
			return err , nil
		}
		messages = append(messages, message)
	}
	return nil , &messages
}