import { getUserInfo } from "/frontend/services/getUserInfo.js"
import{loadPosts} from "/frontend/views/loadPosts.js"
import { loadUsers } from "./loadUsers.js"
import { scrollTracking } from "../services/scrolling.js"
import {htmlXSS} from '/frontend/services/htmlXSS.js';
export let ExportedUsers = []
export let UserInfo = {}
export async function setHomePage(Category) {    
    let bodyChildren = document.body.children
    if (bodyChildren) {
        for (let i = 0; i < bodyChildren.length; i++) {
            bodyChildren[i].remove()
        }
    }
    // need to check
     UserInfo = await getUserInfo()
     const firstName= htmlXSS(UserInfo.FirstName)
     const lastName = htmlXSS(UserInfo.LastName)
     const Nickname = htmlXSS(UserInfo.Nickname)
    document.body.innerHTML = `
    <div id="appCountainer">
        <div id="navBar">
            <div id="logo">
                <img src="frontend/state/images/logo.png" alt="">
            </div>
            <div id="icones">
                <i id="homePageIcone"  class="fa-regular fa-house   nav-item  active"></i>
                <i  id="creatPostIcone" class="fa-regular fa-square-plus nav-item "></i>
                <i  id="saveIconeFilter" class="fa-regular fa-bookmark nav-item "></i>
                <i  id="likeIconeFilter" class="fa-regular fa-heart nav-item "></i>
                <i class="fa-regular fa-sun" id="lightDarkmoded"></i>
            </div>
            <div id="profile">
                <div id="navBarImage">
                    <img id="navBarImageimg" src="${UserInfo.ImageURL}" alt="">
                </div>
                <p id="logoutName" >${firstName} ${lastName}</p>
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

                            <img  id="ProfilInforamtionImage" src="${UserInfo.ImageURL}" alt="">
                        </div>
                         <div id="howMuchSaves" ><p id="saves">saves</p>
                        <p id="savesNumber" >${UserInfo.saves}</p>
                        </div>
                    </div>
                          <div id="informationName" >
                        <p id="profileNickname" >@${Nickname}</p>
                        <p id="profileName" >${firstName} ${lastName}</p>
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
                             <p id="allCategory" >all</p>
                            <p id="LifestyleCategory" >Lifestyle</p>
                            <p id="artCategory" >art</p>
                           </div>
                            <div id="second" >
                                <p id="Educationategory" >Education</p>
                                <p id="BusinessCategory" >Business</p>
                                <p id="EntertainmentCategory" >Entertainment</p>
                            </div>
                            <div id="third">
                                <p id="OpinionCategory" >Opinion</p>
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
            </div>
             
            <div id="rightSide">
                <p id="messagesTitle" >Recent messages</p>
            
                </div>      
            </div>
            </div>

            `
    // get Posts 
    loadPosts(Category)    
let messagesSection = loadUsers()
scrollTracking()
return messagesSection
}
// const container = document.getElementById('middle')
// console.log('middle',container);

