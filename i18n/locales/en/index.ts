import type { Translations } from '../types';

export default defineI18nLocale(
  async (locale: string): Promise<Translations> => {
    return {
      home: 'Home',
      welcome: 'Welcome to Buppou!', // Assuming 'welcome' is still needed
      seo: (await import('./seo.json')).default,
      fourNobleTruths: (await import('./fourNobleTruths.json')).default,
      eightfoldPath: (await import('./eightfoldPath.json')).default,
      footer: (await import('./footer.json')).default,
      backToHome: 'Back to home',
      notFound: 'Information not found',
    };
  }
);
