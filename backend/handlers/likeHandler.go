package handlers

import (
	"encoding/json"
	"fmt"
	"net/http"

	"golang/backend/middleware"
	"golang/backend/services"
)

type likeHandlerResponseFormat struct {
	Statue  string `json:"statue"`
	Message string `json:"message"`
}
type PostIDFormat struct {
	Id int
}

func LikeHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Println("hello from like handler")
	var postID PostIDFormat
	var likeHandlerResponse likeHandlerResponseFormat
	user, ok := middleware.GetUserFromContext(r)
	if !ok {
		likeHandlerResponse.Message = "sever error"
		likeHandlerResponse.Statue = "Unauthorized"
	}
	err := json.NewDecoder(r.Body).Decode(&postID)
	if err != nil {
		likeHandlerResponse.Message = "sever error"
		likeHandlerResponse.Statue = "failed"
	}
	err, message := services.LikeServie(user.UserID, postID.Id)
	if err != nil {
		likeHandlerResponse.Statue = "failed"

	} else {
		likeHandlerResponse.Message = message
		likeHandlerResponse.Statue = "success"
	}
	json.NewEncoder(w).Encode(&likeHandlerResponse)
}
