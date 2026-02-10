package handlers

import (
	"encoding/json"
	"net/http"

	"golang/backend/repos"
)

type sessionCheckResponseFormat struct {
	Status string `json:"status"`
}

func SessionHandler(w http.ResponseWriter, r *http.Request) {
	var sessionCheckResponse sessionCheckResponseFormat
	ok := repos.CheckSession(r)
	if !ok {
		sessionCheckResponse.Status = "unsuccess"
		w.Header().Set("Type-Content", "application/json")
		json.NewEncoder(w).Encode(sessionCheckResponse)
		return
	}
	sessionCheckResponse.Status = "success"
	w.Header().Set("Type-Content", "application/json")
	json.NewEncoder(w).Encode(sessionCheckResponse)
}
