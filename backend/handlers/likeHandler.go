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
	Id int `json:"PostID"`
}

func LikeHandler(w http.ResponseWriter, r *http.Request) {
	var postID PostIDFormat
	var likeHandlerResponse likeHandlerResponseFormat
		if r.Method != http.MethodPost {
		services.Api(w, nil, http.StatusMethodNotAllowed)
		return
	}
	user, ok := middleware.GetUserFromContext(r)
	if !ok {
		likeHandlerResponse.Message = "sever error"
		likeHandlerResponse.Statue = "Unauthorized"
		services.Api(w,likeHandlerResponse,http.StatusUnauthorized)
		return
	}
	err := json.NewDecoder(r.Body).Decode(&postID)
	fmt.Println("PostID", postID.Id)
	if err != nil {
		likeHandlerResponse.Message = "sever error"
		likeHandlerResponse.Statue = "failed"
		services.Api(w,likeHandlerResponse,http.StatusInternalServerError)
		return
	}
	err, message,statueCode := services.LikeServie( postID.Id,user.UserID)
	if err != nil {
		likeHandlerResponse.Statue = "failed"
		
		
		} else {
			likeHandlerResponse.Message = message
			likeHandlerResponse.Statue = "success"
		}
		services.Api(w,likeHandlerResponse,statueCode)
}
