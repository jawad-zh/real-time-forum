import { checkLoginResponse } from "../views/checkFrontResponse.js"
import { StartWebsocketConection } from "/frontend/websocket/startConection.js"
export async function loginCheck(e) {
    e.preventDefault()
    const emailOrNicknameInput = (document.getElementById('loginEmailInput').value).trim()
    const password = (document.getElementById('passwordInput').value).trim()
    let emailOrNickname = emailOrNicknameInput.match(/@/) ? 'email' : 'nickname'
    const nicknameSpeacialCharacterRegex = /[!|@#$%^&*()+\\?>\[ \]<',="/;:{}]/
    // const emailRegex = /.+@[a-zA-z]+\.[a-zA-Z]+/
    const speacialCharacterRegex = /[!|@#$%^&*()+\\?>\[ \]<',="/;:{}.-_]/
    if (emailOrNickname === '') {
        checkLoginResponse('email or nickname is required', 'red')
        return
    } else if (password === '') {
        checkLoginResponse('password is required', 'red')
        return
    }
    if (emailOrNicknameInput.match(/@/)) {
        // need to handl
        // if (!emailOrNickname.match(emailRegex)){
        //     checkLoginResponse('invalid email format !')
        //     return
        // }
    } else {
        if (emailOrNicknameInput.length <= 2) {
            checkLoginResponse('nickname should be more than two charachter')
            return
        } else if (emailOrNicknameInput.match(nicknameSpeacialCharacterRegex)) {
            checkLoginResponse('the only speacial character allowe in nickname are - _ and .')
            return
        }
    }
    if (password.length <= 7) {
        checkLoginResponse('invalid email or password', 'red')
        return
    } else if (!password.match(/[a-z]/)) {
        checkLoginResponse('invalid email or password', 'red')
        return
    } else if (!password.match(/[A-Z]/)) {
        checkLoginResponse('invalid email or password', 'red')
        return

    } else if (!password.match(/\d/)) {
        checkLoginResponse('invalid email or password', 'red')
        return

    } else if (!password.match(speacialCharacterRegex)) {
        //need to handl
        checkLoginResponse('invalid email or password', 'red')
        return

    }
    const Users = {
        NicknameOrEmailInput: emailOrNicknameInput,
        EmailOrNickname: emailOrNickname,
        Password: password
    }
    var res = await fetch("http://localhost:8080/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(Users)
    })
    var data = await res.json()
    if (data.status === 'success') {
        checkLoginResponse(data.message, 'green')
    } else {
        checkLoginResponse(data.message, 'red')
    }
    console.log(data);


    return data


}