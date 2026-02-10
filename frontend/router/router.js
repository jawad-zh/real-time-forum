import { started, setLoginHtml, setRegister } from "/frontend/views/start.js";
import { registerCheck } from "/frontend/services/registerCheck.js"
import { loginCheck } from "/frontend/services/loginCheck.js"
import { setHomePage } from "/frontend/views/home.js"
import { setCreatPost } from "/frontend/views/creatPost.js"
import { logout } from "/frontend/services/logout.js"
async function router() {    
    var res = await fetch("http://localhost:8080/sessionCheck", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
    })
    var data = await res.json()
    if (data.status === 'success') {
        setHomePage()
    } else {
        started()
    }
    document.addEventListener('click', async (e) => {
        if (e.target.id === 'startedLoginButton') {
            setLoginHtml()
        } else if (e.target.id === 'startedRegisterButton') {
            setRegister()
        } else if (e.target.id === 'registerButton') {
            let data = await registerCheck(e)
            if (data.status === 'success') {
                setTimeout(() => {
                    setLoginHtml()
                }, 1500)
            }
        } else if (e.target.id === 'loginButton') {
            let data = await loginCheck(e)
            if (data.status === 'success') {
                setTimeout(() => {
                    setHomePage()
                }, 1500)
            }
        } else if (e.target.id === 'creatPostIcone') {
            setCreatPost()
        } else if (e.target.id === 'cancelCreatPost') {
            setHomePage()
        } else if (e.target.id === 'logoutIcone') {
            var ok = logout()
            if (ok) {
                started()
            }
        }else if (e.target.id === 'creatPostButton'){
            
        }


    })
}
router()
