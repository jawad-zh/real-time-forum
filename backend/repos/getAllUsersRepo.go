package repos

import (
	"fmt"
	"golang/backend/db"
	"golang/backend/models"
)

func GetAllUsesRepo()(error,*[]models.Users){
	var users []models.Users
	var user models.Users
	rows,err:= db.DataBase.Query(`
	SELECT UserID,Nickname,FirstName,LastName,ProfileURL FROM Users
	`)
	if err != nil{
		fmt.Println("Select all users error:",err)
		return err ,nil
	}
	for rows.Next(){
		err:=rows.Scan(&user.UserID,&user.Nickname,&user.FirstName ,&user.LastName,&user.ProfileURL)
		if err != nil{
			fmt.Println("scan Error:",err)
			return err,nil
		}
		users = append(users, user)
	}
	fmt.Println("------------------------------------****************",users)
	return nil, &users
}