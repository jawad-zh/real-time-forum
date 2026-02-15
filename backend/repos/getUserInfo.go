package repos

import (
	"fmt"
	"golang/backend/db"
	"golang/backend/models"
	"net/http"
)

func GetUserInfo(r *http.Request)(error,*models.Users){
	var user models.Users
	err,session:=CheckSession(r)
	if err != nil {
		fmt.Println("sesson Error:")
		return err,nil
	}
	err=db.DataBase.QueryRow(`
	SELECT 
    Users.Nickname,
    Users.FirstName,
    Users.LastName,
    (SELECT COUNT(*) FROM PostLike WHERE UserID = Users.UserID) AS LikeCount,
    (SELECT COUNT(*) FROM PostSave WHERE UserID = Users.UserID) AS SaveCount
FROM Users 
WHERE UserID = ?;

	`,session.UserID).Scan(&user.Nickname,&user.FirstName,&user.LastName,&user.Likes,&user.Saves)
	if err != nil{
		fmt.Println("Selct UserInfo error:",err)
		return err,nil
	}
	return nil, &user
}