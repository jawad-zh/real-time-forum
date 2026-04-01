// /frontend/controler/profileController.js
import { setImageProfilePage } from "/frontend/views/setImageProfilePage.js"
import { imageViewer } from "/frontend/views/imageviewer.js"
import { addImageBackend } from "/frontend/services/api/addImageBackend.js"
import { addImage } from "../views/addImage.js"
import { setAlert } from "/frontend/components/alert.js"
import {LoginRegister} from '/frontend/views/start.js';

export async function profileController(e) {
    const el = e.target.closest('[id]')
    if (!el) return
    const id = el.id

    if (['addPrifileImage','ignoreImageProfile','addImageProfileCountainer'].includes(id)) {
        setImageProfilePage(id)
    } else if (['addProfileIcone','addProfileIconeCountainer'].includes(id)) {
        imageViewer()
    } else if (id === 'addImageProfile') {
        const res = await addImageBackend()
        if (res.statue === 'success') {
            addImage()
        } else if (res.statue === 'Unauthorized'){
                    LoginRegister()
                }
        else setAlert('error','✖','add profile image failed try later')
    } else if (['imageIconeCountainer','imageUploadIcone','imageTextIcone'].includes(id)) {
        document.getElementById('fileInput').click()
    }
}