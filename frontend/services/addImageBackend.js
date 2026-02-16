export async  function addImageBackend(){
 
    var image = document.getElementById('fileInputProfileImage').files[0]
    if (!image){
        return
    }
    var formData = new FormData()
    formData.append('image',image)
    var res = await fetch('/editProfile',{
        method : "POST",
        body : formData
    })
    var data = await res.json()
    console.log('update data',data);
    
    return data
    
}