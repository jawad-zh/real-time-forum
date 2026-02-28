package services

import (
	"fmt"
	"net/http"
	"strconv"

	"golang/backend/models"
	"golang/backend/repos"
)

func GetPosts(r *http.Request) (error, *[]models.Posts) {
	category := r.URL.Query().Get("category")
	offset, err := strconv.Atoi(r.URL.Query().Get("postoffset"))
	if err != nil {
		fmt.Println("getPost atoi error", err)
		return err ,nil
	}
	_, session := repos.CheckSession(r)
	posts, err := repos.GetPosts(category, r, session,offset)
	if err != nil {
		return err, nil
	}
	return nil, posts
}
