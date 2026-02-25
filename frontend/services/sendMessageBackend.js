import {UserInfo} from '/frontend/views/home.js';
export async function sendMessagBackend() {
    const messageValue = document.getElementById('MessageContentValue').value
    const receiverID = document.getElementById('imageSectionCountainer').dataset.id
    const senderID = UserInfo.UserID
    let message ={
        messageContent : messageValue,
        receiverID : Number(receiverID),
        senderID : Number(senderID)
    }
    let res = await fetch("/sendMessage",{
        method : "POST",
        headers :{
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(message)
    })
    document.getElementById('MessageContentValue').value = ''
   
}
