import type { Translations } from '../types';

export default defineI18nLocale(
  async (locale: string): Promise<Translations> => {
    return {
      home: 'ホーム',
      welcome: 'Buppouへようこそ！', // Assuming 'welcome' is still needed
      seo: (await import('./seo.json')).default,
      fourNobleTruths: (await import('./fourNobleTruths.json')).default,
      eightfoldPath: (await import('./eightfoldPath.json')).default,
      fivePrecepts: (await import('./fivePrecepts.json')).default,
      footer: (await import('./footer.json')).default,
      backToHome: 'ホームに戻る',
      notFound: '情報が見つかりません',
    };
  }
);
