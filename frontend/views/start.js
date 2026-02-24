export function started() {
    var childrens = document.body.children
    for (let i = childrens.length ; i >=0 ; i--){
        if (childrens[i]){

            childrens[i].remove()
        }
    }

    let startCounainer = document.createElement('div')
    startCounainer.setAttribute('id', 'startCountainer')
    let startImage = document.createElement('img')
    startImage.src = '/frontend/state/images/2.gif'
    startImage.setAttribute('id', 'startedImage')
    let loginButton = document.createElement('button')
    loginButton.innerHTML = 'you have account'
    loginButton.setAttribute('id', 'startedLoginButton')
    loginButton.classList.add('startbutton')
    let registerButton = document.createElement('button')
    registerButton.setAttribute('id', 'startedRegisterButton')
    registerButton.classList.add('startbutton')
    registerButton.innerHTML = 'creat account'
    startCounainer.append(startImage, loginButton, registerButton)
    document.body.append(startCounainer)
}

export function setLoginHtml() {
    const bodyChildren = document.body.children
    if (bodyChildren) {        
        for (let i = bodyChildren.length-1; i >= 0; i--) {
            
            bodyChildren[i].remove()
        }
    }
    // const startCounainer = document.getElementById('startCountainer');
    // need to append
    let loginPageCountainer = document.createElement('form')
    loginPageCountainer.setAttribute('id', 'loginPageCountainer')
    let imagePart = document.createElement('div')
    imagePart.setAttribute('id', 'imagePart')
    let image = document.createElement('img')
    image.src = '/frontend/state/images/4.gif'
    // append image in it's countainer
    imagePart.append(image)
    let loginPart = document.createElement('div')
    loginPart.setAttribute('id', 'loginPart')
    let alert = document.createElement('div')
    alert.classList.add('alert')
    alert.setAttribute('id', 'loginResponse')
    loginPart.append(alert)
    //append loginCoutainer in loginPart
    let loginCountainer = document.createElement('div')
    loginCountainer.setAttribute('id', 'loginCountainer')
    let welcomMessage = document.createElement('p')
    welcomMessage.innerHTML = 'welcom back !'
    welcomMessage.setAttribute('id', 'welcomMessage')
    let emailInput = document.createElement('input')
    emailInput.setAttribute('id', 'loginEmailInput')
    emailInput.type = 'email'
    emailInput.placeholder = 'enter your email'
    emailInput.classList.add('loginInput')
    let passwordInput = document.createElement('input')
    passwordInput.setAttribute('id', 'passwordInput')
    passwordInput.type = 'password'
    passwordInput.placeholder = 'enter your password'
    passwordInput.classList.add('loginInput')
    let loginButton = document.createElement('button')
    loginButton.setAttribute('id', 'loginButton')
    loginButton.innerHTML = 'login'
    let registerLink = document.createElement('a')
    // registerLink.href = `https://youtub.com`
    let register = document.createElement('p')
    register.innerHTML = 'register'
    registerLink.append(register)
    let registerQuetion = document.createElement('p')
    registerQuetion.innerHTML = `you don't have account? click ${registerLink} to creat one`
    loginCountainer.append(welcomMessage, emailInput, passwordInput, loginButton, registerQuetion)
    loginPart.append(loginCountainer)
    loginPageCountainer.append(imagePart, loginPart)
    document.body.append(loginPageCountainer)
    requestAnimationFrame(() => {
        loginPageCountainer.style.opacity = '1'
    })
    // document.body.style.backgroundColor = 'white'
}
export function setRegister() {
    const bodyChildren = document.body.children
    if (bodyChildren) {
        for (let i = bodyChildren.length-1; i >= 0; i--) {
            bodyChildren[i].remove()
        }
    }
    let registerPart = document.createElement('form')
    registerPart.setAttribute('id', 'registerPart')
    const registerTitle = document.createElement('p')
    registerTitle.innerHTML = 'register'
    registerTitle.setAttribute('id', 'registerTitle')
    let nicknameInput = document.createElement('input')
    nicknameInput.setAttribute('id', 'nicknameInput')
    nicknameInput.classList.add('registerInput')
    nicknameInput.placeholder = 'Nickname'
    let ageInput = document.createElement('input')
    ageInput.setAttribute('id', 'ageInput')
    ageInput.classList.add('registerInput')
    ageInput.placeholder = 'Age'
    let genderInput = document.createElement('select')
    genderInput.setAttribute('id', 'genderInput')
    genderInput.classList.add('registerInput')
    genderInput.placeholder = 'Gender'
    let male = document.createElement('option')
    male.innerHTML = 'male'
    let female = document.createElement('option')
    female.innerHTML = 'female'
    genderInput.append(male, female)
    let firstNameInput = document.createElement('input')
    firstNameInput.setAttribute('id', 'firstNameInpu')
    firstNameInput.classList.add('registerInput')
    firstNameInput.placeholder = 'first Name'
    let lastNameInput = document.createElement('input')
    lastNameInput.setAttribute('id', 'lastNameInput')
    lastNameInput.classList.add('registerInput')
    lastNameInput.placeholder = 'last Name'
    let emailInput = document.createElement('input')
    emailInput.setAttribute('id', 'emailInput')
    emailInput.classList.add('registerInput')
    emailInput.type = 'email'
    emailInput.placeholder = 'Email'
    let passwordInput = document.createElement('input')
    passwordInput.setAttribute('id', 'passwordInput')
    passwordInput.classList.add('registerInput')
    passwordInput.type = 'password'
    passwordInput.placeholder = 'Password'
    let registerButton = document.createElement('button')
    registerButton.setAttribute('id', 'registerButton')
    registerButton.innerHTML = 'register'
    let registerQuetion = document.createElement('p')
    let link = document.createElement('a')
    registerQuetion.innerHTML = `you already have accout ? click ${link} to log in  `
    registerPart.append(registerTitle, nicknameInput, ageInput, genderInput, firstNameInput, lastNameInput, emailInput, passwordInput, registerButton, registerQuetion)
    let registerBlue = document.createElement('div')
    registerBlue.setAttribute('id', 'registerBlue')
    let registerResponse = document.createElement('div')
    registerResponse.setAttribute('id', 'registerResponse')
    registerResponse.classList.add('alert')
    registerBlue.append(registerResponse)
    registerBlue.append(registerPart)
    let imagePart = document.createElement('div')
    imagePart.setAttribute('id', 'imagePart')
    let image = document.createElement('img')
    image.src = '/frontend/state/images/8.gif'
    imagePart.append(image)
    let registerPageCountainer = document.createElement('div')
    registerPageCountainer.setAttribute('id', 'registerPageCountainer')
    registerPageCountainer.append(imagePart, registerBlue)
    document.body.append(registerPageCountainer)
    requestAnimationFrame(() => {
        registerPageCountainer.style.opacity = '1'
    })
    document.body.style.backgroundColor = 'white'
}