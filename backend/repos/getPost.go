package repos

import (
	"database/sql"
	"fmt"
	"log"
	"net/http"

	"golang/backend/db"
	"golang/backend/models"
)

func GetPosts(category string,r *http.Request) (*[]models.Posts, error) {
	// var err error
	var rows *sql.Rows
	_,session:= CheckSession(r)
	if category == "all" {
		Rows, err := db.DataBase.Query(`
	SELECT
    Posts.PostID,
    Posts.Title,
    Posts.Content,
    Posts.CreatedAt,
    Users.Nickname,
    Categories.CategoryName AS CategoryName,
    CASE 
        WHEN PostLike.UserID IS NOT NULL THEN 1
        ELSE 0
    END AS IsLiked
FROM Posts
INNER JOIN Users
    ON Posts.UserID = Users.UserID
INNER JOIN PostCategories
    ON Posts.PostID = PostCategories.PostID
INNER JOIN Categories
    ON PostCategories.Category = Categories.CategoryID
LEFT JOIN PostLike
    ON PostLike.PostID = Posts.PostID
    AND PostLike.UserID = ?   
ORDER BY Posts.PostID DESC;
`,session.UserID)
		if err != nil {
			fmt.Println("select Error:", err)
			return nil, nil
		}
		rows = Rows
		}else if (category == "like" || category == "save"){
		var postsId []int
		var postId int
		if category == "like"{
			Rows,err:= db.DataBase.Query(`
			SELECT PostID FROM PostLike WHERE UserID = ?
			`,session.UserID)
			if err != nil {
				fmt.Println("Select liked post error",err)
				return nil,err
			}
			for Rows.Next(){
				Rows.Scan(&postId)
				postsId = append(postsId, postId)
			}
			fmt.Println(postsId)
		}
	} else {
		Rows, err := db.DataBase.Query(`
		SELECT
    Posts.PostID,
    Posts.Title,
    Posts.Content,
    Posts.CreatedAt,
    Users.Nickname,
    Categories.CategoryName AS CategoryName
FROM Posts
INNER JOIN Users
    ON Posts.UserID = Users.UserID
INNER JOIN PostCategories
    ON Posts.PostID = PostCategories.PostID
INNER JOIN Categories
    ON PostCategories.Category = Categories.CategoryID
WHERE Categories.CategoryName = ?
ORDER BY Posts.PostID DESC;
`, category)
		if err != nil {
			fmt.Println("select Error:", err)
			return nil, nil
		}
		rows = Rows
	}

	postsMap := make(map[int]*models.Posts)
	var order []int

	for rows.Next() {
		var postID ,Isliked int
		var title, content, createdAt, nickname, category string

		err := rows.Scan(&postID, &title, &content, &createdAt, &nickname, &category,&Isliked)
		if err != nil {
			log.Println(err)
			continue
		}

		if _, exists := postsMap[postID]; !exists {
			postsMap[postID] = &models.Posts{
				PostID:     postID,
				Title:      title,
				Content:    content,
				Nickname:   nickname,
				Categories: []string{},
				Isliked: Isliked,
			}
			order = append(order, postID)
		}

		postsMap[postID].Categories = append(postsMap[postID].Categories, category)
	}

	var posts []models.Posts
	for _, id := range order {
		posts = append(posts, *postsMap[id])
	}
	fmt.Println("postsfrom get Posts",posts)
	return &posts, nil
}
