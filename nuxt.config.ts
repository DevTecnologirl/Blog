export default defineNuxtConfig({
  css: ['@/assets/styles/main.sass'],
  buildModules: ['@pinia/nuxt'],
  serverMiddleware: [
    {
      path: '/api',
      handler: '~/api/index.ts',
    },
  ],
});
