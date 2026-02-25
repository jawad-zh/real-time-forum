import {showNewMessage} from "/frontend/views/showNewMessage.js"
import {UserInfo} from "/frontend/views/home.js"
import {onlineStateUpdate} from "/frontend/views/onlineStateUpdate.js"
import {offlineStateUpdate} from "/frontend/views/offlineStateUpdate.js"
import{updateMessageState} from "/frontend/views/updateMessageState.js"
let socket = null
export   function StartWebsocketConection(messageSection){
  console.log('*******************************');
  
    if (socket && socket.readyState === WebSocket.OPEN)return
    socket = new WebSocket("/ws");
       socket.onopen = ()=>{
        console.log("the web socket connection is opned");
       }
       socket.onmessage =  (event)=>{           
        let data =  JSON.parse(event.data)  
          console.log('daaaaaaaaataaaaaaa',data);
                      
        switch (data.ContentType){
          case "NewMessage" :  
          if (data.SenderID === UserInfo.UserID){
            showNewMessage("from-me","",data.ReceiverID,data.Load)
          }else{
            showNewMessage("from-other",data.SenderID,data.ReceiverID,data.Load)
          }
          break
          case "onlineState" :                      
          onlineStateUpdate(data.Load.logeddUserID,data.Load.otherLoggedClients,messageSection)
          break
          case "offlineState":            
          offlineStateUpdate(data.Load.UserID)
          break
          case "updateMessageState":
            updateMessageState(data.Load.SenderID)
        }
       }
       socket.onclose = () => {
        console.log('COnnection CLOSED //////');
        
       }
}