package repos

import (
	"database/sql"
	"fmt"
	"log"
	"net/http"

	"golang/backend/db"
	"golang/backend/models"
)

func GetPosts(category string, r *http.Request) (*[]models.Posts, error) {
	_, session := CheckSession(r)

	var rows *sql.Rows
	var err error

	switch category {
	case "all":
		rows, err = db.DataBase.Query(`
			SELECT
				Posts.PostID,
				Posts.Title,
				Posts.Content,
				Posts.CreatedAt,
				Posts.ImageURL,
				Users.Nickname,
				Users.ProfileURL,
				Categories.CategoryName,
				CASE WHEN PostLike.UserID IS NOT NULL THEN 1 ELSE 0 END AS IsLiked,
				CASE WHEN PostSave.UserID IS NOT NULL THEN 1 ELSE 0 END AS IsSaved
			FROM Posts
			INNER JOIN Users ON Posts.UserID = Users.UserID
			INNER JOIN PostCategories ON Posts.PostID = PostCategories.PostID
			INNER JOIN Categories ON PostCategories.Category = Categories.CategoryID
			LEFT JOIN PostLike ON PostLike.PostID = Posts.PostID AND PostLike.UserID = ?
			LEFT JOIN PostSave ON PostSave.PostID = Posts.PostID AND PostSave.UserID = ?
			ORDER BY Posts.PostID DESC
		`, session.UserID, session.UserID)

	case "like":
		rows, err = db.DataBase.Query(`
			SELECT
				Posts.PostID,
				Posts.Title,
				Posts.Content,
				Posts.CreatedAt,
				Posts.ImageURL,
				Users.Nickname,
				Users.ProfileURL,
				Categories.CategoryName
			FROM Posts
			INNER JOIN Users ON Posts.UserID = Users.UserID
			INNER JOIN PostCategories ON Posts.PostID = PostCategories.PostID
			INNER JOIN Categories ON PostCategories.Category = Categories.CategoryID
			WHERE Posts.PostID IN (
				SELECT PostID FROM PostLike WHERE UserID = ?
			)
			ORDER BY Posts.PostID DESC
		`, session.UserID)

	case "save":
		rows, err = db.DataBase.Query(`
			SELECT
				Posts.PostID,
				Posts.Title,
				Posts.Content,
				Posts.CreatedAt,
				Posts.ImageURL,
				Users.Nickname,
				Users.ProfileURL,
				Categories.CategoryName
			FROM Posts
			INNER JOIN Users ON Posts.UserID = Users.UserID
			INNER JOIN PostCategories ON Posts.PostID = PostCategories.PostID
			INNER JOIN Categories ON PostCategories.Category = Categories.CategoryID
			WHERE Posts.PostID IN (
				SELECT PostID FROM PostSave WHERE UserID = ?
			)
			ORDER BY Posts.PostID DESC
		`, session.UserID)

	default:
		rows, err = db.DataBase.Query(`
			SELECT
				Posts.PostID,
				Posts.Title,
				Posts.Content,
				Posts.CreatedAt,
				Posts.ImageURL,
				Users.Nickname,
				Users.ProfileURL,
				Categories.CategoryName,
				CASE WHEN PostLike.UserID IS NOT NULL THEN 1 ELSE 0 END AS IsLiked,
				CASE WHEN PostSave.UserID IS NOT NULL THEN 1 ELSE 0 END AS IsSaved
			FROM Posts
			INNER JOIN Users ON Posts.UserID = Users.UserID
			INNER JOIN PostCategories ON Posts.PostID = PostCategories.PostID
			INNER JOIN Categories ON PostCategories.Category = Categories.CategoryID
			LEFT JOIN PostLike ON PostLike.PostID = Posts.PostID AND PostLike.UserID = ?
			LEFT JOIN PostSave ON PostSave.PostID = Posts.PostID AND PostSave.UserID = ?
			WHERE Posts.PostID IN (
				SELECT PC.PostID
				FROM PostCategories PC
				INNER JOIN Categories C ON PC.Category = C.CategoryID
				WHERE C.CategoryName = ?
			)
			ORDER BY Posts.PostID DESC
		`, session.UserID, session.UserID, category)
	}

	if err != nil {
		log.Println("DB query error:", err)
		return nil, err
	}
	if rows == nil {
		return nil, fmt.Errorf("query returned nil rows")
	}
	defer rows.Close()

	postsMap := make(map[int]*models.Posts)
	var order []int

	for rows.Next() {
		var postID int
		var title, content, createdAt, nickname, categoryName ,imageURL string
		var ProfileURL sql.NullString
		var isLiked, isSaved int

		switch category {
		case "like", "save":
			if err := rows.Scan(&postID, &title, &content, &createdAt, &imageURL, &nickname,&ProfileURL ,&categoryName); err != nil {
				log.Println("Scan error:", err)
				continue
			}
			isLiked, isSaved = 0, 0
		default:
			if err := rows.Scan(&postID, &title, &content, &createdAt, &imageURL, &nickname,&ProfileURL ,&categoryName, &isLiked, &isSaved); err != nil {
				log.Println("Scan error:", err)
				continue
			}
		}

		if _, exists := postsMap[postID]; !exists {
			postsMap[postID] = &models.Posts{
				PostID:     postID,
				Title:      title,
				Content:    content,
				ImageURL: imageURL,
				CreatedAt: createdAt,
				Nickname:   nickname,
				ProfileURL: ProfileURL,
				Categories: []string{},
				Isliked:    isLiked,
				IsSaved:    isSaved,
			}
			order = append(order, postID)
		}

		postsMap[postID].Categories = append(postsMap[postID].Categories, categoryName)
	}

	if err := rows.Err(); err != nil {
		log.Println("Rows iteration error:", err)
	}

	var posts []models.Posts
	for _, id := range order {
		posts = append(posts, *postsMap[id])
	}
	fmt.Println("----------------",posts[0])
	return &posts, nil
}
