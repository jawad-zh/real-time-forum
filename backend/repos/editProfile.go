package repos

import (
	"fmt"
	"golang/backend/db"
	"net/http"
)

func EditProfile(ImageURL string , UserID int)(error,int){
	_,err:= db.DataBase.Exec(`
	UPDATE Users SET ProfileURL =? WHERE Users.UserID = ?
	`,ImageURL,UserID)
	if err!= nil{
		fmt.Println("Update image error")
		return err,http.StatusInternalServerError
	}
	return nil,http.StatusOK
}