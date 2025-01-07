import { createI18n } from 'vue-i18n';

import en from '../locales/en.json';
import es from '../locales/es.json';

export default defineNuxtPlugin(({ vueApp }) => {
  const getBrowserLocale = () => {
    if (typeof navigator !== 'undefined' && navigator.language) {
      console.log('navigator.language:', navigator.language);
      return navigator.language.split('-')[0];
    }
    // Idioma predeterminado si navigator no está disponible (por ejemplo, en SSR)
    return 'en';
  };

  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: getBrowserLocale(), // Idioma detectado o predeterminado
    fallbackLocale: 'en', // Idioma de respaldo
    messages: {
      en,
      es,
    },
  });

  vueApp.use(i18n);
});
