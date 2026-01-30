import { checkRegisterResponse } from "../views/checkFrontResponse.js"

export function registerCheck(e){
    e.preventDefault()
    const nickname = (document.getElementById('nicknameInput').value).trim()
    const ageInput = document.getElementById('ageInput').value.trim()
    const genderInput = document.getElementById('genderInput').value.trim()
    const firstNameInput = document.getElementById('firstNameInpu').value.trim()
    const lastNameInput = document.getElementById('lastNameInput').value.trim()
    const email = document.getElementById('emailInput').value.trim()
    const password = document.getElementById('passwordInput').value.trim()
    if (nickname === ''){
        checkRegisterResponse('nickname is required', 'red')
        
    }else if (ageInput === ''){
        checkRegisterResponse('Age is required', 'red')
    }else if (genderInput === ''){
        checkRegisterResponse('Gender is required', 'red')
    }else if (firstNameInput === ''){
        checkRegisterResponse('First Name is required', 'red')
    }else if (lastNameInput === ''){
        checkRegisterResponse('Last Name is required', 'red')
    }else if (email === ''){
        checkRegisterResponse('Email is required', 'red')
    }else if (password === ''){
        checkRegisterResponse('Password is required', 'red')
    }
}