export async function updateMessageState(UserID){   
     
    let userInfo = {
        UserID:Number(UserID)
    }    
    let res = await fetch("/UpdateMessageState",{
        method : "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body : JSON.stringify(userInfo)
    })
}