package services

import (
	"encoding/json"
	"fmt"
	"net/http"

	"golang/backend/repos"
)

type likeJsonFormat struct {
	ID int `json:"PostID"`
}
type likeHandlerResponseFormat struct{
	Statue string `json:"statue"`
	Message string `json:"message"`
}

func LikeServie(r *http.Request) (error,*likeHandlerResponseFormat){
	var postID likeJsonFormat
	var likeHandlerResponse likeHandlerResponseFormat
	err, session := repos.CheckSession(r)
	if err != nil {
		fmt.Println("no session")
		likeHandlerResponse.Message = "no session"
		likeHandlerResponse.Statue = "failed"
		return err,&likeHandlerResponse
	}
	err = json.NewDecoder(r.Body).Decode(&postID)
	if err != nil {
		fmt.Println("Error:", err)
		likeHandlerResponse.Message = "sever error"
		likeHandlerResponse.Statue = "failed"
		 return err,&likeHandlerResponse
	}
	// PostID need to come from handler
	err, message := repos.LikePost(postID.ID, session.UserID)
	if err != nil {
		likeHandlerResponse.Message = message
		likeHandlerResponse.Statue = "failed"
		return err,&likeHandlerResponse
	}
	likeHandlerResponse.Message = message
	likeHandlerResponse.Statue = "success"
	return  nil , &likeHandlerResponse
}
