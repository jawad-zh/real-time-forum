package services

import (
	"golang/backend/repos"
	"golang/backend/wbs"
)

func UpdateMessageStateServie(UserID int, ReceiverID int) {
	repos.UpdateMessageStateRepos(UserID, ReceiverID)
	wbs.GlobalManager.UpdateMessageState(UserID, ReceiverID)
}
