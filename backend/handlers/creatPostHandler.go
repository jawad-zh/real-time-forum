package handlers

import (
	"fmt"
	"golang/backend/middleware"
	"golang/backend/services"
	"net/http"
)

func CreatPostHandler(w http.ResponseWriter, r *http.Request) {
	user, ok := middleware.GetUserFromContext(r)
	if !ok {
		fmt.Println(" middlewar Get comment info error from creatcommentHandler")
		return
	}
	_, _, data, statueCode := services.CreatPostCheck(r, user)

	services.Api(w, data, statueCode)
}
