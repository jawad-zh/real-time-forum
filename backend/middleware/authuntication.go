package middleware

import (
	"context"
	"encoding/json"
	"golang/backend/repos"
	"net/http"
)

type MiddlewareInfoFormat struct {
	UserID   int
	Nickname string
}
type middleWarRespons struct{
	Statue string `json:"statue"`
}

type Context string
var Contextkey Context = "userInfo"

func Authuntication(handler http.Handler) http.Handler {
	var response middleWarRespons
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		err, session := repos.CheckSession(r)
		if err != nil {
			response.Statue = "Unauthorized"
		w.Header().Set("Content-Type","application/json")
		json.NewEncoder(w).Encode(response)
			return
		}
		userInfo:= MiddlewareInfoFormat{
			UserID: session.UserID,
			Nickname: session.UserNickname,
		}
		ctx:= context.WithValue(r.Context(),Contextkey,userInfo)
		handler.ServeHTTP(w,r.WithContext(ctx))
	})

}
