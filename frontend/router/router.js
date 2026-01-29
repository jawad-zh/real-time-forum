import { started,setLoginHtml,setRegister } from "../services/start.js";

function router(){
    // setLoginHtml()
    started()
}
router()
const startedLoginButton = document.getElementById('startedLoginButton')
const startedRegisterButton = document.getElementById('startedRegisterButton')
startedLoginButton.addEventListener('click',setLoginHtml)
startedRegisterButton.addEventListener('click',setRegister)