import { authController } from '/frontend/controler/authControler.js'
import { commentController } from '/frontend/controler/commentControler.js'
import { CreatePostController } from '/frontend/controler/CreatPostControler.js'
import { filterController } from '/frontend/controler/filterControler.js'
import { LikeSaveController } from '/frontend/controler/likeSaveControler.js'
import { messageController } from '/frontend/controler/messageControler.js'
import { profileController } from '/frontend/controler/profileControler.js'
import {router} from '/frontend/router/router.js';
async function mainController() {
     router()
    // Attach single delegated click listener
    document.addEventListener('click', async (e) => {
        const el = e.target.closest('[id]')
        if (!el) return

        const id = el.id

        const authIds = ['startedLoginButton','startedRegisterButton','registerButton','loginButton','logoutIcone']
        const postIds = ['creatPostIcone','cancelCreatPost','creatPostCountainer','creatPostButton']
        const filterIds = ['homePageIcone', 'allCategory','LifestyleCategory','artCategory','Educationategory','BusinessCategory','EntertainmentCategory','OpinionCategory','likeIconeFilter','saveIconeFilter']
        const likeSaveIds = ['likeIcone','saveIcone']
        const commentIds = ['commentIcone','IconePostComment']
        const profileIds = ['addPrifileImage','ignoreImageProfile','addImageProfileCountainer','addProfileIcone','addProfileIconeCountainer','addImageProfile','imageIconeCountainer','imageUploadIcone','imageTextIcone']
        const messageIds = ['messageCountainer','messageName','cancenlChatIcone','sendMessageIcone']

        if (authIds.includes(id)) {
            authController(e)
        } else if (postIds.includes(id)) {
            CreatePostController(e)
        } else if (filterIds.includes(id)) {
            filterController(e)
        } else if (likeSaveIds.includes(id)) {
            LikeSaveController(e)
        } else if (commentIds.includes(id)) {
            commentController(e)
        } else if (profileIds.includes(id)) {
            profileController(e)
        } else if (messageIds.includes(id)) {
            messageController(e)
        }else if(id=== 'lightDarkmoded'){
            document.getElementById('homePageCountainer').classList.toggle('light')
            document.body.classList.toggle('light')
        }
    })
}

mainController()