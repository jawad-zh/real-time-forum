export function savePostFront(data , icone){
      if (data.message === 'save success'){
        icone.classList.add("saved")
    }else if (data.message === 'unsave success'){
        icone.classList.remove("saved")
        
    }
}