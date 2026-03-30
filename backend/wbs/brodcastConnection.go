package wbs

import "fmt"

type infoFormat struct {
	LogeddUserID       int    `json:"logeddUserID"`
	OtherLoggedClients []int  `json:"otherLoggedClients"`
	LogeddUserNickname string `json:"logeddUserNickname"`
}

func (m *Manager) BrodcastConnection(client *Client) {
	m.Lock()
	defer m.Unlock()
	var Event Events
	var info infoFormat
	info.LogeddUserID = client.UserID
	info.LogeddUserNickname = client.UserNickname
	Event.ContentType = "onlineState"
	for key := range m.Clients {
		fmt.Println("key", key, "otherID", client.UserID)
		if key != client.UserID {
			info.OtherLoggedClients = append(info.OtherLoggedClients, key)
		}
	}
	Event.Load = info
	Clients, _ := m.Clients[client.UserID]
	for _, client := range Clients {
		client.Conn.WriteJSON(Event)
	}
	//------------------------------------------------------------
	for key, clients := range m.Clients {
		if key != client.UserID {
			for _, client := range clients {
				client.Conn.WriteJSON(Event)
			}
		}
	}
}
