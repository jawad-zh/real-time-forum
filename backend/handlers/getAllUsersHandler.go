package handlers

import (
	"encoding/json"
	"fmt"
	"net/http"

	"golang/backend/middleware"
	"golang/backend/models"
	"golang/backend/services"
)

type GetAllUsersHandlerRespose struct {
	Data   *[]models.Users `json:"data"`
	Statue string          `json:"statue"`
}

func GetAllUsersHandler(w http.ResponseWriter, r *http.Request) {
	var res GetAllUsersFormat
	if r.Method != http.MethodGet {
		fmt.Println("Method not allowd")
		return
	}
	user, ok := middleware.GetUserFromContext(r)
if !ok{
fmt.Println(" middlewar Get comment info error from creatcommentHandler")
return
}
	err, data := services.GetAllUsersService(user.UserID)
	if err != nil {
		res.Statue = "failed"
		w.Header().Set("Content-Type", "application/json")
		json.NewEncoder(w).Encode(res)
		return
	}
	res.Statue = "success"
	res.Data = data
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(res)
}
