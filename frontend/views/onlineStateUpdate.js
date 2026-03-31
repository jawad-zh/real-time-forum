import { getUserInfo } from "/frontend/services/getUserInfo.js"
import { loadUsers } from "/frontend/views/loadUsers.js"
export async function onlineStateUpdate(connectedUser, otherconnectedClient, messageSection, nickname) {
    const UserInfo = await getUserInfo()
    if (connectedUser == UserInfo.UserID) {
        if (otherconnectedClient) {
            var allUsers = messageSection.querySelectorAll('.messageCountainer')
            for (let user of allUsers) {
                if (otherconnectedClient.includes(Number(user.dataset.id))) {
                    user.classList.add('onlineUser')
                }
            }
        }

    } else {        
        let found = false
        if (messageSection){
            var allUsers = messageSection.querySelectorAll('.messageCountainer')
            for (let user of allUsers) {
                if (Number(user.dataset.id) == Number(connectedUser)) {
                    found = true
                    user.classList.add('onlineUser')
                }
            }
        }
        if (!found) {
            const messageSection = await loadUsers('reload')
            const messageContainer = messageSection.querySelectorAll(".messageCountainer")
            for (let message of messageContainer) {
                for (let onlineUser of otherconnectedClient) {
                    if (Number(message.dataset.id) === onlineUser || Number(message.dataset.id) == connectedUser) {
                        message.classList.add('onlineUser')
                    }
                }
            }
        }
        let allConversations = document.querySelectorAll('.imageSectionCountainer')
        for (let conv of allConversations) {
            if (Number(conv.dataset.id) == (Number(connectedUser))) {
                conv.querySelector('#SubName').innerHTML = 'online'
            }
        }

    }

}