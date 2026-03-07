export function LoginRegister() {
    document.body.innerHTML = ''
    let container = document.createElement('div')
    container.classList.add('container')
    container.setAttribute('id', 'container')
    let loginRegister = `
<div class="form-container login-container">
<form>
<h2>Login</h2>
<input type="email" placeholder="Email or nickname" id="loginEmailInput">
<input type="password" placeholder="Password" id="passwordInput">
<button type="submit" id="loginButton">Login</button>
</form>
</div>
<div class="form-container register-container">
<form>
<h2>Register</h2>

<input type="text" placeholder="Nickname" id="nicknameInput">

<div class="row">
<input type="number" placeholder="Age" id="ageInput">

<select id="genderInput">
<option value="male">Male</option>
<option value="female">Female</option>
</select>
</div>

<input type="text" placeholder="First Name" id="firstNameInpu">
<input type="text" placeholder="Last Name" id="lastNameInput">

<input type="email" placeholder="E-mail" id="emailInput">

<input type="password" placeholder="Password" id=""passwordInput>

<button type="submit" id="registerButton">Register</button>

</form>
</div>

<div class="overlay-container">

<div class="overlay">

<div class="overlay-panel">

<h2>Welcome Back </h2>
<p>Already have an account? Login here</p>
<button id="login">Login</button>

</div>

<div class="overlay-panel">

<h2>Hello Friend </h2>
<p>Create an account to start</p>
<button id="register">Register</button>
</div>
</div>
</div>
    `
    container.innerHTML = loginRegister
    document.body.append(container)
    // const container = document.getElementById("container")
    const registerBtn = document.getElementById("register")
    const loginBtn = document.getElementById("login")

    registerBtn.addEventListener("click", () => {
        container.classList.add("right-panel-active")
    })

    loginBtn.addEventListener("click", () => {
        container.classList.remove("right-panel-active")
    })
}