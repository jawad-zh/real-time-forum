package handlers

import (
	"encoding/json"
	"fmt"
	"net/http"

	"golang/backend/services"
)

func GetUserInfoHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodGet {
		fmt.Println("method not allowed")
		return
	}
	_, getUserInfoResponse := services.GetUserInfo(r)

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(getUserInfoResponse)
}
