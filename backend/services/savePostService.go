package services

import (
	"fmt"
	"net/http"

	"golang/backend/repos"
)

func SavePostService(UserID int, postID int) (error, string, int) {
	err := repos.CheckExist(postID)
	if err != nil {
		return err, "", http.StatusBadRequest
	}
	err, message, statueCode := repos.SavePost(postID, UserID)
	if err != nil {
		fmt.Println("Erorrrrrrrrr", err)
		return err, message, statueCode
	}
	return nil, message, statueCode
}
