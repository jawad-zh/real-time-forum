import {ExportedUsers} from "/frontend/views/home.js"
import {getMessages} from '/frontend/services/getMessages.js';
import { UserInfo } from "./home.js";
export async function showMessageCountainer(UserID){
    let RecieverUser = {}
    for (let user of ExportedUsers){        
        if (user.UserID == UserID){            
            RecieverUser = {...user}
            break
        }
    }
    console.log('User',UserID);
    console.log('RecieverUser',RecieverUser.UserID);
    

 var section = `
        <div id="barSection" >
            <div id="image" >
                <img src="${RecieverUser.ProfileURL.String}" alt="">
               
            </div>
            <div id="MessageUserInfo" >
                <div id="Name" >
                    ${RecieverUser.Nickname}
                </div>
                <div id="SubName" >
                    online
                </div>
            </div>
            <div id="cancelButton" >
                <i id="cancenlChatIcone" class="fa-solid fa-x"></i>
            </div>
        </div>
        <div id="messagesSection" >
           
        </div>
        <div id="inputMessagesSection" >
            <div id="MessageContentInput" >
                <input id="MessageContentValue" placeholder="send message" type="text">
            </div>
            <div id="sendMessageIconeCountainer" >
                <i id="sendMessageIcone" class="fa-regular fa-paper-plane"></i>
            </div>
        </div>
    
    `
    console.log('usssssssssssserIIIIIInfo',UserInfo);
    

    const messagesSection = document.getElementById('messagesSection')
    const oldMessageSection = document.getElementById('imageSectionCountainer')
    if (oldMessageSection){
        oldMessageSection.remove()
    }
    const messageSection = document.createElement('div')
    messageSection.setAttribute('id','imageSectionCountainer')
    messageSection.dataset.ID = UserID
    messageSection.innerHTML = section
    var messages = await getMessages(UserID)
    console.log('messsssssssageeees from showing messages',messages);
    if (messages){
        for (let message of messages){
                var sectionM = `
     
            <div id="ImageMessage" ></div>
            <div id="MessageAndTime" >
                <div id="MessageContent" >
                ${message.messageContent}
                </div>
                <div id="MessageTime" ></div>
            </div>
          
    `
    var messagCountainer = document.createElement('div')
    messagCountainer.setAttribute('id','messagCountainer')
    messagCountainer.innerHTML = sectionM
    if (UserInfo.UserID == message.senderID){
        if (messagCountainer.classList.contains('receiver')){
            messagCountainer.classList.remove('reicever')
        }
        messagCountainer.classList.add('sender')
    }else{
         if (messagCountainer.classList.contains('sender')){
            messagCountainer.classList.remove('sender')
        }
        messagCountainer.classList.add('reicever')
    }
    // if (message.senderID === ){

    // }
    if (messageSection){

        messagesSection.append(messagCountainer)
    }
        }
    }else{

    }

   
}