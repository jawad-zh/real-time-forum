package handlers

import (
	"encoding/json"
	"net/http"

	"golang/backend/services"
)

func LikeHandler(w http.ResponseWriter, r *http.Request) {
	_, data := services.LikeServie(r)
	json.NewEncoder(w).Encode(&data)
}
