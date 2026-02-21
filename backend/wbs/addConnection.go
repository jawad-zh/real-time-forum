package wbs

import (
	"fmt"
)

func (m *Manager) AddConnection( client *Client) {
	m.mu.Lock()
	defer m.mu.Unlock()

	m.Clients[client.UserID] = append(m.Clients[client.UserID], client)
	fmt.Println("my ADDED CONNECTION:", m.Clients[client.UserID])
}
