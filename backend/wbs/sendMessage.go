package wbs

import "fmt"

func (m *Manager) SendMessage(SenderID int, ReceiverID int, MessageContent string) {
	fmt.Println("entrred to sendmessage")
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
	fmt.Println("it'''''''''s happen")
		for _, client := range receiverClients {
			client.Conn.WriteJSON(Event)
		}
}
