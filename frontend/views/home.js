export function setHomePage() {
    let bodyChildren = document.body.children
    if (bodyChildren) {
        for (let i = 0; i < bodyChildren.length; i++) {
            bodyChildren[i].remove()
        }
    }
    // document.body.style.background = 'white'
//     document.body.innerHTML = `
//    <div id="homePageCountainer">
//     <div id="filterSide">
//         <div id="logSearch">
//             <img src="frontend/state/images/logo.png" alt="">
//             <input type="text" name="" id="search" placeholder="search">
//         </div>
//         <div id="filter">
//             <p id="filterTitle" >FILTER POSTS</p>
//             <div id="likedByMe">
//                 <i id="heart" class="fa-regular fa-heart"></i>
//                 <p>liked by me</p>

//             </div>
//             <div id="SavedByMe">
//                 <i id="save" class="fa-regular fa-bookmark"></i>
//                 <p>saved by me</p>

//             </div>
//         </div>
//         <div id="messages">
//             <div id="messagesTitle" >
//                 FRIENDS
//             </div>
//             <div id="message" >
//                 <div id="online" ></div>
//                 <div id="profileImage" >
//                     <img src="frontend/state/images/icones/profile.jpeg" alt="">
//                 </div>
//                 <div id="name" >
//                     jawad zahraoui
//                 </div>
//                 <div id="timeAndNotf" >
//                     <p id="time" >11min</p>
//                     <div id="notf" >
//                     </div>
//                 </div>
//             </div>
//              <div class="test" id="message" >
//                 <div id="online" ></div>
//                 <div id="profileImage" >
//                     <img src="frontend/state/images/icones/profile.jpeg" alt="">
//                 </div>
//                 <div id="name" >
//                     jawad zahraoui
//                 </div>
//                 <div id="timeAndNotf" >
//                     <p id="time" >11min</p>
//                     <div id="notf" >
//                     </div>
//                 </div>
//             </div> <div id="message" >
//                 <div id="online" ></div>
//                 <div id="profileImage" >
//                     <img src="frontend/state/images/icones/profile.jpeg" alt="">
//                 </div>
//                 <div id="name" >
//                     jawad zahraoui
//                 </div>
//                 <div id="timeAndNotf" >
//                     <p id="time" >11min</p>
//                     <div id="notf" >
//                     </div>
//                 </div>
//             </div> <div class="test" id="message" >
//                 <div id="online" ></div>
//                 <div id="profileImage" >
//                     <img src="frontend/state/images/icones/profile.jpeg" alt="">
//                 </div>
//                 <div id="name" >
//                     jawad zahraoui
//                 </div>
//                 <div id="timeAndNotf" >
//                     <p id="time" >11min</p>
//                     <div id="notf" >
//                     </div>
//                 </div>
//             </div> <div class="test"id="message" >
//                 <div id="online" ></div>
//                 <div id="profileImage" >
//                     <img src="frontend/state/images/icones/profile.jpeg" alt="">
//                 </div>
//                 <div id="name" >
//                     jawad zahraoui
//                 </div>
//                 <div id="timeAndNotf" >
//                     <p id="time" >11min</p>
//                     <div id="notf" >
//                     </div>
//                 </div>
//             </div> <div id="message" >
//                 <div id="online" ></div>
//                 <div id="profileImage" >
//                     <img src="frontend/state/images/icones/profile.jpeg" alt="">
//                 </div>
//                 <div id="name" >
//                     jawad zahraoui
//                 </div>
//                 <div id="timeAndNotf" >
//                     <p id="time" >11min</p>
//                     <div id="notf" >
                      
//                     </div>
//                 </div>
//             </div> <div class="test" id="message" >
//                 <div id="online" ></div>
//                 <div id="profileImage" >
//                     <img src="frontend/state/images/icones/profile.jpeg" alt="">
//                 </div>
//                 <div id="name" >
//                     jawad zahraoui
//                 </div>
//                 <div id="timeAndNotf" >
//                     <p id="time" >11min</p>
//                     <div id="notf" >
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
//     <div id="postSide">
//         <div id="postCountainer">
//             <div id="navBar">
//                 <i id="home" class="fa-regular fa-house"></i>
//                 <i id="add" class="fa-regular fa-square-plus"></i>
//                 <i id="user" class="fa-regular fa-user"></i>
//                 <i id="heart" class="fa-regular fa-heart"></i>
//                 <i id="save" class="fa-regular fa-bookmark"></i>
//             </div>
//             <div id="post">
//                 <div id="image">
//                     <img src="frontend/state/images/icones/istockphoto-814423752-612x612.jpg" alt="">
//                 </div>
//                 <div id="postContent">
//                     <div id="title">
//                         <div id="date">
//                             <p id="month">MAY</p>
//                             <p id="day">08</p>
//                         </div>
//                         <div id="postTitleInfo">
//                             <div id="postTitle">hello I'm gonna telling you about </div>
//                             <div id="info">thu 10.00 * zoome metting</div>
//                         </div>
//                     </div>
//                     <div id="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo iste fugiat magni
//                         sint dicta eaque reprehenderit illum consequuntur distinctio. Modi.</div>
//                     <div id="profile">
//                         <div id="imageDiv">
//                             <img src="frontend/state/images/icones/profile.jpeg" alt="">
//                         </div>
//                         <div id="ProfileName">jawad zahraoui</div>
//                     </div>
//                     <div id="reactions">
//                         <div id="like">
//                             <i id="reactionHeart" class="fa-regular fa-heart"></i>
//                             <p id="likeNumbers">11</p>
//                         </div>
//                         <div id="comment">
//                             <i class="fa-regular fa-comment"></i>
//                             <p id="commentNumbers">11</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div id="post">
//                 <div id="image">
//                     <img src="frontend/state/images/icones/istockphoto-814423752-612x612.jpg" alt="">
//                 </div>
//                 <div id="postContent">
//                     <div id="title">
//                         <div id="date">
//                             <p id="month">MAY</p>
//                             <p id="day">08</p>
//                         </div>
//                         <div id="postTitleInfo">
//                             <div id="postTitle">hello I'm gonna telling you about </div>
//                             <div id="info">thu 10.00 * zoome metting</div>
//                         </div>
//                     </div>
//                     <div id="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo iste fugiat magni
//                         sint dicta eaque reprehenderit illum consequuntur distinctio. Modi.</div>
//                     <div id="profile">
//                         <div id="imageDiv">
//                             <img src="frontend/state/images/icones/profile.jpeg" alt="">
//                         </div>
//                         <div id="ProfileName">jawad zahraoui</div>
//                     </div>
//                     <div id="reactions">
//                         <div id="like">
//                             <i id="reactionHeart" class="fa-regular fa-heart"></i>
//                             <p id="likeNumbers">11</p>
//                         </div>
//                         <div id="comment">
//                             <i class="fa-regular fa-comment"></i>
//                             <p id="commentNumbers">11</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div id="post">
//                 <div id="image">
//                     <img src="frontend/state/images/icones/istockphoto-814423752-612x612.jpg" alt="">
//                 </div>
//                 <div id="postContent">
//                     <div id="title">
//                         <div id="date">
//                             <p id="month">MAY</p>
//                             <p id="day">08</p>
//                         </div>
//                         <div id="postTitleInfo">
//                             <div id="postTitle">hello I'm gonna telling you about </div>
//                             <div id="info">thu 10.00 * zoome metting</div>
//                         </div>
//                     </div>
//                     <div id="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo iste fugiat magni
//                         sint dicta eaque reprehenderit illum consequuntur distinctio. Modi.</div>
//                     <div id="profile">
//                         <div id="imageDiv">
//                             <img src="frontend/state/images/icones/profile.jpeg" alt="">
//                         </div>
//                         <div id="ProfileName">jawad zahraoui</div>
//                     </div>
//                     <div id="reactions">
//                         <div id="like">
//                             <i id="reactionHeart" class="fa-regular fa-heart"></i>
//                             <p id="likeNumbers">11</p>
//                         </div>
//                         <div id="comment">
//                             <i class="fa-regular fa-comment"></i>
//                             <p id="commentNumbers">11</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>

//     </div>
//     <div id="MessageSide"></div>
// </div>
//     `
    document.body.innerHTML = `
    <div id="appCountainer">
        <div id="navBar">
            <div id="logo">
                <img src="/logo/1.png" alt="">
            </div>
            <div id="icones">
                <i class="fa-solid fa-house"></i>
                <i class="fa-regular fa-comment-dots"></i>
                <i class="fa-regular fa-bell"></i>
                <i class="fa-regular fa-heart"></i>
            </div>
            <div id="profile">
                <div id="navBarImage">
                    <img src="/frontend/state/images/icones/profile.jpeg" alt="">
                </div>
                <p>jawad zahraoui</p>
            </div>
        </div>
        <div id="homePageCountainer">


            <div id="letSide">
                <div id="leftProfile">
                    <div id="backgroundLeft" >
                        <!-- <img src="/frontend/state/images/darckbackg.png" alt="jssssssp"> -->
                    </div>
                    <div id="profilneAndIformations" >
                        <div id="howMuchLike" ><p id="likes">likes</p>
                        <p id="likesNumber" >100</p>
                        </div>
                        <div id="informationImage" >

                            <img  id="ProfilInforamtionImage" src="/frontend/state/images/icones/profile.jpeg" alt="">
                        </div>
                         <div id="howMuchSaves" ><p id="saves">saves</p>
                        <p id="savesNumber" >100</p>
                        </div>
                    </div>
                    <div id="informationName" >
                        jawad zahraoui
                    </div>
                </div>
                <div id="categories">
                    <div id="categorieTitle" >
                        CATEGORIS
                      
                    </div>
                      <div id="categorieCountainer" >
                           <div id="first" >
                             <p>music</p>
                            <p>footballe</p>
                            <p>art</p>
                           </div>
                            <div id="second" >
                                <p>sport</p>
                                <p>technology</p>
                                <p>recent</p>
                            </div>
                            <div id="third">
                                <p>test</p>
                            </div>
                        </div>
                        </div>
            </div>
            <div id="middle">
                <!-- <div id="creatPostCountainer">
                    <div id="inputSectionAndProfile">
                        <div id="creatPostProfile">
                            <img src="/frontend/state/images/icones/profile.jpeg" alt="">
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
                <div id="PostCountainer">
                    <div id="profilePost">
                        <div id="profileImage">
                            <img src="/frontend/state/images/icones/profile.jpeg" alt="">
                        </div>
                        <div id="NameTitlePost">
                            <p id="name">jawad zahraoui</p>
                            <div id="titleTime">
                                <p id="PostTitle">title of my post</p>
                                <p id="time">1h</p>
                            </div>

                        </div>

                    </div>
                    <div id="contentPost">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati vitae est
                        suscipit animi blanditiis eaque?</div>
                        <div id="postImageCountainer" >
                            <div id="postImage">
                        <img src="/frontend/state/images/icones/istockphoto-814423752-612x612.jpg" alt="">
                    </div>
                        </div>
                    
                    <div id="iconesAndCategories">
                        <div id="postIncones">
                            <i class="fa-regular fa-heart"></i>
                            <i class="fa-regular fa-comment-dots"></i>
                        </div>
                        <div id="Postcategories">
                            <div class="Postcategorie">
                                music
                            </div>
                        </div>
                    </div>
                </div>
                <!-- ------------------------------------------ -->
                      <div id="PostCountainer">
                    <div id="profilePost">
                        <div id="profileImage">
                            <img src="/frontend/state/images/icones/profile.jpeg" alt="">
                        </div>
                        <div id="NameTitlePost">
                            <p id="name">jawad zahraoui</p>
                            <div id="titleTime">
                                <p id="PostTitle">title of my post</p>
                                <p id="time">1h</p>
                            </div>

                        </div>

                    </div>
                    <div id="contentPost">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati vitae est
                        suscipit animi blanditiis eaque?</div>
                        <div id="postImageCountainer" >
                            <div id="postImage">
                        <img src="/frontend/state/images/icones/istockphoto-814423752-612x612.jpg" alt="">
                    </div>
                        </div>
                    
                    <div id="iconesAndCategories">
                        <div id="postIncones">
                            <i class="fa-regular fa-heart"></i>
                            <i class="fa-regular fa-comment-dots"></i>
                        </div>
                        <div id="Postcategories">
                            <div class="Postcategorie">
                                music
                            </div>
                            <div class="Postcategorie">
                                art
                            </div>
                        </div>
                    </div>
                </div>   <div id="PostCountainer">
                    <div id="profilePost">
                        <div id="profileImage">
                            <img src="/frontend/state/images/icones/profile.jpeg" alt="">
                        </div>
                        <div id="NameTitlePost">
                            <p id="name">jawad zahraoui</p>
                            <div id="titleTime">
                                <p id="PostTitle">title of my post</p>
                                <p id="time">1h</p>
                            </div>

                        </div>

                    </div>
                    <div id="contentPost">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati vitae est
                        suscipit animi blanditiis eaque?</div>
                        <div id="postImageCountainer" >
                            <div id="postImage">
                        <img src="/frontend/state/images/icones/istockphoto-814423752-612x612.jpg" alt="">
                    </div>
                        </div>
                    
                    <div id="iconesAndCategories">
                        <div id="postIncones">
                            <i class="fa-regular fa-heart"></i>
                            <i class="fa-regular fa-comment-dots"></i>
                        </div>
                        <div id="Postcategories">
                            <div class="Postcategorie">
                                art
                            </div>
                        </div>
                    </div>
                </div>
                <!-- ------------------------------------------ -->
            </div>
             
            <div id="rightSide">
                <p id="messagesTitle" >Recent messages</p>
                <div id="messageCountainer" >
                    <div id="messageProfile" >
                        <img src="/frontend/state/images/icones/profile.jpeg" alt="">
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
                        <img src="/frontend/state/images/icones/profile.jpeg" alt="">
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
                        <img src="/frontend/state/images/icones/profile.jpeg" alt="">
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
                        <img src="/frontend/state/images/icones/profile.jpeg" alt="">
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
                        <img src="/frontend/state/images/icones/profile.jpeg" alt="">
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
                        <img src="/frontend/state/images/icones/profile.jpeg" alt="">
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
                        <img src="/frontend/state/images/icones/profile.jpeg" alt="">
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
                        <img src="/frontend/state/images/icones/profile.jpeg" alt="">
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
                        <img src="/frontend/state/images/icones/profile.jpeg" alt="">
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
                        <img src="/frontend/state/images/icones/profile.jpeg" alt="">
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
                        <img src="/frontend/state/images/icones/profile.jpeg" alt="">
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
                        <img src="/frontend/state/images/icones/profile.jpeg" alt="">
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
                        <img src="/frontend/state/images/icones/profile.jpeg" alt="">
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
                        <img src="/frontend/state/images/icones/profile.jpeg" alt="">
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
                        <img src="/frontend/state/images/icones/profile.jpeg" alt="">
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
                        <img src="/frontend/state/images/icones/profile.jpeg" alt="">
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
                        <img src="/frontend/state/images/icones/profile.jpeg" alt="">
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
                        <img src="/frontend/state/images/icones/profile.jpeg" alt="">
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
                        <img src="/frontend/state/images/icones/profile.jpeg" alt="">
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
                        <img src="/frontend/state/images/icones/profile.jpeg" alt="">
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
                        <img src="/frontend/state/images/icones/profile.jpeg" alt="">
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
                        <img src="/frontend/state/images/icones/profile.jpeg" alt="">
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
                        <img src="/frontend/state/images/icones/profile.jpeg" alt="">
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
                        <img src="/frontend/state/images/icones/profile.jpeg" alt="">
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
                        <img src="/frontend/state/images/icones/profile.jpeg" alt="">
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
                        <img src="/frontend/state/images/icones/profile.jpeg" alt="">
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
                        <img src="/frontend/state/images/icones/profile.jpeg" alt="">
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
                        <img src="/frontend/state/images/icones/profile.jpeg" alt="">
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
                        <img src="/frontend/state/images/icones/profile.jpeg" alt="">
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
                        <img src="/frontend/state/images/icones/profile.jpeg" alt="">
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
                        <img src="/frontend/state/images/icones/profile.jpeg" alt="">
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
                        <img src="/frontend/state/images/icones/profile.jpeg" alt="">
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
                        <img src="/frontend/state/images/icones/profile.jpeg" alt="">
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
                        <img src="/frontend/state/images/icones/profile.jpeg" alt="">
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
                        <img src="/frontend/state/images/icones/profile.jpeg" alt="">
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
                        <img src="/frontend/state/images/icones/profile.jpeg" alt="">
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
                        <img src="/frontend/state/images/icones/profile.jpeg" alt="">
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
                        <img src="/frontend/state/images/icones/profile.jpeg" alt="">
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
                        <img src="/frontend/state/images/icones/profile.jpeg" alt="">
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
                        <img src="/frontend/state/images/icones/profile.jpeg" alt="">
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
                        <img src="/frontend/state/images/icones/profile.jpeg" alt="">
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
                        <img src="/frontend/state/images/icones/profile.jpeg" alt="">
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
                        <img src="/frontend/state/images/icones/profile.jpeg" alt="">
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
                        <img src="/frontend/state/images/icones/profile.jpeg" alt="">
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
                        <img src="/frontend/state/images/icones/profile.jpeg" alt="">
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
                        <img src="/frontend/state/images/icones/profile.jpeg" alt="">
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
                        <img src="/frontend/state/images/icones/profile.jpeg" alt="">
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
                        <img src="/frontend/state/images/icones/profile.jpeg" alt="">
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
                        <img src="/frontend/state/images/icones/profile.jpeg" alt="">
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
                        <img src="/frontend/state/images/icones/profile.jpeg" alt="">
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
                        <img src="/frontend/state/images/icones/profile.jpeg" alt="">
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
                        <img src="/frontend/state/images/icones/profile.jpeg" alt="">
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
                        <img src="/frontend/state/images/icones/profile.jpeg" alt="">
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
                        <img src="/frontend/state/images/icones/profile.jpeg" alt="">
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
                        <img src="/frontend/state/images/icones/profile.jpeg" alt="">
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
                        <img src="/frontend/state/images/icones/profile.jpeg" alt="">
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
    </div>
    `

}