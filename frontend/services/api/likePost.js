export async function LikeBackend(idString) {
    var id = Number(idString)
    console.log('id from likeBackend',id);
    
    var postID = {
        'PostID': id
    }
    var res = await fetch("/like", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(postID)
    })
    if(res){
        var data = await res.json()
        console.log('sii',data);
        
    }
    return data
}