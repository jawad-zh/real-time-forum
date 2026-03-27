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
function throttle(fn, delay) {
    let timeout = null;
    return function (...args) {
        if (timeout) return;

        timeout = setTimeout(() => {
            timeout = null;
        }, delay);

        return fn.apply(this, args);
    };
}

export function messageScrolling(container, receiverID) {
    const throttledLoadMessages = throttle(async () => {
        await loadMessages(receiverID, 'scroll');
    }, 1000);

    container.addEventListener('scroll', () => {
        if (container.scrollTop <= -(container.scrollHeight - container.clientHeight - 1)) {
            throttledLoadMessages();
        }
    });
}