import { started } from "/frontend/views/start.js";
import { setHomePage } from "/frontend/views/home.js"
import { StartWebsocketConection } from '/frontend/websocket/startConection.js'
import { authController } from '/frontend/controler/authControler.js'
import { commentController } from '/frontend/controler/commentControler.js'
import { CreatePostController } from '/frontend/controler/CreatPostControler.js'
import { filterController } from '/frontend/controler/filterControler.js'
import { LikeSaveController } from '/frontend/controler/likeSaveControler.js'
import { messageController } from '/frontend/controler/messageControler.js'
import { profileController } from '/frontend/controler/profileControler.js'

async function mainController() {
    const res = await fetch("http://localhost:8080/sessionCheck", {
        method: "POST",
        headers: { "Content-Type": "application/json" }
    })
    const data = await res.json()

    if (data.status === 'success') {
        const messagesSection = await setHomePage('all')        
        StartWebsocketConection(messagesSection)
    } else {
        started()
    }

    // Attach single delegated click listener
    document.addEventListener('click', async (e) => {
        const el = e.target.closest('[id]')
        if (!el) return

        const id = el.id

        const authIds = ['startedLoginButton','startedRegisterButton','registerButton','loginButton','logoutIcone']
        const postIds = ['creatPostIcone','cancelCreatPost','creatPostCountainer','creatPostButton']
        const filterIds = ['homePageIcone','musicCategory','footballeCategory','artCategory','sportCategory','technologyCategory','recentCategory','testCategory','likeIconeFilter','saveIconeFilter']
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
        }
    })
}

mainController()