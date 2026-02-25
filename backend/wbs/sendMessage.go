package wbs

import "fmt"

func (m *Manager) SendMessage(SenderID int, ReceiverID int, MessageContent string) {
	m.Lock()
	defer m.Unlock()
	senderClients , ok := m.Clients[SenderID]
	var Event Events
	Event.ContentType = "NewMessage"
	Event.Load = MessageContent
	Event.SenderID = SenderID
	Event.ReceiverID = ReceiverID
	if !ok {
		fmt.Println("Sender connection not found")
		return
	}
	for _,client:= range senderClients{
		client.Conn.WriteJSON(Event)
	}
	receiverClients, ok := m.Clients[ReceiverID]
	if !ok {
		fmt.Println("Connection not found")
		return
	}
		for _, client := range receiverClients {
			client.Conn.WriteJSON(Event)
		}
}
