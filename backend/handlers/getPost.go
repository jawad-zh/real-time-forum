package handlers

import (
	"fmt"
	"net/http"

	"golang/backend/middleware"
	"golang/backend/services"
)

func GetPostsHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodGet {
		services.Api(w, "", http.StatusMethodNotAllowed)
		return
	}
	user, ok := middleware.GetUserFromContext(r)
	if !ok {
		fmt.Println(" middlewar Get comment info error from creatcommentHandler")
		services.Api(w, "", http.StatusUnauthorized)
		return
	}
	_, posts, statueCode := services.GetPosts(r, user.UserID)
	services.Api(w, posts, statueCode)
}
