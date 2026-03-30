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

func EditProfile(r *http.Request, UserID int) (error, string, int) {
	err := repos.CheckUserExist(UserID)
	if err != nil {
		return err, "", http.StatusBadGateway
	}

	err = r.ParseMultipartForm(10 << 20)
	if err != nil {
		fmt.Println("large size")
		return errors.New("larg image size"), "image too large", http.StatusBadRequest
	}
	err = os.MkdirAll("frontend/uploads", os.ModePerm)
	if err != nil {
		fmt.Println("failed to create uploads folder: ", err)
		return err, " edit profile failed try later ", http.StatusBadRequest
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
			return err, "edit profile failed try later", http.StatusBadRequest
		}
		defer dst.Close()

		io.Copy(dst, file)

		ImageURL := imagePath
		err, statueCode := repos.EditProfile(ImageURL, UserID)
		if err != nil {
			return err, "edit profile failed try later", statueCode
		}

		return nil, "success", http.StatusOK

	} else {
		fmt.Println("somthing wrong")
		return err, "edit profile failed try later", http.StatusInternalServerError
	}
}
