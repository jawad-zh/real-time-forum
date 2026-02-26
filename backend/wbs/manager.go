package wbs

import (
	"sync"

	"github.com/gorilla/websocket"
)
type Events struct{
	SenderID int `json:"SenderID"`
	ReceiverID int `json:"ReceiverID"`
	ContentType string `json:"ContentType"`
	Load        any `json:"Load"`
}
type Client struct {
	Conn        *websocket.Conn
	UserID      int
}

type Manager struct {
	Clients map[int][]*Client
	sync.RWMutex
}

var GlobalManager *Manager

func NewManager() Manager {
	return Manager{
		Clients: make(map[int][]*Client),
	}
}
