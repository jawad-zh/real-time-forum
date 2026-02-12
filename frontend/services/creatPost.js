import {setHomePage} from "/frontend/views/home.js"

export async function creatPost(e){
    e.preventDefault()
    const title = document.getElementById('creatPostTitle').value.trim()
    const content = document.getElementById('creatPostContent').value.trim()
    var categories = []
   var categoriesChecked =document.querySelectorAll("#creatPostCategories input:checked")
   for (let i =0 ; i < categoriesChecked.length ; i++){
    categories.push(categoriesChecked[i].value)
   }
   var postInformation = {
    'Title':title,
    'Content':content,
    'Categories':categories
   }

   var data = await fetch("http://localhost:8080/creatPost",{
    method : "POST",
    headers:{
        "Content-Type":"application/json"
    },
    body: JSON.stringify(postInformation)
   })
   setHomePage()
   
}