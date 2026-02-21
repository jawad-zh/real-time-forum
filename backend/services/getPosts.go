package services

import (
	"fmt"
	"net/http"

	"golang/backend/models"
	"golang/backend/repos"
	"golang/backend/wbs"
)

func GetPosts(r *http.Request) (error, *[]models.Posts) {
	category := r.URL.Query().Get("category")
	_, session := repos.CheckSession(r)
	fmt.Println(wbs.GlobalManager.Clients[session.UserID])
	posts, err := repos.GetPosts(category, r, session)
	if err != nil {
		return err, nil
	}
	return nil, posts
}
