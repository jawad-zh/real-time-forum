// import { onlineUsers } from "/frontend/websocket/startConection.js"
export function offlineStateUpdate(UserID) {
    // if (onlineUsers.includes(UserID)) {
    //     const index = onlineUsers.indexOf(UserID);
    //     if (index !== -1) {
    //         onlineUsers.splice(index, 1); 
    //     }
    // }
    // console.log('userssss online from offline', onlineUsers);

    let users = document.querySelectorAll('.onlineUser')
    for (let user of users) {
        if (Number(user.dataset.id) === UserID) {
            user.classList.remove('onlineUser')
        }
    }
     let allConversations = document.querySelectorAll('.imageSectionCountainer')
    console.log('happpppppeeeeeeeeeeeen');
    
     
        for (let conv of allConversations){
            if (Number(conv.dataset.id) == (Number(UserID))){
                conv.querySelector('#SubName').innerHTML = 'offline'
            }
        }
}