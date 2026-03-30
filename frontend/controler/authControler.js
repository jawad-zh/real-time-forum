import { registerCheck } from "/frontend/services/registerCheck.js"
import { loginCheck } from "/frontend/services/loginCheck.js"
import { logout } from "/frontend/services/logout.js"
import { LoginRegister } from "/frontend/views/start.js";
import { setHomePage } from "/frontend/views/home.js"
import { StartWebsocketConection } from '/frontend/websocket/startConection.js'
import {setAlert} from "/frontend/components/alert.js"

export async function authController(e) {
    const id = e.target.closest('[id]').id

     if (id === 'registerButton') {
        const data = await registerCheck(e)
        // need to do somthing
          if (data.status === 'success') {
          setAlert('success', '✔', 'Register Successful');
          setTimeout(()=> {const login = document.getElementById('login') ; if(login)login.click()})
     } else {
           setAlert('error', '✖', data.message);
     }
    } else if (id === 'loginButton') {
        const data = await loginCheck(e)
        if (data){
               if (data.status === 'success') {
            
            setTimeout(async () => {
                window.history.replaceState({},"","/")
                const messagesSection = await setHomePage('all',data.userInfo)
                StartWebsocketConection(messagesSection)
            }, 1500)
        }else if (data.status === 'Unauthorized') {
            LoginRegister(); window.history.replaceState({},"","authontication")
        }
        }
     
    } else if (id === 'logoutIcone') {
        const ok = logout()
        if (ok) LoginRegister(); window.history.replaceState({},"","authontication")
    }
}