package services

import (
	"fmt"
	"net/http"
	"strconv"

	"golang/backend/models"
	"golang/backend/repos"
)

func GetPosts(r *http.Request, UserID int) (error, *[]models.Posts, int) {
	category := r.URL.Query().Get("category")
	offset, err := strconv.Atoi(r.URL.Query().Get("postoffset"))
	if err != nil {
		fmt.Println("getPost atoi error", err)
		return err, nil, http.StatusInternalServerError
	}
	posts, err, statueCode := repos.GetPosts(category, r, UserID, offset)
	if err != nil {
		return err, nil, statueCode
	}
	return nil, posts, statueCode
}
