package repos

import (
	"database/sql"
	"fmt"

	"golang/backend/db"
	"golang/backend/models"
)

type creatPostRes struct {
	Nickname   string
	PostID     int64
	CreatedAt  string
	ProfileURL sql.NullString
	ImageURL string
}

func CreatPost(postInfo *models.PostInformation, session *models.Session) (error, *creatPostRes) {
	var Post creatPostRes
	result, err := db.DataBase.Exec(`
	INSERT INTO Posts (UserID,Title,Content,ImageURL)
	VALUES(?,?,?,?)
	`, session.UserID, postInfo.Title, postInfo.Content, postInfo.ImageURL)
	if err != nil {
		fmt.Println("insert Post Error", err)
		return err, nil
	}
	LastPostId, err := result.LastInsertId()
	if err != nil {
		fmt.Println("last Id error", err)
		return err, nil
	}
	for _, cat := range postInfo.Categories {
		_, err = db.DataBase.Exec(`
		INSERT INTO PostCategories (PostID,Category)
		VALUES (?,?)
		`, LastPostId, cat)
		if err != nil {
			fmt.Println("Error:", err)
			return err, nil
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
 `, session.UserID, LastPostId).Scan(&Post.Nickname, &Post.ProfileURL, &Post.CreatedAt,&Post.ImageURL)
 if err != nil{
	fmt.Println("Scan Error:",err)
 }
	Post.PostID = LastPostId
	fmt.Println("Pooooooooooosssssssssssssst", Post)
	return nil, &Post
}
