package wbs

type infoFormat struct{
	logeddUserID int
	otherLoggedClients []int
}
func (m *Manager) BrodcastConnection(clientID *Client){
	var Event Events
	var info infoFormat
	info.logeddUserID = clientID.UserID
	Event.ContentType = "onlineState"
	for key,_ := range m.Clients{
		if key != clientID.UserID{
				info.otherLoggedClients = append(info.otherLoggedClients, key)
		}
	}
	Event.Load = info
	Clients,_:=m.Clients[clientID.UserID]
	for _,client:= range Clients{
		client.Conn.WriteJSON(Event)
	}
	//------------------------------------------------------------
	for key,clients := range m.Clients{
		if key != clientID.UserID{
				for _,client := range clients{
					client.Conn.WriteJSON(Event)
				}
		}
	}

}