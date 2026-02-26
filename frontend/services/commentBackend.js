export async function commentBackend(PostID) {
    var post = document.querySelector(`.PostsCountainer[data--post-i-d="${PostID}"]`)
    var input = post.querySelector("input").value.trim()
    var commentInfo = {
        PostID: Number(PostID),
        commentValue: input,
    }
    var res = await fetch("/creatComment", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(commentInfo)
    })
    var data = await res.json()

    return data
}