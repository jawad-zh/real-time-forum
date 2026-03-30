package services

import (
	"golang/backend/repos"
	"net/http"
)

func LikeServie(PostID int, UserID int) (error, string, int) {
	err := repos.CheckExist(PostID)
	if err != nil {
		return err, "", http.StatusBadRequest
	}
	err, message, statueCode := repos.LikePost(PostID, UserID)
	if err != nil {
		return err, "", statueCode
	}

	return nil, message, statueCode
}
