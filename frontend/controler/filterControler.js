// /frontend/controler/filterController.js
import { loadPosts } from '/frontend/views/loadPosts.js'
import { active } from "/frontend/views/active.js"

export function filterController(e) {
    const el = e.target.closest('[id]')
    if (!el) return
    const id = el.id

    switch(id) {
        case 'homePageIcone': loadPosts('all','home'); active(id); break
        case 'musicCategory': loadPosts('music','home'); active('homePageIcone'); break
        case 'footballeCategory': loadPosts('footballe','home'); active('homePageIcone'); break
        case 'artCategory': loadPosts('art','home'); active('homePageIcone'); break
        case 'sportCategory': loadPosts('sport','home'); active('homePageIcone'); break
        case 'technologyCategory': loadPosts('technology','home'); active('homePageIcone'); break
        case 'recentCategory': loadPosts('recently','home'); active('homePageIcone'); break
        case 'testCategory': loadPosts('test','home'); active('homePageIcone'); break
        case 'likeIconeFilter': loadPosts('like','home'); active(id); break
        case 'saveIconeFilter': loadPosts('save','home'); active(id); break
    }
}