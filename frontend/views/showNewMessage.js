import {updateMessageState} from "/frontend/services/updateMessageState.js"
import {addMessageOffset} from "/frontend/services/getMessages.js"
import {htmlXSS} from '/frontend/services/htmlXSS.js';
import {formatTime} from '/frontend/services/timeAgo.js';
export function showNewMessage(flag, SenderID, ReceiverID, data) {  
    console.log('type of the RecieverId',typeof(ReceiverID));
     console.log('data from show NewMessage===========================================',data);
     
    var className = flag === 'from-me' ? 'receiver' : 'sender';
    const messageContainerCheck = document.getElementById('imageSectionCountainer')
    const messageTime = formatTime(new Date().toISOString())
    let Name = flag === 'from-me' ? '' : data.Name
    if (messageContainerCheck &&( Number(messageContainerCheck.dataset.id) === SenderID || Number(messageContainerCheck.dataset.id) === ReceiverID )  ) {        
        const messageTamplate = `
            <div id="MessageAndTime" >
            <div class="UserNameMessages" >
            ${Name}
            </div>
                <div id="MessageContent" >
                ${htmlXSS(data.Message)}
                </div>
                <div id="MessageTime" >
                ${messageTime}
                </div>
            </div>
            
        `
        const messageToApp = document.createElement('div')
        messageToApp.setAttribute('id', 'messagCountainer')
        messageToApp.classList.add(`${className}`)
        messageToApp.innerHTML = messageTamplate
        const messagesSection = document.getElementById('messagesSection')
        if (messagesSection) {
            messagesSection.prepend(messageToApp)
        }
            updateMessageState(ReceiverID)
            updateMessageState(SenderID)     
            rangeUser(SenderID)   
    } else {
        const allUsers = document.querySelectorAll('.messageCountainer')
        for (let user of allUsers) {
            if (Number(user.dataset.id) === SenderID) {
                rangeUser(SenderID)
                user.classList.add('new')
            }
        }
    }
    addMessageOffset()
}
function rangeUser(id){
    const container = document.getElementById('rightSide')
    const title = document.getElementById('messagesTitle')
    const allUsers = document.querySelectorAll('.messageCountainer')
     for (let user of allUsers) {
            if (Number(user.dataset.id) === id) {
                container.removeChild(user)
                container.removeChild(title)
                container.prepend(title,user)
            }
        }
}
