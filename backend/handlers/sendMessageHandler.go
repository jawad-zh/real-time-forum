package handlers

import (
	"encoding/json"
	"fmt"
	"net/http"

	"golang/backend/models"
	"golang/backend/services"
	"golang/backend/wbs"
)
type SendMessageResponseFormat struct{
	Statue string `json:"statue"`
}

func SendMessageHandler(w http.ResponseWriter, r *http.Request) {
	// need to handle failed requests
	var SendMessageRespons SendMessageResponseFormat
	if r.Method != http.MethodPost {
		fmt.Println("method not allowe")
		return
	}
	var message models.PrivateMessage
	err := json.NewDecoder(r.Body).Decode(&message)
	if err != nil {
		fmt.Println("Decod err:", err)
		return
	}
	err = services.SendeMessageService(r, &message)
	if err != nil {
		SendMessageRespons.Statue = "failed"
		w.Header().Set("Content-Type","application/json")
		json.NewEncoder(w).Encode(SendMessageRespons)
		return
	}
	// need to return something
	wbs.GlobalManager.SendMessage(message.SenderID,message.ReceiverID,message.Content)
	SendMessageRespons.Statue = "success"
	w.Header().Set("Content-Type","application/json")
	json.NewEncoder(w).Encode(SendMessageRespons)

}
