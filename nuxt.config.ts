// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/i18n'],
  i18n: {
    locales: [
      { code: 'vi', iso: 'vi-VN', file: 'vi/index.ts' },
      { code: 'en', iso: 'en-US', file: 'en/index.ts' },
      { code: 'ja', iso: 'ja-JP', file: 'ja/index.ts' },
      { code: 'zh', iso: 'zh-CN', file: 'zh/index.ts' },
      { code: 'ko', iso: 'ko-KR', file: 'ko/index.ts' },
    ],
    lazy: true,
    defaultLocale: 'ja', // Default to Japanese
    strategy: 'no_prefix', // Use no_prefix strategy for cleaner URLs
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root', // recommended
    },
    baseUrl: process.env.NUXT_PUBLIC_BASE_URL || 'http://localhost:3000', // Add your production URL here
  },
});
