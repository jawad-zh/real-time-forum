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
	json.NewDecoder(r.Body).Decode(&user)
	ok, message := services.RegisterChecker(&user)
	if !ok {
		registerRespons.Message = message
		registerRespons.Status = "failed"
		w.Header().Set("Content-Type", "application/json")
		json.NewEncoder(w).Encode(registerRespons)
		return
	}

	registerRespons.Message = message
	registerRespons.Status = "success"
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(registerRespons)
	// fmt.Println(user,creatMessage)
}
