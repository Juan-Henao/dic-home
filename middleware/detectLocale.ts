import { useI18n } from "vue-i18n";

export default defineNuxtRouteMiddleware((to, from) => {
    const { locale } = useI18n();
    const cookieLocale = useCookie('locale');
  
    if (!cookieLocale.value) {
      // Detectar el idioma preferido del usuario
      const preferredLocale = detectUserLocale(); // Implementa esta función según tus necesidades
      cookieLocale.value = preferredLocale;
    }
  
    // Establecer el idioma de la aplicación
    locale.value = cookieLocale.value;
  });

  export function detectUserLocale() {
    // Lógica para detectar el idioma del usuario
    // Por ejemplo, puedes usar el encabezado Accept-Language
    if (import.meta.server) {
      const req = useRequestHeaders();
      const acceptLanguage = req['accept-language'];
      if (acceptLanguage) {
        const locales = acceptLanguage.split(',');
        if (locales.length > 0) {
          return locales[0].split('-')[0]; // Obtener el código de idioma
        }
      }
    }
    return 'en'; // Idioma predeterminado
  }
  
  