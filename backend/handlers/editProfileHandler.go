package handlers

import (
	"encoding/json"
	"net/http"

	"golang/backend/services"
)

type EditProfileHandlerResponsFormat struct {
	Statue  string `json:"statue"`
	Message string `json:"message"`
}

func EditProfileHandler(w http.ResponseWriter, r *http.Request) {
	var editProfileRespons EditProfileHandlerResponsFormat
	err, message := services.EditProfile(r)
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
