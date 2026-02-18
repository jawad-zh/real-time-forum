export function hideMessageSection(){
    const messageSection = document.getElementById('imageSectionCountainer')
    if (messageSection){
        messageSection.remove()
    }
}