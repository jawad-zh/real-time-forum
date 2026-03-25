export function checkCreatPost() {
    const categories = ['lifestyle', 'art', 'education', 'business', 'entertainment', 'opinion']
    const title = document.getElementById('creatPostTitle').value.trim()
    const content = document.getElementById('creatPostContent').value.trim()
    var categoriesChecked = document.querySelectorAll("#creatPostCategories input:checked")

    if (title.length === 0) {
        return "title is required"
    } else if (title.length >= 1000) {
        return 'to many characters the allowed less than 1000'
    } else if (content.length === 0) {
        return "content is required"
    } else if (content.length >= 1000) {
        return 'to many characters the allowed less than 1000'
    } else if (categoriesChecked.length === 0) {
        return 'categories are required'
    } else {
        for (let categoriecheck of categoriesChecked) {


            if (!categories.includes(categoriecheck.value)) {

                return 'invalid categorie'
            }
        }
        return 'success'
    }
}