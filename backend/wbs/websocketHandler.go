package wbs

import (
	"fmt"
	"net/http"

	"golang/backend/repos"

	"github.com/gorilla/websocket"
)

var upgrader = websocket.Upgrader{
	CheckOrigin: func(r *http.Request) bool { return true },
}

func WebSocketHandler(w http.ResponseWriter, r *http.Request) {
	err, session := repos.CheckSession(r)
	if err != nil {
		fmt.Println("Error session", err)
	}
	conn, err := upgrader.Upgrade(w, r, nil)
	if err != nil {

		fmt.Println("Upgrade error:", err)
		return
	}
	client := &Client{
		Conn:   conn,
		UserID: session.UserID,
	}

	GlobalManager.AddConnection(client)
	GlobalManager.BrodcastConnection(client)
	
	for {
		_, _, err := conn.ReadMessage()
		if err != nil {
			fmt.Println("Errror  clossssse connnecction ", err)
			break
		}
	}
	
	defer func() {
		GlobalManager.RemoveConnection(client)
		conn.Close()
		
	}()
}
