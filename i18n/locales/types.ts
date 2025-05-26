export interface SeoTranslations {
  title: string;
  description: string;
  keywords: string;
}

export interface TruthTranslations {
  name: string;
  description: string;
  details?: string;
}

export interface FourNobleTruthsTranslations {
  title: string;
  truth1: TruthTranslations;
  truth2: TruthTranslations;
  truth3: TruthTranslations;
  truth4: TruthTranslations;
}

export interface PathTranslations {
  name: string;
  description: string;
  details?: string;
}

export interface EightfoldPathTranslations {
  title: string;
  path1: PathTranslations;
  path2: PathTranslations;
  path3: PathTranslations;
  path4: PathTranslations;
  path5: PathTranslations;
  path6: PathTranslations;
  path7: PathTranslations;
  path8: PathTranslations;
}

export interface PreceptTranslations {
  name: string;
  description: string;
  details?: string;
}

export interface FivePreceptsTranslations {
  title: string;
  precept1: PreceptTranslations;
  precept2: PreceptTranslations;
  precept3: PreceptTranslations;
  precept4: PreceptTranslations;
  precept5: PreceptTranslations;
}

export interface FooterTranslations {
  line1_part1: string;
  line1_part2: string;
  line2: string;
}

export interface Translations {
  home: string;
  welcome: string; // Assuming 'welcome' is still at the top level
  seo: SeoTranslations;
  fourNobleTruths: FourNobleTruthsTranslations;
  eightfoldPath: EightfoldPathTranslations;
  fivePrecepts: FivePreceptsTranslations;
  footer: FooterTranslations;
  backToHome: string;
  notFound: string;
}
