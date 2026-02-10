package handlers

import (
	"encoding/json"
	"fmt"
	"net/http"

	"golang/backend/repos"
)

type logoutResponseFormat struct {
	Message string `json:"message"`
	Status  string `json:"status"`
}

func LogoutHandler(w http.ResponseWriter, r *http.Request) {
	var logoutRespons loginResponseFormat
	coockie, err := r.Cookie("session_id")
	if err != nil {
		logoutRespons.Message = "logout Failed"
		logoutRespons.Status = "unccessful"
		w.Header().Set("Content-Type", "application/json")
		json.NewEncoder(w).Encode(logoutRespons)
		return
	}
	ok := repos.DeletSession(coockie.Value)
	if !ok {
		logoutRespons.Message = "logout Failed"
		logoutRespons.Status = "unccessful"
		w.Header().Set("Content-Type", "application/json")
		json.NewEncoder(w).Encode(logoutRespons)
		fmt.Println("unseccessful logout")
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
