package repos

import (
	"fmt"
	"golang/backend/db"
)

func DeletSession(sessonID string)bool{
	_,err:= db.DataBase.Exec(`
	DELETE FROM Session WHERE token = ?
	`,sessonID)
	if err != nil{
		fmt.Println("DeletSessionError",err)
		return false
	}
	return true
}