package handlers

import (
	"encoding/json"
	"fmt"
	"golang/backend/models"
	"golang/backend/services"
	"net/http"
)

type GetAllUsersFormat struct{
	Statue string `json:"statue"`
	Data *[]models.Users
}

func GetAllUsers(w http.ResponseWriter , r *http.Request){
	var res GetAllUsersFormat
		if r.Method != http.MethodGet{
		fmt.Println("method not allowed")
		return
	}
	err,data:=services.GetAllUsersService(r)
	if err != nil{
		w.Header().Set("Content-Type","application/json")
		res.Statue = "failed"
		res.Data = data
		json.NewEncoder(w).Encode(res)
		return
	}
		w.Header().Set("Content-Type","application/json")
		res.Statue = "success"
		res.Data = data
		json.NewEncoder(w).Encode(res)
}