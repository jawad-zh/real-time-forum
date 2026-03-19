package services

import (
	"golang/backend/models"
	"golang/backend/repos"
)

func GetAllUsersService(UserID int )(error,*[]models.Users,int){
	err,data,statueCode:=repos.GetAllUsesRepo(UserID)
	if err != nil{
		return err,nil,statueCode
	}
	return nil,data,statueCode
}