package services

import (
	"golang/backend/models"
	"golang/backend/repos"
	"net/http"
)

func SendeMessageService(messageInfo *models.PrivateMessage) (error,int) {
	// need to check
	err := repos.InserMessages(messageInfo)
	if err != nil {
		return err,http.StatusInternalServerError
	}

	return nil,http.StatusOK
}
