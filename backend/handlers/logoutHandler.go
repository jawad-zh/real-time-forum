package handlers

import (
	"net/http"

	"golang/backend/services"
	"golang/backend/wbs"
)

type logoutResponseFormat struct {
	Message string `json:"message"`
	Status  string `json:"status"`
}

func LogoutHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		services.Api(w, nil, http.StatusMethodNotAllowed)
		return
	}
	var logoutRespons logoutResponseFormat
	err, deletedUserID, statueCode := services.LogoutService(r)
	if err != nil {
		logoutRespons.Message = "logout failed try later"
		logoutRespons.Status = "failed"
		services.Api(w, logoutRespons, statueCode)
		return
	}
	cookie := &http.Cookie{
		Name:     "session_id",
		Value:    "",
		Path:     "/",
		MaxAge:   -1,
		HttpOnly: true,
		Secure:   false,
	}
	http.SetCookie(w, cookie)
	logoutRespons.Message = "logout"
	logoutRespons.Status = "success"
	services.Api(w, logoutRespons, http.StatusOK)
	wbs.GlobalManager.Desconnection(deletedUserID)
}
