package wbs
type UpdateMessageFormat struct{
	SenderID int `json:"SenderID"`
	ReceiverID int `json:"ReceiverID"`
}
func (m *Manager) UpdateMessageState(UserID  int ,ReceiverID int ){
	m.Lock()
	defer m.Unlock()
	var event Events
	var info UpdateMessageFormat
	info.SenderID = ReceiverID
	info.ReceiverID = UserID
	event.ContentType = "updateMessageState"
	event.Load = info
	for _,client:= range m.Clients[UserID]{
		client.Conn.WriteJSON(event)
	}
}