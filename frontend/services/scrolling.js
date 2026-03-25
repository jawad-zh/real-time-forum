import {loadPosts} from "/frontend/views/loadPosts.js"
import { loadMessages } from "/frontend/views/loadMessages.js";
let isLoading = false
import {category} from '/frontend/controler/filterControler.js'
export function scrollTracking() {
    console.log('the scroll func work');
    
    let container = document.getElementById('middle')
    container.onscroll = async () => {
        console.log('scroll traking happen');
        
        if (container.clientHeight === container.scrollHeight) return
        if (isLoading) return
        const scrollTop = container.scrollTop
        const visibleHeight = container.clientHeight
        const fullHeight = container.scrollHeight
        if (scrollTop + visibleHeight >= (fullHeight)-100) {
            isLoading = true
            await loadPosts(category, 'scroll')
            isLoading = false
        }
    }
}
export function messageScrolling(container, receiverID) {
    container.addEventListener('scroll', async () => {
        if (container.scrollTop <= -(container.scrollHeight - container.clientHeight - 1))  {
             await loadMessages(receiverID, 'scroll');
            
        }
    });
}