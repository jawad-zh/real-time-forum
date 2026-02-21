package wbs

import "fmt"

func (m *Manager) SendMessage(SenderID int, ReceiverID int, MessageContent string) {
	fmt.Println("entrred to sendmessage")
	Clients, ok := m.Clients[ReceiverID]
	if ok {
		
		var Event Events
		Event.ContentType = "NewMessage"
		Event.Load = MessageContent
		for _, client := range Clients {
			client.Conn.WriteJSON(Event)
		}
	}
}
