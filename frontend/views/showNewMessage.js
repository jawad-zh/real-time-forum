export function showNewMessage(flag, SenderID, ReceiverID, MessageContent) {    
            var className = flag === 'from-me' ? 'receiver' :  'sender' ; 
            const messageContainerCheck = document.getElementById('imageSectionCountainer')  
            if (messageContainerCheck){
                // const Checker = flag === 'from-me' ? ReceiverID :  SenderID ;       
            // if (messageContainerCheck.dataset.id != ReceiverID) { console.log('Id changed'); return }
            const messageTamplate =`
            <div id="ImageMessage" ></div>
            <div id="MessageAndTime" >
                <div id="MessageContent" >
                ${MessageContent}
                </div>
                <div id="MessageTime" ></div>
            </div>
            
        `
        const messageToApp = document.createElement('div')
                messageToApp.setAttribute('id','messagCountainer')
            messageToApp.classList.add(`${className}`)
                messageToApp.innerHTML = messageTamplate
                const messagesSection = document.getElementById('messagesSection')
                if(messagesSection){
                    messagesSection.prepend(messageToApp)
                }    
            }else{
                const allUsers = document.querySelectorAll('.messageCountainer')
                for (let user of allUsers){
                    if (Number(user.dataset.id) === SenderID){
                        user.classList.add('new')
                    }
                }
            }
                    
    }
