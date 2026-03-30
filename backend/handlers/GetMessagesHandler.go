package handlers

import (
	"fmt"
	"golang/backend/middleware"
	"golang/backend/models"
	"golang/backend/services"
	"net/http"
	"strconv"
)

type GetMessagesHandlerResponsFormat struct {
	Statue   string                   `json:"statue"`
	Messages *[]models.PrivateMessage `json:"Messages"`
}

func GetMessagesHandler(w http.ResponseWriter, r *http.Request) {
	var GetMessagesRepons GetMessagesHandlerResponsFormat
	if r.Method != http.MethodGet {
		fmt.Println("method not allowed")
		services.Api(w, nil, http.StatusMethodNotAllowed)
		return
	}

	user, ok := middleware.GetUserFromContext(r)
	if !ok {
		fmt.Println(" middlewar Get comment info error from creatcommentHandler")
		services.Api(w, nil, http.StatusUnauthorized)
		return
	}

	id := r.URL.Query().Get("receiverID")
	offset := r.URL.Query().Get("offset")
	receiverID, err := strconv.Atoi(id)

	if err != nil {
		fmt.Println("Atoi Error:", err)
		services.Api(w, nil, http.StatusInternalServerError)
		return
	}
	offsetNum, err := strconv.Atoi(offset)
	if err != nil {
		fmt.Println("Atoi Error:", err)
		services.Api(w, nil, http.StatusInternalServerError)
		return
	}

	err, data, statueCode := services.GetMessages(user.UserID, receiverID, offsetNum)
	if err != nil {
		GetMessagesRepons.Statue = "failed"
		services.Api(w, GetMessagesRepons, statueCode)
	}
	GetMessagesRepons.Statue = "success"
	GetMessagesRepons.Messages = data
	services.Api(w, GetMessagesRepons, statueCode)

}
