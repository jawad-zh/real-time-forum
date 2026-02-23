import { started, setLoginHtml, setRegister } from "/frontend/views/start.js";
import { registerCheck } from "/frontend/services/registerCheck.js"
import { loginCheck } from "/frontend/services/loginCheck.js"
import { setHomePage } from "/frontend/views/home.js"
import { setCreatPost } from "/frontend/views/creatPost.js"
import { logout } from "/frontend/services/logout.js"
import { creatPost } from "/frontend/services/creatPost.js"
import { LikeFrontend } from "/frontend/views/like.js"
import { LikeBackend } from "/frontend/services/likePost.js"
import { savePostsBackend } from "../services/savePostBackend.js";
import { savePostFront } from "../views/save.js";
import { showComment } from "../views/showComment.js";
import { commentBackend } from "/frontend/services/commentBackend.js"
import { creatComment } from "/frontend/views/creatComment.js"
import { checkCreatPost } from "/frontend/services/checkCreatPost.js"
import { checkCreatPostRespons } from "../views/checkFrontResponse.js";
import { checkComment } from "../services/checkComment.js";
import { setImageProfilePage } from "/frontend/views/setImageProfilePage.js"
import { imageViewer } from "/frontend/views/imageviewer.js"
import { addImageBackend } from "/frontend/services/addImageBackend.js"
import { addImage } from "../views/addImage.js";
import {showMessageCountainer} from "/frontend/views/showMessageCountainer.js"
import {hideMessageSection} from '/frontend/views/hideMessageSection.js';
import {sendMessagBackend} from '/frontend/services/sendMessageBackend.js'
import {StartWebsocketConection}from '/frontend/websocket/startConection.js'
async function router() {
    var res = await fetch("http://localhost:8080/sessionCheck", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
    })
    var data = await res.json()
    if (data.status === 'success') {
        console.log('from router111111111111');
        let messagesSection = await setHomePage('all')  
        StartWebsocketConection(messagesSection)
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
               
                 let messagesSection = await setHomePage('all')  
                 console.log('from router Section:',messagesSection);
                 
                  StartWebsocketConection(messagesSection) 
                
            }
        } else if (e.target.id === 'creatPostIcone') {
            setCreatPost()
        } else if (e.target.id === 'cancelCreatPost') {
            // need to handle don't call main
            setHomePage('all')
        } else if (e.target.id === 'logoutIcone') {
            var ok = logout()
            if (ok) {
                started()
            }
        } else if (e.target.id === 'creatPostButton') {
            var message = checkCreatPost()
            if (message === 'success') {

                //    checkCreatPostRespons('your post is created','red')
                creatPost(e)
            } else {
                checkCreatPostRespons(message, 'red')
            }
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
        } else if (e.target.id === 'likeIconeFilter') {
            setHomePage('like')
        } else if (e.target.id === 'saveIconeFilter') {
            setHomePage('save')
        } else if (e.target.id === 'likeIcone') {
            var post = await e.target.closest(".PostsCountainer")
            var icone = e.target
            var data = await LikeBackend(post.dataset.PostID)
            if (data.statue === 'success') {
                LikeFrontend(data, icone)
            }
        } else if (e.target.id === 'saveIcone') {
            var post = await e.target.closest(".PostsCountainer")
            var icone = e.target
            var data = await savePostsBackend(post.dataset.PostID)

            if (data.statue === 'success') {
                console.log('all right');

                savePostFront(data, icone)
            }
        } else if (e.target.id === 'commentIcone') {
            var post = await e.target.closest(".PostsCountainer")
            showComment(post.dataset.PostID)
        } else if (e.target.id === 'IconePostComment') {
            var post = await e.target.closest(".PostsCountainer")
            var res = checkComment(post.dataset.PostID)
            if (res === 'success') {
                var res = await commentBackend(post.dataset.PostID)
                if (res.statue === 'success') {
                    creatComment(post.dataset.PostID, res)
                }
            } else {
                // make action
            }

        } else if ((e.target.id === 'addPrifileImage') || (e.target.id === 'ignoreImageProfile')) {
            console.log(typeof (e.target.id));

            setImageProfilePage(e.target.id)
        } else if (e.target.id === 'addProfileIcone' || e.target.id === 'addProfileIconeCountainer') {
            imageViewer()
        } else if (e.target.id === 'addImageProfile') {
            var res = await addImageBackend()
            if (res.statue === 'success') {
                addImage()
            }
        }else if (e.target.id === 'messageCountainer'){
            var message = await e.target.closest("#messageCountainer")            
            // console.log('message',message.e.dataset);
             
            showMessageCountainer(message.dataset.id)
        }else if (e.target.id === 'cancenlChatIcone'){
            hideMessageSection()
        }else if (e.target.id === 'sendMessageIcone'){
            console.log('sii');
            
            sendMessagBackend()
        }

    })
}
router()
