import { getUserInfo } from "/frontend/services/getUserInfo.js"
export async function onlineStateUpdate(connectedUser, otherconnectedClient,messageSection) {
    const UserInfo = await getUserInfo()
    if (connectedUser == UserInfo.UserID) {
        if (otherconnectedClient) {
            var allUsers = messageSection.querySelectorAll('.messageCountainer')
            for(let user of allUsers){
                if(otherconnectedClient.includes(Number(user.dataset.id))){
                    user.classList.add('onlineUser')
                }
            }
        } else {
           
        }
            
    } else {
         var allUsers = messageSection.querySelectorAll('.messageCountainer')
              for(let user of allUsers){
                if(Number(user.dataset.id) == Number(connectedUser)){
                    user.classList.add('onlineUser')
                }
            }
        
    }

}