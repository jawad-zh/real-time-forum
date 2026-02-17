package services

import (
	"errors"
	"fmt"
	"io"
	"net/http"
	"os"
	"path/filepath"
	"time"

	"golang/backend/repos"
)

func EditProfile(r *http.Request) (error , string){
	err := r.ParseMultipartForm(10 << 20)
	if err != nil {
		fmt.Println("large size")
		return errors.New("larg image size") , "image too large"
	}

	err, session := repos.CheckSession(r)
	if err != nil {
		return errors.New("no session") , "your session is expired"
	}

	err = os.MkdirAll("frontend/uploads", os.ModePerm)
	if err != nil {
		fmt.Println("failed to create uploads folder: %v", err)
		return err , " edit profile failed try later "
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
			return err , "edit profile failed try later"
		}
		defer dst.Close()

		io.Copy(dst, file)

		ImageURL := imagePath
		err = repos.EditProfile(ImageURL, session)
		if err != nil {
			return err , "edit profile failed try later"
		}

		return nil , "success"

	} else {
		fmt.Println("somthing wrong")
		return err , "edit profile failed try later"
	}
}
