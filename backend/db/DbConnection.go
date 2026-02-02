package db

import (
	"database/sql"
	"log"
	_ "github.com/mattn/go-sqlite3"
)

func DbConnection()(*sql.DB){
	db,err:=sql.Open("sqlite3","dataBase.db")
	if err != nil {
		log.Fatal("Data Base Connection Error:",err)
	}
	err=db.Ping()
	if err != nil{
		log.Fatal("Data Base Error")
	}
	return db
}