package repos

import (
	"fmt"
	"golang/backend/db"
)

func EditProfile(ImageURL string , UserID int)error{
	_,err:= db.DataBase.Exec(`
	UPDATE Users SET ProfileURL =? WHERE Users.UserID = ?
	`,ImageURL,UserID)
	if err!= nil{
		fmt.Println("Update image error")
		return err
	}
	return nil
}