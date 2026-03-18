import {setAlert} from "/frontend/components/alert.js"
export async function registerCheck(e) {
     e.preventDefault()
     const nickname = (document.getElementById('nicknameInput').value).trim()
     const ageInput = document.getElementById('ageInput').value.trim()
     const genderInput = document.getElementById('genderInput').value.trim()
     const firstNameInput = document.getElementById('firstNameInpu').value.trim()
     const lastNameInput = document.getElementById('lastNameInput').value.trim()
     const email = document.getElementById('emailInput').value.trim()
     const password = document.getElementById('RegisterpasswordInput').value.trim()
     console.log('heere is the password from registercheck',password);
     
     const nicknameSpeacialCharacterRegex = /[!|@#$%^&*()+\\?>\[ \]<',="/;:{}]/
     const speacialCharacterRegex = /[!|@#$%^&*()+\\?>\[ \]<',=";:{}.\/\-_]/
     const emailRegex = /.+@[a-zA-z]+\.[a-zA-Z]+/
     if(firstNameInput.match(speacialCharacterRegex)){
          console.log('wttff',firstNameInput);
          
     }
     if (nickname.length <= 2) {
          setAlert('error', '✖', 'nickname need to be more than two character');
          return false
     } else if (nickname.match(nicknameSpeacialCharacterRegex)) {
          setAlert('error', '✖', 'nickname speacial character allowed is - _ and .', 'red');
          return false
     }
     if (ageInput.match(/\D/)) {
          setAlert('error', '✖', 'the age accept only numbers');
          return false
     }
     if (genderInput !== 'male' && genderInput !== 'female') {
          setAlert('error', '✖', 'invalid Gender');
          return false
     }
     if (firstNameInput.length <= 2) {
          setAlert('error', '✖', 'first Name need to be more than two character');
          return false

     } else if (firstNameInput.match(speacialCharacterRegex) ) {
          // need to modfy regex
          setAlert('error', '✖', 'speacial character or numbers in first Name not allowed heerrree---------');
          return false
     }
     if (lastNameInput.length <= 2) {
          setAlert('error', '✖', 'last Name need to be more than two character');
          return false

     } else if (lastNameInput.match(speacialCharacterRegex) || lastNameInput.match(/\d/)) {
          // need to modfy regex
          setAlert('error', '✖', 'speacial character or numbers in first Name not allowed');
          return false
     }
     if (password.length <= 7) {
          setAlert('error', '✖', 'password need to be 8 character as minimum');
          return false
     } else if (!password.match(/[a-z]/)) {
          setAlert('error', '✖', 'should be one lowerCase character in password');
          return false
     } else if (!password.match(/[A-Z]/)) {
          setAlert('error', '✖', 'should be one UpperCase character in password');
          return false

     } else if (!password.match(/\d/)) {
          setAlert('error', '✖', 'should be one digit in password');
          return false

     } else if (!password.match(speacialCharacterRegex)) {
          setAlert('error', '✖', 'should be one special character in password');
          return false

     }
         if (!email.match(emailRegex)){
              setAlert('error', '✖', 'incorrect email format')
              return false
         }

     //check empty
     if (nickname === '') {
          setAlert('error', '✖', 'nickname is required');

     } else if (ageInput === '') {
          setAlert('error', '✖', 'Age is required');
          return false
     } else if (genderInput === '') {
          setAlert('error', '✖', 'Gender is required');
          return false
     } else if (firstNameInput === '') {
          setAlert('error', '✖', 'First Name is required');
          return false
     } else if (lastNameInput === '') {
          setAlert('error', '✖', 'Last Name is required');
          return false
     } else if (email === '') {
          setAlert('error', '✖', 'Email is required');
          return 
     }  else if (password === '') {
          setAlert('error', '✖', 'Password is required');
          return false
     }
     //backend
     const Users = {
          Nickname: nickname,
          Age: Number(ageInput),
          Gender: genderInput,
          FirstName: firstNameInput,
          LastName: lastNameInput,
          Email: email,
          Password: password
     }


     var res = await fetch("http://localhost:8080/register", {
          method: "POST",
          headers: {
               "Content-Type": "application/json"
          },
          body: JSON.stringify(Users)
     })
     var data = await res.json()
     if (data.status === 'success') {
          setAlert('success', '✔', 'Register Successful');
     } else {
           setAlert('error', '✖', data.message);
     }
     return data
}