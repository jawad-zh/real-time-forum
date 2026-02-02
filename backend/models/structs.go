package models

type Users struct {
	Nickname  string `json:"Nickname"`
	Age       int    `json:"Age"`
	Gender    string `json:"Gender"`
	FirstName string `json:"FirstName"`
	LastName  string `json:"LastName"`
	Email     string `json:"Email"`
	Password  string `json:"Password"`
	CreatedAt string `json:"CreatedAt"`
}
type Tokens struct {
	UserID    int
	Token     string
	CreatedAt string
}

// need to add image
type Posts struct {
	PostID    int
	UserID    int
	Title     string
	Content   string
	CreatedAt string
}
type PostCategoies struct {
	PostID   int
	Category int
}
type PostInteractions struct {
	UsersID     int
	PostID      int
	Interaction int
}
type Comments struct {
	CommentID int
	PostID    int
	UserID    int
	Content   string
	CreatedAt string
}
type CommentInteractions struct {
	UserId      int
	CommentID   int
	Interaction int
}
type PrivateMessage struct {
	MessageID  int
	SenderID   int
	ReceiverID int
	Content    string
	CreatAt    string
	IsREad     bool
}
