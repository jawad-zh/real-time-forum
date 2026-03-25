package services

import (
	"golang/backend/models"
	"golang/backend/repos"
	"fmt"
	"golang.org/x/crypto/bcrypt"
)

func LoginChecker(user *models.Login) (bool, string, *models.Users) {
	// need to check here
	fmt.Println("hello grom login",user)
	ok, data, message := repos.LoginSelect(user)
	if ok {
		err := bcrypt.CompareHashAndPassword([]byte(data.Password), []byte(user.Password))
		if err != nil {
			fmt.Println("1111111111111111111111111",err)
			return false, "Incorrect Email or Password ", nil
		}
		
		return true, " Login successful", data
	} else {
		if message == "Email or Password Incorrect" {
			fmt.Println("2222222222222222222222222222222222222")
			return false, " Incorrect Email or Password ", nil
		} else {
			return false, "somthing wrong", nil
		}
	}
}
