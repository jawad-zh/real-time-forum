export function setHomePage() {
    let bodyChildren = document.body.children
    if (bodyChildren) {
        for (let i = 0; i < bodyChildren.length; i++) {
            bodyChildren[i].remove()
        }
    }
    document.body.style.background = 'white'
    document.body.innerHTML = `
   <div id="homePageCountainer">
    <div id="filterSide">
        <div id="logSearch">
            <img src="frontend/state/images/logo.png" alt="">
            <input type="text" name="" id="search" placeholder="search">
        </div>
        <div id="filter">
            <p id="filterTitle" >FILTER POSTS</p>
            <div id="likedByMe">
                <i id="heart" class="fa-regular fa-heart"></i>
                <p>liked by me</p>

            </div>
            <div id="SavedByMe">
                <i id="save" class="fa-regular fa-bookmark"></i>
                <p>saved by me</p>

            </div>
        </div>
        <div id="messages">
            <div id="messagesTitle" >
                FRIENDS
            </div>
            <div id="message" >
                <div id="online" ></div>
                <div id="profileImage" >
                    <img src="frontend/state/images/icones/profile.jpeg" alt="">
                </div>
                <div id="name" >
                    jawad zahraoui
                </div>
                <div id="timeAndNotf" >
                    <p id="time" >11min</p>
                    <div id="notf" >
                    </div>
                </div>
            </div>
             <div class="test" id="message" >
                <div id="online" ></div>
                <div id="profileImage" >
                    <img src="frontend/state/images/icones/profile.jpeg" alt="">
                </div>
                <div id="name" >
                    jawad zahraoui
                </div>
                <div id="timeAndNotf" >
                    <p id="time" >11min</p>
                    <div id="notf" >
                    </div>
                </div>
            </div> <div id="message" >
                <div id="online" ></div>
                <div id="profileImage" >
                    <img src="frontend/state/images/icones/profile.jpeg" alt="">
                </div>
                <div id="name" >
                    jawad zahraoui
                </div>
                <div id="timeAndNotf" >
                    <p id="time" >11min</p>
                    <div id="notf" >
                    </div>
                </div>
            </div> <div class="test" id="message" >
                <div id="online" ></div>
                <div id="profileImage" >
                    <img src="frontend/state/images/icones/profile.jpeg" alt="">
                </div>
                <div id="name" >
                    jawad zahraoui
                </div>
                <div id="timeAndNotf" >
                    <p id="time" >11min</p>
                    <div id="notf" >
                    </div>
                </div>
            </div> <div class="test"id="message" >
                <div id="online" ></div>
                <div id="profileImage" >
                    <img src="frontend/state/images/icones/profile.jpeg" alt="">
                </div>
                <div id="name" >
                    jawad zahraoui
                </div>
                <div id="timeAndNotf" >
                    <p id="time" >11min</p>
                    <div id="notf" >
                    </div>
                </div>
            </div> <div id="message" >
                <div id="online" ></div>
                <div id="profileImage" >
                    <img src="frontend/state/images/icones/profile.jpeg" alt="">
                </div>
                <div id="name" >
                    jawad zahraoui
                </div>
                <div id="timeAndNotf" >
                    <p id="time" >11min</p>
                    <div id="notf" >
                      
                    </div>
                </div>
            </div> <div class="test" id="message" >
                <div id="online" ></div>
                <div id="profileImage" >
                    <img src="frontend/state/images/icones/profile.jpeg" alt="">
                </div>
                <div id="name" >
                    jawad zahraoui
                </div>
                <div id="timeAndNotf" >
                    <p id="time" >11min</p>
                    <div id="notf" >
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id="postSide">
        <div id="postCountainer">
            <div id="navBar">
                <i id="home" class="fa-regular fa-house"></i>
                <i id="add" class="fa-regular fa-square-plus"></i>
                <i id="user" class="fa-regular fa-user"></i>
                <i id="heart" class="fa-regular fa-heart"></i>
                <i id="save" class="fa-regular fa-bookmark"></i>
            </div>
            <div id="post">
                <div id="image">
                    <img src="frontend/state/images/icones/istockphoto-814423752-612x612.jpg" alt="">
                </div>
                <div id="postContent">
                    <div id="title">
                        <div id="date">
                            <p id="month">MAY</p>
                            <p id="day">08</p>
                        </div>
                        <div id="postTitleInfo">
                            <div id="postTitle">hello I'm gonna telling you about </div>
                            <div id="info">thu 10.00 * zoome metting</div>
                        </div>
                    </div>
                    <div id="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo iste fugiat magni
                        sint dicta eaque reprehenderit illum consequuntur distinctio. Modi.</div>
                    <div id="profile">
                        <div id="imageDiv">
                            <img src="frontend/state/images/icones/profile.jpeg" alt="">
                        </div>
                        <div id="ProfileName">jawad zahraoui</div>
                    </div>
                    <div id="reactions">
                        <div id="like">
                            <i id="reactionHeart" class="fa-regular fa-heart"></i>
                            <p id="likeNumbers">11</p>
                        </div>
                        <div id="comment">
                            <i class="fa-regular fa-comment"></i>
                            <p id="commentNumbers">11</p>
                        </div>
                    </div>
                </div>
            </div>
            <div id="post">
                <div id="image">
                    <img src="frontend/state/images/icones/istockphoto-814423752-612x612.jpg" alt="">
                </div>
                <div id="postContent">
                    <div id="title">
                        <div id="date">
                            <p id="month">MAY</p>
                            <p id="day">08</p>
                        </div>
                        <div id="postTitleInfo">
                            <div id="postTitle">hello I'm gonna telling you about </div>
                            <div id="info">thu 10.00 * zoome metting</div>
                        </div>
                    </div>
                    <div id="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo iste fugiat magni
                        sint dicta eaque reprehenderit illum consequuntur distinctio. Modi.</div>
                    <div id="profile">
                        <div id="imageDiv">
                            <img src="frontend/state/images/icones/profile.jpeg" alt="">
                        </div>
                        <div id="ProfileName">jawad zahraoui</div>
                    </div>
                    <div id="reactions">
                        <div id="like">
                            <i id="reactionHeart" class="fa-regular fa-heart"></i>
                            <p id="likeNumbers">11</p>
                        </div>
                        <div id="comment">
                            <i class="fa-regular fa-comment"></i>
                            <p id="commentNumbers">11</p>
                        </div>
                    </div>
                </div>
            </div>
            <div id="post">
                <div id="image">
                    <img src="frontend/state/images/icones/istockphoto-814423752-612x612.jpg" alt="">
                </div>
                <div id="postContent">
                    <div id="title">
                        <div id="date">
                            <p id="month">MAY</p>
                            <p id="day">08</p>
                        </div>
                        <div id="postTitleInfo">
                            <div id="postTitle">hello I'm gonna telling you about </div>
                            <div id="info">thu 10.00 * zoome metting</div>
                        </div>
                    </div>
                    <div id="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo iste fugiat magni
                        sint dicta eaque reprehenderit illum consequuntur distinctio. Modi.</div>
                    <div id="profile">
                        <div id="imageDiv">
                            <img src="frontend/state/images/icones/profile.jpeg" alt="">
                        </div>
                        <div id="ProfileName">jawad zahraoui</div>
                    </div>
                    <div id="reactions">
                        <div id="like">
                            <i id="reactionHeart" class="fa-regular fa-heart"></i>
                            <p id="likeNumbers">11</p>
                        </div>
                        <div id="comment">
                            <i class="fa-regular fa-comment"></i>
                            <p id="commentNumbers">11</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
    <div id="MessageSide"></div>
</div>
    `
}