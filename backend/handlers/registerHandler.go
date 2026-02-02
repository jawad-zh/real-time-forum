package handlers

import (
	"encoding/json"
	"fmt"
	"golang/backend/models"
	"net/http"
)

func RegisterHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Println("entred")
	var user models.Users
	json.NewDecoder(r.Body).Decode(&user)
	fmt.Println(user)
}
