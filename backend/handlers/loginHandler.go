package handlers

import (
	"encoding/json"
	"fmt"
	"net/http"

	"golang/backend/models"
)

type loginResponseFormat struct {
	Message string `json:"message"`
	Status  string `json:"status"`
}

func LoginHandler(w http.ResponseWriter, r *http.Request) {
	var loginUser models.Login
	json.NewDecoder(r.Body).Decode(&loginUser)
	fmt.Println(loginUser)
}
