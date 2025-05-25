<template>
    <div class="min-h-screen bg-gradient-to-tr from-slate-950 via-slate-800 to-sky-900 text-slate-200 font-sans">
        <div class="container mx-auto px-4 py-12">
            <header class="text-center mb-16 animate-fadeInDown relative">
                <h1
                    class="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-500 to-amber-400 mb-3">
                    {{ $t('seo.title').split(' - ')[0] }}
                </h1>
                <p class="text-2xl text-sky-300 italic">{{ $t('seo.title').split(' - ')[1] }}</p>
            </header>

            <!-- Language Switcher -->
            <div class="flex justify-center mb-8">
                <div class="flex flex-wrap justify-center gap-2 md:space-x-2">
                    <button v-for="l in locales" :key="l.code" @click="setLocale(l.code)"
                        :class="{ 'bg-sky-600 border-sky-500': locale === l.code, 'bg-slate-700 hover:bg-slate-600 border-slate-700': locale !== l.code }"
                        class="text-slate-200 rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-slate-900 transition-all duration-200 border shadow-md hover:shadow-lg w-auto">
                        <img :src="l.flag" :alt="l.name" class="h-6 w-6 mr-2 inline-block" />
                        {{ l.name }}
                    </button>
                </div>
            </div>

            <slot />

            <footer
                class="flex flex-col items-center justify-center mt-20 pt-10 border-t border-slate-700 animate-fadeInUp">
                <p class="text-slate-400 text-lg text-center">
                    <span class="font-bold text-amber-400">{{ $t('seo.title').split(' - ')[0] }}</span> {{
                        $t('footer.line1_part1') }}<br>
                    <span class="font-bold text-purple-400">{{ $t('seo.title').split(' - ')[1] }}</span> {{
                        $t('footer.line1_part2') }}
                </p>
                <p class="text-slate-500 mt-4 text-sm text-center">{{ $t('footer.line2') }}</p>
            </footer>
        </div>
    </div>
</template>

<script setup lang="ts">
const { locale, setLocale } = useI18n();

const locales = ref<{ code: 'vi' | 'en' | 'ja' | 'zh' | 'ko', name: string, flag: string }[]>([
    { code: 'en', name: 'English', flag: '/flags/en.svg' },
    { code: 'ja', name: '日本語', flag: '/flags/ja.svg' },
    { code: 'vi', name: 'Tiếng Việt', flag: '/flags/vi.svg' },
    { code: 'zh', name: '中文', flag: '/flags/zh.svg' },
    { code: 'ko', name: '한국어', flag: '/flags/ko.svg' },
]);
</script>

<style></style>