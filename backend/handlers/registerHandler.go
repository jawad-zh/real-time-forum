package handlers

import (
	"encoding/json"
	"fmt"
	"golang/backend/models"
	"net/http"
)

type registerResponsFormat struct{
	Message string `json:"message"`
	Status string `json:"status"`
}
func RegisterHandler(w http.ResponseWriter, r *http.Request) {
	var user models.Users
	var registerRespons registerResponsFormat
	json.NewDecoder(r.Body).Decode(&user)
	
	// check if some input is empty
	if (len(user.Nickname)  == 0 )  {
		registerRespons.Message = "Nickname is required"
		registerRespons.Status = "failed"
	}else if (len(string(user.Age)) ==0 || user.Age == 0){
		registerRespons.Message = "Age is required"
		registerRespons.Status = "failed"
	}else if (len(user.Gender)==0){
		registerRespons.Message = "Gender is required"
		registerRespons.Status = "failed"
	}else if (len(user.FirstName) == 0 ){
		registerRespons.Message = "First Name is required"
		registerRespons.Status = "failed"
	}else if (len(user.LastName) == 0){
		registerRespons.Message = "LastName  is required"
		registerRespons.Status = "failed"
	}else if(len(user.Email)==0){
		registerRespons.Message = "Email is required"
		registerRespons.Status = "failed"
	}else if (len(user.Password) == 0){
		registerRespons.Message = "Password is required"
		registerRespons.Status = "failed"
	}
	fmt.Println(user)
}
