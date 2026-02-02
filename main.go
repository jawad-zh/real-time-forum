package main

import (
	"fmt"
	"log"
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
	mux.HandleFunc("/home", handlers.HomeHandler)
	mux.HandleFunc("/login", handlers.LoginHandler)
	mux.HandleFunc("/register", handlers.RegisterHandler)
	mux.HandleFunc("/creatPost", handlers.CreatPostHandler)
	//
	fmt.Println("server started on http://localhost:8080")
	//
	err := http.ListenAndServe(":8080", mux)
	if err != nil {
		log.Fatal("sever Error :", err)
	}
}
