import {getAllUser} from "/frontend/services/getAllUsers.js"
import {ExportedUsers , UserInfo} from "/frontend/views/home.js"
export async function loadUsers(flag) {
      let users = await getAllUser()        
        if (users.statue==='success'){       
            const messagesSection = document.getElementById('rightSide')        
            if (flag === 'reload'){messagesSection.innerHTML='<p id="messagesTitle">Recent messages</p>'}    
            if (!users.Data)return
             
            for (let user of users.Data){
                ExportedUsers.push(user)
                if (user.Nickname === UserInfo.Nickname){
                    continue
                }
                let messageCountainer = document.createElement('div')
                messageCountainer.setAttribute('id','messageCountainer')
                messageCountainer.dataset.id = `${user.UserID}`
                messageCountainer.classList.add('messageCountainer')
                if (!user.IsRead.Bool) {messageCountainer.classList.add('new')}else{if (messageCountainer.classList.contains('new')){messageCountainer.classList.remove('new')}}
                messageCountainer.innerHTML = `
                        
                          <div id="messageProfile" >
                          <div id="imgmsg" >
                              <img src="${user.ProfileURL}" alt="">
                              </div>
                               <div id="onlineState" ></div>
                          </div>
                          <div id="messageName" >
                              ${user.Nickname}
                          </div>
                          <div id="notificationAndTime" >
                              <p>11 min</p>
                              <div class="messageNotification" ></div>
                          </div>
          `
          messagesSection.append(messageCountainer)
            }
                return messagesSection
         
        }
}