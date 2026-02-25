export function setCreatPost() {
  var alert = document.createElement('div')
  alert.setAttribute('id', 'creatPostAlert')
  document.body.append(alert)
  var creatPostCountainer = document.createElement('div')
  creatPostCountainer.setAttribute('id', 'creatPostCountainer')
  creatPostCountainer.innerHTML = `
          
            <div id="creatPost">
                <div id="inputs">
                    <input id="creatPostTitle" type="text">
                    <input id="creatPostContent" type="text">
                </div>
                <div id="creatPostIcones" > 
                    <div id="imageIconeCountainer" >
                        <input type="file" id="fileInput" accept="image/*" >
                        <i id="imageUploadIcone" class="fa-regular fa-image"></i>
                        <p id="imageTextIcone" >Image</p>
                    </div>
                </div>
                <div id="creatPostCategories" >
                   <label class="cat">
        <input type="checkbox" value="music">
        <span>music</span>
      </label>
    
      <label class="cat">
        <input type="checkbox" value="footballe">
        <span>footballe</span>
      </label>
    
      <label class="cat">
        <input type="checkbox" value="art">
        <span>art</span>
      </label>
    
      <label class="cat">
        <input type="checkbox" value="sport">
        <span>sport</span>
      </label>
      <label class="cat">
        <input type="checkbox" value="technology">
        <span>technology</span>
      </label><label class="cat">
        <input type="checkbox" value="recentyl">
        <span>recentyl</span>
      </label>
      </label><label class="cat">
        <input type="checkbox" value="test">
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