package services

import (
	"net/http"

	"golang/backend/models"
	"golang/backend/repos"
)

func SendeMessageService(r *http.Request, messageInfo *models.PrivateMessage) error {
	// need to check
	err := repos.InserMessages(messageInfo)
	if err != nil {
		return err
	}

	return nil
}
