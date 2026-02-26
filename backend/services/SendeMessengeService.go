package services

import (
	"fmt"
	"net/http"

	"golang/backend/models"
	"golang/backend/repos"
)

func SendeMessageService(r *http.Request, messageInfo *models.PrivateMessage)error {
	// need to check
	err,_:=repos.CheckSession(r)
	if err != nil {
		fmt.Println("Error session",err)
		return err
	}
	// then isert ...
	err=repos.InserMessages(messageInfo)
	if err != nil{
		return err
	}
	
	return nil
}
