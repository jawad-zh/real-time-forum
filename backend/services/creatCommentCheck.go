package services

import (
	"errors"
	"fmt"
	"golang/backend/middleware"
	"golang/backend/repos"
)

func CommentCheck(user middleware.MiddlewareInfoFormat, PostID int, commentContent string) (error, string) {
	fmt.Println("from comment check this is the user",user)
	if len(commentContent) == 0 {
		return errors.New("the comment can't be empty"), ""
	} else if len(commentContent) >= 1000 {
		return errors.New("The comment to large ( More than 1000 )"), ""
	}
	err, message := repos.CreatComment(user.UserID, PostID, commentContent)
	if err != nil {
		return err, message
	}

	return nil, ""
}
