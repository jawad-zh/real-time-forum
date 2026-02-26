export function updateMessageStateFront(SenderID) {
    
    let allUsers = document.querySelectorAll('.new')
    
    for (let user of allUsers) {
        if (Number(user.dataset.id) === SenderID) {
            user.classList.remove('new')

        }
    }

}