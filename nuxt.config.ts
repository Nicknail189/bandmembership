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
            // link: [{ rel: 'icon', type: 'image/png', href: '@/assets/images/ddd.png' }]
            // link: [{ rel: 'icon', type: 'image/png', href: 'https://www.zztop.com/templates/default/images/favicon_32.png' }]
            link: [{ rel: 'icon', type: 'image/png', href: 'https://foofighters.com/wp-content/themes/foo-fighters/public/icons/favicon-32x32.png' }]
        }
    },
})