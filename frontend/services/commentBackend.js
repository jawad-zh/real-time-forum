export async function commentBackend(PostID){
     var post = document.querySelector(`.PostsCountainer[data--post-i-d="${PostID}"]`)
     var input = post.querySelector("input").value.trim()
     var commentInfo = {
        PostID : PostID,
        commentValue : input,
     }
    var res = await fetch("/creatComment",{
        method : "POST",
        headers : {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(commentInfo)
    })
}