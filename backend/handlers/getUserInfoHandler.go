package handlers

import (
	"fmt"
	"net/http"

	"golang/backend/middleware"
	"golang/backend/services"
)

func GetUserInfoHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodGet {
		fmt.Println("method not allowed")
		services.Api(w, nil, http.StatusMethodNotAllowed)
		return
	}
	user, ok := middleware.GetUserFromContext(r)
	if !ok {
		fmt.Println(" middlewar Get comment info error from creatcommentHandler")
		services.Api(w, nil, http.StatusUnauthorized)
		return
	}
	_, getUserInfoResponse, statueCode := services.GetUserInfo(user.UserID)

	services.Api(w, getUserInfoResponse, statueCode)
}
