import { getUserInfo } from "/frontend/services/getUserInfo.js"
// import { onlineUsers } from "/frontend/websocket/startConection.js"
export async function onlineStateUpdate(connectedUser, otherconnectedClient, messageSection) {
    // if (!onlineUsers.includes(connectedUser)){
    //     onlineUsers.push(connectedUser)
    // }
    // console.log('onlineUsersonlineUsersonlineUsersonlineUsers',onlineUsers);
    
    const UserInfo = await getUserInfo()
    if (connectedUser == UserInfo.UserID) {
        if (otherconnectedClient) {
            var allUsers = messageSection.querySelectorAll('.messageCountainer')
            for (let user of allUsers) {
                if (otherconnectedClient.includes(Number(user.dataset.id))) {
                    user.classList.add('onlineUser')
                }
            }
        } else {

        }

    } else {
        var allUsers = messageSection.querySelectorAll('.messageCountainer')
        for (let user of allUsers) {
            if (Number(user.dataset.id) == Number(connectedUser)) {
                user.classList.add('onlineUser')
            }
        }
        let allConversations = document.querySelectorAll('.imageSectionCountainer')
        console.log('happen');
        
        console.log('imageSectionCountainer',allConversations);
        
        for (let conv of allConversations){
            if (Number(conv.dataset.id) == (Number(connectedUser))){
                conv.querySelector('#SubName').innerHTML = 'online'
            }
        }

    }

}