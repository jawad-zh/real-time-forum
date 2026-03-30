package handlers

import (
	"net/http"

	"golang/backend/repos"
	"golang/backend/services"
)

type sessionCheckResponseFormat struct {
	Status string `json:"status"`
}

func SessionHandler(w http.ResponseWriter, r *http.Request) {
	var sessionCheckResponse sessionCheckResponseFormat
	err, _,statueCode := repos.CheckSession(r)
	if err != nil {
		sessionCheckResponse.Status = "unsuccess"
		services.Api(w, nil, statueCode)
		return
	}
	sessionCheckResponse.Status = "success"
	services.Api(w, sessionCheckResponse, statueCode)
}
