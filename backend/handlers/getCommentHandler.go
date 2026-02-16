package handlers

import (
	"encoding/json"
	"fmt"
	"net/http"
	"strconv"

	"golang/backend/repos"
)

func GetCommentHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodGet {
		fmt.Println("method not allowed")
		return
	}
	id := r.URL.Query().Get("PostID")
	PostID, err := strconv.Atoi(id)
	if err != nil {
		fmt.Println("Atoi Error:", err)
		return
	}
	data, err := repos.GetComments(PostID)
	if err != nil {
		fmt.Println("getPost err",err)
		return
	}
	
	w.Header().Set("Content-Type" , "application/json")
	json.NewEncoder(w).Encode(data)
}
