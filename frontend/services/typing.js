import { socket } from '../websocket/startConection.js';
let typingBool = false
let timOutTyping
export  function typing(RecieverID){
    // console.log("from typing",typeof(RecieverID));
    
    if (!typingBool){
        socket.send(JSON.stringify({action:"typing",type:"TypingStart",to:Number(RecieverID)}))
        typingBool = true
    }
    clearTimeout(timOutTyping)
    timOutTyping = setTimeout(()=>{
        socket.send(JSON.stringify({action:"typing",type:"TypingStop",to:Number(RecieverID)}))
        typingBool=false
    },2000)
}