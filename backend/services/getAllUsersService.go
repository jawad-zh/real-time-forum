package services

import (
	"golang/backend/models"
	"golang/backend/repos"
	"net/http"
)

func GetAllUsersService(r *http.Request )(error,*[]models.Users){
	err,_:=repos.CheckSession(r)
	if err != nil {
		return err,nil
	}
	err,data:=repos.GetAllUsesRepo()
	if err != nil{
		return err,nil
	}
	return nil,data
}