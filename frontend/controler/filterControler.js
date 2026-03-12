// /frontend/controler/filterController.js
import { loadPosts } from '/frontend/views/loadPosts.js'
import { active } from "/frontend/views/active.js"
export let category = 'all'
export function filterController(e) {
    const el = e.target.closest('[id]')
    if (!el) return
    const id = el.id
    console.log('id', id);

    switch (id) {
        case 'homePageIcone': loadPosts('all', 'home'); active(id); category = ''; break
        case 'allCategory': loadPosts('all', 'home'); active('homePageIcone'); category = ''; break
        case 'LifestyleCategory': loadPosts('lifestyle', 'home'); active('homePageIcone'); category = 'lifestyle'; break
        case 'artCategory': loadPosts('art', 'home'); active('homePageIcone'); category = 'art';break
        case 'Educationategory': loadPosts('education', 'home'); active('homePageIcone'); category = 'education'; break
        case 'BusinessCategory': loadPosts('business', 'home'); active('homePageIcone'); category = 'business'; break
        case 'EntertainmentCategory': loadPosts('entertainment', 'home'); active('homePageIcone'); category = 'entertainment'; break
        case 'OpinionCategory': loadPosts('opinion', 'home'); active('homePageIcone'); category = 'opinion'; break
        case 'likeIconeFilter': loadPosts('like', 'home'); active(id); category = 'like'; break
        case 'saveIconeFilter': loadPosts('save', 'home'); active(id); category = 'save'; break
    }
}