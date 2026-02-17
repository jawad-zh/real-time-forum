package services

import (
	"net/http"

	"golang/backend/repos"
)

func LogoutService(r *http.Request) error {
	coockie, err := r.Cookie("session_id")
	if err != nil {
		return err
	}
	ok := repos.DeletSession(coockie.Value)
	if !ok {
		return err
	}
	return nil
}
