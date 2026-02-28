// /frontend/controler/messageController.js
import { checkMessage } from "/frontend/services/checkMessage.js"
import { showMessageCountainer } from "/frontend/views/showMessageCountainer.js"
import { hideMessageSection } from '/frontend/views/hideMessageSection.js'
import { sendMessagBackend } from '/frontend/services/sendMessageBackend.js'
import { updateMessageState } from "/frontend/services/updateMessageState.js"

export async function messageController(e) {
    const el = e.target.closest('[id]')
    // if (!el) return
    const id = el.id
    const messageEl = el.closest("#messageCountainer")

    // if (!messageEl) return

    if (id === 'messageCountainer' || id === 'messageName') {
        const online = messageEl.classList.contains('onlineUser')
        showMessageCountainer(messageEl.dataset.id, online)
        updateMessageState(messageEl.dataset.id)
    } else if (id === 'cancenlChatIcone') {
        hideMessageSection()
    } else if (id === 'sendMessageIcone') {
        if (checkMessage()) await sendMessagBackend()
    }
}