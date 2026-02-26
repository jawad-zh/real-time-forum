package services

import (
	"fmt"
	"net/http"

	"golang/backend/repos"
)

func SavePostService(r *http.Request, postID int)(error,string) {
	err, session := repos.CheckSession(r)
	if err != nil {
		fmt.Println("Erooor",err)
		return err , ""
	}
	err, message := repos.SavePost(postID, session.UserID)
	if err != nil {
		fmt.Println("Erorrrrrrrrr",err)
		return err , message
	}
	return nil,message
}
