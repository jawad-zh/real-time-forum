export function started(){
    let startCounainer = document.createElement('div')
    startCounainer.setAttribute('id','startCountainer')
    let startImage = document.createElement('img')
    startImage.src='./state/images/persone.png'
    startImage.setAttribute('id','startedImage')
    let loginButton = document.createElement('button')
    loginButton.innerHTML = 'you have account'
    loginButton.setAttribute('id','startedLoginButton')
    loginButton.classList.add('button')
    let registerButton = document.createElement('button')
    registerButton.setAttribute('id','startedRegisterButton')
    registerButton.classList.add('button')
    registerButton.innerHTML = 'creat account'
    startCounainer.append(startImage,loginButton,registerButton)
    document.body.append(startCounainer)
}

export function setLoginHtml(){
     const bodyChildren = document.body.children
    if (bodyChildren){
        for (let i =0 ; i < bodyChildren.length ; i++){
            bodyChildren[i].remove()
        }
    }
    // const startCounainer = document.getElementById('startCountainer');
    // need to append
    let loginTitle = document.createElement('p')
    loginTitle.setAttribute('id','loginTitle')
    loginTitle.innerHTML = 'login'
    // to body
    let container = document.createElement('form')
    container.setAttribute('id','logContainer')
    //need to append
    let emailText = document.createElement('p')
    emailText.innerHTML = 'email'
    emailText.classList.add('text')
    // neet to append
    let emailInput = document.createElement('input')
    emailInput.classList.add('input')
    emailInput.setAttribute('id','emailInput')
    emailInput.placeholder = 'enter your email'
    emailInput.type='email'
    //need to append
    let passwordText = document.createElement('p')
    passwordText.innerHTML = 'password'
    passwordText.classList.add('text')
    //need to append
    let passwordInput = document.createElement('input')
    passwordInput.classList.add('input')
    passwordInput.setAttribute('id','passwordInput')
    passwordInput.placeholder = 'enter your password'
    passwordInput.type='password'
    //need to append
    let loginButton = document.createElement('button')
    loginButton.innerHTML = 'log in'
    loginButton.setAttribute('id','loginButton')
    loginButton.classList.add('logRegButton')
    //need to append
    let registerQuestion = document.createElement('p')
    registerQuestion.innerHTML = "if you don't have account register to creat one"
    registerQuestion.classList.add('text')
    //need to append
    let registerButton = document.createElement('button')
    registerButton.classList.add('logRegButton')
    registerButton.setAttribute('id','register')
    registerButton.innerHTML='register'
    container.append(loginTitle,emailText,emailInput,passwordText,passwordInput,loginButton,registerQuestion,registerButton)
    document.body.append(container)
    requestAnimationFrame(()=>{
        container.style.opacity = '1'
        // startCounainer.style.backgroundColor = 'white'
    })
}
export function setRegister(){
    const bodyChildren = document.body.children
    if (bodyChildren){
        for (let i =0 ; i < bodyChildren.length ; i++){
            bodyChildren[i].remove()
        }
    }
    const registerCountainer = document.createElement('form')
    registerCountainer.setAttribute('id','registerCountainer')
    //app
    const registerTitle = document.createElement('p')
    registerTitle.innerHTML = 'register'
    registerTitle.setAttribute('id','registerTitle')
    let nicknameText = document.createElement('p')
    nicknameText.innerHTML='nickname'
    nicknameText.classList.add('text')
    let nicknameInput = document.createElement('input')
    nicknameInput.setAttribute('id','nicknameInput')
    nicknameInput.classList.add('input')
    let ageText = document.createElement('p')
    ageText.innerHTML= 'age'
    ageText.classList.add('text')
    let ageInput = document.createElement('input')
    ageInput.setAttribute('id','ageInput')
    ageInput.classList.add('input')
    let genderText = document.createElement('p')
    genderText.innerHTML = 'Gender'
    genderText.classList.add('text')
    let genderInput = document.createElement('select')
    genderInput.setAttribute('id','genderInput')
    genderInput.classList.add('input')
    let male = document.createElement('option')
    male.innerHTML = 'male'
    let female = document.createElement('option')
    female.innerHTML = 'female'
    genderInput.append(male,female)
    let firstNameText = document.createElement('p')
    firstNameText.innerHTML = 'First Name'
    firstNameText.classList.add('text')
    let firstNameInput = document.createElement('input')
    firstNameInput.setAttribute('id','firstNameInpu')
    firstNameInput.classList.add('input')
    let lastNameText = document.createElement('p')
    lastNameText.innerHTML = 'Last Name'
    lastNameText.classList.add('text')
    let lastNameInput = document.createElement('input')
    lastNameInput.setAttribute('id','lastNameInput')
    lastNameInput.classList.add('input')
    let emailText = document.createElement('p')
    emailText.innerHTML = 'email'
    emailText.classList.add('text')
    let emailInput = document.createElement('input')
    emailInput.setAttribute('id','emailInput')
    emailInput.classList.add('input')
    emailInput.type = 'email'
    let passwordText = document.createElement('p')
    passwordText.innerHTML = 'password'
    passwordText.classList.add('text')
    let passwordInput = document.createElement('input')
    passwordInput.setAttribute('id','passwordInput')
    passwordInput.classList.add('input')
    passwordInput.type = 'password'
    registerCountainer.append(registerTitle,nicknameText,nicknameInput,ageText,ageInput,genderText,genderInput,firstNameText,firstNameInput,lastNameText,lastNameInput,emailText,emailInput,passwordText,passwordInput)
    document.body.append(registerCountainer)
}