package services

import (
	"fmt"
	"golang/backend/models"
	"golang/backend/repos"
	"net/http"
	"regexp"
	"strconv"
)

func RegisterChecker(user *models.Users) (bool, string, int) {
	nicknameRegex := regexp.MustCompile(`[!|@#$%^&*()+\\?>\[ \]<',="/;:{}]`)
	speacialCharacterRegex := regexp.MustCompile(`[!|@#$%^&*()+\\?>\[ \]<',=";:{}.\/\-_]`)
	emailRegex := regexp.MustCompile(`.+@[a-zA-z]+\.[a-zA-Z]+`)
	NumbersRegex := regexp.MustCompile(`\d`)
	lowerCaseRegex := regexp.MustCompile(`[a-z]`)
	upperCaseRegex := regexp.MustCompile(`[A-Z]`)
	var userAgeString = strconv.Itoa(user.Age)
	if len(user.Nickname) <= 2 {
		return false, "Nickname should be more the two character (backend)", http.StatusBadRequest
	} else if nicknameRegex.MatchString(user.Nickname) {
		return false, "Nickname speacial character allowed is - _ and . (backend) ", http.StatusBadRequest
	}
	// need to handle
	if !NumbersRegex.MatchString(userAgeString) {
		return false, "Age Accepte Numbers only (backend)", http.StatusBadRequest
	}
	if speacialCharacterRegex.MatchString(user.FirstName) {
		fmt.Println("here")
	} else if NumbersRegex.MatchString(user.FirstName) {
		fmt.Println("in Numbeeeeeeeer")
	}
	if user.Gender != "male" && user.Gender != "female" {
		return false, "Invalid Gender (backend) ", http.StatusBadRequest
	}
	if len(user.FirstName) <= 2 {
		return false, "First Name should be more than two character (backend) ", http.StatusBadRequest
	} else if speacialCharacterRegex.MatchString(user.FirstName) || (NumbersRegex.MatchString(user.FirstName)) {
		return false, "Speacial Character or Numbers Not Allowed In First Name heerre", http.StatusBadRequest
	}
	if len(user.LastName) <= 2 {
		return false, "First Name should be more than two character (backend) ", http.StatusBadRequest
	} else if speacialCharacterRegex.MatchString(user.LastName) || NumbersRegex.MatchString(user.LastName) {
		return false, "Speacial Character or Numbers Not Allowed In First Name (backend)", http.StatusBadRequest
	}
	if len(user.Password) <= 7 {
		return false, "Password Sould Be More Than 8 Charachter (backend)", http.StatusBadRequest
	} else if !lowerCaseRegex.MatchString(user.Password) {
		return false, "Password Should Countain Lower Case Character (backend) ", http.StatusBadRequest
	} else if !upperCaseRegex.MatchString(user.Password) {
		return false, "Password Should Countain Upper Case Character  (backend)", http.StatusBadRequest
	} else if !NumbersRegex.MatchString(user.Password) {
		return false, "Password Should Countain Number (backend) ", http.StatusBadRequest
	}
	if !emailRegex.MatchString(user.Email) {
		return false, "Incorrect Email Format (backend) ", http.StatusBadRequest
	}
	// empty input checker

	if len(user.Nickname) == 0 {
		return false, "Nickname is required (backend) ", http.StatusBadRequest
	} else if user.Age == 0 {
		return false, "Age is required (backend) ", http.StatusBadRequest
	} else if len(user.Gender) == 0 {
		return false, "Gender is required (backend) ", http.StatusBadRequest
	} else if len(user.FirstName) == 0 {
		return false, "First Name is required (backend) ", http.StatusBadRequest
	} else if len(user.LastName) == 0 {
		return false, "LastName  is required (backend) ", http.StatusBadRequest
	} else if len(user.Email) == 0 {
		return false, "Email is required (backend) ", http.StatusBadRequest
	} else if len(user.Password) == 0 {
		return false, "Password is required (backend) ", http.StatusBadRequest
	}

	ok, creatMessage := repos.CreatAccount(user)
	if ok {
		return true, "register successful", http.StatusOK
	}
	return false, creatMessage, http.StatusInternalServerError
}
