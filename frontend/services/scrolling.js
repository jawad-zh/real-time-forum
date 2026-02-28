import {loadPosts} from "/frontend/views/loadPosts.js"
import { loadMessages } from "/frontend/views/loadMessages.js";
let isLoading = false

export function scrollTracking( category) {
    let container = document.getElementById('middle')
    console.log('container',container);
    console.log('container height:',container.clientHeight);
    
    
    console.log('999999999999999999999999999999.6953120.65231.0653120.563120');
    
    container.onscroll = async () => {
        if (container.clientHeight === container.scrollHeight) return
        if (isLoading) return

        const scrollTop = container.scrollTop
        const visibleHeight = container.clientHeight
        const fullHeight = container.scrollHeight

        if (scrollTop + visibleHeight >= fullHeight) {
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