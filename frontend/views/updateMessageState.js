export function updateMessageState(SenderID) {
    console.log('haaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa [a[a[a[a[a[a[a[a[a');
    
    let allUsers = document.querySelectorAll('.new')
    console.log('allnew ---------------------------------------------------:' , allUsers);
    
    for (let user of allUsers) {
        if (Number(user.dataset.id) === SenderID) {
            console.log('kaynaa');
            user.classList.remove('new')

        }
    }

}