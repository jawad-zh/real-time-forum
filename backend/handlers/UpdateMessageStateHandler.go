package handlers

import (
	"encoding/json"
	"fmt"
	"golang/backend/services"
	"net/http"
)

type SenderID struct{
	UserID int `json:"UserID"`
}

func UpdateMessageStateHandler(w http.ResponseWriter  , r *http.Request){
	fmt.Println("hello from update messge state")
	var id SenderID
	if r.Method != http.MethodPost{
		fmt.Println("method not allowed")
		return
	}
	json.NewDecoder(r.Body).Decode(&id)
	fmt.Println("r.body",id.UserID)
	services.UpdateMessageStateServie(r,id.UserID)
}