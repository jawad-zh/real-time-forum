package handlers

import (
	"database/sql"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"os"
	"path/filepath"
	"time"

	"golang/backend/models"
	"golang/backend/repos"
)

type CreatPostResponseFormat struct {
	Message  string `json:"message"`
	Status   string `json:"status"`
	PostID   int64  `json:"PostID"`
	Nickname string `json:"Nickname"`
	ImageURL string `json:"imageURL"`
	CreatedAt string `json:"CreatedAt"`
	ProfileURL sql.NullString `json:"ProfileURL"`
}

func CreatPostHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Println("from creat handelr")
	var post models.PostInformation
	var CreatPostResponse CreatPostResponseFormat
	// json.NewDecoder(r.Body).Decode(&post)
	err := r.ParseMultipartForm(10 << 20)
	if err != nil {
		fmt.Println("large size")
		return
	}

	err, session := repos.CheckSession(r)
	if err != nil {
		CreatPostResponse.Message = "no session found"
		CreatPostResponse.Status = "failed"
		w.Header().Set("Type-Content", "application/json")
		json.NewEncoder(w).Encode(&CreatPostResponse)
		return
	}
	err = os.MkdirAll("frontend/uploads", os.ModePerm)
	if err != nil {
		fmt.Println("failed to create uploads folder: %v", err)
		return
	}

	title := r.FormValue("title")
	content := r.FormValue("content")
	categories := r.MultipartForm.Value["categories[]"]
	file, handler, err := r.FormFile("image")
	var imagePath string
	// fmt.Println("------------------------------------------------",err)
	if err == nil {
		defer file.Close()

		filename := fmt.Sprintf("%d%s", time.Now().UnixNano(), filepath.Ext(handler.Filename))
		imagePath = "frontend/uploads/" + filename

		dst, err := os.Create(imagePath)
		if err != nil {
			fmt.Println("os Error:", err)
			return
		}
		defer dst.Close()

		io.Copy(dst, file)
		post.Title = title
		post.Content = content
		post.Categories = categories
		post.ImageURL = imagePath
		err, data := repos.CreatPost(&post, session)
		if err == nil {
			CreatPostResponse.Message = ""
			CreatPostResponse.Status = "success"
			CreatPostResponse.PostID = data.PostID
			CreatPostResponse.Nickname = data.Nickname
			CreatPostResponse.CreatedAt = data.CreatedAt
			CreatPostResponse.ImageURL = data.ImageURL
			CreatPostResponse.ProfileURL = data.ProfileURL
			json.NewEncoder(w).Encode(&CreatPostResponse)
		}
	} else if err.Error() == "http: no such file"{
	
		post.Title = title
		post.Content = content
		post.Categories = categories
		err, data := repos.CreatPost(&post, session)
		if err==nil{
			CreatPostResponse.Message = ""
			CreatPostResponse.Status = "success"
			CreatPostResponse.PostID = data.PostID
			CreatPostResponse.Nickname = data.Nickname
			CreatPostResponse.CreatedAt = data.CreatedAt
			CreatPostResponse.ImageURL = data.ImageURL
			CreatPostResponse.ProfileURL = data.ProfileURL
			json.NewEncoder(w).Encode(&CreatPostResponse)
		}
	}else{
		fmt.Println("somthing wrong")
		return 
	}
}
