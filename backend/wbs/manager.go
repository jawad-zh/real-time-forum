package wbs

import (
	"sync"

	"github.com/gorilla/websocket"
)

type Client struct{
	Conn *websocket.Conn
	UserID int
}




type Manager struct {
	Clients map[int][]*Client
	 mu sync.RWMutex
}


var GlobalManager *Manager


func NewManager()Manager{
	return Manager{
		Clients: make(map[int][]*Client),
	}
}
