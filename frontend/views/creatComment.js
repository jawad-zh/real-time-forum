export function creatComment(PostID, data) {
    var post = document.querySelector(`.PostsCountainer[data--post-i-d="${PostID}"]`)
    var input = post.querySelector("input").value.trim()
    post.querySelector('input').value = ""
    var comment = post.querySelector('.CommentsCountainer:last-of-type') 
    ? post.querySelector('.CommentsCountainer:last-of-type') 
    : document.createElement('div')

    if (!comment.classList.contains('CommentsCountainer')) {
        comment.classList.add('CommentsCountainer')
        if(post.querySelector('.addYourComment'))  post.querySelector(".addYourComment").remove() 
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
        post.append(comment)
        var yourComment = `
                         <div class="yourCommentProfile">
                              <img src=" frontend/state/images/icones/profile.jpeg" alt="">
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