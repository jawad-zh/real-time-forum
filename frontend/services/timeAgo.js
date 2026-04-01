export function TimeAgo(createdAt) {
    var postDate = new Date(createdAt.replace(" ", "T"))
    const now = new Date()

    const seconds = Math.floor((now - postDate) / 1000)

    if (seconds < 60) return seconds + "s"

    const minutes = Math.floor(seconds / 60)
    if (minutes < 60) return minutes + "m"

    const hours = Math.floor(minutes / 60)
    if (hours < 24) return hours + "h"

    const days = Math.floor(hours / 24)
    if (days < 7) return days + "d"

    const weeks = Math.floor(days / 7)
    if (weeks < 4) return weeks + "w"

    const months = Math.floor(days / 30)
    return months + "mo"
}
export function formatTime(isoString) {
    const date = new Date(isoString);

    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");

    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");

    return `${year}-${month}-${day} ${hours}:${minutes}`;
}

