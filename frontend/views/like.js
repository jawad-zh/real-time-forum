export function LikeFrontend(data , icone){
    if (data.message === 'like success'){
        icone.classList.add("liked")
    }else if (data.message === 'deslike success'){
        icone.classList.remove("liked")
        
    }
    
}