export function setCreatPost(){
    document.body.innerHTML = `
    <div id="creatPostPage">
        <div id="creatPostCountainer">
            <p id="creatPostTitle">creat post</p>
            <input class="creatPostIput" type="text" placeholder="title">
            <input class="creatPostIput" type="text" placeholder="content">
            <div class="uploadImage">
                <i class="fa-solid fa-upload"></i> 
                <input type="file" id="fileInput" accept="image/*" />
                <span id="fileName">No file chosen</span>
            </div>
            <div>
                <input type="checkbox" name="CategorySelected" id="1" value="General" />
                <label for="1" class="category">General</label>

                </select>
            </div>
            <button id="creatPostButton" >creat Post</button>
        </div>
        <div id="cancelCreatPost">
            <i class="fas fa-times"></i>
        </div>



    </div>

    </div>`
}