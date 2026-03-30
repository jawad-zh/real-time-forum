package services

import (
	"fmt"

	"golang/backend/repos"
)

type getUserInfoHandlerFormat struct {
	Nickname  string `json:"Nickname"`
	FirstName string `json:"FirstName"`
	LastName  string `json:"LastName"`
	Statue    string `json:"statue"`
	Likes     int    `json:"likes"`
	Saves     int    `json:"saves"`
	ImageURL  string `json:"ImageURL"`
	UserID    int    `json:"UserID"`
	Gender    string `json:"Gender"`
}

func GetUserInfo(UserID int) (error, *getUserInfoHandlerFormat, int) {
	var getUserInfoResponse getUserInfoHandlerFormat

	err, data, statueCode := repos.GetUserInfo(UserID)
	if err != nil {
		fmt.Println("Get user info error", err)
		return err, nil, statueCode
	}
	getUserInfoResponse.Statue = "success"
	getUserInfoResponse.Nickname = data.Nickname
	getUserInfoResponse.FirstName = data.FirstName
	getUserInfoResponse.LastName = data.LastName
	getUserInfoResponse.Likes = data.Likes
	getUserInfoResponse.Saves = data.Saves
	getUserInfoResponse.ImageURL = data.ProfileURL
	getUserInfoResponse.UserID = data.UserID
	getUserInfoResponse.Gender = data.Gender
	return nil, &getUserInfoResponse, statueCode
}
