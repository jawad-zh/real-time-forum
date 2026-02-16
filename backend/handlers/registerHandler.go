package handlers

import (
	"encoding/json"
	"fmt"
	"net/http"

	"golang/backend/models"
	"golang/backend/repos"
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
	fmt.Println("-----------------------")
	if !ok {
		fmt.Println("message:",message)
		registerRespons.Message = message
		registerRespons.Status = "failed"
		w.Header().Set("Content-Type", "application/json")
		json.NewEncoder(w).Encode(registerRespons)
		return
	}
	ok, creatMessage := repos.CreatAccount(&user)
	if ok {
		fmt.Println("----------",creatMessage)
		registerRespons.Message = "register successful"
		registerRespons.Status = "success"
	} else {
		fmt.Println("creatMessage",creatMessage)
		registerRespons.Message = creatMessage
		registerRespons.Status = "failed"
	}
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(registerRespons)
	// fmt.Println(user,creatMessage)
}
