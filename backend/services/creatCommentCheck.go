package services

import (
	"errors"
	"fmt"
	"net/http"

	"golang/backend/repos"
)

func CommentCheck(r *http.Request , PostID int, commentContent string) (error, string) {
	err, session := repos.CheckSession(r)
	if err != nil {
		fmt.Println("nos session")
		return errors.New("no session") , "your session expired"
	}

	if len(commentContent) == 0 {
		return errors.New("the comment can't be empty"), ""
	} else if len(commentContent) >= 1000 {
		return errors.New("The comment to large ( More than 1000 )"), ""
	}
	err, message := repos.CreatComment(session.UserID, PostID, commentContent)
	if err != nil {
		return err, message
	}

	return nil, ""
}
