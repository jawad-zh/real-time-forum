package services

import (
	"encoding/json"
	"net/http"
)

// Api sends a JSON response with the given status code.
func Api(w http.ResponseWriter, data any, statusCode int) {
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(statusCode)

	// Encode the response
	if err := json.NewEncoder(w).Encode(data); err != nil {
		http.Error(w, `{"status":"failed","message":"internal server error"}`, http.StatusInternalServerError)
	}
}
