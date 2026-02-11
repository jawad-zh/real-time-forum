package repos

import (
	"fmt"

	"golang/backend/db"
	"golang/backend/models"
)

func CreatPost(postInfo *models.PostInformation, session *models.Session) {
	fmt.Println("postInfo", postInfo)
	fmt.Println("user.id", session.UserID)
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
	fmt.Println("LastPostId",LastPostId)
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
