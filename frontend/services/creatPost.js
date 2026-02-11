import {setHomePage} from "/frontend/views/home.js"

export async function creatPost(e){
    e.preventDefault()
    const title = document.getElementById('creatPostTitle').value.trim()
    const content = document.getElementById('creatPostContent').value.trim()
    var categories = []
   var categoriesChecked =document.querySelectorAll("#creatPostCategories input:checked")
   console.log('title',title);
   console.log('content',content);
   
   for (let i =0 ; i < categoriesChecked.length ; i++){
    console.log(categoriesChecked[i].value);
    
    categories.push(categoriesChecked[i].value)
   }
   console.log('categoooooooooories',categories);
   
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