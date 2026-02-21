package handlers

import (
	"encoding/json"
	"fmt"
	"net/http"

	"golang/backend/models"
	"golang/backend/services"
)

func SendMessageHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		fmt.Println("method not allowe")
		return
	}
	var message models.PrivateMessage
	err := json.NewDecoder(r.Body).Decode(&message)
	fmt.Println("message", message)
	if err != nil {
		fmt.Println("Decod err:", err)
		return
	}
	err = services.SendeMessageService(r, &message)
	if err != nil {
		// need to do action
		return
	}
}
