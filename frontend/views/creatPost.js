export function setCreatPost() {
  var creatPostCountainer = document.createElement('div')
  creatPostCountainer.setAttribute('id', 'creatPostCountainer')
  creatPostCountainer.innerHTML = `
            <div id="creatPost">
                <div id="inputs">
                    <input placeholder="title" id="creatPostTitle" type="text">
                    <input  placeholder="content" id="creatPostContent" type="text">
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
        <input type="checkbox" value="lifestyle">
        <span>lifestyle</span>
      </label>
    
      <label class="cat">
        <input type="checkbox" value="art">
        <span>art</span>
      </label>
    
      <label class="cat">
        <input type="checkbox" value="education">
        <span>education</span>
      </label>
      <label class="cat">
        <input type="checkbox" value="business">
        <span>business</span>
      </label><label class="cat">
        <input type="checkbox" value="entertainment">
        <span>entertainment</span>
      </label>
      </label><label class="cat">
        <input type="checkbox" value="opinion">
        <span>opinion</span>
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