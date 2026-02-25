export function offlineStateUpdate(UserID) {
    let users = document.querySelectorAll('.onlineUser')
    for (let user of users) {
        if (Number(user.dataset.id) === UserID) {
            user.classList.remove('onlineUser')
        }
    }
}