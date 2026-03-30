package handlers

import (
	"fmt"
	"golang/backend/services"
	"net/http"
)

func GetCommentHandler(w http.ResponseWriter, r *http.Request) {

	if r.Method != http.MethodGet {
		fmt.Println("method not allowed")
		services.Api(w, nil, http.StatusMethodNotAllowed)
		return
	}

	_, data, statueCode := services.GetComment(r)

	services.Api(w, data, statueCode)

}
