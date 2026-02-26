package services

import (
	"net/http"

	"golang/backend/models"
	"golang/backend/repos"
)

func GetPosts(r *http.Request) (error, *[]models.Posts) {
	category := r.URL.Query().Get("category")
	_, session := repos.CheckSession(r)
	posts, err := repos.GetPosts(category, r, session)
	if err != nil {
		return err, nil
	}
	return nil, posts
}
