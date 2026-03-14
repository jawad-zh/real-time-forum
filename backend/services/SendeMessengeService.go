package services

import (
	"golang/backend/models"
	"golang/backend/repos"
)

func SendeMessageService(messageInfo *models.PrivateMessage) error {
	// need to check
	err := repos.InserMessages(messageInfo)
	if err != nil {
		return err
	}

	return nil
}
