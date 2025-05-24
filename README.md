
## Project Purpose

This project, "Buppou," aims to provide a comprehensive and accessible resource for exploring the profound teachings of Buddhism, specifically focusing on the Four Noble Truths and the Eightfold Path. It serves as a guide to understanding suffering, its origin, its cessation, and the practical path leading to enlightenment and Nirvana.

The Four Noble Truths act as a map, revealing the nature of suffering and its causes, while the Eightfold Path offers the practical means to navigate towards liberation. Through this platform, we aspire for all beings to comprehend the Dharma, practice diligently, and attain peace and liberation.

---

## Mục đích dự án

Dự án "Buppou" này nhằm cung cấp một nguồn tài liệu toàn diện và dễ tiếp cận để khám phá những giáo lý sâu sắc của Phật giáo, đặc biệt tập trung vào Tứ Diệu Đế và Bát Chánh Đạo. Nó đóng vai trò như một kim chỉ nam để hiểu về khổ đau, nguyên nhân của nó, sự chấm dứt khổ đau, và con đường thực hành dẫn đến giác ngộ và Niết Bàn.

Tứ Diệu Đế như một tấm bản đồ chỉ ra bản chất của khổ đau và nguyên nhân của nó, trong khi Bát Chánh Đạo là con đường thực hành để đi đến giải thoát. Thông qua nền tảng này, chúng tôi nguyện cầu mọi chúng sanh đều thấu hiểu Chánh Pháp, thực hành tinh tấn, và đạt được an lạc giải thoát.

---

## プロジェクトの目的

この「Buppou」プロジェクトは、仏教の深遠な教え、特に四諦と八正道を探求するための包括的でアクセスしやすいリソースを提供することを目的としています。苦しみ、その起源、その止滅、そして悟りと涅槃に至る実践的な道筋を理解するための指針となります。

四諦は苦しみとその原因を示す地図として機能し、八正道は解脱へと向かう実践的な手段を提供します。このプラットフォームを通じて、私たちはすべての衆生が正法を理解し、精進して実践し、安楽と解脱を達成することを願っています。

---

## 项目目的

这个“Buppou”项目旨在提供一个全面且易于访问的资源，用于探索佛教的深奥教义，特别是四圣谛和八正道。它作为理解苦、苦的起源、苦的止息以及通往觉悟和涅槃的实践之道的指南。

四圣谛如同地图，揭示了苦及其原因的本质，而八正道则提供了通往解脱的实践途径。通过这个平台，我们希望一切众生都能理解正法，精进修行，并获得安乐解脱。

---

## 프로젝트 목적

이 "부포" 프로젝트는 불교의 심오한 가르침, 특히 사성제와 팔정도를 탐구하기 위한 포괄적이고 접근 가능한 자료를 제공하는 것을 목표로 합니다. 고통, 그 원인, 고통의 소멸, 그리고 깨달음과 열반으로 이끄는 실천적인 길을 이해하기 위한 지침서 역할을 합니다.

사성제는 고통과 그 원인을 보여주는 지도 역할을 하며, 팔정도는 해탈로 나아가는 실질적인 수단을 제공합니다. 이 플랫폼을 통해 우리는 모든 존재가 다르마를 이해하고, 부지런히 수행하며, 평화와 해탈을 얻기를 바랍니다.

# Nuxt 3 i18n Starter

This project is a minimal Nuxt 3 starter with integrated internationalization (i18n) using `@nuxtjs/i18n` and styling with `@nuxtjs/tailwindcss`. It's designed to provide a quick setup for building multilingual web applications.

## Project Overview

This project is a comprehensive starter template built with **Nuxt 3**, designed for rapid development of modern, performant, and scalable web applications with a strong focus on **internationalization (i18n)** and efficient UI styling. It leverages the power of `@nuxtjs/i18n` for robust multilingual support and integrates **Tailwind CSS** via `@nuxtjs/tailwindcss` for a utility-first approach to design.

The core objective of this template is to provide a ready-to-use environment for developers to build applications that can cater to a global audience. Key aspects derived from the project's configuration and file structure include:

*   **Nuxt 3 Framework**: The application is built on the latest version of Nuxt, offering features like server-side rendering (SSR), static site generation (SSG), and a powerful module system, ensuring high performance and developer productivity.
*   **Comprehensive Internationalization**:
    *   **Supported Locales**: The project is configured to support a diverse set of languages, including Vietnamese (`vi`), English (`en`), Japanese (`ja`), Chinese (`zh`), and Korean (`ko`). Each locale has its dedicated translation file located in the [`i18n/locales/`](i18n/locales/) directory (e.g., [`en.json`](i18n/locales/en.json), [`ja.json`](i18n/locales/ja.json)).
    *   **Default Language**: Japanese (`ja`) is set as the default locale, ensuring a consistent fallback if a user's preferred language is not explicitly supported or detected.
    *   **URL Strategy**: A `no_prefix` URL strategy is employed, meaning language codes are not added to the URL path (e.g., `/about` instead of `/en/about`), contributing to cleaner and more user-friendly URLs.
    *   **Automatic Language Detection**: The application intelligently detects the user's browser language and redirects them to the appropriate locale, with the preference stored in a cookie for a seamless experience across sessions.
    *   **Visual Language Indicators**: Flag icons for each supported language are provided in the [`public/flags/`](public/flags/) directory (e.g., [`en.svg`](public/flags/en.svg), [`ja.svg`](public/flags/ja.svg)), which can be used in language switchers for enhanced user experience.
*   **Tailwind CSS Integration**: The inclusion of `@nuxtjs/tailwindcss` allows for highly efficient and customizable styling. Developers can rapidly build responsive and modern interfaces using Tailwind's extensive set of utility classes, reducing the need for custom CSS and promoting design consistency.

This template is ideal for projects requiring a strong foundation in modern web development practices, particularly those with a need for robust multilingual support and streamlined UI development.


## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

## Internationalization (i18n)

This project uses `@nuxtjs/i18n` for internationalization.

### Configuration

The i18n configuration is located in [`nuxt.config.ts`](nuxt.config.ts). Key settings include:

*   `locales`: Defines the supported languages and their corresponding translation files.
*   `defaultLocale`: Sets the default language for the application (currently `ja`).
*   `strategy`: `no_prefix` is used, meaning URLs do not include language prefixes (e.g., `/about` instead of `/en/about`).
*   `detectBrowserLanguage`: Configured to detect the user's browser language and redirect accordingly, storing the preference in a cookie.

### Translation Files

Translation files are located in the [`i18n/locales/`](i18n/locales/) directory. Each language has its own JSON file (e.g., [`en.json`](i18n/locales/en.json), [`ja.json`](i18n/locales/ja.json)).

### Usage

You can use the `$t` helper function in your Vue components to access translated strings:

```vue
<template>
  <h1>{{ $t('welcome') }}</h1>
</template>
```

For more details on i18n usage, refer to the [@nuxtjs/i18n documentation](https://i18n.nuxtjs.org/).

## Further Information

*   [Nuxt 3 Documentation](https://nuxt.com/docs/getting-started/introduction)
*   [Nuxt 3 Deployment Documentation](https://nuxt.com/docs/getting-started/deployment)
*   [@nuxtjs/i18n Documentation](https://i18n.nuxtjs.org/)
*   [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## License

This project is licensed under the [MIT License](LICENSE).
