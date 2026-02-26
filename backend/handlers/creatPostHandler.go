package handlers

import (
	"encoding/json"
	"net/http"

	"golang/backend/services"
)

func CreatPostHandler(w http.ResponseWriter, r *http.Request) {
	_, _, data := services.CreatPostCheck(r)
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(data)
}
