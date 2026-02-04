package db

import (
	"database/sql"
	"log"
)

func CreatTables(db *sql.DB) {
	
	_, err := db.Exec(
		`CREATE TABLE IF NOT EXISTS Users (
    UserID INTEGER PRIMARY KEY AUTOINCREMENT,
    Nickname TEXT NOT NULL UNIQUE,
    Age INTEGER NOT NULL,
    Gender TEXT,
    FirstName TEXT NOT NULL,
    LastName TEXT NOT NULL,
    Email TEXT NOT NULL UNIQUE,
    Password TEXT NOT NULL,
    CreatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);`)
	if err != nil {
		log.Fatal("User Table Creation Error:", err)
	}
	_, err = db.Exec(
		`
		CREATE TABLE IF NOT EXISTS Session (
    UserID INTEGER PRIMARY KEY AUTOINCREMENT,
    token TEXT UNIQUE,
    ExpiresAt DATETIME,
    FOREIGN KEY (UserID) REFERENCES Users(UserID) ON DELETE CASCADE
);`)
	if err != nil {
		log.Fatal("token table creation error", err)
	}
	_, err = db.Exec(
		`CREATE TABLE IF NOT EXISTS Posts (
    PostID INTEGER PRIMARY KEY AUTOINCREMENT,
    UserID INTEGER NOT NULL,
    Title TEXT NOT NULL,
    Content TEXT NOT NULL,
    CreatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (UserID) REFERENCES Users(UserID)
);`)
	if err != nil {
		log.Fatal("Posts table creation Error", err)
	}
	_, err = db.Exec(
		`CREATE TABLE IF NOT EXISTS PostCategories (
    PostID INTEGER NOT NULL,
    Category VARCHAR(255) NOT NULL,
    PRIMARY KEY (PostID, Category),
    FOREIGN KEY (PostID) REFERENCES Posts(PostID)
);`)
	if err != nil {
		log.Fatal("PostCategoies table creation Error", err)
	}
	_, err = db.Exec(
		`CREATE TABLE IF NOT EXISTS PostInteractions (
    UserID INTEGER,
    PostID INTEGER,
    Interaction INTEGER,
    PRIMARY KEY (UserID, PostID), 
    FOREIGN KEY (PostID) REFERENCES Posts(PostID) ON DELETE CASCADE,
    FOREIGN KEY (UserID) REFERENCES Users(UserID) ON DELETE CASCADE
);`)
	if err != nil {
		log.Fatal("PostInteractions table creation Error", err)
	}
	_, err = db.Exec(`
	CREATE TABLE IF NOT EXISTS Comments (
    CommentID INTEGER PRIMARY KEY AUTOINCREMENT,
    PostID INTEGER NOT NULL,
    UserID INTEGER NOT NULL,
    Content TEXT NOT NULL,
    CreatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (PostID) REFERENCES Posts(PostID),
    FOREIGN KEY (UserID) REFERENCES Users(UserID)
);`)
	if err != nil {
		log.Fatal("Comments table creation error", err)
	}
	_, err = db.Exec(
		`CREATE TABLE IF NOT EXISTS CommentInteractions (
    UserID INTEGER,
    CommentID INTEGER,
    Interaction INTEGER,
    PRIMARY KEY (UserID, CommentID), 
    FOREIGN KEY (CommentID) REFERENCES Comments(CommentID) ON DELETE CASCADE,
    FOREIGN KEY (UserID) REFERENCES Users(UserID) ON DELETE CASCADE
);
`)
	if err != nil {
		log.Fatal("commentInteractions table creation error", err)
	}
	_, err = db.Exec(
		`CREATE TABLE IF NOT EXISTS PrivateMessages (
    MessageID INTEGER PRIMARY KEY AUTOINCREMENT,
    SenderId INTEGER NOT NULL,
    ReceiverId INTEGER NOT NULL,
    Content TEXT NOT NULL,
    CreatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    IsRead BOOLEAN DEFAULT FALSE,
    FOREIGN KEY (SenderId) REFERENCES Users(UserID),
    FOREIGN KEY (ReceiverId) REFERENCES Users(UserID)
);`)
	if err != nil {
		log.Fatal("PrivateMessage table creation Error", err)
	}
}
