package handlers

import (
	"encoding/json"
	"fmt"
	"net/http"

	"golang/backend/repos"
)

type likeJsonFormat struct{
	ID int `json:"PostID"`
}
type likeHandlerResponseFormat struct{
	Statue string `json:"statue"`
	Message string `json:"message"`
}

func LikeHandler(w http.ResponseWriter, r *http.Request) {
	var postID likeJsonFormat
	var likeHandlerResponse likeHandlerResponseFormat
	err, session := repos.CheckSession(r)
	if err!= nil {
		fmt.Println("no session")
		likeHandlerResponse.Message = "no session"
		likeHandlerResponse.Statue = "failed"
		json.NewEncoder(w).Encode(&likeHandlerResponse)
		return
	}
	err=json.NewDecoder(r.Body).Decode(&postID)
	if err != nil{ 
		fmt.Println("Error:",err)
		likeHandlerResponse.Message = "sever error"
		likeHandlerResponse.Statue = "failed"
		json.NewEncoder(w).Encode(&likeHandlerResponse)
		return
	}
	err,message:=repos.LikePost(postID.ID,session.UserID)
	if err != nil{
		likeHandlerResponse.Message = message
		likeHandlerResponse.Statue = "failed"
		json.NewEncoder(w).Encode(&likeHandlerResponse)
		return 
	}
		likeHandlerResponse.Message = message
		likeHandlerResponse.Statue = "success"
		json.NewEncoder(w).Encode(&likeHandlerResponse)

}
