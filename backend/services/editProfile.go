package services

import (
	"errors"
	"fmt"
	"io"
	"net/http"
	"os"
	"path/filepath"
	"strings"
	"time"

	"golang/backend/repos"
)

func EditProfile(r *http.Request, UserID int) (error, string, int) {
	err := repos.CheckUserExist(UserID)
	if err != nil {
		if strings.Contains(err.Error(), "not found") {
			return err, "", http.StatusNotFound
		}
		return err, "", http.StatusInternalServerError
	}

	err = r.ParseMultipartForm(10 << 20)
	if err != nil {
		fmt.Println("large size")
		return errors.New("large image size"), "image too large", http.StatusBadRequest
	}

	err = os.MkdirAll("frontend/uploads", os.ModePerm)
	if err != nil {
		fmt.Println("failed to create uploads folder: ", err)
		return err, "edit profile failed try later", http.StatusBadRequest
	}

	file, handler, err := r.FormFile("image")
	var imagePath string

	if err == nil {
		defer file.Close()

		if !IsImageExtension(handler.Filename) {
			return errors.New("invalid file extension"), "only image files are allowed", http.StatusBadRequest
		}

		const maxSize = 5 << 20
		if handler.Size > maxSize {
			return errors.New("file too large"), "image must be less than 5MB", http.StatusBadRequest
		}

		isImage, err := IsImageContent(file)
		if err != nil {
			return err, "failed to read file", http.StatusInternalServerError
		}
		if !isImage {
			return errors.New("invalid content"), "file is not an image", http.StatusBadRequest
		}

		ext := strings.ToLower(filepath.Ext(handler.Filename))
		filename := fmt.Sprintf("%d%s", time.Now().UnixNano(), ext)
		imagePath = "frontend/uploads/" + filename

		dst, err := os.Create(imagePath)
		if err != nil {
			fmt.Println("os Error:", err)
			return err, "edit profile failed try later", http.StatusBadRequest
		}
		defer dst.Close()

		_, err = io.Copy(dst, file)
		if err != nil {
			return err, "failed to save image", http.StatusInternalServerError
		}

		ImageURL := imagePath
		err, statueCode := repos.EditProfile(ImageURL, UserID)
		if err != nil {
			return err, "edit profile failed try later", statueCode
		}

		return nil, "success", http.StatusOK

	} else {
		fmt.Println("something wrong")
		return err, "edit profile failed try later", http.StatusInternalServerError
	}
}