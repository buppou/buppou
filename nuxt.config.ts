// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/i18n"],
  i18n: {
    locales: [
      { code: 'vi', iso: 'vi-VN', file: 'vi.json' },
      { code: 'en', iso: 'en-US', file: 'en.json' },
      { code: 'ja', iso: 'ja-JP', file: 'ja.json' },
      { code: 'zh', iso: 'zh-CN', file: 'zh.json' },
      { code: 'ko', iso: 'ko-KR', file: 'ko.json' }
    ],
    lazy: true,
    defaultLocale: 'ja', // Default to Japanese
    strategy: 'no_prefix', // Use no_prefix strategy for cleaner URLs
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',  // recommended
    }
  }
})