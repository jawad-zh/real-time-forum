export function showComment(postID){
      var comment =`
                        <div class="commentCountainer" >
                            <div class="commentProfile">
                                <img src=" frontend/state/images/icones/profile.jpeg" alt="">
                            </div>
                            <div class="CommentContent" >
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum quia minima earum quasi placeat repellendus dolor eius architecto aspernatur, facilis officia voluptatibus minus exercitationem quam fugiat at quod totam nemo!
                                </p>
                            </div>
                        </div>
                         <div class="commentCountainer" >
                            <div class="commentProfile">
                                <img src=" frontend/state/images/icones/profile.jpeg" alt="">
                            </div>
                            <div class="CommentContent" >
                                <p>Lorem ipsum dolor sit amet consectetur.
                                </p>
                            </div>
                        </div>
    `
    var yourComment = `
                         <div class="yourCommentProfile">
                              <img src=" frontend/state/images/icones/profile.jpeg" alt="">
                            </div>
                            <div class="yourCommentContent" >
                                <input  placeholder="add your comment" type="commentValue">
                                <i id="IconePostComment" class="fa-solid fa-paper-plane"></i>
                           </div>
                        `
    var post = document.querySelector(`.PostsCountainer[data--post-i-d="${postID}"]`)
    post.classList.toggle('active')
    if (!post.classList.contains('active')){
        var comment = post.querySelector('.CommentsCountainer')
        var addcomment = post.querySelector('.addYourComment')
        if (comment){
            comment.remove()
        }
        if (addcomment){
            addcomment.remove()
        }
    }else{
    var CommentsCountainer = document.createElement('div')
    CommentsCountainer.classList.add('CommentsCountainer','active')
    CommentsCountainer.innerHTML = comment
    post.append(CommentsCountainer)
    var addYourComment = document.createElement('div')
    addYourComment.classList.add('addYourComment')
    addYourComment.innerHTML = yourComment
    post.append(addYourComment)
    }
   
}