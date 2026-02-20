package handlers

import (
	"encoding/json"
	"fmt"
	"golang/backend/models"
	"golang/backend/services"
	"net/http"
)


func SendMessageHandler(w http.ResponseWriter , r *http.Request){
	if r.Method != http.MethodPost{
		fmt.Println("method not allowe")
		return
	}
	var message models.PrivateMessage
	err:=json.NewDecoder(r.Body).Decode(&message)
	if err != nil {
		fmt.Println("Decod err:",err)
		return
	}
	services.SendeMessageService(r,&message)
}