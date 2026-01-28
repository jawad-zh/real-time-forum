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
    const startedLoginButton = document.getElementById('startedLoginButton');
    const startedRegisterButton= document.getElementById('startedRegisterButton');
    const startCounainer = document.getElementById('startCountainer')
    startedLoginButton.style.display = 'none'
    startedRegisterButton.style.display = 'none'
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
    loginButton.classList.add('button')
    //need to append
    let registerQuestion = document.createElement('p')
    registerQuestion.innerHTML = "if you don't have account register to creat one"
    registerQuestion.classList.add('text')
    //need to append
    let registerButton = document.createElement('button')
    registerButton.classList.add('button')
    registerButton.setAttribute('id','register')
    registerButton.innerHTML='register'
    container.append(loginTitle,emailText,emailInput,passwordText,passwordInput,loginButton,registerQuestion,registerButton)
    document.body.append(container)
    requestAnimationFrame(()=>{
        container.style.opacity = '1'
        // startCounainer.style.backgroundColor = 'white'
    })
}