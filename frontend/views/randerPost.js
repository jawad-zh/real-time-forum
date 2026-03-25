import {TimeAgo} from '/frontend/services/timeAgo.js';
import {htmlXSS} from '/frontend/services/htmlXSS.js';
export function renderPost(data,RenderPostData){
    console.log('renderPostData:',RenderPostData);
    
    const outputCategories = {
        '1': 'lifestyle',
        '2': 'art',
        '3': 'education',
        '4': 'business',
        '5': 'entertainment',
        '6': 'opinion',
    }
    var time = TimeAgo(data.CreatedAt)

        var middle = document.getElementById('middle')
        var post = document.createElement('div')
        post.classList.add('PostsCountainer')
        post.dataset.PostID = data.PostID
        let imageDisplay = data.imageURL ? '' : 'hide'
        post.innerHTML = `
    <div id="profilePost">
                        <div id="profileImage">
                            <img src="${data.ProfileURL.String}" alt="">
                        </div>
                        <div id="NameTitlePost">
                        <div id="titleTime">
                            <p id="name">${data.Nickname}</p>
                            <p id="time">${time}</p>
                            </div>
                                <p id="PostTitle">${htmlXSS(RenderPostData.title)}</p>
                        </div>

                    </div>
                    <div id="contentPost">${htmlXSS(RenderPostData.content)}</div>
                        <div id="postImageCountainer"  class="${imageDisplay}" >
                            <div id="postImage">
                        <img src="${data.imageURL}" >
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
    
        var addCategories = post.querySelector('.Postcategories')

        for (let categorie of RenderPostData.categories) {

            var cat = document.createElement('div');
            cat.classList.add('Postcategorie');
            cat.textContent = outputCategories[categorie];
            addCategories.append(cat);
        }

        middle.prepend(post)
        document.getElementById("creatPostCountainer").classList.remove("active")

    
    document.getElementById('creatPostTitle').value = ''
    document.getElementById('creatPostContent').value = ''
}