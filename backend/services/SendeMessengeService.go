package services

import (
	"errors"
	"net/http"

	"golang/backend/models"
	"golang/backend/repos"
)

func SendeMessageService(messageInfo *models.PrivateMessage, userId int) (error, int) {
	// need to check
	var err error
	if messageInfo.ReceiverID == userId {
		return errors.New("single conversation"), http.StatusBadRequest
	}
	err = repos.CheckUserExist(messageInfo.ReceiverID)
	if err != nil {
		return err, http.StatusBadRequest
	}

	err = repos.InserMessages(messageInfo, userId)
	if err != nil {
		return err, http.StatusInternalServerError
	}

	return nil, http.StatusOK
}
