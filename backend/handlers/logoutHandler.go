package handlers

import (
	"encoding/json"
	"net/http"

	"golang/backend/services"
)

type logoutResponseFormat struct {
	Message string `json:"message"`
	Status  string `json:"status"`
}

func LogoutHandler(w http.ResponseWriter, r *http.Request) {
	var logoutRespons loginResponseFormat
	err := services.LogoutService(r)
	if err != nil {
		logoutRespons.Message = "logout failed try later"
		logoutRespons.Status = "failed"
		w.Header().Set("Content-Type", "application/json")
		json.NewEncoder(w).Encode(logoutRespons)
		return
	}
	cookie := &http.Cookie{
		Name:     "session",
		Value:    "",
		Path:     "/",
		MaxAge:   -1,
		HttpOnly: true,
		Secure:   false,
	}
	http.SetCookie(w, cookie)
	logoutRespons.Message = "logout"
	logoutRespons.Status = "success"
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(logoutRespons)
}
