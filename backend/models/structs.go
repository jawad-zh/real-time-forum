package models


type Users struct{
	UserID int 
	Nickname string
	Age int 
	Gender string
	FirstName string
	LastName string
	Email string
	PasswordHash string
	CreatedAt string
}
type Tokens struct{
	UserID int 
	Token string
	CreatedAt string
}
//need to add image
type Posts struct{
	PostID int 
	UserID int 
	Title string
	Content string
	CreatedAt string
}
type PostCategoies struct{
	PostID int 
	Category int 
}
type PostInteractions struct{
	UsersID int 
	PostID int 
	Interaction int 
}
type Comments struct{
	CommentID int 
	PostID int 
	UserID int 
	Content string
	CreatedAt string
}
type CommentInteractions struct{
	UserId int 
	CommentID int 
	Interaction int 
}
type PrivateMessage struct{
	MessageID int 
	SenderID int 
	ReceiverID int 
	Content string 
	CreatAt string
	IsREad bool
}
