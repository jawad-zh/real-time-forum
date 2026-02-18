import {ExportedUsers} from "/frontend/views/home.js"

export function showMessageCountainer(UserID){
    console.log("userID",UserID);
    console.log("ExportedUsers",ExportedUsers);
    let UserInfo = {}
    for (let user of ExportedUsers){        
        if (user.UserID == UserID){            
            UserInfo = {...user}
            break
        }
    }

 var section = `
        <div id="barSection" >
            <div id="image" >
                <img src="${UserInfo.ProfileURL.String}" alt="">
               
            </div>
            <div id="MessageUserInfo" >
                <div id="Name" >
                    ${UserInfo.Nickname}
                </div>
                <div id="SubName" >
                    online
                </div>
            </div>
            <div id="cancelButton" >
                <i id="cancenlChatIcone" class="fa-solid fa-x"></i>
            </div>
        </div>
        <div id="messagesSection" >
            <div id="messagCountainer" class="receiver" >
            <div id="ImageMessage" ></div>
            <div id="MessageAndTime" >
                <div id="MessageContent" >

                </div>
                <div id="MessageTime" ></div>
            </div>
            </div>
        </div>
        <div id="inputMessagesSection" >
            <div id="MessageContentInput" >
                <input  placeholder="send message" type="text">
            </div>
            <div id="sendMessageIconeCountainer" >
                <i id="sendMessageIcone" class="fa-regular fa-paper-plane"></i>
            </div>
        </div>
    
    `

    const appCountainer = document.getElementById('appCountainer')
    const oldMessageSection = document.getElementById('imageSectionCountainer')
    if (oldMessageSection){
        oldMessageSection.remove()
    }
    const messageSection = document.createElement('div')
    messageSection.setAttribute('id','imageSectionCountainer')
    messageSection.innerHTML = section
    appCountainer.append(messageSection)
}