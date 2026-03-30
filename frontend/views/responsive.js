export function responsive(id){
    const messagesSection = document.getElementById('rightSide')
    const options = document.getElementById('icones')
    const posts = document.getElementById('middle')
    const messageContainer = document.getElementById('imageSectionCountainer')
    switch (id){
        case "messages":
            messagesSection.classList.toggle('responsive')
            posts.classList.toggle('responsive')
            if(messageContainer)messageContainer.classList.add('responsive')
            break
        case "options":
            options.classList.toggle('responsive')
            posts.classList.toggle('responsive')
                }
}