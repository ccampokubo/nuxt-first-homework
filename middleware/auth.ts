export default defineNuxtRouteMiddleware((to, from) => {
  const auth = useCookie('userData').value
  console.log('middleware')
  if (!auth) {
    return navigateTo('/')
  }

  if (to.path === '/') {
    if (auth) {
      return navigateTo('/dashboard')
    }
  }
})
