package services

import (
	"fmt"
	"golang/backend/repos"
)

func LikeServie(PostID int, UserID int) (error, string) {
	// PostID need to come from handler
	fmt.Println("post id from service",PostID)
	err, message := repos.LikePost(PostID, UserID)
	if err != nil {
		return err, ""
	}

	return nil, message
}
