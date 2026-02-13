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

   var res = await fetch("http://localhost:8080/creatPost",{
    method : "POST",
    headers:{
        "Content-Type":"application/json"
    },
    body: JSON.stringify(postInformation)
   })
   var data = await res.json()
   console.log(data);
   
   if (data.status  === 'success'){
    var middle = document.getElementById('middle')    
    var post = document.createElement('div')
        post.classList.add('PostsCountainer')
        post.dataset.PostID = data.PostID
        post.innerHTML = `
    <div id="profilePost">
                        <div id="profileImage">
                            <img src="frontend/state/images/icones/profile.jpeg" alt="">
                        </div>
                        <div id="NameTitlePost">
                            <p id="name">teeeeeest</p>
                            <div id="titleTime">
                                <p id="PostTitle">${title}</p>
                                <p id="time">1h</p>
                            </div>

                        </div>

                    </div>
                    <div id="contentPost">${content}</div>
                        <div id="postImageCountainer" >
                            <div id="postImage">
                        <img src="frontend/state/images/icones/istockphoto-814423752-612x612.jpg" alt="">
                    </div>
                        </div>
                    
                    <div id="iconesAndCategories">
                        <div id="postIncones">
                            <i id="likeIcone" class="fa-regular fa-heart"></i>
                            <i  id="commentIcone" class="fa-regular fa-comment-dots"></i>
                            <i  id= "saveIcone" class="fa-regular fa-bookmark"></i>
                        </div>
                        <div class="Postcategories">
                        </div>
                    </div>
    `
        middle.prepend(post)
        document.getElementById("creatPostCountainer").classList.remove("active")
        
   }
   
}