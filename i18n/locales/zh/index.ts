import type { Translations } from '../types';

export default defineI18nLocale(
  async (locale: string): Promise<Translations> => {
    return {
      home: '首页',
      welcome: '欢迎来到Buppou！', // Assuming 'welcome' is still needed
      seo: (await import('./seo.json')).default,
      fourNobleTruths: (await import('./fourNobleTruths.json')).default,
      eightfoldPath: (await import('./eightfoldPath.json')).default,
      fivePrecepts: (await import('./fivePrecepts.json')).default,
      tenWholesomeActions: (await import('./tenWholesomeActions.json')).default,
      footer: (await import('./footer.json')).default,
      backToHome: '返回首页',
      notFound: '找不到信息',
    };
  }
);
