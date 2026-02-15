package handlers

import (
	"encoding/json"
	"fmt"
	"golang/backend/repos"
	"net/http"
)

type getUserInfoHandlerFormat struct{
	Nickname string `json:"Nickname"`
	FirstName string `json:"FirstName"`
	LastName string `json:"LastName"`
	Statue string `json:"statue"`
	Likes int `json:"likes"`
	Saves int `json:"saves"`
}

func GetUserInfoHandler(w http.ResponseWriter, r *http.Request) {
	var getUserInfoResponse getUserInfoHandlerFormat
	if r.Method != http.MethodGet {
		fmt.Println("method not allowed")
		return
	}
	err,data:=repos.GetUserInfo(r)
	if err != nil{
		fmt.Println("Get user info error",err)
		return
	}
	getUserInfoResponse.Statue = "success"
	getUserInfoResponse.Nickname = data.Nickname
	getUserInfoResponse.FirstName = data.FirstName
	getUserInfoResponse.LastName = data.LastName
	getUserInfoResponse.Likes = data.Likes
	getUserInfoResponse.Saves = data.Saves
	w.Header().Set("Content-Type","application/json")
	fmt.Println(getUserInfoResponse)
	json.NewEncoder(w).Encode(getUserInfoResponse)
}
