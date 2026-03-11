import { getUserInfo } from "/frontend/services/getUserInfo.js"
export async function onlineStateUpdate(connectedUser, otherconnectedClient, messageSection) {
    console.log('connectedUser',connectedUser);
    
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
        let found = false
        for (let user of allUsers) {
            if (Number(user.dataset.id) == Number(connectedUser)) {
                found = true
                user.classList.add('onlineUser')
            }
        }
        if (!found){
            // need to get the login user 
        //    const messageSection =  document.getElementById('rightSide')
        //      let messageCountainer = document.createElement('div')
        //         messageCountainer.setAttribute('id','messageCountainer')
        //         messageCountainer.dataset.id = `${connectedUser}`
        //         messageCountainer.classList.add('messageCountainer')
        //         messageCountainer.innerHTML = `
                        
        //                   <div id="messageProfile" >
        //                       <img src="" alt="">
        //                        <div id="onlineState" ></div>
        //                   </div>
        //                   <div id="messageName" >
        //                       ${connectedUser}
        //                   </div>
        //                   <div id="notificationAndTime" >
        //                       <p>11 min</p>
        //                       <div class="messageNotification" ></div>
        //                   </div>
        //   `
        //    messageSection.append(messageCountainer)
        }
        let allConversations = document.querySelectorAll('.imageSectionCountainer')
        for (let conv of allConversations){
            if (Number(conv.dataset.id) == (Number(connectedUser))){
                conv.querySelector('#SubName').innerHTML = 'online'
            }
        }

    }

}