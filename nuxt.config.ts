// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ['~/assets/css/tailwind.css'],
  modules: [
    '@ant-design-vue/nuxt',
    '@vueuse/nuxt',
  ],
  dir: {
    // pages: 'pages/template',
  },
  devServer: {
    port: 8081,
  },
  vite: {
    optimizeDeps: {
      exclude: ['@ffmpeg/ffmpeg'],
    },
    worker: {
      format: 'es',
    },
  },
  postcss: {
    plugins: {
      'postcss-import': {},
      'tailwindcss': {},
      'autoprefixer': {},
      'postcss-nested': {},
    },
  },
})
