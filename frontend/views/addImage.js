export function addImage() {
    var input = document.getElementById('fileInputProfileImage')
    var inputValue = input.files[0]
    var imageURL = URL.createObjectURL(inputValue)
    var addImageCountainer = document.getElementById('addImageProfileCountainer')
    var profileImage = document.getElementById('ProfilInforamtionImage')
    var navBarImage = document.getElementById('navBarImageimg')
    addImageCountainer.remove()
    profileImage.src = imageURL
    navBarImage.src = imageURL

}