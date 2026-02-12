export async function getPost(){
    var res = await fetch("http://localhost:8080/getPosts",{
        method : "GET",
        headers:{
            "Content-Type" : "application/json"
        }
    })
    var data = await res.json()    
    console.log('from getPosts',data);
    
    if (data){
        return data.reverse()
    }
    return data
    
}