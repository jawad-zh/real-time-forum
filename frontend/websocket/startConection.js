export function StartWebsocketConection(){
     const socket = new WebSocket("ws://localhost:8080/ws");
        socket.onopen = () => console.log("Connected frooooooooooooooooooo js");
        socket.onmessage = (event) => {
    const msg = JSON.parse(event.data);
    console.log("Message received:", msg);
};
}