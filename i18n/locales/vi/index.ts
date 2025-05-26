import type { Translations } from '../types';

export default defineI18nLocale(
  async (locale: string): Promise<Translations> => {
    return {
      home: 'Trang chủ',
      welcome: 'Chào mừng bạn đến với Buppou!',
      seo: (await import('./seo.json')).default,
      fourNobleTruths: (await import('./fourNobleTruths.json')).default,
      eightfoldPath: (await import('./eightfoldPath.json')).default,
      fivePrecepts: (await import('./fivePrecepts.json')).default,
      tenWholesomeActions: (await import('./tenWholesomeActions.json')).default,
      footer: (await import('./footer.json')).default,
      backToHome: 'Quay lại trang chủ',
      notFound: 'Không tìm thấy thông tin',
    };
  }
);
