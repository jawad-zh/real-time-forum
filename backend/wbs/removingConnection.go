package wbs

import "fmt"

func (m *Manager) RemoveConnection(client *Client) {
	m.Lock()
	defer m.Unlock()
	conns, ok := m.Clients[client.UserID]
	if ok {
		for i, c := range conns {
			if c == client {
				m.Clients[client.UserID] = append(conns[:i], conns[i+1:]...)
				break
			}
		}
		if len(m.Clients[client.UserID]) == 0 {
			var Event Events
			var info InfoFormatDec
			Event.ContentType = "offlineState"
			info.OfflineUserID = client.UserID
			delete(m.Clients, client.UserID)
			Event.Load = info
			for _, clients := range m.Clients {
				for _, client := range clients {
					err := client.Conn.WriteJSON(Event)
					if err != nil{

						fmt.Println("the removvvvvvving error here:", err)
						return
					}
				}
			}
		}

	}
}
