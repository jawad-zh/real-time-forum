package wbs

import "fmt"

func (m *Manager) RemoveConnection(client *Client) {
	fmt.Println("entreeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed")
	m.mu.Lock()
	defer m.mu.Unlock()

	conns := m.Clients[client.UserID]
	for i, c := range conns {
		if c == client {
			m.Clients[client.UserID] = append(conns[:i], conns[i+1:]...)
			break
		}
	}
	if len(m.Clients[client.UserID])==0{
		m.Desconnection(client.UserID)
	}
}
