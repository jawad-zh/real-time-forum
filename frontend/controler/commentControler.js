import { showComment } from "../views/showComment.js";
import { commentBackend } from "/frontend/services/commentBackend.js"
import { creatComment } from "../views/creatComment.js"
import { checkComment } from "../services/checkComment.js";
import { setAlert } from "/frontend/components/alert.js"

export async function commentController(e) {
    const el = e.target.closest('[id]')
    const id = el.id
    const post = el.closest(".PostsCountainer")

    if (id === 'commentIcone') {
        showComment(post.dataset.PostID)
    } else if (id === 'IconePostComment') {
        const res = checkComment(post.dataset.PostID)
        if (res === 'success') {
            const data = await commentBackend(post.dataset.PostID)
            if (data.statue === 'success') creatComment(post.dataset.PostID, data)
        } else {
            setAlert('error', '✖', res)
        }
    }
}