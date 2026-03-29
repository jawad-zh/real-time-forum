package services

import (
	"fmt"
	"net/http"
	"regexp"
	"strings"

	"golang/backend/models"
	"golang/backend/repos"

	"golang.org/x/crypto/bcrypt"
)

func LoginChecker(user *models.Login) (bool, string, *models.Users, int) {
	if user == nil {
		return false, "Incorrect Email or Password", nil, http.StatusUnauthorized
	}

	input := strings.TrimSpace(user.NicknameOrEmailInput)
	password := strings.TrimSpace(user.Password)

	if input == "" {
		return false, "email or nickname is required", nil, http.StatusBadRequest
	}
	if password == "" {
		return false, "password is required", nil, http.StatusBadRequest
	}

	nicknameSpeacialCharacterRegex := regexp.MustCompile(`[!|@#$%^&*()+\\?>\[ \]<',="/;:{}]`)
	speacialCharacterRegex := regexp.MustCompile(`[!|@#$%^&*()+\\?>\[ \]<',="/;:{}.-_]`)
	lowerCaseRegex := regexp.MustCompile(`[a-z]`)
	upperCaseRegex := regexp.MustCompile(`[A-Z]`)
	NumbersRegex := regexp.MustCompile(`\d`)

	if !strings.Contains(input, "@") {
		if len(input) <= 2 {
			return false, "nickname should be more than two charachter", nil, http.StatusBadRequest
		}
		if nicknameSpeacialCharacterRegex.MatchString(input) {
			return false, "the only speacial character allowe in nickname are - _ and .", nil, http.StatusBadRequest
		}
	}

	if len(password) <= 7 {
		return false, "invalid email or password 1", nil, http.StatusBadRequest
	} else if !lowerCaseRegex.MatchString(password) {
		return false, "invalid email or password 2", nil, http.StatusBadRequest
	} else if !upperCaseRegex.MatchString(password) {
		return false, "invalid email or password 3", nil, http.StatusBadRequest
	} else if !NumbersRegex.MatchString(password) {
		return false, "invalid email or password 4", nil, http.StatusBadRequest
	} else if !speacialCharacterRegex.MatchString(password) {
		return false, "invalid email or password 5", nil, http.StatusBadRequest
	}

	fmt.Println("[LoginChecker] authenticating user:", input)
	ok, data, message := repos.LoginSelect(user)
	if ok {
		err := bcrypt.CompareHashAndPassword([]byte(data.Password), []byte(user.Password))
		if err != nil {
			return false, "Incorrect Email or Password", nil, http.StatusUnauthorized
		}
		return true, "Login successful", data, http.StatusOK
	}

	if message == "Email or Password Incorrect" {
		return false, "Incorrect Email or Password", nil, http.StatusUnauthorized
	}
	return false, "somthing wrong", nil, http.StatusInternalServerError
}
