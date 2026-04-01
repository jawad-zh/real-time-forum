package wbs

import "fmt"

type SendMessage struct {
	MessageContent string `json:"Message"`
	UserNickname   string `json:"Name"`
}

func (m *Manager) SendMessage(SenderID int, ReceiverID int, MessageContent string, userNickname string) {
	m.Lock()
	defer m.Unlock()
	var messageData SendMessage 
	var Event Events
	Event.ContentType = "NewMessage"
	Event.SenderID = SenderID
	Event.ReceiverID = ReceiverID
	messageData.MessageContent = MessageContent
	messageData.UserNickname = userNickname
	Event.Load = messageData
	senderClients, ok := m.Clients[SenderID]
	if !ok {
		fmt.Println("Sender connection not found")
		return
	}
	for _, client := range senderClients {
		client.Conn.WriteJSON(Event)
	}
	receiverClients, ok := m.Clients[ReceiverID]
	fmt.Println("receiverClients Client:", senderClients)

	if !ok {
		fmt.Println("Connection not found")
		return
	}
	for _, client := range receiverClients {
		client.Conn.WriteJSON(Event)
	}
}
