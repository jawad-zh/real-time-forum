export async function logout() {
     var res = await fetch("http://localhost:8080/logout", {
          method: "POST",
          headers: {
               "Content-Type": "application/json"
          }
     })
     var data = await res.json()
     if (data.status === 'success') {
          return true
     }
     return false
}