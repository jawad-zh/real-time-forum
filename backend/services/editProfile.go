package services

import (
	"fmt"
	"io"
	"net/http"
	"os"
	"path/filepath"
	"time"

	"golang/backend/models"
	"golang/backend/repos"
)

func EditProfile(r *http.Request, session *models.Session)error {
	err := os.MkdirAll("frontend/uploads", os.ModePerm)
	if err != nil {
		fmt.Println("failed to create uploads folder: %v", err)
		return err
	}

	file, handler, err := r.FormFile("image")
	var imagePath string
	if err == nil {
		defer file.Close()

		filename := fmt.Sprintf("%d%s", time.Now().UnixNano(), filepath.Ext(handler.Filename))
		imagePath = "frontend/uploads/" + filename

		dst, err := os.Create(imagePath)
		if err != nil {
			fmt.Println("os Error:", err)
			return err
		}
		defer dst.Close()

		io.Copy(dst, file)

		ImageURL := imagePath
		err=repos.EditProfile(ImageURL, session)
		if err != nil{
			return err
		}
		
		return nil

	}else {
		fmt.Println("somthing wrong")
		return err
	}
}
