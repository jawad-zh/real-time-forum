export function setCreatPost(){
    var creatPostCountainer = document.createElement('div')
    creatPostCountainer.setAttribute('id','creatPostCountainer')
    creatPostCountainer.innerHTML =`
        
            <div id="creatPost">
                <div id="inputs">
                    <input id="creatPostTitle" type="text">
                    <input id="creatPostContent" type="text">
                </div>
                <div id="creatPostIcones" > 
                    <div id="imageIconeCountainer" >
                        <input type="file" id="fileInput" accept="image/*" >
                        <i id="imageUploadIcone" class="fa-regular fa-image"></i>
                        <p>Image</p>
                    </div>
                </div>
                <div id="creatPostCategories" >
                   <label class="cat">
        <input type="checkbox" value="1">
        <span>music</span>
      </label>
    
      <label class="cat">
        <input type="checkbox" value="2">
        <span>footballe</span>
      </label>
    
      <label class="cat">
        <input type="checkbox" value="3">
        <span>art</span>
      </label>
    
      <label class="cat">
        <input type="checkbox" value="4">
        <span>sport</span>
      </label>
      <label class="cat">
        <input type="checkbox" value="5">
        <span>technology</span>
      </label><label class="cat">
        <input type="checkbox" value="6">
        <span>recentyl</span>
      </label>
      </label><label class="cat">
        <input type="checkbox" value="7">
        <span>test</span>
      </label>
                </div>
                <button id="creatPostButton" >creat your post</button>
            </div>
            <div class="cancelCreatPost">
                <i  id="cancelCreatPost" class="fa-solid fa-xmark"></i>
            </div>
        </div>
    `
    document.body.append(creatPostCountainer)
     document.getElementById("creatPostCountainer").classList.add("active")

}