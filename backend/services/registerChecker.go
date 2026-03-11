package services

import (
	"regexp"
	"fmt"
	"golang/backend/models"
	"golang/backend/repos"
)

func RegisterChecker(user *models.Users) (bool, string) {
	fmt.Println("from register ----------",user)
	nicknameRegex := regexp.MustCompile(`[!|@#$%^&*()+\\?>\[ \]<',="/;:{}]`)
	speacialCharacterRegex := regexp.MustCompile(`[!|@#$%^&*()+\\?>\[ \]<',="/;:{}.-_]`)
	// emailRegex := regexp.MustCompile(`.+@[a-zA-z]+\.[a-zA-Z]+`)
	// notNumbersRegex := regexp.MustCompile(`\D`)
	NumbersRegex := regexp.MustCompile(`\d`)
	// lowerCaseRegex := regexp.MustCompile(`[a-z]`)
	// upperCaseRegex := regexp.MustCompile(`[A-Z]`)
	if len(user.Nickname) <= 2 {
		return false, "Nickname should be more the two character (backend)"
	} else if nicknameRegex.MatchString(user.Nickname) {
		return false, "Nickname speacial character allowed is - _ and . (backend) "
	}
	// need to handle
	// if (notNumbersRegex.MatchString(string(user.Age))) {
	// 	return false, "Age Accepte Numbers only (backend)"
	// }
	// if speacialCharacterRegex.MatchString(user.FirstName) {
	// 	fmt.Println("here")
	// }else if (NumbersRegex.MatchString(user.FirstName)){
	// 	fmt.Println("in Numbeeeeeeeer")
	// }
	if user.Gender != "male" && user.Gender != "female" {
		return false, "Invalid Gender (backend) "
	}
	if len(user.FirstName) <= 2 {
		return false, "First Name should be more than two character (backend) "
	} else if speacialCharacterRegex.MatchString(user.FirstName) || (NumbersRegex.MatchString(user.FirstName)) {
		return false, "Speacial Character or Numbers Not Allowed In First Name"
	}
	if len(user.LastName) <= 2 {
		return false, "First Name should be more than two character (backend) "
	} else if speacialCharacterRegex.MatchString(user.LastName) || NumbersRegex.MatchString(user.LastName) {
		return false, "Speacial Character or Numbers Not Allowed In First Name (backend)"
	}
	// if len(user.Password) <= 7 {
	// 	return false, "Password Sould Be More Than 8 Charachter (backend)"
	// } else if !lowerCaseRegex.MatchString(user.Password) {
	// 	return false, "Password Should Countain Lower Case Character (backend) "
	// } else if !upperCaseRegex.MatchString(user.Password) {
	// 	return false, "Password Should Countain Upper Case Character  (backend)"
	// } else if !NumbersRegex.MatchString(user.Password) {
	// 	return false, "Password Should Countain Number (backend) "
	// }
	// if !emailRegex.MatchString(user.Email) {
	// 	return false, "Incorrect Email Format (backend) "
	// }
	// empty input checker

	if len(user.Nickname) == 0 {
		return false, "Nickname is required (backend) "
	} else if user.Age == 0  {
		return false, "Age is required (backend) "
	} else if len(user.Gender) == 0 {
		return false, "Gender is required (backend) "
	} else if len(user.FirstName) == 0 {
		return false, "First Name is required (backend) "
	} else if len(user.LastName) == 0 {
		return false, "LastName  is required (backend) "
	} else if len(user.Email) == 0 {
		return false, "Email is required (backend) "
	} 
	// else if len(user.Password) == 0 {
	// 	return false, "Password is required (backend) "
	// }

	ok, creatMessage := repos.CreatAccount(user)
	if ok {
		return true, "register successful"
	}
	return false, creatMessage
}
