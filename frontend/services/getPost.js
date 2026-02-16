export async function getPost(Category){
    var res = await fetch(`http://localhost:8080/getPosts?category=${Category}`,{
        method : "GET",
        headers:{
            "Content-Type" : "application/json"
        },
    })
    var data = await res.json()     
    console.log('------------------',data[0].CreatedAt);
    
    return data
    
}