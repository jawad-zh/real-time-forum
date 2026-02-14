package main

import (
	"fmt"
	"log"
	"net/http"

	 "golang/backend/db"
	"golang/backend/handlers"
)

func main() {
	err := db.DbConnection()
	if err != nil {
		fmt.Print("DataBaseErr", err)
	}
	db.CreatTables(db.DataBase)
	// server part
	mux := http.NewServeMux()

	fs := http.FileServer(http.Dir("./frontend"))
	mux.Handle("/frontend/", http.StripPrefix("/frontend/", fs))

	//
	mux.HandleFunc("/", handlers.HomeHandler)
	mux.HandleFunc("/login", handlers.LoginHandler)
	mux.HandleFunc("/logout", handlers.LogoutHandler)
	mux.HandleFunc("/register", handlers.RegisterHandler)
	mux.HandleFunc("/creatPost", handlers.CreatPostHandler)
	mux.HandleFunc("/sessionCheck", handlers.SessionHandler)
	mux.HandleFunc("/getPosts", handlers.GetPostsHandler)
	mux.HandleFunc("/like", handlers.LikeHandler)
	mux.HandleFunc("/save",handlers.SavePostHandler)
	mux.HandleFunc("/creatComment",handlers.CreatCommentHandler)
	mux.HandleFunc("/getComment",handlers.GetCommentHandler)
	//
	fmt.Println("server started on http://localhost:8080")
	//
	err = http.ListenAndServe(":8080", mux)
	if err != nil {
		log.Fatal("sever Error :", err)
	}
}
