import { getComments } from "/frontend/services/getComments.js"
import { getUserInfo } from "/frontend/services/getUserInfo.js"
export async function showComment(postID) {
    var post = document.querySelector(`.PostsCountainer[data--post-i-d="${postID}"]`)
    post.classList.toggle('active')
    if (!post.classList.contains('active')) {
        var comments = post.querySelectorAll('.CommentsCountainer')
        var addcomment = post.querySelector('.addYourComment')
        if (comments) {
            for (let comment of comments) {
                comment.remove()
            }
        }
        if (addcomment) {
            addcomment.remove()
        }
    } else {
        var allData = await getComments(postID)
        var UserInfo = await getUserInfo()

        if (allData) {
            var oldComments = document.querySelector('.CommentCountainer')
            if (oldComments) {
                for (let oldComment of oldComments) {

                    oldComment.remove()
                }
            }
            for (let data of allData) {
                var comment = `
                        <div class="commentCountainer" >
                            <div class="commentProfile">
                                <img src="${data.UserProfile.String}" alt="">
                            </div>
                            <div class="CommentContent" >
                                <p>${data.Content}
                                </p>
                            </div>
                        </div>
    `

                var CommentsCountainer = document.createElement('div')
                CommentsCountainer.classList.add('CommentsCountainer', 'active')
                CommentsCountainer.innerHTML = comment
                post.append(CommentsCountainer)
            }
        }




        //----------------------------
        var yourComment = `
                         <div class="yourCommentProfile">
                              <img src="${UserInfo.ImageURL.String}" alt="">
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
    }

}