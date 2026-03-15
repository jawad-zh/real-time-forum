import { ExportedUsers } from "/frontend/views/home.js"
import {loadMessages} from "/frontend/views/loadMessages.js"
import { messageScrolling } from "../services/scrolling.js";
import { typing } from "../services/typing.js";
export async function showMessageCountainer(UserID,online) {
    console.log('user id from show message countainer',UserID);
    
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
        <div id="typingIndicator" style="display:none">
  <span class="dot"></span>
  <span class="dot"></span>
  <span class="dot"></span>
</div>
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
     const oldMessageCountainer = document.getElementById('imageSectionCountainer')
        if (oldMessageCountainer) oldMessageCountainer.remove()
        const imageSectionCountainer = document.createElement('div')
        imageSectionCountainer.setAttribute('id', 'imageSectionCountainer')
        imageSectionCountainer.classList.add('imageSectionCountainer')
        imageSectionCountainer.dataset.id = UserID
        imageSectionCountainer.innerHTML = section
        document.body.append(imageSectionCountainer)
    loadMessages(UserID)
    const messagesSection = imageSectionCountainer.querySelector('#messagesSection')
    messageScrolling(messagesSection,RecieverUser.UserID)
    document.getElementById('MessageContentValue').addEventListener('keydown',()=>typing(UserID))
    
    

}