package handlers

import (
	"fmt"
	"golang/backend/middleware"
	"golang/backend/services"
	"net/http"
)

type EditProfileHandlerResponsFormat struct {
	Statue  string `json:"statue"`
	Message string `json:"message"`
}

func EditProfileHandler(w http.ResponseWriter, r *http.Request) {
	user, ok := middleware.GetUserFromContext(r)
	if !ok {
		fmt.Println(" middlewar Get comment info error from creatcommentHandler")
		services.Api(w, "", http.StatusUnauthorized)
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
