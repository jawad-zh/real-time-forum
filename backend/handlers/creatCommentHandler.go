package handlers

import (
	"encoding/json"
	"fmt"
	"net/http"
	"golang/backend/middleware"
	"golang/backend/services"
)

type commentInfoFormat struct {
	PostID         int    `json:"PostID"`
	CommentContent string `json:"commentValue"`
}
type CreatCommentHandlerResponsFormat struct {
	Statue  string `json:"statue"`
	Message string `json:"message"`
	Data any `json:"commentData"`
}

func CreatCommentHandler(w http.ResponseWriter, r *http.Request) {
	var commentInfo commentInfoFormat
	var CreatCommentHandlerRespons CreatCommentHandlerResponsFormat
		user, ok := middleware.GetUserFromContext(r)
		if !ok{
			fmt.Println(" middlewar Get comment info error from creatcommentHandler")
			return
		}
		fmt.Println("from create Post",user)
	err := json.NewDecoder(r.Body).Decode(&commentInfo)
	if err != nil {
		fmt.Println("creat comment handler err", err)
		return
	}
	err, message := services.CommentCheck(user, commentInfo.PostID, commentInfo.CommentContent)
	if err != nil {
		CreatCommentHandlerRespons.Statue = "failed"
		CreatCommentHandlerRespons.Message = message
		json.NewEncoder(w).Encode(&CreatCommentHandlerRespons)
		fmt.Println("creat comment handler error", err)
		return
	}
	CreatCommentHandlerRespons.Statue = "success"
	json.NewEncoder(w).Encode(&CreatCommentHandlerRespons)
}
