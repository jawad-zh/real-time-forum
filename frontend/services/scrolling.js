import {loadPosts} from "/frontend/views/loadPosts.js"
import { loadMessages } from "/frontend/views/loadMessages.js";
export function scrollTracking(container,category){
    container.onscroll = null 
    container.onscroll = ()=>{
        const scrollTop = container.scrollTop
        const visibleHeight = container.clientHeight
        const fullHeight = container.scrollHeight
        if (scrollTop + visibleHeight >= fullHeight ) {
            loadPosts(category,'scroll')
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