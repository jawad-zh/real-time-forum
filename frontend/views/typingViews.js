export function typingViews(data){
    console.log('data from typing',data);
    const messagesSection = document.getElementById('messagesSection')
    const currentChatUserID = messagesSection?document.getElementById('imageSectionCountainer').dataset.id:''
    console.log('-------------------------------------',currentChatUserID);
    const typingDiv = `
     <div id="typingIndicator" >
        <p>typing</p>
  <span class="dot"></span>
  <span class="dot"></span>
  <span class="dot"></span>
</div>
    `
    if (currentChatUserID){
         if(data.from == currentChatUserID) {
        if(data.action === "TypingStart") {
            const container = document.createElement('div')
        container.setAttribute('id','typingIndicator')
        container.innerHTML = typingDiv
            messagesSection.prepend(container)   
          
        } else if(data.action === "TypingStop") {
        const test =   document.getElementById('typingIndicator')
            if (test)test.remove()
        }
    }
    }
     
}
