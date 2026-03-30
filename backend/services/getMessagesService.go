package services

import (
	"golang/backend/models"
	"golang/backend/repos"
	"net/http"
)

func GetMessages(UserID int, receiverID int, offset int) (error, *[]models.PrivateMessage ,int ) {
	err:= repos.CheckUserExist(UserID)
	if err != nil{
		return err,nil,http.StatusBadRequest
	}
	err, data,statueCode := repos.GetMessagesRepos(receiverID, UserID, offset)
	if err != nil {
		return err, nil,statueCode
	}
	return nil, data , statueCode
}
