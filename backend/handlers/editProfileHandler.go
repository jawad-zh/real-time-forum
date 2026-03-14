package handlers

import (
	"encoding/json"
	"net/http"
	"golang/backend/middleware"
	"golang/backend/services"
	"fmt"
)

type EditProfileHandlerResponsFormat struct {
	Statue  string `json:"statue"`
	Message string `json:"message"`
}

func EditProfileHandler(w http.ResponseWriter, r *http.Request) {
		user, ok := middleware.GetUserFromContext(r)
		if !ok{
			fmt.Println(" middlewar Get comment info error from creatcommentHandler")
			return
		}
	var editProfileRespons EditProfileHandlerResponsFormat
	err, message := services.EditProfile(r,user.UserID)
	if err != nil {
		editProfileRespons.Statue = "failed"
		editProfileRespons.Message = message
		w.Header().Set("Content-Type", "application/json")
		json.NewEncoder(w).Encode(editProfileRespons)
	}
	editProfileRespons.Statue = "success"
	editProfileRespons.Message = message
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(editProfileRespons)
}
