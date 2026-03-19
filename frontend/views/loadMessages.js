import { getMessages } from '/frontend/services/getMessages.js';
import { UserInfo } from "./home.js";
import {TimeAgo}  from "/frontend/services/timeAgo.js"
import {htmlXSS} from '/frontend/services/htmlXSS.js';

export async function loadMessages(UserID,flag){
    var messages = await getMessages(UserID,flag)   
    console.log('messages',messages);
     
    const messageCountainer = document.getElementById('messagesSection')
    if (messageCountainer) {
        if (messages) {
            for (let message of messages.Messages) {
                const messageToApp = document.createElement('div')
                messageToApp.setAttribute('id', 'messagCountainer')
                if (message.senderID == UserInfo.UserID) {
                    messageToApp.classList.add('receiver')
                } else {
                    messageToApp.classList.add('sender')
                }
                const time = TimeAgo(message.CreatAt)
                const messageTemplate = `
           
            <div id="MessageAndTime" >
                <div id="MessageContent" >
                ${htmlXSS(message.messageContent)}
                </div>
                <div id="MessageTime" >${time}</div>
            </div>
            `
                messageToApp.innerHTML = messageTemplate
                    messageCountainer.append(messageToApp)
                
            }
        }

    }
}