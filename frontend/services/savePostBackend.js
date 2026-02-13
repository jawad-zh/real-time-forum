export async function savePostsBackend(postID){
    console.log('save icone type',typeof(postID),'post id :',postID);
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
    return data
}