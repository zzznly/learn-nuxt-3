export default defineNuxtRouteMiddleware(() => {
  const { isAdmin, isAuthenticated } = useAuthUser();

  if (!isAuthenticated) return navigateTo('/login');
  if (!isAdmin.value) return navigateTo('/');
});
