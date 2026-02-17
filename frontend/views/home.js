import { getUserInfo } from "/frontend/services/getUserInfo.js"
import { getPost } from "/frontend/services/getPost.js"
import { TimeAgo } from "../services/timeAgo.js"
export async function setHomePage(Category) {
    let bodyChildren = document.body.children
    if (bodyChildren) {
        for (let i = 0; i < bodyChildren.length; i++) {
            bodyChildren[i].remove()
        }
    }
    // need to check
    var UserInfo = await getUserInfo()
    
    document.body.innerHTML = `
    <div id="appCountainer">
        <div id="navBar">
            <div id="logo">
                <img src="frontend/state/images/logo.png" alt="">
            </div>
            <div id="icones">
                <i id="homePageIcone"  class="fa-solid fa-house"></i>
                <i  id="creatPostIcone" class="fa-regular fa-square-plus"></i>
                <i  id="saveIconeFilter" class="fa-regular fa-bookmark"></i>
                <i  id="likeIconeFilter" class="fa-regular fa-heart"></i>
                <i class="fa-regular fa-sun"></i>
            </div>
            <div id="profile">
                <div id="navBarImage">
                    <img id="navBarImageimg" src="${UserInfo.ImageURL.String}" alt="">
                </div>
                 <i id="logoutIcone" class="fa-solid fa-right-from-bracket"></i>
            </div>
        </div>
        <div id="homePageCountainer">


            <div id="letSide">
                <div id="leftProfile">
                    <div id="backgroundLeft" >
                        <!-- <img src="frontend/state/images/darckbackg.png" alt="jssssssp"> -->
                    </div>
                    <div id="profilneAndIformations" >
                        <div id="howMuchLike" ><p id="likes">likes</p>
                        <p id="likesNumber" >${UserInfo.likes}</p>
                        </div>
                        <div id="informationImage" >

                            <img  id="ProfilInforamtionImage" src="${UserInfo.ImageURL.String}" alt="">
                        </div>
                         <div id="howMuchSaves" ><p id="saves">saves</p>
                        <p id="savesNumber" >${UserInfo.saves}</p>
                        </div>
                    </div>
                          <div id="informationName" >
                        <p id="profileNickname" >@${UserInfo.Nickname}</p>
                        <p id="profileName" >${UserInfo.FirstName} ${UserInfo.LastName}</p>
                    </div>
                    <div id="addPrifileImage" >
                        add your Profile
                    </div>
                </div>
                <div id="categories">
                    <div id="categorieTitle" >
                        CATEGORIS
                      
                    </div>
                      <div id="categorieCountainer" >
                           <div id="first" >
                             <p id="musicCategory" >music</p>
                            <p id="footballeCategory" >footballe</p>
                            <p id="artCategory" >art</p>
                           </div>
                            <div id="second" >
                                <p id="sportCategory" >sport</p>
                                <p id="technologyCategory" >technology</p>
                                <p id="recentCategory" >recent</p>
                            </div>
                            <div id="third">
                                <p id="testCategory" >test</p>
                            </div>
                        </div>
                        </div>
            </div>
            <div id="middle">
                <!-- <div id="creatPostCountainer">
                    <div id="inputSectionAndProfile">
                        <div id="creatPostProfile">
                            <img src="frontend/state/images/icones/profile.jpeg" alt="">
                        </div>
                        <div id="creatPostInput">
                            <input placeholder="entred title of your throught" id="creatPostTitle" type="text">
                            <input placeholder="shar your throught with your friends" id="creatPostContent" type="text">
                            <div id="creatPostIcones">
                                <i id="imageIcone" class="fa-solid fa-image">
                                    <p>image</p>
                                </i>
                                <i id="categorieIcone" class="fa-solid fa-list">
                                    <p>categorie</p>
                                </i>
                            </div>
                        </div>

                    </div>
                </div> -->
                <!-- --------------- -->
               
                <!-- ------------------------------------------ -->
            </div>
             
            <div id="rightSide">
                <p id="messagesTitle" >Recent messages</p>
                <div id="messageCountainer" >
                    <div id="messageProfile" >
                        <img src="frontend/state/images/icones/profile.jpeg" alt="">
                    </div>
                    <div id="messageName" >
                        jawad zahraoui
                    </div>
                    <div id="notificationAndTime" >
                        <p>11 min</p>
                        <div id="messageNotification" ></div>
                    </div>

                </div>
                <!-- ---------------------------------- -->
                        <div id="messageCountainer" >
                    <div id="messageProfile" >
                        <img src="frontend/state/images/icones/profile.jpeg" alt="">
                    </div>
                    <div id="messageName" >
                        jawad zahraoui
                    </div>
                    <div id="notificationAndTime" >
                        <p>11 min</p>
                        <div id="messageNotification" ></div>
                    </div>

                </div>       <div id="messageCountainer" >
                    <div id="messageProfile" >
                        <img src="frontend/state/images/icones/profile.jpeg" alt="">
                    </div>
                    <div id="messageName" >
                        jawad zahraoui
                    </div>
                    <div id="notificationAndTime" >
                        <p>11 min</p>
                        <div id="messageNotification" ></div>
                    </div>

                </div>       <div id="messageCountainer" >
                    <div id="messageProfile" >
                        <img src="frontend/state/images/icones/profile.jpeg" alt="">
                    </div>
                    <div id="messageName" >
                        jawad zahraoui
                    </div>
                    <div id="notificationAndTime" >
                        <p>11 min</p>
                        <div id="messageNotification" ></div>
                    </div>

                </div>       <div id="messageCountainer" >
                    <div id="messageProfile" >
                        <img src="frontend/state/images/icones/profile.jpeg" alt="">
                    </div>
                    <div id="messageName" >
                        jawad zahraoui
                    </div>
                    <div id="notificationAndTime" >
                        <p>11 min</p>
                        <div id="messageNotification" ></div>
                    </div>

                </div>       <div id="messageCountainer" >
                    <div id="messageProfile" >
                        <img src="frontend/state/images/icones/profile.jpeg" alt="">
                    </div>
                    <div id="messageName" >
                        jawad zahraoui
                    </div>
                    <div id="notificationAndTime" >
                        <p>11 min</p>
                        <div id="messageNotification" ></div>
                    </div>

                </div>       <div id="messageCountainer" >
                    <div id="messageProfile" >
                        <img src="frontend/state/images/icones/profile.jpeg" alt="">
                    </div>
                    <div id="messageName" >
                        jawad zahraoui
                    </div>
                    <div id="notificationAndTime" >
                        <p>11 min</p>
                        <div id="messageNotification" ></div>
                    </div>

                </div>       <div id="messageCountainer" >
                    <div id="messageProfile" >
                        <img src="frontend/state/images/icones/profile.jpeg" alt="">
                    </div>
                    <div id="messageName" >
                        jawad zahraoui
                    </div>
                    <div id="notificationAndTime" >
                        <p>11 min</p>
                        <div id="messageNotification" ></div>
                    </div>

                </div>       <div id="messageCountainer" >
                    <div id="messageProfile" >
                        <img src="frontend/state/images/icones/profile.jpeg" alt="">
                    </div>
                    <div id="messageName" >
                        jawad zahraoui
                    </div>
                    <div id="notificationAndTime" >
                        <p>11 min</p>
                        <div id="messageNotification" ></div>
                    </div>

                </div>       <div id="messageCountainer" >
                    <div id="messageProfile" >
                        <img src="frontend/state/images/icones/profile.jpeg" alt="">
                    </div>
                    <div id="messageName" >
                        jawad zahraoui
                    </div>
                    <div id="notificationAndTime" >
                        <p>11 min</p>
                        <div id="messageNotification" ></div>
                    </div>

                </div>       <div id="messageCountainer" >
                    <div id="messageProfile" >
                        <img src="frontend/state/images/icones/profile.jpeg" alt="">
                    </div>
                    <div id="messageName" >
                        jawad zahraoui
                    </div>
                    <div id="notificationAndTime" >
                        <p>11 min</p>
                        <div id="messageNotification" ></div>
                    </div>

                </div>       <div id="messageCountainer" >
                    <div id="messageProfile" >
                        <img src="frontend/state/images/icones/profile.jpeg" alt="">
                    </div>
                    <div id="messageName" >
                        jawad zahraoui
                    </div>
                    <div id="notificationAndTime" >
                        <p>11 min</p>
                        <div id="messageNotification" ></div>
                    </div>

                </div>       <div id="messageCountainer" >
                    <div id="messageProfile" >
                        <img src="frontend/state/images/icones/profile.jpeg" alt="">
                    </div>
                    <div id="messageName" >
                        jawad zahraoui
                    </div>
                    <div id="notificationAndTime" >
                        <p>11 min</p>
                        <div id="messageNotification" ></div>
                    </div>

                </div>       <div id="messageCountainer" >
                    <div id="messageProfile" >
                        <img src="frontend/state/images/icones/profile.jpeg" alt="">
                    </div>
                    <div id="messageName" >
                        jawad zahraoui
                    </div>
                    <div id="notificationAndTime" >
                        <p>11 min</p>
                        <div id="messageNotification" ></div>
                    </div>

                </div>       <div id="messageCountainer" >
                    <div id="messageProfile" >
                        <img src="frontend/state/images/icones/profile.jpeg" alt="">
                    </div>
                    <div id="messageName" >
                        jawad zahraoui
                    </div>
                    <div id="notificationAndTime" >
                        <p>11 min</p>
                        <div id="messageNotification" ></div>
                    </div>

                </div>       <div id="messageCountainer" >
                    <div id="messageProfile" >
                        <img src="frontend/state/images/icones/profile.jpeg" alt="">
                    </div>
                    <div id="messageName" >
                        jawad zahraoui
                    </div>
                    <div id="notificationAndTime" >
                        <p>11 min</p>
                        <div id="messageNotification" ></div>
                    </div>

                </div>       <div id="messageCountainer" >
                    <div id="messageProfile" >
                        <img src="frontend/state/images/icones/profile.jpeg" alt="">
                    </div>
                    <div id="messageName" >
                        jawad zahraoui
                    </div>
                    <div id="notificationAndTime" >
                        <p>11 min</p>
                        <div id="messageNotification" ></div>
                    </div>

                </div>       <div id="messageCountainer" >
                    <div id="messageProfile" >
                        <img src="frontend/state/images/icones/profile.jpeg" alt="">
                    </div>
                    <div id="messageName" >
                        jawad zahraoui
                    </div>
                    <div id="notificationAndTime" >
                        <p>11 min</p>
                        <div id="messageNotification" ></div>
                    </div>

                </div>       <div id="messageCountainer" >
                    <div id="messageProfile" >
                        <img src="frontend/state/images/icones/profile.jpeg" alt="">
                    </div>
                    <div id="messageName" >
                        jawad zahraoui
                    </div>
                    <div id="notificationAndTime" >
                        <p>11 min</p>
                        <div id="messageNotification" ></div>
                    </div>

                </div>       <div id="messageCountainer" >
                    <div id="messageProfile" >
                        <img src="frontend/state/images/icones/profile.jpeg" alt="">
                    </div>
                    <div id="messageName" >
                        jawad zahraoui
                    </div>
                    <div id="notificationAndTime" >
                        <p>11 min</p>
                        <div id="messageNotification" ></div>
                    </div>

                </div>       <div id="messageCountainer" >
                    <div id="messageProfile" >
                        <img src="frontend/state/images/icones/profile.jpeg" alt="">
                    </div>
                    <div id="messageName" >
                        jawad zahraoui
                    </div>
                    <div id="notificationAndTime" >
                        <p>11 min</p>
                        <div id="messageNotification" ></div>
                    </div>

                </div>       <div id="messageCountainer" >
                    <div id="messageProfile" >
                        <img src="frontend/state/images/icones/profile.jpeg" alt="">
                    </div>
                    <div id="messageName" >
                        jawad zahraoui
                    </div>
                    <div id="notificationAndTime" >
                        <p>11 min</p>
                        <div id="messageNotification" ></div>
                    </div>

                </div>       <div id="messageCountainer" >
                    <div id="messageProfile" >
                        <img src="frontend/state/images/icones/profile.jpeg" alt="">
                    </div>
                    <div id="messageName" >
                        jawad zahraoui
                    </div>
                    <div id="notificationAndTime" >
                        <p>11 min</p>
                        <div id="messageNotification" ></div>
                    </div>

                </div>       <div id="messageCountainer" >
                    <div id="messageProfile" >
                        <img src="frontend/state/images/icones/profile.jpeg" alt="">
                    </div>
                    <div id="messageName" >
                        jawad zahraoui
                    </div>
                    <div id="notificationAndTime" >
                        <p>11 min</p>
                        <div id="messageNotification" ></div>
                    </div>

                </div>       <div id="messageCountainer" >
                    <div id="messageProfile" >
                        <img src="frontend/state/images/icones/profile.jpeg" alt="">
                    </div>
                    <div id="messageName" >
                        jawad zahraoui
                    </div>
                    <div id="notificationAndTime" >
                        <p>11 min</p>
                        <div id="messageNotification" ></div>
                    </div>

                </div>       <div id="messageCountainer" >
                    <div id="messageProfile" >
                        <img src="frontend/state/images/icones/profile.jpeg" alt="">
                    </div>
                    <div id="messageName" >
                        jawad zahraoui
                    </div>
                    <div id="notificationAndTime" >
                        <p>11 min</p>
                        <div id="messageNotification" ></div>
                    </div>

                </div>       <div id="messageCountainer" >
                    <div id="messageProfile" >
                        <img src="frontend/state/images/icones/profile.jpeg" alt="">
                    </div>
                    <div id="messageName" >
                        jawad zahraoui
                    </div>
                    <div id="notificationAndTime" >
                        <p>11 min</p>
                        <div id="messageNotification" ></div>
                    </div>

                </div>       <div id="messageCountainer" >
                    <div id="messageProfile" >
                        <img src="frontend/state/images/icones/profile.jpeg" alt="">
                    </div>
                    <div id="messageName" >
                        jawad zahraoui
                    </div>
                    <div id="notificationAndTime" >
                        <p>11 min</p>
                        <div id="messageNotification" ></div>
                    </div>

                </div>       <div id="messageCountainer" >
                    <div id="messageProfile" >
                        <img src="frontend/state/images/icones/profile.jpeg" alt="">
                    </div>
                    <div id="messageName" >
                        jawad zahraoui
                    </div>
                    <div id="notificationAndTime" >
                        <p>11 min</p>
                        <div id="messageNotification" ></div>
                    </div>

                </div>       <div id="messageCountainer" >
                    <div id="messageProfile" >
                        <img src="frontend/state/images/icones/profile.jpeg" alt="">
                    </div>
                    <div id="messageName" >
                        jawad zahraoui
                    </div>
                    <div id="notificationAndTime" >
                        <p>11 min</p>
                        <div id="messageNotification" ></div>
                    </div>

                </div>       <div id="messageCountainer" >
                    <div id="messageProfile" >
                        <img src="frontend/state/images/icones/profile.jpeg" alt="">
                    </div>
                    <div id="messageName" >
                        jawad zahraoui
                    </div>
                    <div id="notificationAndTime" >
                        <p>11 min</p>
                        <div id="messageNotification" ></div>
                    </div>

                </div>       <div id="messageCountainer" >
                    <div id="messageProfile" >
                        <img src="frontend/state/images/icones/profile.jpeg" alt="">
                    </div>
                    <div id="messageName" >
                        jawad zahraoui
                    </div>
                    <div id="notificationAndTime" >
                        <p>11 min</p>
                        <div id="messageNotification" ></div>
                    </div>

                </div>       <div id="messageCountainer" >
                    <div id="messageProfile" >
                        <img src="frontend/state/images/icones/profile.jpeg" alt="">
                    </div>
                    <div id="messageName" >
                        jawad zahraoui
                    </div>
                    <div id="notificationAndTime" >
                        <p>11 min</p>
                        <div id="messageNotification" ></div>
                    </div>

                </div>       <div id="messageCountainer" >
                    <div id="messageProfile" >
                        <img src="frontend/state/images/icones/profile.jpeg" alt="">
                    </div>
                    <div id="messageName" >
                        jawad zahraoui
                    </div>
                    <div id="notificationAndTime" >
                        <p>11 min</p>
                        <div id="messageNotification" ></div>
                    </div>

                </div>       <div id="messageCountainer" >
                    <div id="messageProfile" >
                        <img src="frontend/state/images/icones/profile.jpeg" alt="">
                    </div>
                    <div id="messageName" >
                        jawad zahraoui
                    </div>
                    <div id="notificationAndTime" >
                        <p>11 min</p>
                        <div id="messageNotification" ></div>
                    </div>

                </div>       <div id="messageCountainer" >
                    <div id="messageProfile" >
                        <img src="frontend/state/images/icones/profile.jpeg" alt="">
                    </div>
                    <div id="messageName" >
                        jawad zahraoui
                    </div>
                    <div id="notificationAndTime" >
                        <p>11 min</p>
                        <div id="messageNotification" ></div>
                    </div>

                </div>       <div id="messageCountainer" >
                    <div id="messageProfile" >
                        <img src="frontend/state/images/icones/profile.jpeg" alt="">
                    </div>
                    <div id="messageName" >
                        jawad zahraoui
                    </div>
                    <div id="notificationAndTime" >
                        <p>11 min</p>
                        <div id="messageNotification" ></div>
                    </div>

                </div>       <div id="messageCountainer" >
                    <div id="messageProfile" >
                        <img src="frontend/state/images/icones/profile.jpeg" alt="">
                    </div>
                    <div id="messageName" >
                        jawad zahraoui
                    </div>
                    <div id="notificationAndTime" >
                        <p>11 min</p>
                        <div id="messageNotification" ></div>
                    </div>

                </div>       <div id="messageCountainer" >
                    <div id="messageProfile" >
                        <img src="frontend/state/images/icones/profile.jpeg" alt="">
                    </div>
                    <div id="messageName" >
                        jawad zahraoui
                    </div>
                    <div id="notificationAndTime" >
                        <p>11 min</p>
                        <div id="messageNotification" ></div>
                    </div>

                </div>       <div id="messageCountainer" >
                    <div id="messageProfile" >
                        <img src="frontend/state/images/icones/profile.jpeg" alt="">
                    </div>
                    <div id="messageName" >
                        jawad zahraoui
                    </div>
                    <div id="notificationAndTime" >
                        <p>11 min</p>
                        <div id="messageNotification" ></div>
                    </div>

                </div>       <div id="messageCountainer" >
                    <div id="messageProfile" >
                        <img src="frontend/state/images/icones/profile.jpeg" alt="">
                    </div>
                    <div id="messageName" >
                        jawad zahraoui
                    </div>
                    <div id="notificationAndTime" >
                        <p>11 min</p>
                        <div id="messageNotification" ></div>
                    </div>

                </div>       <div id="messageCountainer" >
                    <div id="messageProfile" >
                        <img src="frontend/state/images/icones/profile.jpeg" alt="">
                    </div>
                    <div id="messageName" >
                        jawad zahraoui
                    </div>
                    <div id="notificationAndTime" >
                        <p>11 min</p>
                        <div id="messageNotification" ></div>
                    </div>

                </div>       <div id="messageCountainer" >
                    <div id="messageProfile" >
                        <img src="frontend/state/images/icones/profile.jpeg" alt="">
                    </div>
                    <div id="messageName" >
                        jawad zahraoui
                    </div>
                    <div id="notificationAndTime" >
                        <p>11 min</p>
                        <div id="messageNotification" ></div>
                    </div>

                </div>       <div id="messageCountainer" >
                    <div id="messageProfile" >
                        <img src="frontend/state/images/icones/profile.jpeg" alt="">
                    </div>
                    <div id="messageName" >
                        jawad zahraoui
                    </div>
                    <div id="notificationAndTime" >
                        <p>11 min</p>
                        <div id="messageNotification" ></div>
                    </div>

                </div>       <div id="messageCountainer" >
                    <div id="messageProfile" >
                        <img src="frontend/state/images/icones/profile.jpeg" alt="">
                    </div>
                    <div id="messageName" >
                        jawad zahraoui
                    </div>
                    <div id="notificationAndTime" >
                        <p>11 min</p>
                        <div id="messageNotification" ></div>
                    </div>

                </div>       <div id="messageCountainer" >
                    <div id="messageProfile" >
                        <img src="frontend/state/images/icones/profile.jpeg" alt="">
                    </div>
                    <div id="messageName" >
                        jawad zahraoui
                    </div>
                    <div id="notificationAndTime" >
                        <p>11 min</p>
                        <div id="messageNotification" ></div>
                    </div>

                </div>       <div id="messageCountainer" >
                    <div id="messageProfile" >
                        <img src="frontend/state/images/icones/profile.jpeg" alt="">
                    </div>
                    <div id="messageName" >
                        jawad zahraoui
                    </div>
                    <div id="notificationAndTime" >
                        <p>11 min</p>
                        <div id="messageNotification" ></div>
                    </div>

                </div>       <div id="messageCountainer" >
                    <div id="messageProfile" >
                        <img src="frontend/state/images/icones/profile.jpeg" alt="">
                    </div>
                    <div id="messageName" >
                        jawad zahraoui
                    </div>
                    <div id="notificationAndTime" >
                        <p>11 min</p>
                        <div id="messageNotification" ></div>
                    </div>

                </div>       <div id="messageCountainer" >
                    <div id="messageProfile" >
                        <img src="frontend/state/images/icones/profile.jpeg" alt="">
                    </div>
                    <div id="messageName" >
                        jawad zahraoui
                    </div>
                    <div id="notificationAndTime" >
                        <p>11 min</p>
                        <div id="messageNotification" ></div>
                    </div>

                </div>       <div id="messageCountainer" >
                    <div id="messageProfile" >
                        <img src="frontend/state/images/icones/profile.jpeg" alt="">
                    </div>
                    <div id="messageName" >
                        jawad zahraoui
                    </div>
                    <div id="notificationAndTime" >
                        <p>11 min</p>
                        <div id="messageNotification" ></div>
                    </div>

                </div>       <div id="messageCountainer" >
                    <div id="messageProfile" >
                        <img src="frontend/state/images/icones/profile.jpeg" alt="">
                    </div>
                    <div id="messageName" >
                        jawad zahraoui
                    </div>
                    <div id="notificationAndTime" >
                        <p>11 min</p>
                        <div id="messageNotification" ></div>
                    </div>

                </div>       <div id="messageCountainer" >
                    <div id="messageProfile" >
                        <img src="frontend/state/images/icones/profile.jpeg" alt="">
                    </div>
                    <div id="messageName" >
                        jawad zahraoui
                    </div>
                    <div id="notificationAndTime" >
                        <p>11 min</p>
                        <div id="messageNotification" ></div>
                    </div>

                </div>       <div id="messageCountainer" >
                    <div id="messageProfile" >
                        <img src="frontend/state/images/icones/profile.jpeg" alt="">
                    </div>
                    <div id="messageName" >
                        jawad zahraoui
                    </div>
                    <div id="notificationAndTime" >
                        <p>11 min</p>
                        <div id="messageNotification" ></div>
                    </div>

                </div>       <div id="messageCountainer" >
                    <div id="messageProfile" >
                        <img src="frontend/state/images/icones/profile.jpeg" alt="">
                    </div>
                    <div id="messageName" >
                        jawad zahraoui
                    </div>
                    <div id="notificationAndTime" >
                        <p>11 min</p>
                        <div id="messageNotification" ></div>
                    </div>

                </div>       <div id="messageCountainer" >
                    <div id="messageProfile" >
                        <img src="frontend/state/images/icones/profile.jpeg" alt="">
                    </div>
                    <div id="messageName" >
                        jawad zahraoui
                    </div>
                    <div id="notificationAndTime" >
                        <p>11 min</p>
                        <div id="messageNotification" ></div>
                    </div>

                </div>       <div id="messageCountainer" >
                    <div id="messageProfile" >
                        <img src="frontend/state/images/icones/profile.jpeg" alt="">
                    </div>
                    <div id="messageName" >
                        jawad zahraoui
                    </div>
                    <div id="notificationAndTime" >
                        <p>11 min</p>
                        <div id="messageNotification" ></div>
                    </div>

                </div>
            </div>
            </div>

            `
    // get Posts 
    var data = await getPost(Category)
    
    if (data){
         var middle = document.getElementById('middle')
    for (let i = 0; i < data.length; i++) {
        var liked = ''
        var saved = ''
        if (data[i].Isliked === 1) {
            liked = 'liked'
        }

        if (data[i].IsSaved === 1) {
            saved = 'saved'
        }
        var createdAt = TimeAgo(data[i].CreatedAt)
        var Profile = data[i].ProfileURL.String ? data[i].ProfileURL.String : '' 
        var post = document.createElement('div')
        post.classList.add('PostsCountainer')
        post.dataset.PostID = data[i].PostID
        post.innerHTML = `
    <div id="profilePost">
                        <div id="profileImage">
                            <img src="${Profile}" alt="">
                        </div>
                        <div id="NameTitlePost">
                            <p id="name">${data[i].Nickname}</p>
                            <div id="titleTime">
                                <p id="PostTitle">${data[i].Title}</p>
                                <p id="time">${createdAt}</p>
                            </div>

                        </div>

                    </div>
                    <div id="contentPost">${data[i].Content}</div>
                        <div id="postImageCountainer" >
                            <div id="postImage">
                        <img src="${data[i].ImageURL}" alt="">
                    </div>
                        </div>
                    
                    <div id="iconesAndCategories">
                        <div id="postIncones">
                            <i id="likeIcone" class="fa-regular fa-heart ${liked}" data-postid=${data[i].PostID} ></i>
                            <i  id="commentIcone" class="fa-regular fa-comment-dots " data-postid=${data[i].PostID}></i>
                            <i  id= "saveIcone" class="fa-regular fa-bookmark ${saved} " data-postid=${data[i].PostID}></i>
                        </div>
                        <div class="Postcategories">
                        </div>
                    </div>
    `


        middle.append(post)
        for (let j = 0; j < data[i].Categories.length; j++) {
            var PostCategorie = post.querySelector('.Postcategories')

            var category = document.createElement('div')
            category.classList.add('Postcategorie')
            category.innerHTML = data[i].Categories[j]

            PostCategorie.append(category)
        }

    }    
    if (Category == 'like'){
        var hearts = document.querySelectorAll('.fa-heart')
         for (let heart of hearts){
            heart.classList.add('liked')
        }
    }else if (Category == 'save'){        
        var saves = document.querySelectorAll('.fa-bookmark')        
        for (let save of saves){
            save.classList.add('saved')
        }
    }
    }
   
}