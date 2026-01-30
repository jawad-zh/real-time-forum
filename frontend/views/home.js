function setHomePage(){
    let bodyChildren = document.body.children
    if (bodyChildren){
        for(let i =0 ; i < bodyChildren.length ; i++){
            bodyChildren[i].remove()
        }
    }
}