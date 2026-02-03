import { checkRegisterResponse } from "../views/checkFrontResponse.js"
import {sendRegisterData} from "../websocket/sendRegisterData.js"

export  function registerCheck(e) {
    e.preventDefault()    
    const nickname = (document.getElementById('nicknameInput').value).trim()
    const ageInput = document.getElementById('ageInput').value.trim()
    const genderInput = document.getElementById('genderInput').value.trim()
    const firstNameInput = document.getElementById('firstNameInpu').value.trim()
    const lastNameInput = document.getElementById('lastNameInput').value.trim()
    const email = document.getElementById('emailInput').value.trim()
    const password = document.getElementById('passwordInput').value.trim()

    const nicknameSpeacialCharacterRegex = /[!|@#$%^&*()+\\?>\[ \]<',="/;:{}]/
    const SpeacialCharacterRegex = 
    const emailRegex = /.+@[a-zA-z]+\.[a-zA-Z]+/
    if (nickname.length <= 2) {
         checkRegisterResponse('nickname need to be more than two character', 'red')
         return false
    } else if (nickname.match(nicknameSpeacialCharacterRegex)) {
        checkRegisterResponse('nickname speacial character allowed is - _ and .', 'red')
        return false
    }
    if (ageInput.match(/\D/)) {
         checkRegisterResponse('the age accept only numbers', 'red')
         return false
    }
    if (genderInput !== 'male' && genderInput !== 'female') {
         checkRegisterResponse('invalid Gender', 'red')
         return false
    }
    if (firstNameInput.length <= 2) {
        checkRegisterResponse('first Name need to be more than two character', 'red')
        return false

    } else if (firstNameInput.match(speacialCharacterRegex) || firstNameInput.match(/\d/)) {
        // need to modfy regex
         checkRegisterResponse('speacial character or numbers in first Name not allowed','red')
         return false
    }
    if (lastNameInput.length <= 2) {
         checkRegisterResponse('last Name need to be more than two character', 'red')
         return false

    } else if (lastNameInput.match(speacialCharacterRegex) || lastNameInput.match(/\d/)) {
        // need to modfy regex
        checkRegisterResponse('speacial character or numbers in first Name not allowed','red')
        return false
    }
    if (password.length <= 7){
         checkRegisterResponse('password need to be 8 character as minimum','red')
         return false
    }else if(!password.match(/[a-z]/)){
         checkRegisterResponse('should be one lowerCase character in password','red')
         return false
    }else if (!password.match(/[A-Z]/)){
         checkRegisterResponse('should be one UpperCase character in password','red')
         return false

    }else if(!password.match(/\d/)){
         checkRegisterResponse('should be one digit character in password','red')
         return false
        
    }else if (!password.match(speacialCharacterRegex)){
         checkRegisterResponse('should be one special character in password','red')
         return false

    }
    if (!email.match(emailRegex)){
         checkRegisterResponse('incorrect email format','red')
         return false
    }

    //check empty
    if (nickname === '') {
        checkRegisterResponse('nickname is required', 'red')

    } else if (ageInput === '') {
         checkRegisterResponse('Age is required', 'red')
         return false
    } else if (genderInput === '') {
        checkRegisterResponse('Gender is required', 'red')
        return false
    } else if (firstNameInput === '') {
         checkRegisterResponse('First Name is required', 'red')
         return false
    } else if (lastNameInput === '') {
         checkRegisterResponse('Last Name is required', 'red')
         return false
    } else if (email === '') {
       return  checkRegisterResponse('Email is required', 'red')
    } else if (password === '') {
        checkRegisterResponse('Password is required', 'red')
        return false
    }
    //backend
    const Users = {
     Nickname : nickname,
     Age : Number(ageInput),
     Gender: genderInput,
     FirstName : firstNameInput,
     LastName : lastNameInput,
     Email : email,
     Password : password
    }

    sendRegisterData(Users)




     // checkRegisterResponse('register success','green')
     // return true
}