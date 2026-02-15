package repos

import (
	"fmt"

	"golang/backend/db"
	"golang/backend/models"
)

func CreatPost(postInfo *models.PostInformation, session *models.Session) (int64,string){
	result, err := db.DataBase.Exec(`
	INSERT INTO Posts (UserID,Title,Content)
	VALUES(?,?,?)
	`, session.UserID, postInfo.Title, postInfo.Content)
	if err != nil {
		fmt.Println("insert Post Error", err)
		return 0,""
	}
	LastPostId,err:= result.LastInsertId()
	if err != nil{
		fmt.Println("last Id error",err)
		return 0,""
	}
	 for _,cat:= range postInfo.Categories{
		_,err= db.DataBase.Exec(`
		INSERT INTO PostCategories (PostID,Category)
		VALUES (?,?)
		`,LastPostId,cat)
		if err != nil{
			fmt.Println("Error:",err)
			return 0,""
		}
	 }
	 var nickname string 
	 err= db.DataBase.QueryRow(`
	 SELECT Nickname FROM Users WHERE UserID = ?
	 `,session.UserID).Scan(&nickname)
	return LastPostId,nickname
}
