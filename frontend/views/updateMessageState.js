export function updateMessageState(SenderID) {
    let allUsers = document.querySelectorAll('.new')
    for (let user of allUsers) {
        if (Number(user.dataset.id) === SenderID) {
            console.log('kaynaa');
            user.classList.remove('new')

        }
    }

}