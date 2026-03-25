export async function creatPost(e) {
    e.preventDefault()

    const title = document.getElementById('creatPostTitle').value.trim()
    const content = document.getElementById('creatPostContent').value.trim()
    const imageFile = document.getElementById('fileInput').files[0]
    const inputCategories = {
        'lifestyle': '1',
        'art': '2',
        'education': '3',
        'business': '4',
        'entertainment': '5',
        'opinion': '6',
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
    if (res) {
        var data = await res.json()
    }
    console.log('data returneed',data);
       const RenderPostData = {
        title : title,
        content:content,
        categories:categories,
        }
        console.log('render post data form creatPost',RenderPostData);
        
       return {data:data,RenderPostData:RenderPostData}
}