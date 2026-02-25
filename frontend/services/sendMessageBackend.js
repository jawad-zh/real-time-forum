import { UserInfo } from '/frontend/views/home.js';
export async function sendMessagBackend() {
    const messageValue = document.getElementById('MessageContentValue').value
    const receiverID = document.getElementById('imageSectionCountainer').dataset.id    
    const senderID = UserInfo.UserID
    // console.log('sender',UserInfo.UserID);
    
    //   const Readed = document.getElementById('imageSectionCountainer').dataset.id == senderID ? true : false
    // console.log('rrrreded:::::::::::::::::::::::::::::::::',Readed);
    
    let message = {
        messageContent: messageValue,
        receiverID: Number(receiverID),
        senderID: Number(senderID),
        // Readed : Readed
    }
    let res = await fetch("/sendMessage", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(message)
    })
    document.getElementById('MessageContentValue').value = ''

}
