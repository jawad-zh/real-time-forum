import { registerCheck } from "/frontend/services/registerCheck.js"
import { loginCheck } from "/frontend/services/loginCheck.js"
import { logout } from "/frontend/services/logout.js"
import { LoginRegister } from "/frontend/views/start.js";
import { setHomePage } from "/frontend/views/home.js"
import { StartWebsocketConection } from '/frontend/websocket/startConection.js'

export async function authController(e) {
    const id = e.target.closest('[id]').id

     if (id === 'registerButton') {
        const data = await registerCheck(e)
        if (data.status === 'success') setTimeout(() =>  1500)
    } else if (id === 'loginButton') {
        const data = await loginCheck(e)
        if (data.status === 'success') {
            
            setTimeout(async () => {
                const messagesSection = await setHomePage('all',data.userInfo)
                StartWebsocketConection(messagesSection)
            }, 1500)
        }
    } else if (id === 'logoutIcone') {
        const ok = logout()
        if (ok) LoginRegister()
    }
}