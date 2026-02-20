import {ExportedUsers} from "/frontend/views/home.js"
import {getMessages} from '/frontend/services/getMessages.js';
import { UserInfo } from "./home.js";
export async function showMessageCountainer(UserID){
    console.log("userId",UserID);
    
    let RecieverUser = {}
    for (let user of ExportedUsers){        
        if (user.UserID == UserID){            
            RecieverUser = {...user}
            break
        }
    } 
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
                <input id="MessageContentValue"  placeholder="send message" type="text">
            </div>
            <div id="sendMessageIconeCountainer" >
                <i id="sendMessageIcone" class="fa-regular fa-paper-plane"></i>
            </div>
        </div>
    
    `

    // remove old one
    const oldMessageCountainer = document.getElementById('imageSectionCountainer')
    if (oldMessageCountainer) oldMessageCountainer.remove()
    const imageSectionCountainer = document.createElement('div')
    imageSectionCountainer.setAttribute('id','imageSectionCountainer')
    imageSectionCountainer.dataset.id = UserID
    imageSectionCountainer.innerHTML = section
    document.body.append(imageSectionCountainer)

    var messages = await getMessages(UserID)
    console.log('messssssssssssaaaaaaaaaageeeeeeeees:',messages);
    const messageCountainer = document.getElementById('messagesSection')
    if (messageCountainer){
        if (messages){
            for (let message of messages){
                const messageToApp = document.createElement('div')
                messageToApp.setAttribute('id','messagCountainer')
                if(message.senderID == UserInfo.UserID){
                    messageToApp.classList.add('receiver')
                }else{
                    messageToApp.classList.add('sender')
                }
                 const messageTemplate = `
            <div id="ImageMessage" ></div>
            <div id="MessageAndTime" >
                <div id="MessageContent" >
                ${message.messageContent}
                </div>
                <div id="MessageTime" ></div>
            </div>
            
        `
        messageToApp.innerHTML = messageTemplate
        messageCountainer.append(messageToApp)
            }
        }
       
    }
    // console.log('messsssssssageeees from showing messages',messages);
    

   
}