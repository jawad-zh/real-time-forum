import { LoginRegister } from "/frontend/views/start.js";
import { setHomePage } from "/frontend/views/home.js"
import { StartWebsocketConection } from '/frontend/websocket/startConection.js'
import {errorPage} from '/frontend/components/errorPage.js';
export async function router(){    
    const path = window.location.pathname
    const res = await fetch("http://localhost:8080/sessionCheck", {
        method: "POST",
        headers: { "Content-Type": "application/json" }
    })
    const data = await res.json()
    console.log('my path issssssss:',path,'and my statue is ',data.status);

    if (data.status === 'success' && (path === "/" || path==="/login"|| path==="/register"|| path==='/authontication') ) {
         history.replaceState({}, "", "/")
        const messagesSection = await setHomePage('all')        
        StartWebsocketConection(messagesSection)
    }else if(data.status != 'success' && (path === "/" || path==="/login"|| path==="/register"|| path==='/authontication') ){
        history.replaceState({},"","authontication")
        LoginRegister()

    }else {
        errorPage()
        
    }
}