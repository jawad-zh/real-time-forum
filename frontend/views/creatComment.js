import {htmlXSS} from '/frontend/services/htmlXSS.js';
import { UserInfo } from './home.js';
import { TimeAgo } from '../services/timeAgo.js';
export function creatComment(PostID) {        
    var post = document.querySelector(`.PostsCountainer[data--post-i-d="${PostID}"]`)
    var input = post.querySelector("input").value.trim()
    post.querySelector('input').value = ""
    var comment = post.querySelector('.CommentsCountainer:last-of-type')
        ? post.querySelector('.CommentsCountainer:last-of-type')
        : document.createElement('div')
    var Profile = document.getElementById('ProfilInforamtionImage').src
    if (!comment.classList.contains('CommentsCountainer')) {
        comment.classList.add('CommentsCountainer')
        if (post.querySelector('.addYourComment')) post.querySelector(".addYourComment").remove()
            const time = TimeAgo(new Date().toISOString())
        var newComment = `
         
                                <div class="commentCountainer" >
                            <div class="commentProfile">
                                <img src="${Profile}" alt="">
                            </div>
                            <div class="CommentContent" >
                                <p id="commentNickname" >${htmlXSS(UserInfo.Nickname)}</p>
                                <p>${htmlXSS(input)}
                                </p>
                                <div id="commentTime" >${time}</div>
                            </div>
                            
                        </div>
                           
        `
        var newCommentCountainer = document.createElement('div')
        newCommentCountainer.classList.add('commentCountainer')
        newCommentCountainer.innerHTML = newComment
        comment.append(newCommentCountainer)
        post.append(comment)
        var yourComment = `
                         <div class="yourCommentProfile">
                              <img src="${Profile}" alt="">
                            </div>
                            <div class="yourCommentContent" >
                                <input  placeholder="add your comment" type="commentValue">
                                <i id="IconePostComment" class="fa-solid fa-paper-plane"></i>
                           </div>
                        `
        var addYourComment = document.createElement('div')
        addYourComment.classList.add('addYourComment')
        addYourComment.innerHTML = yourComment
        post.append(addYourComment)
    } else {
        comment.classList.add('CommentsCountainer')
        var newComment = `
         
                               <div class="commentProfile">
                                   <img src=" frontend/state/images/icones/profile.jpeg" alt="">
                               </div>
                               <div class="CommentContent" >
                                   <p>${input}
                                   </p>
                               </div>
                           
        `
        var newCommentCountainer = document.createElement('div')
        newCommentCountainer.classList.add('commentCountainer')
        newCommentCountainer.innerHTML = newComment
        comment.append(newCommentCountainer)

    }
}