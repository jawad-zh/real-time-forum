export function offlineStateUpdate(UserID) {
    let users = document.querySelectorAll('.onlineUser')
    for (let user of users) {
        if (Number(user.dataset.id) === UserID) {
            user.classList.remove('onlineUser')
        }
    }
     let allConversations = document.querySelectorAll('.imageSectionCountainer')
        for (let conv of allConversations){
            if (Number(conv.dataset.id) == (Number(UserID))){
                conv.querySelector('#SubName').innerHTML = 'offline'
            }
        }
}