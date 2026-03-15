export function typingViews(data){
    console.log('data from typing',data);
    const currentChatUserID = document.getElementById('imageSectionCountainer')?document.getElementById('imageSectionCountainer').dataset.id:''
    console.log('-------------------------------------',currentChatUserID);
    const typingDiv = document.getElementById('typingIndicator')
    if (currentChatUserID){
         if(data.from == currentChatUserID) {
        if(data.action === "TypingStart") {
            typingDiv.style.display = "block"  
        } else if(data.action === "TypingStop") {
            typingDiv.style.display = "none"   
        }
    }
    }
     
}
