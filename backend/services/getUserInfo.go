package services

import (
	"database/sql"
	"fmt"
	"net/http"

	"golang/backend/repos"
)

type getUserInfoHandlerFormat struct {
	Nickname  string         `json:"Nickname"`
	FirstName string         `json:"FirstName"`
	LastName  string         `json:"LastName"`
	Statue    string         `json:"statue"`
	Likes     int            `json:"likes"`
	Saves     int            `json:"saves"`
	ImageURL  sql.NullString `json:"ImageURL"`
}

func GetUserInfo(r *http.Request)(error,*getUserInfoHandlerFormat) {
	var getUserInfoResponse getUserInfoHandlerFormat

	err, data := repos.GetUserInfo(r)
	if err != nil {
		fmt.Println("Get user info error", err)
		return err, nil
	}
	getUserInfoResponse.Statue = "success"
	getUserInfoResponse.Nickname = data.Nickname
	getUserInfoResponse.FirstName = data.FirstName
	getUserInfoResponse.LastName = data.LastName
	getUserInfoResponse.Likes = data.Likes
	getUserInfoResponse.Saves = data.Saves
	getUserInfoResponse.ImageURL = data.ProfileURL
	return nil,&getUserInfoResponse
}
