package handlers

import (
	"encoding/json"
	"fmt"
	"golang/backend/services"
	"net/http"
)

type SenderID struct {
	UserID int `json:"UserID"`
}

func UpdateMessageStateHandler(w http.ResponseWriter, r *http.Request) {
	var id SenderID
	if r.Method != http.MethodPost {
		fmt.Println("method not allowed")
		return
	}
	json.NewDecoder(r.Body).Decode(&id)
	services.UpdateMessageStateServie(r, id.UserID)

}
