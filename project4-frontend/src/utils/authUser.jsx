export function authUser() {
    const user = JSON.parse(sessionStorage.getItem('myem'))
    if (!user) {
        window.location.href = '/'
    }
}