package services

import (
	"net/http"

	"golang/backend/repos"
	"golang/backend/wbs"
	"fmt"
)

func UpdateMessageStateServie(UserID int, ReceiverID int) (error, int) {
	err := repos.CheckUserExist(UserID)
	if err != nil {
		fmt.Println("yeeeeeeeeeeeeeeeep")
		return err, http.StatusBadRequest
	}
	err, statueCode := repos.UpdateMessageStateRepos(UserID, ReceiverID)
	if err != nil {
		return err, statueCode
	}
	wbs.GlobalManager.UpdateMessageState(UserID, ReceiverID)
	return nil, statueCode
}
