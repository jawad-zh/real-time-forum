import { started, setLoginHtml, setRegister } from "../views/start.js";
import { registerCheck} from "../services/registerCheck.js"
import { loginCheck} from "../services/loginCheck.js"
import { setHomePage} from "../views/home.js"
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
          let register = registerCheck(e)
          if (register){
            setHomePage()
          }
        } 
        if (e.target.id === 'loginButton'){
           let login = loginCheck(e)
           if(login){

           }
        }
    })
}
router()
