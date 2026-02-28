let Postoffset = 0
let lastCategory = null

export async function getPost(Category,flag) {
    if (flag !== 'scroll'){Postoffset=0}
    if (Category !== lastCategory) {
        Postoffset = 0
        lastCategory = Category
    }
    const res = await fetch(
        `http://localhost:8080/getPosts?category=${Category}&postoffset=${Postoffset}`,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        }
    )
    const data = await res.json()

    if (data && data.length !== 0) {
        Postoffset += 10
    }
    return data
}
