export function setImageProfilePage(action){
    console.log('action',action);
    
    switch (action){
     case 'addPrifileImage':
        console.log('add');
        
         var appCountainer = document.createElement('div')
    appCountainer.setAttribute('id','addImageProfileCountainer')
    var app = `
   <div id="addImageProfilePage" >
    <div id="imageProfile" >
        <img  id="ImageProfileSrc" src="" alt="">
    </div>
    <div id="addProfileIconeCountainer" >
        <i id="addProfileIcone"   class="fa-solid fa-plus"></i>
        <input type="file" id="fileInputProfileImage" accept="image/*" >
    </div>
        
    <button id="addImageProfile" >save image</button>
    <button id="ignoreImageProfile" >ignore</button>
   </div>
    `
    appCountainer.innerHTML = app
    document.getElementById('appCountainer').append(appCountainer)
    break
    case 'ignoreImageProfile':
        console.log('remove');
        
        var container = document.getElementById('addImageProfileCountainer')
        if (container){
            container.remove()
        }
    }
   
   
}