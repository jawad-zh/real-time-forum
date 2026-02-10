export function setCreatPost(){
    document.body.innerHTML = `
  <div id="creatPostCountainer">
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
    <span>Technology</span>
  </label>

  <label class="cat">
    <input type="checkbox" value="2">
    <span>Sports</span>
  </label>

  <label class="cat">
    <input type="checkbox" value="3">
    <span>Movies</span>
  </label>

  <label class="cat">
    <input type="checkbox" value="4">
    <span>Music</span>
  </label>
  <label class="cat">
    <input type="checkbox" value="4">
    <span>Music</span>
  </label><label class="cat">
    <input type="checkbox" value="4">
    <span>Music</span>
  </label>
            </div>
            <button id="creatPostButton" >creat your post</button>
        </div>
        <div class="cancelCreatPost">
            <i  id="cancelCreatPost" class="fa-solid fa-xmark"></i>
        </div>
    </div>
    `
}