package repos

import (
	"fmt"
	"golang/backend/db"
	"golang/backend/models"
)

func GetUserInfo(UserID int) (error, *models.Users) {
	var user models.Users
	err := db.DataBase.QueryRow(`
	SELECT 
	Users.UserID,
    Users.Nickname,
    Users.FirstName,
    Users.LastName,
	Users.ProfileURL,
	Users.Gender,
    (SELECT COUNT(*) FROM PostLike WHERE UserID = Users.UserID) AS LikeCount,
    (SELECT COUNT(*) FROM PostSave WHERE UserID = Users.UserID) AS SaveCount
FROM Users 
WHERE UserID = ?;

	`, UserID).Scan(&user.UserID, &user.Nickname, &user.FirstName, &user.LastName, &user.ProfileURL, &user.Gender, &user.Likes, &user.Saves)
	if err != nil {
		fmt.Println("Selct UserInfo error:", err)
		return err, nil
	}
	return nil, &user
}
