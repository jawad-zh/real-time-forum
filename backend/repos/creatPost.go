package repos

import (
	"database/sql"
	"fmt"
	"net/http"

	"golang/backend/db"
	"golang/backend/models"
)

type creatPostRes struct {
	Nickname   string
	PostID     int64
	CreatedAt  string
	ProfileURL sql.NullString
	ImageURL   string
}

func CreatPost(postInfo *models.PostInformation, UserID int) (error, *creatPostRes, int) {
	var Post creatPostRes
	result, err := db.DataBase.Exec(`
	INSERT INTO Posts (UserID,Title,Content,ImageURL)
	VALUES(?,?,?,?)
	`, UserID, postInfo.Title, postInfo.Content, postInfo.ImageURL)
	if err != nil {
		fmt.Println("insert Post Error", err)
		return err, nil, http.StatusInternalServerError
	}
	LastPostId, err := result.LastInsertId()
	if err != nil {
		fmt.Println("last Id error", err)
		return err, nil, http.StatusInternalServerError
	}
	for _, cat := range postInfo.Categories {
		_, err = db.DataBase.Exec(`
		INSERT INTO PostCategories (PostID,Category)
		VALUES (?,?)
		`, LastPostId, cat)
		if err != nil {
			fmt.Println("Error:", err)
			return err, nil, http.StatusInternalServerError
		}
	}
	err = db.DataBase.QueryRow(`
	SELECT 
    Users.Nickname,
    Users.ProfileURL,
    Posts.CreatedAt,
	Posts.ImageURL
FROM Posts
JOIN Users 
    ON Users.UserID = ?
WHERE Posts.PostID = ?;
 `, UserID, LastPostId).Scan(&Post.Nickname, &Post.ProfileURL, &Post.CreatedAt, &Post.ImageURL)
	if err != nil {
		fmt.Println("Scan Error:", err)
	}
	Post.PostID = LastPostId

	return nil, &Post, http.StatusOK
}
