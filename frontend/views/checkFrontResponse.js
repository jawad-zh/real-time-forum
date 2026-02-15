export function checkRegisterResponse(message, color) {
  const alert = document.getElementById('registerResponse')
  alert.innerHTML = `${message}`
  alert.style.backgroundColor = `${color}`
  alert.style.display = "flex";

  requestAnimationFrame(() => {
    alert.classList.add("show");
  });

  setTimeout(() => {
    alert.style.display = "none";
    alert.classList.remove("show");
  }, 3000);
}
export function checkLoginResponse(message, color) {
  const alert = document.getElementById('loginResponse')
  alert.innerHTML = `${message}`
  alert.style.backgroundColor = `${color}`
  alert.style.display = "flex";

  requestAnimationFrame(() => {
    alert.classList.add("show");
  });

  setTimeout(() => {
    alert.style.display = "none";
    alert.classList.remove("show");
  }, 3000);
}
export function checkCreatPostRespons(message){
  const alert = document.getElementById('creatPostAlert')
  alert.innerHTML = message
  // neet to add animation
  requestAnimationFrame(()=>{
    alert.style.opacity= '1'
  })
  setTimeout(()=>{
    alert.style.opacity = '0'
  },3000)
}