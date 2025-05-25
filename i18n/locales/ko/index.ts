import type { Translations } from '../types';

export default defineI18nLocale(
  async (locale: string): Promise<Translations> => {
    return {
      welcome: '부포에 오신 것을 환영합니다!', // Assuming 'welcome' is still needed
      seo: (await import('./seo.json')).default,
      fourNobleTruths: (await import('./fourNobleTruths.json')).default,
      eightfoldPath: (await import('./eightfoldPath.json')).default,
      footer: (await import('./footer.json')).default,
      backToHome: '홈으로 돌아가기',
      notFound: '정보를 찾을 수 없습니다',
    };
  }
);
