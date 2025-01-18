
export default defineNuxtRouteMiddleware((to,from) => {


  const cookieLocale = useCookie('locale', {
    sameSite: 'Lax', // La cookie solo será enviada para solicitudes de navegación del mismo dominio
    maxAge: 60 * 60 * 24 * 365, // Opcional: duración de la cookie (en segundos)
    
  });
       if (!cookieLocale.value) {
      // Detectar el idioma preferido del usuario
      const preferredLocale = detectUserLocale(); // Implementa esta función según tus necesidades
      cookieLocale.value = preferredLocale;
    }
  
    // Establecer el idioma de la aplicación
  });

  export function detectUserLocale() {
    // Lógica para detectar el idioma del usuario
    // Por ejemplo, puedes usar el encabezado Accept-Language
      const req = useRequestHeaders();
      const acceptLanguage = req['accept-language'];
      if (acceptLanguage) {
        const locales = acceptLanguage.split(',');
        if (locales.length > 0) {
          return locales[0].split('-')[0]; // Obtener el código de idioma
        }
      }
    
    return 'en'; // Idioma predeterminado
  }
  
  