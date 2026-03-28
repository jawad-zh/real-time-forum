package handlers

import (
	"encoding/json"
	"net/http"

	"golang/backend/models"
	"golang/backend/services"
)

type registerResponsFormat struct {
	Message string `json:"message"`
	Status  string `json:"status"`
}

func RegisterHandler(w http.ResponseWriter, r *http.Request) {
	var user models.Users
	var registerRespons registerResponsFormat
		if r.Method != http.MethodPost {
		services.Api(w, "", http.StatusMethodNotAllowed)
		return
	}
	json.NewDecoder(r.Body).Decode(&user)
	ok, message ,statueCode:= services.RegisterChecker(&user)
	if !ok {
		registerRespons.Message = message
		registerRespons.Status = "failed"
		services.Api(w,registerRespons,statueCode)
		return
	}

	registerRespons.Message = message
	registerRespons.Status = "success"
	services.Api(w,registerRespons,statueCode)
	// fmt.Println(user,creatMessage)
}
