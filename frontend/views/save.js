export function savePostFront(data, icone) {
    console.log('entreeeeeeeeeeeeeeeeeeeed');

    const saveValue = document.getElementById("savesNumber")
    if (data.message === 'save success') {
        console.log('saved');

        icone.classList.add("saved")
        var newValue = Number(saveValue.textContent) + 1
        saveValue.innerHTML = newValue
    } else if (data.message === 'unsave success') {
        console.log('unsaved');

        icone.classList.remove("saved")
        var newValue = Number(saveValue.textContent) - 1
        saveValue.innerHTML = newValue
    }
}