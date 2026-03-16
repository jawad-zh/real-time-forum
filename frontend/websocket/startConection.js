import {showNewMessage} from "/frontend/views/showNewMessage.js"
import {UserInfo} from "/frontend/views/home.js"
import {onlineStateUpdate} from "/frontend/views/onlineStateUpdate.js"
import {offlineStateUpdate} from "/frontend/views/offlineStateUpdate.js"
import{updateMessageStateFront} from "/frontend/views/updateMessageStateFront.js"
import { typingViews } from "../views/typingViews.js"
export let socket = null
export let onlineUsers = []
export   function StartWebsocketConection(messageSection){
    if (socket && socket.readyState === WebSocket.OPEN)return
    socket = new WebSocket("/ws");
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
          break
          case "onlineState" :   
                                       
          onlineStateUpdate(data.Load.logeddUserID,data.Load.otherLoggedClients,messageSection,data.Load.logeddUserNickname)
          break
          case "offlineState":            
          offlineStateUpdate(data.Load.UserID)
          break
          case "updateMessageState":                      
            updateMessageStateFront(data.Load.SenderID)
            break
            case "typing":
              typingViews(data.Load)
              
        }
       }
       socket.onclose = () => {
        console.log('COnnection CLOSED //////');
       }
}