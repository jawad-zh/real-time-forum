import { started, setLoginHtml, setRegister } from "/frontend/views/start.js";
import { registerCheck } from "/frontend/services/registerCheck.js"
import { loginCheck } from "/frontend/services/loginCheck.js"
import { setHomePage } from "/frontend/views/home.js"
import { setCreatPost } from "/frontend/views/creatPost.js"
import { logout } from "/frontend/services/logout.js"
import { creatPost } from "/frontend/services/creatPost.js"
import {LikeFrontend}from "/frontend/views/like.js"
import{LikeBackend} from "/frontend/services/likePost.js"
import { savePostsBackend } from "../services/savePostBackend.js";
import { savePostFront } from "../views/save.js";
import { showComment } from "../views/showComment.js";
import {commentBackend } from "/frontend/services/commentBackend.js"
async function router() {
    var res = await fetch("http://localhost:8080/sessionCheck", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
    })
    var data = await res.json()
    if (data.status === 'success') {
        setHomePage('all')
    } else {
        started()
    }
    document.addEventListener('click', async (e) => {
        if (e.target.id === 'startedLoginButton') {
            setLoginHtml()
        } else if (e.target.id === 'startedRegisterButton') {
            setRegister()
        } else if (e.target.id === 'registerButton') {
            let data = await registerCheck(e)
            if (data.status === 'success') {
                setTimeout(() => {
                    setLoginHtml()
                }, 1500)
            }
        } else if (e.target.id === 'loginButton') {
            let data = await loginCheck(e)
            if (data.status === 'success') {
                setTimeout(() => {
                    setHomePage('all')
                }, 1500)
            }
        } else if (e.target.id === 'creatPostIcone') {
            setCreatPost()
        } else if (e.target.id === 'cancelCreatPost') {
            setHomePage('all')
        } else if (e.target.id === 'logoutIcone') {
            var ok = logout()
            if (ok) {
                started()
            }
        } else if (e.target.id === 'creatPostButton') {
            creatPost(e)
        } else if (e.target.id === 'homePageIcone') {
            setHomePage('all')
        } else if (e.target.id === 'musicCategory') {
            setHomePage('music')
        } else if (e.target.id === 'footballeCategory') {
            setHomePage('footballe')
        } else if (e.target.id === 'artCategory') {
            setHomePage('art')
        } else if (e.target.id === 'sportCategory') {
            setHomePage('sport')
        } else if (e.target.id === 'technologyCategory') {
            setHomePage('technology')
        } else if (e.target.id === 'recentCategory') {
            setHomePage('recentyl')
        } else if (e.target.id === 'testCategory') {
            setHomePage('test')
        //---------
        }else if(e.target.id === 'likeIconeFilter'){
            setHomePage('like')
        }else if(e.target.id === 'saveIconeFilter'){
            setHomePage('save')
        }else if (e.target.id === 'likeIcone'){  
            var post = await e.target.closest(".PostsCountainer")  
            var icone = e.target
           var data = await LikeBackend(post.dataset.PostID)           
           if (data.statue === 'success'){
            LikeFrontend(data,icone)
           }
        }else if (e.target.id === 'saveIcone'){
            var post = await e.target.closest(".PostsCountainer")  
            var icone = e.target
            var data = await savePostsBackend(post.dataset.PostID)
            if (data.statue === 'success'){
                savePostFront(data,icone)
            }
        }else if (e.target.id === 'commentIcone'){
            var post = await e.target.closest(".PostsCountainer")  
            var icone = e.target
            showComment(post.dataset.PostID)
        }else if (e.target.id === 'IconePostComment'){
            var post = await e.target.closest(".PostsCountainer")  
            commentBackend(post.dataset.PostID)
        }

    })
}
router()
