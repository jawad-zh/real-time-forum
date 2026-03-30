package repos

import (
	"database/sql"
	"fmt"
	"log"
	"net/http"

	"golang/backend/db"
	"golang/backend/models"
)

func GetPosts(category string, r *http.Request, UserID int, offset int) (*[]models.Posts, error, int) {
	var rows *sql.Rows
	var err error
	switch category {
	case "all":
		rows, err = db.DataBase.Query(`
			SELECT
				p.PostID,
				p.Title,
				p.Content,
				p.CreatedAt,
				p.ImageURL,
				u.Nickname,
				u.ProfileURL,
				c.CategoryName,
				CASE WHEN pl.UserID IS NOT NULL THEN 1 ELSE 0 END AS IsLiked,
				CASE WHEN ps.UserID IS NOT NULL THEN 1 ELSE 0 END AS IsSaved
			FROM (
				SELECT DISTINCT Posts.PostID
				FROM Posts
				ORDER BY Posts.PostID DESC
				LIMIT 10 OFFSET ?
			) AS sub
			INNER JOIN Posts p ON p.PostID = sub.PostID
			INNER JOIN Users u ON p.UserID = u.UserID
			INNER JOIN PostCategories pc ON p.PostID = pc.PostID
			INNER JOIN Categories c ON pc.Category = c.CategoryID
			LEFT JOIN PostLike pl ON pl.PostID = p.PostID AND pl.UserID = ?
			LEFT JOIN PostSave ps ON ps.PostID = p.PostID AND ps.UserID = ?
			ORDER BY p.PostID DESC
		`, offset, UserID, UserID)

	case "like":
		rows, err = db.DataBase.Query(`
			SELECT
				p.PostID,
				p.Title,
				p.Content,
				p.CreatedAt,
				p.ImageURL,
				u.Nickname,
				u.ProfileURL,
				c.CategoryName
			FROM (
				SELECT DISTINCT PostID
				FROM PostLike
				WHERE UserID = ?
				ORDER BY PostID DESC
				LIMIT 10 OFFSET ?
			) AS sub
			INNER JOIN Posts p ON p.PostID = sub.PostID
			INNER JOIN Users u ON p.UserID = u.UserID
			INNER JOIN PostCategories pc ON p.PostID = pc.PostID
			INNER JOIN Categories c ON pc.Category = c.CategoryID
			ORDER BY p.PostID DESC
		`, UserID, offset)

	case "save":
		rows, err = db.DataBase.Query(`
			SELECT
				p.PostID,
				p.Title,
				p.Content,
				p.CreatedAt,
				p.ImageURL,
				u.Nickname,
				u.ProfileURL,
				c.CategoryName
			FROM (
				SELECT DISTINCT PostID
				FROM PostSave
				WHERE UserID = ?
				ORDER BY PostID DESC
				LIMIT 10 OFFSET ?
			) AS sub
			INNER JOIN Posts p ON p.PostID = sub.PostID
			INNER JOIN Users u ON p.UserID = u.UserID
			INNER JOIN PostCategories pc ON p.PostID = pc.PostID
			INNER JOIN Categories c ON pc.Category = c.CategoryID
			ORDER BY p.PostID DESC
		`, UserID, offset)

	default:
		rows, err = db.DataBase.Query(`
			SELECT
				p.PostID,
				p.Title,
				p.Content,
				p.CreatedAt,
				p.ImageURL,
				u.Nickname,
				u.ProfileURL,
				c.CategoryName,
				CASE WHEN pl.UserID IS NOT NULL THEN 1 ELSE 0 END AS IsLiked,
				CASE WHEN ps.UserID IS NOT NULL THEN 1 ELSE 0 END AS IsSaved
			FROM (
				SELECT DISTINCT PC.PostID
				FROM PostCategories PC
				INNER JOIN Categories C ON PC.Category = C.CategoryID
				WHERE C.CategoryName = ?
				ORDER BY PC.PostID DESC
				LIMIT 10 OFFSET ?
			) AS sub
			INNER JOIN Posts p ON p.PostID = sub.PostID
			INNER JOIN Users u ON p.UserID = u.UserID
			INNER JOIN PostCategories pc ON p.PostID = pc.PostID
			INNER JOIN Categories c ON pc.Category = c.CategoryID
			LEFT JOIN PostLike pl ON pl.PostID = p.PostID AND pl.UserID = ?
			LEFT JOIN PostSave ps ON ps.PostID = p.PostID AND ps.UserID = ?
			ORDER BY p.PostID DESC
		`, category, offset, UserID, UserID)
	}

	if rows == nil {
		return nil, fmt.Errorf("query returned nil rows"), http.StatusOK
	}
	if err != nil {
		log.Println("DB query error:", err)
		return nil, err, http.StatusInternalServerError
	}
	defer rows.Close()

	// Deduplicate posts and merge categories
	postsMap := make(map[int]*models.Posts)
	var order []int

	for rows.Next() {
		var postID int
		var title, content, createdAt, nickname, categoryName, imageURL string
		var ProfileURL sql.NullString
		var isLiked, isSaved int

		switch category {
		case "like", "save":
			if err := rows.Scan(&postID, &title, &content, &createdAt, &imageURL, &nickname, &ProfileURL, &categoryName); err != nil {
				log.Println("Scan error:", err)
				continue
			}
			isLiked, isSaved = 0, 0
		default:
			if err := rows.Scan(&postID, &title, &content, &createdAt, &imageURL, &nickname, &ProfileURL, &categoryName, &isLiked, &isSaved); err != nil {
				log.Println("Scan error:", err)
				continue
			}
		}

		if _, exists := postsMap[postID]; !exists {
			postsMap[postID] = &models.Posts{
				PostID:     postID,
				Title:      title,
				Content:    content,
				ImageURL:   imageURL,
				CreatedAt:  createdAt,
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
		return nil, err, http.StatusInternalServerError
	}

	var posts []models.Posts
	for _, id := range order {
		posts = append(posts, *postsMap[id])
	}

	fmt.Println("this is the length of the posts", len(posts))
	return &posts, nil, http.StatusOK
}
