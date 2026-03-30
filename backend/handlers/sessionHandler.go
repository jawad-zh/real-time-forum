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
	if r.Method != http.MethodGet {
		services.Api(w, nil, http.StatusMethodNotAllowed)
		return
	}
	var sessionCheckResponse sessionCheckResponseFormat
	err, _, statueCode := repos.CheckSession(r)
	if err != nil {
		if statueCode == http.StatusUnauthorized {
			sessionCheckResponse.Status = "Unauthorized"
		}
		services.Api(w, sessionCheckResponse, statueCode)
		return
	}
	sessionCheckResponse.Status = "success"
	services.Api(w, sessionCheckResponse, statueCode)
}
