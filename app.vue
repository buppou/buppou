<template>
  <div class="min-h-screen bg-gradient-to-tr from-slate-950 via-slate-800 to-sky-900 text-slate-200 font-sans">
    <div class="container mx-auto px-4 py-12">
      <header class="text-center mb-16 animate-fadeInDown relative">
        <h1 class="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-500 to-amber-400 mb-3">
          {{ t('seo.title').split(' - ')[0] }}
        </h1>
        <p class="text-2xl text-sky-300 italic">{{ t('seo.title').split(' - ')[1] }}</p>
      </header>

      <!-- Language Switcher -->
      <div class="flex justify-center mb-8">
        <div class="flex flex-wrap justify-center gap-2 md:space-x-2">
          <button v-for="l in locales" :key="l.code" @click="setLocale(l.code)"
                  :class="{'bg-sky-600 border-sky-500': locale === l.code, 'bg-slate-700 hover:bg-slate-600 border-slate-700': locale !== l.code}"
                  class="text-slate-200 rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-slate-900 transition-all duration-200 border shadow-md hover:shadow-lg w-auto">
            <img :src="l.flag" :alt="l.name" class="h-6 w-6 mr-2 inline-block" />
            {{ l.name }}
          </button>
        </div>
      </div>

      <!-- Tứ Diệu Đế -->
      <section class="mb-20">
        <h2 class="text-5xl font-bold text-sky-400 mb-10 text-center relative pb-4
                       after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0
                       after:w-32 after:h-1 after:bg-gradient-to-r after:from-sky-500 after:to-cyan-400 after:rounded-full animate-fadeInUp">
          {{ t('fourNobleTruths.title') }}
        </h2>
        <div class="grid md:grid-cols-2 gap-10">
          <div class="bg-slate-800/70 backdrop-blur-md p-8 rounded-xl shadow-2xl border border-slate-700 hover:border-green-500 transition-all duration-300 transform hover:scale-105 animate-fadeInUpDel_1">
            <h3 class="text-3xl font-semibold text-green-400 mb-4 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 min-w-8 min-h-8 mr-3 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 10a.01.01 0 001.01.01M15 10a.01.01 0 001.01.01M9 16h6m-3-3v3m0 0h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              {{ t('fourNobleTruths.truth1.name') }}
            </h3>
            <p class="text-slate-300 leading-relaxed text-lg">
              {{ t('fourNobleTruths.truth1.description') }}
            </p>
          </div>
          <div class="bg-slate-800/70 backdrop-blur-md p-8 rounded-xl shadow-2xl border border-slate-700 hover:border-green-500 transition-all duration-300 transform hover:scale-105 animate-fadeInUpDel_2">
            <h3 class="text-3xl font-semibold text-green-400 mb-4 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 min-w-8 min-h-8 mr-3 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
              {{ t('fourNobleTruths.truth2.name') }}
            </h3>
            <p class="text-slate-300 leading-relaxed text-lg">
              {{ t('fourNobleTruths.truth2.description') }}
            </p>
          </div>
          <div class="bg-slate-800/70 backdrop-blur-md p-8 rounded-xl shadow-2xl border border-slate-700 hover:border-green-500 transition-all duration-300 transform hover:scale-105 animate-fadeInUpDel_3">
            <h3 class="text-3xl font-semibold text-green-400 mb-4 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 min-w-8 min-h-8 mr-3 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              {{ t('fourNobleTruths.truth3.name') }}
            </h3>
            <p class="text-slate-300 leading-relaxed text-lg">
              {{ t('fourNobleTruths.truth3.description') }}
            </p>
          </div>
          <div class="bg-slate-800/70 backdrop-blur-md p-8 rounded-xl shadow-2xl border border-slate-700 hover:border-green-500 transition-all duration-300 transform hover:scale-105 animate-fadeInUpDel_4">
            <h3 class="text-3xl font-semibold text-green-400 mb-4 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 min-w-8 min-h-8 mr-3 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 2a10 10 0 100 20 10 10 0 000-20zM12 14a2 2 0 100-4 2 2 0 000 4zM12 2v2m0 16v2m8-10h2M2 12h2m14.828-5.657l1.414-1.414M5.657 18.343L4.243 19.757m14.828 1.414l-1.414-1.414M4.243 4.243L5.657 5.657" /></svg>
              {{ t('fourNobleTruths.truth4.name') }}
            </h3>
            <p class="text-slate-300 leading-relaxed text-lg">
              {{ t('fourNobleTruths.truth4.description') }}
            </p>
          </div>
        </div>
      </section>

      <!-- Bát Chánh Đạo -->
      <section class="mb-12">
        <h2 class="text-5xl font-bold text-purple-400 mb-10 text-center relative pb-4
                       after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0
                       after:w-32 after:h-1 after:bg-gradient-to-r after:from-purple-500 after:to-pink-400 after:rounded-full animate-fadeInUp">
          {{ t('eightfoldPath.title') }}
        </h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Chánh Kiến -->
          <div class="group bg-slate-800/70 backdrop-blur-md p-6 rounded-lg shadow-xl border border-slate-700 hover:border-purple-500 transition-all duration-300 animate-fadeInUpDel_1">
            <div class="flex justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-purple-400 group-hover:text-purple-300 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
            </div>
            <h3 class="text-xl font-semibold text-purple-300 mb-2 text-center">{{ t('eightfoldPath.path1.name') }}</h3>
            <p class="text-slate-400 text-sm leading-relaxed">{{ t('eightfoldPath.path1.description') }}</p>
          </div>
          <!-- Chánh Tư Duy -->
          <div class="group bg-slate-800/70 backdrop-blur-md p-6 rounded-lg shadow-xl border border-slate-700 hover:border-purple-500 transition-all duration-300 animate-fadeInUpDel_2">
            <div class="flex justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-purple-400 group-hover:text-purple-300 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" /></svg>
            </div>
            <h3 class="text-xl font-semibold text-purple-300 mb-2 text-center">{{ t('eightfoldPath.path2.name') }}</h3>
            <p class="text-slate-400 text-sm leading-relaxed">{{ t('eightfoldPath.path2.description') }}</p>
          </div>
          <!-- Chánh Ngữ -->
          <div class="group bg-slate-800/70 backdrop-blur-md p-6 rounded-lg shadow-xl border border-slate-700 hover:border-purple-500 transition-all duration-300 animate-fadeInUpDel_3">
            <div class="flex justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-purple-400 group-hover:text-purple-300 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
            </div>
            <h3 class="text-xl font-semibold text-purple-300 mb-2 text-center">{{ t('eightfoldPath.path3.name') }}</h3>
            <p class="text-slate-400 text-sm leading-relaxed">{{ t('eightfoldPath.path3.description') }}</p>
          </div>
          <!-- Chánh Nghiệp -->
          <div class="group bg-slate-800/70 backdrop-blur-md p-6 rounded-lg shadow-xl border border-slate-700 hover:border-purple-500 transition-all duration-300 animate-fadeInUpDel_4">
            <div class="flex justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-purple-400 group-hover:text-purple-300 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            </div>
            <h3 class="text-xl font-semibold text-purple-300 mb-2 text-center">{{ t('eightfoldPath.path4.name') }}</h3>
            <p class="text-slate-400 text-sm leading-relaxed">{{ t('eightfoldPath.path4.description') }}</p>
          </div>
          <!-- Chánh Mạng -->
          <div class="group bg-slate-800/70 backdrop-blur-md p-6 rounded-lg shadow-xl border border-slate-700 hover:border-purple-500 transition-all duration-300 animate-fadeInUpDel_5">
            <div class="flex justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-purple-400 group-hover:text-purple-300 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <h3 class="text-xl font-semibold text-purple-300 mb-2 text-center">{{ t('eightfoldPath.path5.name') }}</h3>
            <p class="text-slate-400 text-sm leading-relaxed">{{ t('eightfoldPath.path5.description') }}</p>
          </div>
          <!-- Chánh Tinh Tấn -->
          <div class="group bg-slate-800/70 backdrop-blur-md p-6 rounded-lg shadow-xl border border-slate-700 hover:border-purple-500 transition-all duration-300 animate-fadeInUpDel_6">
            <div class="flex justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-purple-400 group-hover:text-purple-300 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <h3 class="text-xl font-semibold text-purple-300 mb-2 text-center">{{ t('eightfoldPath.path6.name') }}</h3>
            <p class="text-slate-400 text-sm leading-relaxed">{{ t('eightfoldPath.path6.description') }}</p>
          </div>
          <!-- Chánh Niệm -->
          <div class="group bg-slate-800/70 backdrop-blur-md p-6 rounded-lg shadow-xl border border-slate-700 hover:border-purple-500 transition-all duration-300 animate-fadeInUpDel_7">
            <div class="flex justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-purple-400 group-hover:text-purple-300 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7.014A8.003 8.003 0 0112 3c1.398 0 2.743.57 3.714 1.543C18.371 6.014 19 9.014 19 11c0 .857-.173 1.685-.49 2.443" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 12a2 2 0 100-4 2 2 0 000 4z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 12v6" /></svg>
            </div>
            <h3 class="text-xl font-semibold text-purple-300 mb-2 text-center">{{ t('eightfoldPath.path7.name') }}</h3>
            <p class="text-slate-400 text-sm leading-relaxed">{{ t('eightfoldPath.path7.description') }}</p>
          </div>
          <!-- Chánh Định -->
          <div class="group bg-slate-800/70 backdrop-blur-md p-6 rounded-lg shadow-xl border border-slate-700 hover:border-purple-500 transition-all duration-300 animate-fadeInUpDel_8">
            <div class="flex justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-purple-400 group-hover:text-purple-300 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v.01M12 12v.01M12 18v.01M12 3a9 9 0 100 18 9 9 0 000-18z" /></svg>
            </div>
            <h3 class="text-xl font-semibold text-purple-300 mb-2 text-center">{{ t('eightfoldPath.path8.name') }}</h3>
            <p class="text-slate-400 text-sm leading-relaxed">{{ t('eightfoldPath.path8.description') }}</p>
          </div>
        </div>
      </section>

      <footer class="flex flex-col items-center justify-center mt-20 pt-10 border-t border-slate-700 animate-fadeInUp">
        <p class="text-slate-400 text-lg text-center">
          <span class="font-bold text-amber-400">{{ t('seo.title').split(' - ')[0] }}</span> {{ t('footer.line1').split(',')[0] }},
          <span class="font-bold text-purple-400">{{ t('seo.title').split(' - ')[1] }}</span> {{ t('footer.line1').split(',')[1] }}.
        </p>
        <p class="text-slate-500 mt-4 text-sm text-center">{{ t('footer.line2') }}</p>
      </footer>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t, locale, setLocale } = useI18n();

const locales = ref([
  { code: 'en', name: 'English', flag: '/flags/en.svg' },
  { code: 'ja', name: '日本語', flag: '/flags/ja.svg' },
  { code: 'vi', name: 'Tiếng Việt', flag: '/flags/vi.svg' },
  { code: 'zh', name: '中文', flag: '/flags/zh.svg' },
  { code: 'ko', name: '한국어', flag: '/flags/ko.svg' },
]);

useHead(() => ({
  title: t('seo.title'),
  meta: [
    { name: 'description', content: t('seo.description') },
    { name: 'keywords', content: t('seo.keywords') }
  ],
  htmlAttrs: {
    lang: locale.value
  },
  link: [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    { href: 'https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400;500;600;700&family=Noto+Serif:ital,wght@0,400..700;1,400..700&display=swap', rel: 'stylesheet' }
  ]
}))

// Simple fade-in animations using Tailwind CSS classes
const animationClasses = {
  fadeInDown: 'animate-fade-in-down',
  fadeInUp: 'animate-fade-in-up',
  fadeInUpDel_1: 'animate-fade-in-up animation-delay-100',
  fadeInUpDel_2: 'animate-fade-in-up animation-delay-200',
  fadeInUpDel_3: 'animate-fade-in-up animation-delay-300',
  fadeInUpDel_4: 'animate-fade-in-up animation-delay-400',
  fadeInUpDel_5: 'animate-fade-in-up animation-delay-500',
  fadeInUpDel_6: 'animate-fade-in-up animation-delay-600',
  fadeInUpDel_7: 'animate-fade-in-up animation-delay-700',
  fadeInUpDel_8: 'animate-fade-in-up animation-delay-800',
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400;500;600;700&family=Noto+Serif:ital,wght@0,400..700;1,400..700&display=swap');

body {
  font-family: 'Noto Sans', sans-serif;
}

h1, h2, h3 {
  font-family: 'Noto Serif', serif;
}

/* Basic fade-in animations if not using Tailwind JIT extended animations */
.animate-fadeInDown {
  animation: fadeInDown 0.8s ease-out forwards;
}
.animate-fadeInUp {
  animation: fadeInUp 0.8s ease-out forwards;
}
.animate-fadeInUpDel_1 { animation: fadeInUp 0.8s ease-out 0.1s forwards; }
.animate-fadeInUpDel_2 { animation: fadeInUp 0.8s ease-out 0.2s forwards; }
.animate-fadeInUpDel_3 { animation: fadeInUp 0.8s ease-out 0.3s forwards; }
.animate-fadeInUpDel_4 { animation: fadeInUp 0.8s ease-out 0.4s forwards; }
.animate-fadeInUpDel_5 { animation: fadeInUp 0.8s ease-out 0.5s forwards; }
.animate-fadeInUpDel_6 { animation: fadeInUp 0.8s ease-out 0.6s forwards; }
.animate-fadeInUpDel_7 { animation: fadeInUp 0.8s ease-out 0.7s forwards; }
.animate-fadeInUpDel_8 { animation: fadeInUp 0.8s ease-out 0.8s forwards; }


@keyframes fadeInDown {
  0% {
    opacity: 0;
    transform: translateY(-30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
