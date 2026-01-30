import { started, setLoginHtml, setRegister } from "../views/start.js";
import { registerCheck} from "../services/registerCheck.js"
import { loginCheck} from "../services/loginCheck.js"
function router() {
        started()
    document.addEventListener('click' , (e)=>{
        if (e.target.id === 'startedLoginButton'){
            setLoginHtml()
        } 
        if (e.target.id === 'startedRegisterButton'){
            setRegister()
        } 
        if (e.target.id === 'registerButton'){
            registerCheck(e)
        } 
        if (e.target.id === 'loginButton'){
            loginCheck(e)
        }
    })
}
router()
