package repos

import (
	"fmt"
	"golang/backend/db"
)

func CreatComment(UserID int , PostID int , commentContent string)error{
	_,err:= db.DataBase.Exec(`
	INSERT INTO Comments (PostID,UserID,Content)
	VALUES (?,?,?)
	`,PostID,UserID,commentContent)
	if err != nil{
		fmt.Println("isert comment error :",err)
		return err
	}
	return nil
}