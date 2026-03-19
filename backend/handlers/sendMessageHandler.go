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
		services.Api(w,"",http.StatusMethodNotAllowed)
		return
	}
	var message models.PrivateMessage
	err := json.NewDecoder(r.Body).Decode(&message)
	if err != nil {
		fmt.Println("Decod err:", err)
		services.Api(w,"",http.StatusInternalServerError)
		return
	}
	err,statueCode := services.SendeMessageService(&message)
	if err != nil {
		SendMessageRespons.Statue = "failed"
		services.Api(w,SendMessageRespons,statueCode)
		return
	}
	// need to return something
	wbs.GlobalManager.SendMessage(message.SenderID,message.ReceiverID,message.Content)
	SendMessageRespons.Statue = "success"
	services.Api(w,SendMessageRespons,statueCode)


}
