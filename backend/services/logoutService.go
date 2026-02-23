package services

import (
	"net/http"

	"golang/backend/repos"
)

func LogoutService(r *http.Request) (error,int) {
	coockie, err := r.Cookie("session_id")
	if err != nil {
		return err,0
	}
	ok,deletedUserID := repos.DeletSession(coockie.Value)
	if !ok {
		return err,0
	}
	return nil,deletedUserID
}
