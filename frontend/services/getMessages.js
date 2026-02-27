export let messagesoffset = 0
let lastUserID = null
export async function getMessages(reiverId,flag) {
    if(flag !== 'scroll'){messagesoffset=0}
    if (reiverId !== Number(lastUserID)) {        
        messagesoffset = 0
        lastUserID = reiverId
    }
    let res = await fetch(`/getMessages?receiverID=${reiverId}&offset=${messagesoffset}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
    var data = await res.json()
    if (data && data.length !== 0) {
        messagesoffset += data.length        
    }    
    return data
}
export function  addMessageOffset(){
    messagesoffset+=1
    
}