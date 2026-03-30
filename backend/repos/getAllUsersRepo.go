package repos

import (
	"fmt"
	"golang/backend/db"
	"golang/backend/models"
	"net/http"
)

func GetAllUsesRepo(id int) (error, *[]models.Users, int) {
	var users []models.Users
	var user models.Users
	rows, err := db.DataBase.Query(`
SELECT 
    u.UserID,
    u.Nickname,
    u.FirstName,
    u.LastName,
    u.ProfileURL,
    COALESCE(MIN(pm.IsRead), true) AS IsRead,
    MAX(pm.CreatedAt) AS LastMessageTime
FROM Users u
LEFT JOIN PrivateMessages pm 
    ON pm.SenderID = u.UserID 
    AND pm.ReceiverID = ?
WHERE u.UserID != ?
GROUP BY 
    u.UserID,
    u.Nickname,
    u.FirstName,
    u.LastName,
    u.ProfileURL
ORDER BY 
    LastMessageTime IS NULL,
    LastMessageTime DESC,
    LOWER(u.Nickname) ASC;
`, id, id)
	if err != nil {
		fmt.Println("Select all users error:", err)
		return err, nil, http.StatusInternalServerError
	}
	for rows.Next() {
		err := rows.Scan(&user.UserID, &user.Nickname, &user.FirstName, &user.LastName, &user.ProfileURL, &user.IsRead, &user.LastMessageTime)
		if err != nil {
			fmt.Println("scan Error:", err)
			return err, nil, http.StatusInternalServerError
		}
		users = append(users, user)
	}

	return nil, &users, http.StatusOK
}
