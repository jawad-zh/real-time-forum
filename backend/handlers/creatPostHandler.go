package handlers

import (
	"fmt"
	"net/http"

	"golang/backend/middleware"
	"golang/backend/services"
)

func CreatPostHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		services.Api(w, nil, http.StatusMethodNotAllowed)
		return
	}

	user, ok := middleware.GetUserFromContext(r)
	if !ok {
		fmt.Println("middleware: user not found for creat post")
		services.Api(w, nil, http.StatusUnauthorized)
		return
	}

	_, _, data, statueCode := services.CreatPostCheck(r, user)

	services.Api(w, data, statueCode)
}
