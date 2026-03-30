package repos

import (
	"fmt"
	"golang/backend/db"
	"net/http"
)

func CreatComment(UserID int, PostID int, commentContent string) (error, string, int) {
	_, err := db.DataBase.Exec(`
	INSERT INTO Comments (PostID,UserID,Content)
	VALUES (?,?,?)
	`, PostID, UserID, commentContent)
	if err != nil {
		fmt.Println("isert comment error :", err)
		return err, "add comment failed try later", http.StatusInternalServerError
	}
	return nil, "", http.StatusOK
}
