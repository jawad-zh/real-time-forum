package handlers

import (
	"encoding/json"
	"fmt"
	"net/http"

	"golang/backend/middleware"
	"golang/backend/services"
)

func GetPostsHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodGet {
		w.WriteHeader(http.StatusMethodNotAllowed)
		return
	}
	user, ok := middleware.GetUserFromContext(r)
	if !ok {
		fmt.Println(" middlewar Get comment info error from creatcommentHandler")
		return
	}
	_, posts := services.GetPosts(r,user.UserID)
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(&posts)
}
