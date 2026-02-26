package db

import (
	"database/sql"
	"fmt"

	_ "github.com/mattn/go-sqlite3"
)

var DataBase *sql.DB

func DbConnection() error {
	var err error
	DataBase, err = sql.Open("sqlite3", "dataBase.db")
	if err != nil {
		fmt.Println("Data Base Connection Error:", err)
		return err
	}
	err = DataBase.Ping()
	if err != nil {
		fmt.Println("Data Base Error")
		return err
	}
	return nil
}
