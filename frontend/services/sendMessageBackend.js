import { UserInfo } from '/frontend/views/home.js';
export async function sendMessagBackend() {
    const messageValue = document.getElementById('MessageContentValue').value
    const receiverID = document.getElementById('imageSectionCountainer').dataset.id    
    const senderID = UserInfo.UserID
    let message = {
        messageContent: messageValue,
        receiverID: Number(receiverID),
        senderID: Number(senderID),
    }    
        const input = document.getElementById('MessageContentValue')
        input.value = ''
    let res = await fetch("/sendMessage", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(message)
    })
    const data = await res.json()    
    return data
   
}
