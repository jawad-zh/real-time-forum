// /frontend/controler/likeSaveController.js
import { LikeFrontend } from "/frontend/views/like.js"
import { LikeBackend } from "/frontend/services/likePost.js"
import { savePostsBackend } from "../services/savePostBackend.js"
import { savePostFront } from "../views/save.js"
import { setAlert } from "/frontend/components/alert.js"
import {LoginRegister} from '/frontend/views/start.js';
export async function LikeSaveController(e) {
    const el = e.target.closest('[id]')
    if (!el) return
    const id = el.id
    const post = el.closest(".PostsCountainer")
    if (!post) return

    const icone = el

    if (id === 'likeIcone') {
        const data = await LikeBackend(post.dataset.PostID)
        console.log('like data',data);
        
        if (data.statue === 'success'){LikeFrontend(data, icone)}else if(data.statue === 'Unauthorized'){LoginRegister()}
    } else if (id === 'saveIcone') {
        const data = await savePostsBackend(post.dataset.PostID)
        if (data.statue === 'success') savePostFront(data, icone)
        else setAlert('error','✖','save failed try later')
    }
}