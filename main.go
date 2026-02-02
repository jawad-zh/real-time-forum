package main

import (
	"fmt"
	"net/http"

	"golang/backend/db"
	"golang/backend/handlers"
)

func main() {
	dataBase:=db.DbConnection()
	db.CreatTables(dataBase)
	// server part 
	mux := http.NewServeMux()
	//
	http.HandleFunc("/home", handlers.HomeHandler)
	http.HandleFunc("/login", handlers.LoginHandler)
	http.HandleFunc("/register", handlers.RegisterHandler)
	http.HandleFunc("/creatPost", handlers.CreatPostHandler)
	//
	fmt.Println("server started on http://localhost:8080")
	//
	err := http.ListenAndServe(":8080", mux)
	if err != nil {
		fmt.Println("sever Error :", err)
	}
}
