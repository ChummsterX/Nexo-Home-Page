// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css', '@fortawesome/fontawesome-svg-core/styles.css'],
  build: { transpile: ['@fortawesome/vue-fontawesome'], },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  components: [
    {
      path: '~/components',
      pathPrefix: false, // [!code ++]
    },
  ],

  compatibilityDate: '2024-08-15',
})