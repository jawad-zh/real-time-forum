package services

import (
	"errors"
	"golang/backend/middleware"
	"golang/backend/repos"
	"net/http"
)

func CommentCheck(user middleware.MiddlewareInfoFormat, PostID int, commentContent string) (error, string, int) {
	err := repos.CheckExist(PostID)
	if err != nil {
		return err, "", http.StatusBadRequest
	}
	if len(commentContent) == 0 {
		return errors.New("the comment can't be empty"), "", http.StatusBadGateway
	} else if len(commentContent) >= 1000 {
		return errors.New("The comment to large ( More than 1000 )"), "", http.StatusBadRequest
	}
	err, message, statueCode := repos.CreatComment(user.UserID, PostID, commentContent)
	if err != nil {
		return err, message, statueCode
	}

	return nil, "", http.StatusOK
}
