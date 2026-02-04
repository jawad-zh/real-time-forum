package handlers

import (
	"encoding/json"
	"fmt"
	"net/http"

	"golang/backend/models"
	"golang/backend/services"
)

type loginResponseFormat struct {
	Message string `json:"message"`
	Status  string `json:"status"`
}

func LoginHandler(w http.ResponseWriter, r *http.Request) {
	var loginUser *models.Login
	var loginResponse loginResponseFormat
	json.NewDecoder(r.Body).Decode(&loginUser)
	ok, message, data := services.LoginChecker(loginUser)
	if ok {
		err,sessionID := services.CreatSession(data)
		if err != nil {
			fmt.Println("hh")
		}
		http.SetCookie(w, &http.Cookie{
			Name:     "session_id",
			Value:    sessionID,
			Path:     "/",
			HttpOnly: true,
			MaxAge:   86400, 
		})

		loginResponse.Message = message
		loginResponse.Status = "success"
	} else {
		loginResponse.Message = message
		loginResponse.Status = "failed"
	}
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(loginResponse)
}
