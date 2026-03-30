package services

import (
	"database/sql"
	"fmt"
	"golang/backend/middleware"
	"golang/backend/models"
	"golang/backend/repos"
	"io"
	"net/http"
	"os"
	"path/filepath"
	"time"
)

type CreatPostResponseFormat struct {
	Message    string         `json:"message"`
	Statue     string         `json:"statue"`
	PostID     int64          `json:"PostID"`
	Nickname   string         `json:"Nickname"`
	ImageURL   string         `json:"imageURL"`
	CreatedAt  string         `json:"CreatedAt"`
	ProfileURL sql.NullString `json:"ProfileURL"`
}

func CreatPostCheck(r *http.Request, user middleware.MiddlewareInfoFormat) (error, string, *CreatPostResponseFormat, int) {
	var post models.PostInformation
	var CreatPostResponse CreatPostResponseFormat
	err := r.ParseMultipartForm(10 << 20)
	if err != nil {
		fmt.Println("large size")
		return err, "large image size", nil, http.StatusBadRequest
	}

	err = os.MkdirAll("frontend/uploads", os.ModePerm)
	if err != nil {
		fmt.Println("failed to create uploads folder: ", err)
		return err, "Creat Post failed try later", nil, http.StatusInternalServerError
	}

	title := r.FormValue("title")
	content := r.FormValue("content")
	categories := r.MultipartForm.Value["categories[]"]
	file, handler, err := r.FormFile("image")
	var imagePath string
	if err == nil {
		defer file.Close()

		filename := fmt.Sprintf("%d%s", time.Now().UnixNano(), filepath.Ext(handler.Filename))
		imagePath = "frontend/uploads/" + filename

		dst, err := os.Create(imagePath)
		if err != nil {
			fmt.Println("os Error:", err)
			return err, "Creat Post failed try later", nil, http.StatusInternalServerError
		}
		defer dst.Close()
		// need to search
		io.Copy(dst, file)
		//--------------
		post.Title = title
		post.Content = content
		post.Categories = categories
		post.ImageURL = imagePath
		// here
		err, data, statueCode := repos.CreatPost(&post, user.UserID)
		if err == nil {
			CreatPostResponse.Message = ""
			CreatPostResponse.Statue = "success"
			CreatPostResponse.PostID = data.PostID
			CreatPostResponse.Nickname = data.Nickname
			CreatPostResponse.CreatedAt = data.CreatedAt
			CreatPostResponse.ImageURL = data.ImageURL
			CreatPostResponse.ProfileURL = data.ProfileURL
			return nil, "", &CreatPostResponse, http.StatusOK

		}
		return err, "created Post failed try later", nil, statueCode
	} else if err.Error() == "http: no such file" {

		post.Title = title
		post.Content = content
		post.Categories = categories
		err, data, statueCode := repos.CreatPost(&post, user.UserID)
		if err == nil {
			CreatPostResponse.Message = ""
			CreatPostResponse.Statue = "success"
			CreatPostResponse.PostID = data.PostID
			CreatPostResponse.Nickname = data.Nickname
			CreatPostResponse.CreatedAt = data.CreatedAt
			CreatPostResponse.ImageURL = data.ImageURL
			CreatPostResponse.ProfileURL = data.ProfileURL
			return nil, "", &CreatPostResponse, http.StatusOK
		}
		return err, "created Post failed try later", nil, statueCode
	} else {
		fmt.Println("somthing wrong")
		return err, "creatPost failed try later please", nil, http.StatusInternalServerError
	}
}
