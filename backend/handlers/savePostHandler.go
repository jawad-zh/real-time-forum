package handlers

import (
	"encoding/json"
	"fmt"
	"net/http"

	"golang/backend/repos"
)

type SaveJsonFormat struct {
	ID int `json:"PostID"`
}
type SaveHandlerResponseFormat struct {
	Statue  string `json:"statue"`
	Message string `json:"message"`
}

func SavePostHandler(w http.ResponseWriter, r *http.Request) {
	var postID SaveJsonFormat
	var saveHandlerResponse SaveHandlerResponseFormat
	err, session := repos.CheckSession(r)
	if err != nil {
		fmt.Println("no session")
		saveHandlerResponse.Message = "no session"
		saveHandlerResponse.Statue = "failed"
		json.NewEncoder(w).Encode(&saveHandlerResponse)
		return
	}
	err = json.NewDecoder(r.Body).Decode(&postID)
	if err != nil {
		fmt.Println("Error:", err)
		saveHandlerResponse.Message = "sever error"
		saveHandlerResponse.Statue = "failed"
		json.NewEncoder(w).Encode(&saveHandlerResponse)
		return
	}
	err, message := repos.SavePost(postID.ID, session.UserID)
	fmt.Println(message)
	if err != nil {
		saveHandlerResponse.Message = message
		saveHandlerResponse.Statue = "failed"
		json.NewEncoder(w).Encode(&saveHandlerResponse)
		return
	}
	saveHandlerResponse.Message = message
	saveHandlerResponse.Statue = "success"
	json.NewEncoder(w).Encode(&saveHandlerResponse)
}
