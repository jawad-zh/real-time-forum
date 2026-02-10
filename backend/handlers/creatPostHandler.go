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
}

func CreatPostHandler(w http.ResponseWriter, r *http.Request) {
	var post models.PostInformation
	var CreatPostResponse CreatPostResponseFormat
	json.NewDecoder(r.Body).Decode(&post)
	ok:=repos.CheckSession(r)
	if !ok{
		CreatPostResponse.Message = "no session found"
		CreatPostResponse.Status = "failed"
		w.Header().Set("Type-Content","application/json")
		json.NewEncoder(w).Encode(&post)
		return
	}
	repos.CreatPost(&post)
}
