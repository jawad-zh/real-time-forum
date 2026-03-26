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
			return false, "Incorrect Email or Password ", nil
		}
		return true, " Login successful", data
	} else {
		if message == "Email or Password Incorrect" {
			return false, " Incorrect Email or Password ", nil
		} else {
			return false, "somthing wrong", nil
		}
	}
}
