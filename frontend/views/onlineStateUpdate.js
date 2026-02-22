import {getUserInfo} from "/frontend/services/getUserInfo.js"
import {rightSide} from "/frontend/views/home.js"
export  async function onlineStateUpdate(connectedUser,otherconnectedClient){
    const UserInfo = await getUserInfo()
    
    if (connectedUser == UserInfo.UserID ){
        
        if (otherconnectedClient){
            let usersDiv = rightSide.querySelectorAll('.messageCountainer')
            console.log('userrrrrrrrrrrrsdiv',usersDiv);  
             for (let clientID of otherconnectedClient){
           
            const target = Array.from(usersDiv).find(
  user => user.dataset.id === clientID
);
            

        }
        }else{
            console.log('no user online');
            
        }
       
    }
    
}