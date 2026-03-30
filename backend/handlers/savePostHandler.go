package handlers

import (
	"encoding/json"
	"fmt"
	"net/http"

	"golang/backend/middleware"
	"golang/backend/services"
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
		if r.Method != http.MethodPost {
		services.Api(w, nil, http.StatusMethodNotAllowed)
		return
	}
	err := json.NewDecoder(r.Body).Decode(&postID)
	if err != nil {
		fmt.Println("Error:", err)
		saveHandlerResponse.Message = "save post failed try later"
		saveHandlerResponse.Statue = "failed"
		json.NewEncoder(w).Encode(&saveHandlerResponse)
		return
	}
	user, ok := middleware.GetUserFromContext(r)
	if !ok {
		fmt.Println(" middlewar Get comment info error from creatcommentHandler")
		return
	}
	err, message,statueCode := services.SavePostService(user.UserID, postID.ID)
	if err != nil {
		saveHandlerResponse.Message = message
		saveHandlerResponse.Statue = "failed"
		services.Api(w,saveHandlerResponse,statueCode)
		return
	}
	saveHandlerResponse.Message = message
	saveHandlerResponse.Statue = "success"
	services.Api(w,saveHandlerResponse,statueCode)
}
