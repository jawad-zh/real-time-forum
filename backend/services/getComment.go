package services

import (
	"fmt"
	"net/http"
	"strconv"

	"golang/backend/models"
	"golang/backend/repos"
)

func GetComment(r *http.Request) (error, *[]models.Comments, int) {
	id := r.URL.Query().Get("PostID")
	PostID, err := strconv.Atoi(id)
	if err != nil {
		fmt.Println("Atoi Error:", err)
		return err, nil, http.StatusInternalServerError
	}
	data, err, statueCode := repos.GetComments(PostID)
	if err != nil {
		fmt.Println("getPost err", err)
		return err, nil, statueCode
	}
	return nil, data, http.StatusOK
}
