package services

import (
	"golang/backend/repos"
	"golang/backend/wbs"
	"net/http"
)

func UpdateMessageStateServie(UserID int, ReceiverID int) (error, int) {
	err:=repos.CheckExist(ReceiverID)
	if err != nil{
		return err,http.StatusBadRequest
	}
	err, statueCode := repos.UpdateMessageStateRepos(UserID, ReceiverID)
	if err != nil {
		return err, statueCode
	}
	wbs.GlobalManager.UpdateMessageState(UserID, ReceiverID)
	return nil, statueCode
}
