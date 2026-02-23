export async function updateMessageState(UserID){
    let userInfo = {
        UserID:Number(UserID)
    }
    console.log('from update message',userInfo);
    
    let res = await fetch("/UpdateMessageState",{
        method : "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body : JSON.stringify(userInfo)
    })
}