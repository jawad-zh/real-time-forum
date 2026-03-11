import {updateMessageState} from "/frontend/services/updateMessageState.js"
import {addMessageOffset} from "/frontend/services/getMessages.js"
export function showNewMessage(flag, SenderID, ReceiverID, MessageContent) {   
    var className = flag === 'from-me' ? 'receiver' : 'sender';
    const messageContainerCheck = document.getElementById('imageSectionCountainer')
    if (messageContainerCheck) {
        const messageTamplate = `
            <div id="ImageMessage" ></div>
            <div id="MessageAndTime" >
                <div id="MessageContent" >
                ${MessageContent}
                </div>
                <div id="MessageTime" ></div>
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
