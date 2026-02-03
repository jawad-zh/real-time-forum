export function sendRegisterData(user){
     
    console.log('send');
    
     fetch("http://localhost:8080/register",{
     method : "POST",
     headers:{
          "Content-Type": "application/json"
     },
     body : JSON.stringify(user)
    }).then(res => res.json()).then(data => console.log(data))
}