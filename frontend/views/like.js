export function LikeFrontend(data, icone) {
    const likeValue = document.getElementById("likesNumber")
    if (data.message === 'like success') {
        icone.classList.add("liked")
        var newValue = Number(likeValue.textContent) + 1
        likeValue.innerHTML = newValue
    } else if (data.message === 'deslike success') {
        icone.classList.remove("liked")
        var newValue = Number(likeValue.textContent) - 1
        likeValue.innerHTML = newValue
    }
}