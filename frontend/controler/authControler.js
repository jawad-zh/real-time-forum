import { registerCheck } from "/frontend/services/registerCheck.js"
import { loginCheck } from "/frontend/services/loginCheck.js"
import { logout } from "/frontend/services/logout.js"
import { started, setLoginHtml, setRegister } from "/frontend/views/start.js";
import { setHomePage } from "/frontend/views/home.js"
import { StartWebsocketConection } from '/frontend/websocket/startConection.js'

export async function authController(e) {
    const id = e.target.closest('[id]').id

    if (id === 'startedLoginButton') {
        setLoginHtml()
    } else if (id === 'startedRegisterButton') {
        setRegister()
    } else if (id === 'registerButton') {
        const data = await registerCheck(e)
        if (data.status === 'success') setTimeout(() => setLoginHtml(), 1500)
    } else if (id === 'loginButton') {
        const data = await loginCheck(e)
        if (data.status === 'success') {
            setTimeout(async () => {
                const messagesSection = await setHomePage('all')
                StartWebsocketConection(messagesSection)
            }, 1500)
        }
    } else if (id === 'logoutIcone') {
        const ok = logout()
        if (ok) started()
    }
}