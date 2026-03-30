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
	Data *models.Users `json:"userInfo"`
}

func LoginHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method == http.MethodGet {
		http.ServeFile(w, r, "frontend/index.html")
	}else{
		services.Api(w,nil,http.StatusMethodNotAllowed)
	}
	var loginUser *models.Login
	var loginResponse loginResponseFormat
	json.NewDecoder(r.Body).Decode(&loginUser)
	ok, message, data ,statue:= services.LoginChecker(loginUser)
	if ok {
		err, sessionID := services.CreatSession(data)
		if err != nil {
			fmt.Println("Error", err)
			return
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
		loginResponse.Data = data
	} else {
		loginResponse.Message = message
		loginResponse.Status = "failed"
	}
	services.Api(w,loginResponse,statue)
}
