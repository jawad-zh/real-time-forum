import {setAlert} from "/frontend/components/alert.js"

export async function loginCheck(e) {
    e.preventDefault()
    const emailOrNicknameInput = (document.getElementById('loginEmailInput').value).trim()
    const password = (document.getElementById('passwordInput').value).trim()
    let emailOrNickname = emailOrNicknameInput.match(/@/) ? 'email' : 'nickname'
    const nicknameSpeacialCharacterRegex = /[!|@#$%^&*()+\\?>\[ \]<',="/;:{}]/
    // const emailRegex = /^[^\s@]+@[A-Za-z]+\.[A-Za-z]+$/
    const speacialCharacterRegex = /[!|@#$%^&*()+\\?>\[ \]<',="/;:{}.-_]/
    if (emailOrNickname === '') {
        setAlert('error', '✖', 'email or nickname is required');
        
        return
    } else if (password === '') {
        setAlert('error', '✖', 'password is required');
        return
    }
    if (emailOrNicknameInput.match(/@/)) {
        // need to handl
        // if (!emailOrNickname.match(emailRegex)){
        //     console.log('this',!emailOrNickname.match(emailRegex));
            
        //     setAlert('error', '✖','invalid email format !')
        //     return
        // }
    } else {
        if (emailOrNicknameInput.length <= 2) {
        setAlert('error', '✖', 'nickname should be more than two charachter');
            return
        } else if (emailOrNicknameInput.match(nicknameSpeacialCharacterRegex)) {
        setAlert('error', '✖', 'the only speacial character allowe in nickname are - _ and .');
            return
        }
    }
    if (password.length <= 7) {
        setAlert('error', '✖', 'invalid email or password 1');
        return
    } else if (!password.match(/[a-z]/)) {
        setAlert('error', '✖', 'invalid email or password 2');
        return
    } else if (!password.match(/[A-Z]/)) {
        setAlert('error', '✖', 'invalid email or password 3');
        return

    } else if (!password.match(/\d/)) {
        setAlert('error', '✖', 'invalid email or password 4');
        return

    } else if (!password.match(speacialCharacterRegex)) {
        //need to handl
        setAlert('error', '✖', 'invalid email or password 5');
        return

    }
    const Users = {
        NicknameOrEmailInput: emailOrNicknameInput,
        EmailOrNickname: emailOrNickname,
        Password: password
    }    
    var res = await fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(Users)
    })
    var data = await res.json()
    if (data.status === 'success') {
         setAlert('success', '✔', 'Login successfully!');
         console.log('datauser',data);
         
    } else {
        setAlert('error', '✖', data.message);
    }


    return data


}