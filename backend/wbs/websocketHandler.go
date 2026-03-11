package wbs

import (
	"fmt"
	"net/http"

	"golang/backend/middleware"
	"github.com/gorilla/websocket"
)

var upgrader = websocket.Upgrader{
	ReadBufferSize:  1024,
	WriteBufferSize: 1024,
	CheckOrigin:     func(r *http.Request) bool { return true },
}

func WebSocketHandler(w http.ResponseWriter, r *http.Request) {
	
	user, ok := middleware.GetUserFromContext(r)
	if !ok{
		fmt.Println("somthing wrong")
		return 
	}
	fmt.Println("usssssseeeeeeeeeeer",user)
	conn, err := upgrader.Upgrade(w, r, nil)
	if err != nil {
		fmt.Println("Upgrade error:", err)
		return
	}
	client := &Client{
		Conn:   conn,
		UserID: user.UserID,
		UserNickname: user.Nickname,
	}
	GlobalManager.AddConnection(client)
	GlobalManager.BrodcastConnection(client)
	defer func() {
		GlobalManager.RemoveConnection(client)
		conn.Close()
	}()

	for {
		_, _, err := conn.ReadMessage()
		if err != nil {
			fmt.Println("Errror  clossssse connnecction ", err)
			break
		}
	}
}
