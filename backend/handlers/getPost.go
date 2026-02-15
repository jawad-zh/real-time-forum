package handlers

import (
	"encoding/json"
	"net/http"

	"golang/backend/repos"
)

func GetPostsHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodGet {
		w.WriteHeader(http.StatusMethodNotAllowed)
		return
	}
	category := r.URL.Query().Get("category")
	posts, err := repos.GetPosts(category, r)
	// fmt.Println("posts from posthandler",posts)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		return
	}
	// repos.GetPostsCategorys(&posts)
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(&posts)
}
