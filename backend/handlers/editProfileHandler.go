package handlers

import (
	"fmt"
	"net/http"

	"golang/backend/middleware"
	"golang/backend/services"
)

type EditProfileHandlerResponsFormat struct {
	Statue  string `json:"statue"`
	Message string `json:"message"`
}

func EditProfileHandler(w http.ResponseWriter, r *http.Request) {

	if r.Method != http.MethodPost {
		services.Api(w, nil, http.StatusMethodNotAllowed)
		return
	}

	user, ok := middleware.GetUserFromContext(r)
	if !ok {
		fmt.Println(" middlewar Get comment info error from creatcommentHandler")
		services.Api(w, nil, http.StatusUnauthorized)
		return
	}

	var editProfileRespons EditProfileHandlerResponsFormat
	err, message, statueCode := services.EditProfile(r, user.UserID)
	if err != nil {
		editProfileRespons.Statue = "failed"
		editProfileRespons.Message = message
		services.Api(w, editProfileRespons, statueCode)
	}
	
	editProfileRespons.Statue = "success"
	editProfileRespons.Message = message
	services.Api(w, editProfileRespons, http.StatusOK)
}
