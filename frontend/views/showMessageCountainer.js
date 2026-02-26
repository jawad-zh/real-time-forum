import { ExportedUsers } from "/frontend/views/home.js"
import { getMessages } from '/frontend/services/getMessages.js';
import { UserInfo } from "./home.js";
// import { onlineUsers } from "/frontend/websocket/startConection.js"
export async function showMessageCountainer(UserID,online) {
    // let onlineStat = onlineUsers.includes(UserID) ? 'onlie' : 'offline'
    // console.log('onlineStat',onlineUsers);
    
    let RecieverUser = {}
    for (let user of ExportedUsers) {
        if (user.UserID == UserID) {
            RecieverUser = { ...user }
            break
        }
    }
    let onlineStat = online ? 'online' : 'offline'
    var section = `
        <div id="barSection" >
            <div id="image" >
                <img src="${RecieverUser.ProfileURL}" alt="">
            </div>
            <div id="MessageUserInfo" >
                <div id="Name" >
                    ${RecieverUser.Nickname}
                </div>
                <div id="SubName" >
                ${onlineStat}
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
    imageSectionCountainer.setAttribute('id', 'imageSectionCountainer')
    imageSectionCountainer.classList.add('imageSectionCountainer')
    imageSectionCountainer.dataset.id = UserID
    imageSectionCountainer.innerHTML = section
    document.body.append(imageSectionCountainer)

    var messages = await getMessages(UserID)
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
                messageCountainer.prepend(messageToApp)
            }
        }

    }
    // console.log('messsssssssageeees from showing messages',messages);



}