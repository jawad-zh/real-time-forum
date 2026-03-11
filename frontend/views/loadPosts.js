import {getPost} from "/frontend/services/getPost.js"
import {TimeAgo} from "/frontend/services/timeAgo.js"
import {LoginRegister} from '/frontend/views/start.js';

export async function loadPosts(Category,flag){
    let middle = document.getElementById('middle')
     if (flag === 'home'){
    let  oldPosts = middle.children
    if (oldPosts){
      middle.innerHTML = ""
       }
    }
     let data = await getPost(Category,flag)
    
    if (data){
         if (data.statue === 'Unauthorized'){
                    LoginRegister()
                    return
                }
    for (let i = 0; i < data.length; i++) {
        let liked = ''
        let saved = ''
        let imageDisplay = data[i].ImageURL && data[i].ImageURL.trim() !== '' ? '' : 'hide'
        if (data[i].Isliked === 1) {
            liked = 'liked'
        }

        if (data[i].IsSaved === 1) {
            saved = 'saved'
        }
        let createdAt = TimeAgo(data[i].CreatedAt)
        let Profile = data[i].ProfileURL.String ? data[i].ProfileURL.String : '' 
        let post = document.createElement('div')
        post.classList.add('PostsCountainer')
        post.dataset.PostID = data[i].PostID
        post.innerHTML = `
    <div id="profilePost">
                        <div id="profileImage">
                            <img src="${Profile}" alt="">
                        </div>
                        <div id="NameTitlePost">
                        <div id="titleTime">
                            <p id="name">${data[i].Nickname}</p>
                            <p id="time">${createdAt}</p>
                            </div>
                                <p id="PostTitle">${data[i].Title}</p>
                        </div>

                    </div>
                    <div id="contentPost">${data[i].Content}</div>
                        <div id="postImageCountainer" class="${imageDisplay}">
                            <div id="postImage">
                        <img src="${data[i].ImageURL}" alt="">
                    </div>
                        </div>
                    
                    <div id="iconesAndCategories">
                        <div id="postIncones">
                            <i id="likeIcone" class="fa-regular fa-heart ${liked}" data-postid=${data[i].PostID} ></i>
                            <i  id="commentIcone" class="fa-regular fa-comment-dots " data-postid=${data[i].PostID}></i>
                            <i  id= "saveIcone" class="fa-regular fa-bookmark ${saved} " data-postid=${data[i].PostID}></i>
                        </div>
                        <div class="Postcategories">
                        </div>
                    </div>
    `


        middle.append(post)
        for (let j = 0; j < data[i].Categories.length; j++) {
            let PostCategorie = post.querySelector('.Postcategories')

            let category = document.createElement('div')
            category.classList.add('Postcategorie')
            category.innerHTML = data[i].Categories[j]

            PostCategorie.append(category)
        }

    }    
    if (Category == 'like'){
        let hearts = document.querySelectorAll('.fa-heart')
         for (let heart of hearts){
            heart.classList.add('liked')
        }
    }else if (Category == 'save'){        
        let saves = document.querySelectorAll('.fa-bookmark')        
        for (let save of saves){
            save.classList.add('saved')
        }
    }
    }   
    }