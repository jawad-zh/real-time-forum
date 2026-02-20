package services

import (
	"fmt"
	"net/http"

	"golang/backend/models"
	"golang/backend/repos"
)

func SendeMessageService(r *http.Request, messageInfo *models.PrivateMessage) {
	// need to check
	err,_:=repos.CheckSession(r)
	if err != nil {
		fmt.Println("Error session",err)
		return
	}
	// then isert ...
	repos.InserMessages(messageInfo)

}
