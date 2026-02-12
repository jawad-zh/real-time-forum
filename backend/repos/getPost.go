package repos

import (
	"fmt"
	"log"

	"golang/backend/db"
	"golang/backend/models"
)

func GetPosts() (*[]models.Posts, error) {
	// var err error
	rows, err := db.DataBase.Query(`
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
	ORDER BY Posts.PostID 
	;

		`)
	if err != nil {
		fmt.Println("select Error:", err)
		return nil, nil
	}
	postsMap := make(map[int]*models.Posts)
	var order []int

	for rows.Next() {
		var postID int
		var title, content, createdAt, nickname, category string

		err := rows.Scan(&postID, &title, &content, &createdAt, &nickname, &category)
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
			}
			order = append(order, postID)
		}

		postsMap[postID].Categories = append(postsMap[postID].Categories, category)
	}

	var posts []models.Posts
	for _, id := range order {
		posts = append(posts, *postsMap[id])
	}
	// fmt.Println("postsfrom get Posts",posts)
	return &posts, nil
}
