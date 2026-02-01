export function setHomePage() {
    let bodyChildren = document.body.children
    if (bodyChildren) {
        for (let i = 0; i < bodyChildren.length; i++) {
            bodyChildren[i].remove()
        }
    }
    document.body.style.background = 'white'
    document.body.innerHTML = `
      <div class="HomePageCountainer" >
        <div class="navBar" >
            <div class="logoCountainer">
                <p id="logo">logo</p>
            </div>
            <div id="iconesCountainer" >
                <i id="plus" class="fa-solid fa-plus"></i>
                <i id="sendIcone" class="fa-regular fa-paper-plane"></i>
                <i id="logOutIcone" class="fa-solid fa-right-from-bracket"></i>
            </div>
        </div>
        <div id="scrollingPageCountainer" >
            <div id="postSide">
                <div class="post" >
                    <div class="profileCountainer" >
                        <img src="state/images/icones/profile.jpeg" alt="">
                        <p>jawad zahraoui</p>
                    </div>
                    <div class="imagePost">
                        <img src="state/images/icones/istockphoto-814423752-612x612.jpg" alt="">
                    </div>
                    <div class="icons" >
                        <div class="likeComment" >
                            <i class="far fa-heart"></i>11
                            <i class="far fa-comment"></i>22
                        </div>
                        <div class="save" >
                            <i class="far fa-bookmark"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div class="filterMessageSide" >
                <div class="filterMessageCountainer">
                    <div class="filter" ></div>
                    <div class="message" ></div>
                </div>
            </div>
        </div>
    </div>
    `
}