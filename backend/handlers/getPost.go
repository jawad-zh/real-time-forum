package handlers

import (
	"encoding/json"
	"net/http"

	"golang/backend/services"
)

func GetPostsHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodGet {
		w.WriteHeader(http.StatusMethodNotAllowed)
		return
	}

	_, posts := services.GetPosts(r)
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(&posts)
}
