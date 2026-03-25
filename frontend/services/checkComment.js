export function checkComment(PostID) {
   var post = document.querySelector(`.PostsCountainer[data--post-i-d="${PostID}"]`)
   var input = post.querySelector("input").value.trim()
   if (input.length === 0) {
      return `success`
   } else if (input.length >= 1000) {
      return `the comment is too long more than 1000`
   }
   return 'success'
}