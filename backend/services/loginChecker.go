package services

import (
	"net/http"

	"golang/backend/models"
	"golang/backend/repos"

	"golang.org/x/crypto/bcrypt"
)

func LoginChecker(user *models.Login) (bool, string, *models.Users, int) {
	// need to check here
	

	ok, data, message := repos.LoginSelect(user)
	if ok {
		err := bcrypt.CompareHashAndPassword([]byte(data.Password), []byte(user.Password))
		if err != nil {
			return false, "Incorrect Email or Password ", nil, http.StatusUnauthorized
		}
		return true, " Login successful", data, http.StatusOK
	} else {
		if message == "Email or Password Incorrect" {
			return false, " Incorrect Email or Password ", nil, http.StatusUnauthorized
		} else {
			return false, "somthing wrong", nil, http.StatusInternalServerError
		}
	}
}
