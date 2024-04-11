// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ['~/assets/css/tailwind.css'],
  modules: [
    '@nuxtjs/i18n',
    '@ant-design-vue/nuxt',
    '@vueuse/nuxt',
  ],
  i18n: {
    baseUrl: 'https://tools.com',
    locales: [
      {
        code: 'en',
        name: 'English',
        file: 'en.ts',
        iso: 'en',
      },
      {
        code: 'zh',
        name: '中文',
        file: 'zh.ts',
        iso: 'zh',
      },
    ],
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    lazy: true,
    langDir: './lang',
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
