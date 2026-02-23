import {showNewMessage} from "/frontend/views/showNewMessage.js"
import {UserInfo} from "/frontend/views/home.js"
import {onlineStateUpdate} from "/frontend/views/onlineStateUpdate.js"
export   function StartWebsocketConection(messageSection){
   console.log('from webSocket333333');
   
     const socket = new WebSocket("/ws");
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
          case "onlineState" :
            console.log('---------------------------*******************=========================');
            
          onlineStateUpdate(data.Load.logeddUserID,data.Load.otherLoggedClients,messageSection)
        }
       }

}