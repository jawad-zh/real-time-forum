export async function creatPost(e) {
    e.preventDefault()

    const title = document.getElementById('creatPostTitle').value.trim()
    const content = document.getElementById('creatPostContent').value.trim()
    const imageFile = document.getElementById('fileInput').files[0]
    console.log('imageFile',imageFile);
    
    const inputCategories = {
        'music': '1',
        'footballe': '2',
        'art': '3',
        'sport': '4',
        'technology': '5',
        'recentyl': '6',
        'test': '7',
    }
    const outputCategories = {
        '1': 'music',
        '2': 'footballe',
        '3': 'art',
        '4': 'sport',
        '5': 'technology',
        '6': 'recentyl',
        '7': 'test',
    }
    var categories = []
    var categoriesChecked = document.querySelectorAll("#creatPostCategories input:checked")
    for (let i = 0; i < categoriesChecked.length; i++) {
        categories.push(inputCategories[categoriesChecked[i].value])
        categoriesChecked[i].click()
    }
    const postInformation = new FormData()
    postInformation.append('title', title)
    postInformation.append('content', content)
    for (let cate of categories) {
        postInformation.append('categories[]', cate)
    }
    postInformation.append('image', imageFile)

    const res = await fetch("http://localhost:8080/creatPost", {
        method: "POST",
        body: postInformation
    })

    
    var data = await res.json()
    console.log('data*------------------------- ', data);
    var tempURL =''
    if (imageFile){
         tempURL = URL.createObjectURL(imageFile);
    }
    if (data.status === 'success') {
        var middle = document.getElementById('middle')
        var post = document.createElement('div')
        post.classList.add('PostsCountainer')
        post.dataset.PostID = data.PostID
        post.innerHTML = `
    <div id="profilePost">
                        <div id="profileImage">
                            <img src="frontend/state/images/icones/profile.jpeg" alt="">
                        </div>
                        <div id="NameTitlePost">
                            <p id="name">${data.Nickname}</p>
                            <div id="titleTime">
                                <p id="PostTitle">${title}</p>
                                <p id="time">1h</p>
                            </div>

                        </div>

                    </div>
                    <div id="contentPost">${content}</div>
                        <div id="postImageCountainer" >
                            <div id="postImage">
                        <img src="${tempURL}" alt="image place">
                    </div>
                        </div>
                    
                    <div id="iconesAndCategories">
                        <div id="postIncones">
                            <i id="likeIcone" class="fa-regular fa-heart"></i>
                            <i  id="commentIcone" class="fa-regular fa-comment-dots"></i>
                            <i  id= "saveIcone" class="fa-regular fa-bookmark"></i>
                        </div>
                        <div class="Postcategories">
                        </div>
                    </div>
    `
        var addCategories = post.querySelector('.Postcategories')

        for (let categorie of categories) {

            var cat = document.createElement('div');
            cat.classList.add('Postcategorie');
            cat.textContent = outputCategories[categorie];
            addCategories.append(cat);
        }

        middle.prepend(post)
        document.getElementById("creatPostCountainer").classList.remove("active")

    }
    document.getElementById('creatPostTitle').value = ''
    document.getElementById('creatPostContent').value = ''
}