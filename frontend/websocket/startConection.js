export function StartWebsocketConection(){
     const socket = new WebSocket("ws://localhost:8080/ws");
       socket.onopen = ()=>{
        console.log("the web socket connection is opned");
       }
       socket.onmessage = ()=>{

       }
       
//         socket.onmessage = (event) => {
//     const msg = JSON.parse(event.data);
//     console.log("Message received:", msg);
// };
}