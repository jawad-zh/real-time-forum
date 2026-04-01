package router

import (
	"net/http"

	"golang/backend/handlers"
	"golang/backend/middleware"
	"golang/backend/wbs"
)

func Router(mux *http.ServeMux) {
	mux.HandleFunc("/login", handlers.LoginHandler)
	mux.Handle("/logout", middleware.Authuntication(http.HandlerFunc(handlers.LogoutHandler)))
	mux.Handle("/register", http.HandlerFunc(handlers.RegisterHandler))
	mux.Handle("/creatPost", middleware.Authuntication(http.HandlerFunc(handlers.CreatPostHandler)))
	mux.HandleFunc("/sessionCheck", handlers.SessionHandler)
	mux.Handle("/getPosts", middleware.Authuntication(http.HandlerFunc(handlers.GetPostsHandler)))
	mux.Handle("/like", middleware.Authuntication(http.HandlerFunc(handlers.LikeHandler)))
	mux.Handle("/save", middleware.Authuntication(http.HandlerFunc(handlers.SavePostHandler)))
	mux.Handle("/creatComment", middleware.Authuntication(http.HandlerFunc(handlers.CreatCommentHandler)))
	mux.Handle("/getComment", middleware.Authuntication(http.HandlerFunc(handlers.GetCommentHandler)))
	mux.Handle("/getUserInfo", middleware.Authuntication(http.HandlerFunc(handlers.GetUserInfoHandler)))
	mux.Handle("/editProfile", middleware.Authuntication(http.HandlerFunc(handlers.EditProfileHandler)))
	mux.Handle("/getAllUsers", middleware.Authuntication(http.HandlerFunc(handlers.GetAllUsersHandler)))
	mux.Handle("/sendMessage", middleware.Authuntication(http.HandlerFunc(handlers.SendMessageHandler)))
	mux.Handle("/getMessages", middleware.Authuntication(http.HandlerFunc(handlers.GetMessagesHandler)))
	mux.Handle("/ws", middleware.Authuntication(http.HandlerFunc(wbs.WebSocketHandler)))
	mux.Handle("/UpdateMessageState", middleware.Authuntication(http.HandlerFunc(handlers.UpdateMessageStateHandler)))
}
