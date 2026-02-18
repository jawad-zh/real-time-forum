export async function getAllUser(){
    var res = await fetch("/getAllUsers",{
        method : "GET",
        headers : {
            "Content-Type"  : "application/json"
        }
    })
    var data = await res.json()
    console.log('haaaaaaaaaaaaaaaaaaaaaaaaaaa',data);
    return data
    
}