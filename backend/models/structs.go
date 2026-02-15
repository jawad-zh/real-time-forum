package models

import "time"

type Users struct {
	UserID    int
	Nickname  string `json:"Nickname"`
	Age       int    `json:"Age"`
	Gender    string `json:"Gender"`
	FirstName string `json:"FirstName"`
	LastName  string `json:"LastName"`
	Email     string `json:"Email"`
	Password  string `json:"Password"`
	CreatedAt time.Time `json:"CreatedAt"`
	Likes int `json:"Likes"`
	Saves int `json:"Saves"`

}
type Session struct {
	UserID    int `json:"UserID"`
	Token     string `json:"Token"`
	ExpiresAt time.Time `json:"ExpiresAt"`
}

// need to add image
type Posts struct {
	PostID    int `json:"PostID"`
	UserID    int `json:"UserID"`
	Title     string `json:"Title"`
	Content   string `json:"Content"`
	CreatedAt string `json:"CreatedAt"`
	Nickname string `json:"Nickname"`
	Categories []string `json:"Categories"`
	Isliked int `json:"Isliked"`
	IsSaved int `json:"IsSaved"`
}
type PostCategoies struct {
	PostID   int `json:"PostID"`
	Category int `json:"Category"`
}
type PostInteractions struct {
	UsersID     int `json:"UserID"`
	PostID      int `json:"PostID"`
	Interaction int `json:"Interaction"`
}
type Comments struct {
	CommentID int `json:"CommentID"`
	PostID    int `json:"PostID"`
	UserID   int `json:"UserID"`
	Content   string `json:"Content"`
	CreatedAt string `json:"CreatedAt"`
}
type CommentInteractions struct {
	UserId     int `json:"UserId"`
	CommentID   int `json:"CommentID"`
	Interaction int `json:"Interaction"`
}
type PrivateMessage struct {
	MessageID  int `json:"MessageID"`
	SenderID   int  `json:"SenderID"`
	ReceiverID int `json:"ReceiverID"`
	Content    string `json:"Content"`
	CreatAt    string `json:"CreatAt"`
	IsREad     bool `json:"IsREad"`
}
type Login struct {
	NicknameOrEmailInput string `json:"NicknameOrEmailInput"`
	EmailOrNickname      string `json:"EmailOrNickname"`
	Password             string `json:"Password"`
}
type PostInformation struct {
	Title      string   `json:"Title"`
	Content    string   `json:"Content"`
	Categories []string `json:"Categories"`
	ImageURL string `json:"ImageURL"`
}
type PostLike struct{
	UserID int `json:"UserID"`
	PostID int `json:"PostID"`
}
type PostSave struct{
	UserID int `json:"UserID"`
	PostID int `json:"PostID"`
}