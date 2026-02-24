
export async function getMessages(reiverId) {
    let receiverID = reiverId 
    let res = await fetch(`/getMessages?receiverID=${receiverID}`,{
        method : "GET",
        headers : {
            "Content-Type": "application/json"
        }
    })
    var data = await res.json()
    return data
    
}