package services

import (
	"fmt"
	"net/http"
	"strconv"

	"golang/backend/models"
	"golang/backend/repos"
)

func GetComment(r *http.Request) (error,*[]models.Comments){
	id := r.URL.Query().Get("PostID")
	PostID, err := strconv.Atoi(id)
	if err != nil {
		fmt.Println("Atoi Error:", err)
		return err ,nil
	}
	data, err := repos.GetComments(PostID)
	if err != nil {
		fmt.Println("getPost err", err)
		return err ,nil
	}
	return nil, data
}
