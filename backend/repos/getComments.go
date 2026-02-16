package repos

import (
	"database/sql"
	"fmt"
	"golang/backend/db"
	"golang/backend/models"
)

func GetComments(PostID int) (*[]models.Comments,error){
	
	var allComment []models.Comments
	Rows,err:= db.DataBase.Query(`
	SELECT
    Comments.UserID,
    Comments.Content,
    Users.ProfileURL
FROM Comments
INNER JOIN Users
    ON Comments.UserID = Users.UserID   -- who wrote the comment
WHERE Comments.PostID = ?

	`,PostID)
	if err != nil{
		fmt.Println("select comment error",err)
		return nil,err
	}
	for Rows.Next(){
		var comment models.Comments
		err:=Rows.Scan(&comment.UserID,&comment.Content,&comment.UserProfile)
		if err != nil && err!= sql.ErrNoRows{
			fmt.Println("comment scan error",err)
			return nil ,err
		}
		allComment = append(allComment, comment)
	}
	return &allComment , nil

}