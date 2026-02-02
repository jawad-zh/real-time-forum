package handlers

import (
	"fmt"
	"log"
	"net/http"
	"text/template"
)

func HomeHandler(w http.ResponseWriter , r *http.Request){
	fmt.Println("--")
	if r.URL.Path != "/"{
		fmt.Println("page not found")
	}
	temp,err := template.ParseFiles("frontend/index.html")
	if err != nil{
		log.Fatal("Error",err)
	}
	temp.Execute(w,nil)
}