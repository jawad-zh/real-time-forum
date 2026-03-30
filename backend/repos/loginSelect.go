package repos

import (
	"database/sql"
	"fmt"
	"golang/backend/db"
	"golang/backend/models"
)

func LoginSelect(user *models.Login) (bool, *models.Users, string) {
	UserInfo := &models.Users{}
	row := db.DataBase.QueryRow(`
	SELECT 	UserID , Nickname , Age , Gender , FirstName , LastName , Email , Password , CreatedAt , ProfileURL FROM Users
	WHERE Email = ? OR Nickname = ?
	`, user.NicknameOrEmailInput, user.NicknameOrEmailInput)
	err := row.Scan(&UserInfo.UserID, &UserInfo.Nickname,
		&UserInfo.Age, &UserInfo.Gender, &UserInfo.FirstName, &UserInfo.LastName, &UserInfo.Email, &UserInfo.Password, &UserInfo.CreatedAt, &UserInfo.ProfileURL)

	if err == sql.ErrNoRows {
		return false, nil, "Email or Password Incorrect"
	}
	if err != nil {
		fmt.Println("Error", err)
		return false, nil, ""
	}
	return true, UserInfo, "ok"
}
