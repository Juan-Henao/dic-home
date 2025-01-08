// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  app: {
    head: {
      title: 'DIC', // Este será el título por defecto en todas las páginas
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/icons/favicon_DIC.ico', // Ruta del favicon
        },
      ]
    },
    
  },

})