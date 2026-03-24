export function sortUsers(Data){
const withMessages = []
const withoutMessages = []

Data.forEach(user => {
    if (user.LastMessageTime && user.LastMessageTime.String) {
        withMessages.push(user)
    } else {
        withoutMessages.push(user)
    }
})

// sort users with messages by newest first
withMessages.sort((a, b) => new Date(b.LastMessageTime.String) - new Date(a.LastMessageTime.String))

// sort users without messages alphabetically by FirstName (or Nickname)
withoutMessages.sort((a, b) => {
    const nameA = (a.FirstName || a.Nickname || "").toLowerCase()
    const nameB = (b.FirstName || b.Nickname || "").toLowerCase()
    return nameA.localeCompare(nameB)
})

return [...withMessages, ...withoutMessages]
}

