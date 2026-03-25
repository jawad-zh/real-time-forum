package services

import (
	"fmt"
	"golang/backend/repos"
)

func LikeServie(PostID int, UserID int) (error, string,int) {
	// PostID need to come from handler
	fmt.Println("post id from service",PostID)
	err, message ,statueCode:= repos.LikePost(PostID, UserID)
	if err != nil {
		return err, "",statueCode
	}

	return nil, message,statueCode
}
