package handlers

import (
	"encoding/json"
	"fmt"
	"net/http"

	"golang/backend/middleware"
	"golang/backend/services"
)

func GetUserInfoHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodGet {
		fmt.Println("method not allowed")
		return
	}
	user, ok := middleware.GetUserFromContext(r)
	if !ok {
		fmt.Println(" middlewar Get comment info error from creatcommentHandler")
		return
	}
	_, getUserInfoResponse := services.GetUserInfo(user.UserID)

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(getUserInfoResponse)
}
