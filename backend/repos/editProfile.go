package repos

import (
	"fmt"
	"golang/backend/db"
	"golang/backend/models"
)

func EditProfile(ImageURL string , session *models.Session)error{
	_,err:= db.DataBase.Exec(`
	UPDATE Users SET ProfileURL =? WHERE Users.UserID = ?
	`,ImageURL,session.UserID)
	if err!= nil{
		fmt.Println("Update image error")
		return err
	}
	return nil
}