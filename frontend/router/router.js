import { started, setLoginHtml, setRegister } from "/frontend/views/start.js";
import { registerCheck} from "/frontend/services/registerCheck.js"
import { loginCheck} from "/frontend/services/loginCheck.js"
import { setHomePage} from "/frontend/views/home.js"
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
