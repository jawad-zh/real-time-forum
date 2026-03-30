// /frontend/controler/CreatePostController.js
import { setCreatPost } from "/frontend/views/creatPost.js"
import { creatPost } from "/frontend/services/creatPost.js"
import { checkCreatPost } from "/frontend/services/checkCreatPost.js"
import { removeCreatPostPage } from '/frontend/views/removeCreatPostPage.js'
import { setAlert } from "/frontend/components/alert.js"
import { active } from "/frontend/views/active.js"
import { LoginRegister } from '/frontend/views/start.js';
import { renderPost } from '/frontend/views/randerPost.js';
import {addPostOffset} from '/frontend/services/getPost.js'
export async function CreatePostController(e) {
    const el = e.target.closest('[id]')
    const id = el.id

    if (id === 'creatPostIcone') {
        setCreatPost()
        active(id)
    } else if (id === 'cancelCreatPost' || id === 'creatPostCountainer') {
        removeCreatPostPage()
        active('homePageIcone')
    } else if (id === 'creatPostButton') {
        const message = checkCreatPost()
        if (message === 'success') {
            let {data,RenderPostData} = await creatPost(e)            
            if (data.statue === 'success') {  
                addPostOffset()              
                renderPost(data,RenderPostData)
                active('homePageIcone')
            }
            else if (data.statue === 'Unauthorized') {
                LoginRegister()
            }
        } else {
            setAlert('error', '✖', message)
        }
    }
}