package services

import (
	"golang/backend/models"
	"golang/backend/repos"
	"net/http"
)

func GetAllUsersService(r *http.Request )(error,*[]models.Users){
	err,session:=repos.CheckSession(r)
	if err != nil {
		return err,nil
	}
	err,data:=repos.GetAllUsesRepo(session.UserID)
	if err != nil{
		return err,nil
	}
	return nil,data
}