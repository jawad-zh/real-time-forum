package handlers

import (
	"fmt"
	"net/http"

	"golang/backend/repos"
)

type commentInfo struct {
	PostID         int    `json:"PostID"`
	CommentContent string `json:"CommentContent"`
}

func CreatCommentHandler(w http.ResponseWriter, r *http.Request) {
	ok, seeson := repos.CheckSession(r)
	if !ok {
		fmt.Println("nos session")
		return
	}
}
