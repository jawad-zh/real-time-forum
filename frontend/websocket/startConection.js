import {showNewMessage} from "/frontend/views/showNewMessage.js"
import {UserInfo} from "/frontend/views/home.js"
export   function StartWebsocketConection(){
     const socket = new WebSocket("ws://localhost:8080/ws");
       socket.onopen = ()=>{
        console.log("the web socket connection is opned");
       }
       socket.onmessage =  (event)=>{        
        let data =  JSON.parse(event.data)                
        switch (data.ContentType){
          case "NewMessage" :  
          if (data.SenderID === UserInfo.UserID){
            showNewMessage("from-me","",data.ReceiverID,data.Load)
          }else{
            showNewMessage("from-other",data.SenderID,data.ReceiverID,data.Load)
          }
        }
       }

}