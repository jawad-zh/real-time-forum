package services

import (
	"fmt"

	"golang/backend/repos"
)

func SavePostService(UserID int, postID int) (error, string) {

	err, message := repos.SavePost(postID, UserID)
	if err != nil {
		fmt.Println("Erorrrrrrrrr", err)
		return err, message
	}
	return nil, message
}
