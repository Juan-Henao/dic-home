export default defineNuxtRouteMiddleware((to) => {
    const availableRoutes = ['/']; // Define las rutas válidas
    if (!availableRoutes.includes(to.path)) {
      return navigateTo('/'); // Redirige a "/"
    }
  });
  