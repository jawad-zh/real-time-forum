export async function logout() {
     var res = await fetch("/logout", {
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