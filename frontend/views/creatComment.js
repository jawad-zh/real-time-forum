export function creatComment(PostID , data){
    var post = document.querySelector(`.PostsCountainer[data--post-i-d="${PostID}"]`)
     var input = post.querySelector("input").value.trim()
     post.querySelector('input').value = ""
     var comment = post.querySelector('.CommentsCountainer')
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