package services

import (
	"fmt"
	"golang/backend/models"
	"golang/backend/repos"
	"net/http"
)

func GetMessages(r *http.Request , receiverID int) (error,*[]models.PrivateMessage){
	err,session:= repos.CheckSession(r)
	if err != nil{
		fmt.Println("Get messages session Error",err)
		return err ,nil
	}
	err,data:=repos.GetMessagesRepos(receiverID,session.UserID)
	if err != nil{
		return err ,nil
	}
	return nil ,data
}