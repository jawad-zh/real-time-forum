package wbs
type UpdateMessageFormat struct{
	SenderID int `json:"SenderID"`
	ReceiverID int `json:"ReceiverID"`
}
func (m *Manager) UpdateMessageState(UserID  int ,SenderID int ){
	var event Events
	var info UpdateMessageFormat
	info.SenderID = SenderID
	info.ReceiverID = UserID
	event.ContentType = "updateMessageState"
	event.Load = info
	for _,client:= range m.Clients[UserID]{
		client.Conn.WriteJSON(event)
	}
}