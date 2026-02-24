package services

import (
	"fmt"
	"golang/backend/repos"
	"golang/backend/wbs"
	"net/http"
)

func UpdateMessageStateServie(r *http.Request,SenderID int){
	err,session:=repos.CheckSession(r)
	if err != nil{
		fmt.Println("no session",err)
		return
	}
	repos.UpdateMessageStateRepos(session.UserID,SenderID)
	wbs.GlobalManager.UpdateMessageState(session.UserID,SenderID)
}