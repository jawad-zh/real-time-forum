package services

import (
	"golang/backend/models"
	"golang/backend/repos"
)

func GetAllUsersService(UserID int )(error,*[]models.Users){
	err,data:=repos.GetAllUsesRepo(UserID)
	if err != nil{
		return err,nil
	}
	return nil,data
}