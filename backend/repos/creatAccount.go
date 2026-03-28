package repos

import (
	"fmt"
	"strings"

	"golang/backend/db"
	"golang/backend/models"

	"golang.org/x/crypto/bcrypt"
)

func CreatAccount(user *models.Users) (bool, string) {
	if user.Gender == "male" {
		user.ProfileURL = "/frontend/state/images/icones/defaultMenIcone.jpg"
		}else{
			user.ProfileURL = "/frontend/state/images/icones/defaultWomenIcone.png"
		}	
	passwordBcrypt, err := bcrypt.GenerateFromPassword([]byte(user.Password), bcrypt.DefaultCost)
	if err != nil {
		fmt.Println("bcrypt error", err)
		return false, "hash"
	}
	user.Password = string(passwordBcrypt)
	_, err = db.DataBase.Exec(`
	INSERT INTO Users (Nickname,Age,Gender,FirstName,LastName,Email,Password,ProfileURL)
	VALUES(?,?,?,?,?,?,?,?)
	`, user.Nickname, user.Age, user.Gender, user.FirstName, user.LastName, user.Email, user.Password,user.ProfileURL)
	if err != nil {
		if strings.Contains(err.Error(), "UNIQUE constraint failed: Users.Email") {
			return false, "email already used"
		} else if strings.Contains(err.Error(), "UNIQUE constraint failed: Users.Nickname") {
			return false, "nickname already used"
		} else {
			fmt.Println("this is the error :",err)
			return false, "register failed try later"
		}
	}
	return true, "success"
}
