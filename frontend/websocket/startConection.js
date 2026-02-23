import {showNewMessage} from "/frontend/views/showNewMessage.js"
import {UserInfo} from "/frontend/views/home.js"
import {onlineStateUpdate} from "/frontend/views/onlineStateUpdate.js"
import {offlineStateUpdate} from "/frontend/views/offlineStateUpdate.js"
export   function StartWebsocketConection(messageSection){
     const socket = new WebSocket("/ws");
       socket.onopen = ()=>{
        console.log("the web socket connection is opned");
       }
       socket.onmessage =  (event)=>{           
        let data =  JSON.parse(event.data)  
        console.log('data content typeeeee:',data.ContentType);
                      
        switch (data.ContentType){
          case "NewMessage" :  
          if (data.SenderID === UserInfo.UserID){
            showNewMessage("from-me","",data.ReceiverID,data.Load)
          }else{
            showNewMessage("from-other",data.SenderID,data.ReceiverID,data.Load)
          }
          break
          case "onlineState" :       
          console.log('hhhhhhhhhhhhhhhhhhhhhh');
               
          onlineStateUpdate(data.Load.logeddUserID,data.Load.otherLoggedClients,messageSection)
          break
          case "offlineState":
            console.log('whaaaaaaaaaaaatttttttttt');
            
            console.log("offlineStateUpdate=========================> it'''''''''ssssss happppppppppppppeeeeeeeeeeeennnnd",data);
            
          offlineStateUpdate(data.Load.UserID)
        }
       }

}