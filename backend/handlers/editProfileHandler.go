package handlers

import (
	"encoding/json"
	"fmt"
	"net/http"

	"golang/backend/repos"
	"golang/backend/services"
)

type EditProfileHandlerResponsFormat struct {
	Statue  string `json:"statue"`
	Message string `json:"message"`
}

func EditProfileHandler(w http.ResponseWriter, r *http.Request) {
	var editProfileRespons EditProfileHandlerResponsFormat
	err := r.ParseMultipartForm(10 << 20)
	if err != nil {
		fmt.Println("large size")
		return
	}

	err, session := repos.CheckSession(r)
	if err != nil {
		editProfileRespons.Message = "no session found"
		editProfileRespons.Statue = "failed"
		w.Header().Set("Type-Content", "application/json")
		json.NewEncoder(w).Encode(&editProfileRespons)
		return
	}
	err=services.EditProfile(r, session)
	if err != nil{
		editProfileRespons.Statue = "failed"
		w.Header().Set("Content-Type","application/json")
		json.NewEncoder(w).Encode(editProfileRespons)
	}
	editProfileRespons.Statue = "success"
		w.Header().Set("Content-Type","application/json")
		json.NewEncoder(w).Encode(editProfileRespons)
}
