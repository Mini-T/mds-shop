export default defineNuxtRouteMiddleware((to, from) => {
    if (useCookie('email').value === null) {
        return navigateTo('/login')
    }   
}) 

