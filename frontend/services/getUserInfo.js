export async function getUserInfo() {
    var res = await fetch("/getUserInfo", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
    var data = await res.json()
    return data

}