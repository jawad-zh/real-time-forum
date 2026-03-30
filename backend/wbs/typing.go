package wbs

import "fmt"

type updateTypingFormat struct {
	From   int    `json:"from"`
	To     int    `json:"to"`
	Action string `json:"action"`
}

func (m *Manager) Typing(msg wsMessage) {
	fmt.Println("hello from typing")
	m.Lock()
	defer m.Unlock()
	var event Events
	var updateTyping updateTypingFormat
	event.ContentType = msg.Action
	updateTyping.From = msg.From
	updateTyping.To = msg.To
	updateTyping.Action = msg.Type
	event.Load = updateTyping
	for _, client := range m.Clients[msg.To] {
		client.Conn.WriteJSON(event)
	}

}
