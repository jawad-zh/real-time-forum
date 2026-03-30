package repos

import (
	"database/sql"
	"fmt"
	"net/http"

	"golang/backend/db"
	"golang/backend/models"
)

func LikePost(PostID int, UserID int) (error, string, int) {
	fmt.Println("postID from likePost", PostID)
	var id int
	var potLike models.PostLike
	err := db.DataBase.QueryRow(`
	SELECT * FROM Posts WHERE PostID = ?
	`, PostID).Scan(&id)
	if err == sql.ErrNoRows {
		// need to do action
		fmt.Println("the post not exist")
		return err, "Post not exist", http.StatusNotFound
	}
	err = db.DataBase.QueryRow(`
	SELECT * FROM PostLike WHERE PostID = ? AND UserID = ?
	`, PostID, UserID).Scan(&potLike.PostID, &potLike.UserID)
	if err == sql.ErrNoRows {

		_, err = db.DataBase.Exec(`
	INSERT INTO PostLike (UserID,PostID)
	VALUES (?,?)
	`, UserID, PostID)
		if err != nil {
			fmt.Println("insert like error:", err)
			return err, "like failed", http.StatusInternalServerError
		}
		return nil, "like success", http.StatusOK
	} else if err == nil {
		_, err = db.DataBase.Exec(`
		DELETE FROM PostLike WHERE UserID = ? AND PostID = ?
		`, UserID, PostID)
		if err != nil {
			fmt.Println("Delet Error:", err)
			return err, "like failed", http.StatusInternalServerError
		}
		return nil, "deslike success", http.StatusOK
	} else {
		fmt.Println("errrrrrrrrrrrrrrrrrror", err)
		return err, "like failed", http.StatusInternalServerError
	}
}
