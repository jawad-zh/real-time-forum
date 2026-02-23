package services

import (
	"fmt"
	"golang/backend/repos"
	"net/http"
)

func UpdateMessageStateServie(r *http.Request,SenderID int){
	err,session:=repos.CheckSession(r)
	if err != nil{
		fmt.Println("no session",err)
		return
	}
	fmt.Println("waaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",session.UserID,SenderID)
	repos.UpdateMessageStateRepos(session.UserID,SenderID)
}