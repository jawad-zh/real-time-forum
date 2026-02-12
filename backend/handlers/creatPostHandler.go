package handlers

import (
	"encoding/json"
	"golang/backend/models"
	"golang/backend/repos"
	"net/http"
)



type CreatPostResponseFormat struct{
	Message string `json:"message"`
	Status string `json:"status"`
	PostID int64 `json:"PostID"`
}

func CreatPostHandler(w http.ResponseWriter, r *http.Request) {
	var post models.PostInformation
	var CreatPostResponse CreatPostResponseFormat
	json.NewDecoder(r.Body).Decode(&post)
	ok,session:=repos.CheckSession(r)
	if !ok{
		CreatPostResponse.Message = "no session found"
		CreatPostResponse.Status = "failed"
		w.Header().Set("Type-Content","application/json")
		json.NewEncoder(w).Encode(&post)
		return
	}
	postId:=repos.CreatPost(&post,session)
	if postId != 0 {
		CreatPostResponse.Message = ""
		CreatPostResponse.Status = "success"
		CreatPostResponse.PostID = postId
		json.NewEncoder(w).Encode(&CreatPostResponse)
	}
}
