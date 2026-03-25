package handlers

import (
	"encoding/json"
	"fmt"
	"golang/backend/middleware"
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
		services.Api(w,"",http.StatusMethodNotAllowed)
		return
	}
	user, ok := middleware.GetUserFromContext(r)
	if !ok {
		fmt.Println(" middlewar Get comment info error from creatcommentHandler")
		services.Api(w,"",http.StatusUnauthorized)
		return
	}
	json.NewDecoder(r.Body).Decode(&id)
	_,statueCode:=services.UpdateMessageStateServie(user.UserID, id.UserID)
	services.Api(w,"",statueCode)

}
