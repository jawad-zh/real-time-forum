export function imageViewer() {
    var input = document.getElementById('fileInputProfileImage')
    input.click()
    input.addEventListener('change', () => {
        var inputValue = input.files[0]
        var image = document.getElementById('ImageProfileSrc')
        if (inputValue) {
            console.log('siiiiiiiiiiiiii');
            var imageURL = URL.createObjectURL(inputValue)
            image.src = imageURL
        } else {
            console.log('nooooooooooooooooo');
            return
        }

    })
}