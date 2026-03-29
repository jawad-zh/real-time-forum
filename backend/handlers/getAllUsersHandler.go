package handlers

import (
	"fmt"
	"net/http"

	"golang/backend/middleware"
	"golang/backend/models"
	"golang/backend/services"
)


type GetAllUsersFormat struct {
	Statue string `json:"statue"`
	Data   *[]models.Users
}
func GetAllUsersHandler(w http.ResponseWriter, r *http.Request) {
	var res GetAllUsersFormat
	if r.Method != http.MethodGet {
		fmt.Println("method not allowed")
		res.Statue = "failed"
		services.Api(w, res, http.StatusUnauthorized)
		return
	}

	user, ok := middleware.GetUserFromContext(r)
	if !ok {
		fmt.Println(" middlewar Get comment info error from creatcommentHandler")
		res.Statue = "failed"
		services.Api(w, res, http.StatusUnauthorized)
		return
	}

	err, data, statueCode := services.GetAllUsersService(user.UserID)
	if err != nil {
		res.Statue = "failed"
		res.Data = data

		services.Api(w, res, statueCode)
		return
	}
	
	res.Statue = "success"
	res.Data = data
	services.Api(w, res, http.StatusOK)
}
