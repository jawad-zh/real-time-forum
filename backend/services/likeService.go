package services

import (
	"golang/backend/repos"
)

func LikeServie(PostID int, UserID int) (error,string) {
	// PostID need to come from handler
	err, message:= repos.LikePost(PostID, UserID)
	if err != nil {
		return err,""
	}

	return nil,message
}
