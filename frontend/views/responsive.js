export function responsive(id){
    const messagesSection = document.getElementById('rightSide')
    const options = document.getElementById('icones')
    const posts = document.getElementById('middle')
    const messageContainer = document.getElementById('imageSectionCountainer')
    const logout = document.getElementById('profile')
    switch (id){
        case "messages":
            if(!messagesSection.classList.contains('responsive')){
                messagesSection.classList.add('responsive')
                posts.classList.add('responsive')
                 options.classList.remove('responsive')
                logout.classList.remove('responsive')
            }else{
                messagesSection.classList.remove('responsive')
               if(posts.classList.contains('responsive')) posts.classList.remove('responsive')
            }
           
            if(messageContainer)messageContainer.classList.add('responsive')
            break
        case "options":
            if (!options.classList.contains('responsive')){
                options.classList.add('responsive')
                logout.classList.add('responsive')
                 posts.classList.add('responsive')
                 messagesSection.classList.remove('responsive')
            }else{
                options.classList.remove('responsive')
                logout.classList.remove('responsive')
                posts.classList.remove('responsive')
            }
            break
            default:
                if (id === 'homePageIcone'|| id === 'saveIconeFilter' || id === 'likeIconeFilter'){
                     if (!options.classList.contains('responsive')){
                options.classList.add('responsive')
                logout.classList.add('responsive')
                 posts.classList.add('responsive')
                 messagesSection.classList.remove('responsive')
            }else{
                options.classList.remove('responsive')
                logout.classList.remove('responsive')
                posts.classList.remove('responsive')
            }
                }
                }
}