package wbs

import "fmt"

type infoFormat struct {
	LogeddUserID       int   `json:"logeddUserID"`
	OtherLoggedClients []int `json:"otherLoggedClients"`
}

func (m *Manager) BrodcastConnection(clientID *Client) {
	m.Lock()
	defer m.Unlock()
	var Event Events
	var info infoFormat
	info.LogeddUserID = clientID.UserID
	Event.ContentType = "onlineState"
	for key := range m.Clients {
		fmt.Println("key",key,"otherID",clientID.UserID)
		if key != clientID.UserID {
			info.OtherLoggedClients = append(info.OtherLoggedClients, key)
		}
	}
	Event.Load = info
	Clients, _ := m.Clients[clientID.UserID]
	for _, client := range Clients {
		client.Conn.WriteJSON(Event)
	}
	//------------------------------------------------------------
	for key, clients := range m.Clients {
		if key != clientID.UserID {
			for _, client := range clients {
				client.Conn.WriteJSON(Event)
			}
		}
	}
}
