// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  pages: true,
  ssr: process.env.TAURI != 'true',
  runtimeConfig: {
    public: {
      inTauri: process.env.TAURI == 'true',

    }
  },
  modules: [
    '@kevinmarrec/nuxt-pwa'
  ]
}) 
