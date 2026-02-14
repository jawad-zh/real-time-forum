package handlers

import (
	"encoding/json"
	"fmt"
	"net/http"

	"golang/backend/repos"
)

type commentInfoFormat struct {
	PostID         int    `json:"PostID"`
	CommentContent string `json:"commentValue"`
}
type CreatCommentHandlerResponsFormat struct {
	Statue string `json:"statue"`
}

func CreatCommentHandler(w http.ResponseWriter, r *http.Request) {
	var commentInfo commentInfoFormat
	var CreatCommentHandlerRespons CreatCommentHandlerResponsFormat
	ok, session := repos.CheckSession(r)
	if !ok {
		fmt.Println("nos session")
		return
	}
	err := json.NewDecoder(r.Body).Decode(&commentInfo)
	if err != nil {
		fmt.Println("creat comment handler err", err)
		return
	}
	err = repos.CreatComment(session.UserID, commentInfo.PostID, commentInfo.CommentContent)
	if err != nil {
		CreatCommentHandlerRespons.Statue = "failed"
		json.NewEncoder(w).Encode(&CreatCommentHandlerRespons)
		fmt.Println("creat comment handler error", err)
		return
	}
	CreatCommentHandlerRespons.Statue = "success"
	json.NewEncoder(w).Encode(&CreatCommentHandlerRespons)
}
