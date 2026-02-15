export function savePostFront(data , icone){
    const saveValue = document.getElementById("savesNumber")
      if (data.message === 'save success'){
        icone.classList.add("saved")
        var newValue = Number(saveValue.textContent)+1
        saveValue.innerHTML = newValue
    }else if (data.message === 'unsave success'){
        icone.classList.remove("saved")
        var newValue = Number(saveValue.textContent)-1
        saveValue.innerHTML = newValue
    }
}