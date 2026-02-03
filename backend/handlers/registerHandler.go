package handlers

import (
	"encoding/json"
	"fmt"
	"golang/backend/models"
	"golang/backend/repos"
	"golang/backend/services"
	"net/http"
)

type registerResponsFormat struct {
	Message string `json:"message"`
	Status  string `json:"status"`
}

func RegisterHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Println("entred from register handler")
	var user models.Users
	var registerRespons registerResponsFormat
	json.NewDecoder(r.Body).Decode(&user)
	ok,message :=services.RegisterChecker(&user)
	if !ok{
		registerRespons.Message = message
		registerRespons.Status = "failed"
		w.Header().Set("Content-Type","application/json")
		json.NewEncoder(w).Encode(registerRespons)
		return
	}
	repos.CreatAccount(&user)
	registerRespons.Message = "register successful"
	registerRespons.Status = "success"
	w.Header().Set("Content-Type","application/json")
		json.NewEncoder(w).Encode(registerRespons)
	fmt.Println(user)
}
