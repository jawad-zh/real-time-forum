import { getMessages } from '/frontend/services/getMessages.js';
import { UserInfo } from "./home.js";
export async function loadMessages(UserID,flag){
    var messages = await getMessages(UserID,flag)
    const messageCountainer = document.getElementById('messagesSection')
    if (messageCountainer) {
        if (messages) {
            for (let message of messages) {
                const messageToApp = document.createElement('div')
                messageToApp.setAttribute('id', 'messagCountainer')
                if (message.senderID == UserInfo.UserID) {
                    messageToApp.classList.add('receiver')
                } else {
                    messageToApp.classList.add('sender')
                }
                const messageTemplate = `
           
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
}