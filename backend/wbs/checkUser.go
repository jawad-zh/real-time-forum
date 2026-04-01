package wbs

func (m *Manager) CheckUserOnline(id int) bool {
	m.Lock()
	defer m.Unlock()
	_, ok := m.Clients[id]
	return ok
}
