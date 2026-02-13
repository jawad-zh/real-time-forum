export async function LikeBackend(idString){   
    var id = Number(idString)
    console.log('type of id is ',typeof(id) ,'id:',id);
     
    var postID = {
        'PostID' :id
    }    
    var res = await fetch("http://localhost:8080/like",{
        method : "POST",
        headers :{
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(postID)
    })
    var data = await res.json()
    return data
}