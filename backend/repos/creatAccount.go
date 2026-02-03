package repos

import (
	"fmt"
	"golang/backend/db"
	"golang/backend/models"
)

func CreatAccount(user *models.Users) {
	fmt.Println("entred from creat Account")
	_,err:=db.DataBase.Exec(`
	INSERT INTO Users (Nickname,Age,Gender,FirstName,LastName,Email,PasswordHash)
	VALUES(?,?,?,?,?,?,?)
	`,user.Nickname,user.Age,user.Gender,user.FirstName,user.LastName,user.Email,user.Password)
	fmt.Println("thissssss",user.Nickname,user.Age,user.Gender,user.FirstName,user.LastName,user.Email,user.Password)
	if err != nil{
		fmt.Println("Error:",err)
		return
	}
	fmt.Println("-------------------------")
}
