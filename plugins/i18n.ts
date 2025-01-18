import { createI18n } from 'vue-i18n';

import en from '../locales/en.json';
import es from '../locales/es.json';

export default defineNuxtPlugin(({ vueApp }) => {
  const cookieLocale = useCookie('locale');

  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: cookieLocale.value ?? 'en', // Usar el idioma de la cookie o el predeterminado
    fallbackLocale: 'en',
    messages: {
      en,
      es,
    },
  });

  vueApp.use(i18n);
});
