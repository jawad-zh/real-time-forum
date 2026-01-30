import { checkLoginResponse } from "../views/checkFrontResponse.js"

export function loginCheck(e) {
    e.preventDefault()
    const email = (document.getElementById('loginEmailInput').value).trim()
    const password = (document.getElementById('passwordInput').value).trim()
    if (email === '') {
        checkLoginResponse('email is required', 'red')
    } else if (password === '') {
        checkLoginResponse('password is required', 'red')
    }

}