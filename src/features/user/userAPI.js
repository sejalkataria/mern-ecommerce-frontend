export function fetchLoggedInUserOrders(userId) {
    console.log('userId', userId)
    return new Promise(async (resolve) => {
        const response = await fetch(`http://localhost:8080/orders/?user.id=${userId}`)
        const data = await response.json()
        resolve({ data })
    })
}