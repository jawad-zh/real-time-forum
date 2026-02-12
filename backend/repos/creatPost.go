package repos

import (
	"fmt"

	"golang/backend/db"
	"golang/backend/models"
)

func CreatPost(postInfo *models.PostInformation, session *models.Session) {
	result, err := db.DataBase.Exec(`
	INSERT INTO Posts (UserID,Title,Content)
	VALUES(?,?,?)
	`, session.UserID, postInfo.Title, postInfo.Content)
	if err != nil {
		fmt.Println("insert Post Error", err)
		return
	}
	LastPostId,err:= result.LastInsertId()
	if err != nil{
		fmt.Println("last Id error",err)
		return
	}
	 for _,cat:= range postInfo.Categories{
		_,err= db.DataBase.Exec(`
		INSERT INTO PostCategories (PostID,Category)
		VALUES (?,?)
		`,LastPostId,cat)
		if err != nil{
			fmt.Println("Error:",err)
			return
		}
	 }
	
}
