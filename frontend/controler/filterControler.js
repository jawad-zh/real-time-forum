// /frontend/controler/filterController.js
import { loadPosts } from '/frontend/views/loadPosts.js'
import { active } from "/frontend/views/active.js"

export function filterController(e) {
    const el = e.target.closest('[id]')
    if (!el) return
    const id = el.id
    console.log('id',id);
    
    switch(id) {
        case 'homePageIcone': loadPosts('all','home'); active(id); break
        case 'allCategory': loadPosts('all','home'); active('homePageIcone'); break
        case 'LifestyleCategory': loadPosts('lifestyle','home'); active('homePageIcone'); break
        case 'artCategory': loadPosts('art','home'); active('homePageIcone'); break
        case 'Educationategory': loadPosts('education','home'); active('homePageIcone'); break
        case 'BusinessCategory': loadPosts('business','home'); active('homePageIcone'); break
        case 'EntertainmentCategory': loadPosts('entertainment','home'); active('homePageIcone'); break
        case 'OpinionCategory': loadPosts('opinion','home'); active('homePageIcone'); break
        case 'likeIconeFilter': loadPosts('like','home'); active(id); break
        case 'saveIconeFilter': loadPosts('save','home'); active(id); break
    }
}