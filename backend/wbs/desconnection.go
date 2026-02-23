package wbs

import "fmt"

type InfoFormatDec struct {
	OfflineUserID int   `json:"UserID"`
}

func (m *Manager) Desconnection(UserID int) {
	fmt.Println("hello from Desconnectionssssssssssssss")
	var Event Events
	var info InfoFormatDec
	Event.ContentType = "offlineState"
	info.OfflineUserID = UserID
	for _, client := range m.Clients[UserID] {
		err:=client.Conn.Close()
		if err!= nil{
			fmt.Println("heeeeeeeeeeeeere the error:",err)
			return
		}
	}
	delete(m.Clients, UserID)
	Event.Load = info
	for _, clients := range m.Clients {
		for _, client := range clients {
			err:=client.Conn.WriteJSON(Event)
			fmt.Println("the broaddcaaaste error here:",err)
		}
	}
}
