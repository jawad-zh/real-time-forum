package handlers

import (
	"fmt"
	"net/http"
	"sync"

	"golang/backend/repos"

	"github.com/gorilla/websocket"
)

var clients = make(map[int]*websocket.Conn)

var clientsMutex = sync.Mutex{}

var upgrader = websocket.Upgrader{
	CheckOrigin: func(r *http.Request) bool { return true }, 
}

type Message struct {
	SenderID   int    `json:"sender_id"`
	ReceiverID int    `json:"receiver_id"`
	Content    string `json:"content"`
}

func WebSocketHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Println("====================>entred")
	err, session := repos.CheckSession(r)
	if err != nil {
		fmt.Println("Error session", err)
	}
	conn, err := upgrader.Upgrade(w, r, nil)
	if err != nil {
		fmt.Println("Upgrade error:", err)
		return
	}
	defer conn.Close()
	userID := session.UserID
	clientsMutex.Lock()
	clients[userID] = conn
	clientsMutex.Unlock()
	fmt.Println("clients",clients)


	for {
		var msg Message
		err := conn.ReadJSON(&msg)
		fmt.Println("message",msg)
		if err != nil {
			fmt.Println("Read error:", err)
			break
		}

		fmt.Printf("Message from %d to %d: %s\n", msg.SenderID, msg.ReceiverID, msg.Content)

		clientsMutex.Lock()
		receiverConn, ok := clients[msg.ReceiverID]
		clientsMutex.Unlock()

		if ok {
			err = receiverConn.WriteJSON(msg)
			if err != nil {
				fmt.Println("Write error:", err)
			}   
		}

	}

	clientsMutex.Lock()
	delete(clients, userID)
	clientsMutex.Unlock()

	fmt.Println("User disconnected:", userID)
}
