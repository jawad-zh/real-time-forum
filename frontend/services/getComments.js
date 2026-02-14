export  async function getComments(PostId){
    
    var res = await fetch(`/getComment?PostID=${PostId}`,{
        method : "GET",
        headers :{
            "Content-Type" : "application/json"
        }
    })
    var data = await res.json()
    return data

}