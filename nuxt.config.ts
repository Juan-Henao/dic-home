// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  app: {
    head: {
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/icons/favicon_DIC.ico', // Ruta del favicon
        },
      ],
    },
    htmlAttrs: {
      lang: 'en', // Cambiar dinámicamente si es necesario
    },
    
  },
  modules: ['@nuxtjs/robots'],
  robots: {
    UserAgent: '*',
    Disallow: '',
    Sitemap: 'https://www.dic.com.co/sitemap.xml',
    autoI18n: {
      locales: [{ code: 'en' }, { code: 'es' }],
      defaultLocale: 'en',
      strategy: 'prefix',
    },
  },
})