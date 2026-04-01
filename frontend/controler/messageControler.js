import { checkMessage } from "/frontend/services/checkMessage.js"
import { showMessageCountainer } from "/frontend/views/showMessageCountainer.js"
import { hideMessageSection } from '/frontend/views/hideMessageSection.js'
import { sendMessagBackend } from '/frontend/services/sendMessageBackend.js'
import { updateMessageState } from "/frontend/services/updateMessageState.js"
import {LoginRegister} from '/frontend/views/start.js';

export async function messageController(e) {
    
    const el = e.target.closest('[id]')
    const id = el.id
    const messageEl = el.closest("#messageCountainer")
    
    if (id === 'messageCountainer' || id === 'messageName') {
        const online = messageEl.classList.contains('onlineUser')
        showMessageCountainer(messageEl.dataset.id, online)
        updateMessageState(messageEl.dataset.id)
    } else if (id === 'cancenlChatIcone') {
        hideMessageSection()
    } else if (id === 'sendMessageIcone') {        
        if (checkMessage()) {
            const data = await sendMessagBackend()
            if (data){
                if (data.statue === 'Unauthorized'){
                    LoginRegister()
                }
            }
        }
    }
}