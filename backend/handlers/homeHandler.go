package handlers

import (
	"fmt"
	"log"
	"net/http"
	"text/template"
)

func HomeHandler(w http.ResponseWriter, r *http.Request) {
	if r.URL.Path != "/" && r.URL.Path != "/favicon.ico" {
		fmt.Println("page not found")
	}
	temp, err := template.ParseFiles("frontend/index.html")
	if err != nil {
		log.Fatal("Error", err)
	}
	temp.Execute(w, nil)
}
