// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss' , 'nuxt-icon'
  ],

  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],

  app: {
        head: {
            link: [{ rel: 'icon', type: 'image/png', href: '@/assets/images/ddd.png' }]
        }
    },
})