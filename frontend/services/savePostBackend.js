export async function savePostsBackend(postID){
    var post = {
        "postID" : Number(postID)
    }
    var res = await fetch("/save",{
        method : "POST",
        headers:{
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(post)
    })
   var data = await res.json()
   console.log('data----------------------------',data);
   
    return data
}