package repos

import (
	"database/sql"
	"fmt"
	"golang/backend/db"
	"golang/backend/models"
	"net/http"
)

func SavePost(PostID int , UserID int)(error,string,int){
	var id int
	var potSave models.PostSave
	err:= db.DataBase.QueryRow(`
	SELECT * FROM Posts WHERE PostID = ?
	`, PostID).Scan(&id)
	if err == sql.ErrNoRows {
		// need to do action 
		fmt.Println("the post not exist")
		return err ,"Post not exist",http.StatusBadRequest
	}
	err= db.DataBase.QueryRow(`
	SELECT * FROM PostSave WHERE PostID = ? AND UserID = ?
	`, PostID,UserID).Scan(&potSave.PostID,&potSave.UserID)
	if err == sql.ErrNoRows {

		_,err=db.DataBase.Exec(`
	INSERT INTO PostSave (UserID,PostID)
	VALUES (?,?)
	`,UserID,PostID)
	if err != nil{
		fmt.Println("insert save error:",err)
		return err , "save failed",http.StatusInternalServerError
	}
	return  nil ,"save success",http.StatusOK
	}else if err == nil{
		_,err = db.DataBase.Exec(`
		DELETE FROM PostSave WHERE UserID = ? AND PostID = ?
		`,UserID,PostID)
		if err != nil{
			fmt.Println("Delet Error:",err)
			return err , "save failed",http.StatusInternalServerError
		}
		return nil,"unsave success",http.StatusOK
	}else{
		fmt.Println("errrrrrrrrrrrrrrrrrror",err)
		return err ,"save failed",http.StatusInternalServerError
	}
}