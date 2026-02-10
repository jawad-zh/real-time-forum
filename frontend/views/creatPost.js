export function setCreatPost(){
    document.body.innerHTML = `
     <div id="creatPostCountainer">
        <div id="creatPost">
            <div id="inputs">
                <input id="creatPostTitle" type="text">
                <input id="creatPostContent" type="text">
            </div>
            <div id="creatPostIcones" > 
                <i class="fa-regular fa-image"><p> IMAGES</p></i>
                <i class="fa-solid fa-list"> <p>CATEGORIES</p> </i>
            </div>
            <div id="categories" >
                <p>test</p>
                <p>test</p>
                <p>test</p>
                <p>test</p>
                <p>test</p>
            </div>
            <button id="creatPostButton" >creat your post</button>
        </div>
        <div id="cancelCreatPost">
            <i id="cancelPostIcone" class="fa-solid fa-xmark"></i>
        </div>
    </div>
    `
}