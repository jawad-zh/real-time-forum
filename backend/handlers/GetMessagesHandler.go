package handlers

import (
	"encoding/json"
	"fmt"
	"golang/backend/models"
	"golang/backend/services"
	"net/http"
	"strconv"
)

type GetMessagesHandlerResponsFormat struct{
	Statue string `json:"statue"`
	Messages *[]models.PrivateMessage `json:"Messages"`
}

func GetMessagesHandler( w http.ResponseWriter , r *http.Request ){
	var GetMessagesRepons GetMessagesHandlerResponsFormat
	if r.Method != http.MethodGet{
		fmt.Println("method not allowed")
		return  
	}

	id:=r.URL.Query().Get("receiverID")
	
	receiverID,err:= strconv.Atoi(id)

	if err != nil{
		fmt.Println("Atoi Error:",err)
		return
	}

	err,data:=services.GetMessages(r,receiverID)
	if err != nil{
		GetMessagesRepons.Statue = "failed"
		w.Header().Set("Content-Type","application/json")
		json.NewEncoder(w).Encode(data)
	}
	GetMessagesRepons.Statue = "success"
	GetMessagesRepons.Messages = data
		w.Header().Set("Content-Type","application/json")
		json.NewEncoder(w).Encode(data)
}