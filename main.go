package main

import (
	"fmt"
	"net/http"

	"golang/backend/db"
	"golang/backend/router"
	"golang/backend/services"
	"golang/backend/wbs"
)

func main() {
	err := db.DbConnection()
	if err != nil {
		fmt.Print("DataBaseErr", err)
		return
	}
	db.CreatTables(db.DataBase)
	// server part
	m := wbs.NewManager()
	wbs.GlobalManager = &m

	mux := http.NewServeMux()

	fs := http.FileServer(http.Dir("./frontend"))
	mux.Handle("/frontend/", http.StripPrefix("/frontend/", fs))

	//
	mux.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		if r.Method != http.MethodGet {
			services.Api(w, "", http.StatusMethodNotAllowed)
		}
		http.ServeFile(w, r, "./frontend/index.html")
	})
	router.Router(mux)
	//
	fmt.Println("server started on http://localhost:8081")
	//
	err = http.ListenAndServe(":8081", mux)
	if err != nil {
		fmt.Println("sever Error :", err)
		return
	}
}
