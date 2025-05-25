<template>
    <div>
        <!-- Tứ Diệu Đế -->
        <section class="mb-20">
            <h2
                class="text-5xl font-bold text-green-400 mb-10 text-center relative pb-4
                     after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0
                     after:w-32 after:h-1 after:bg-gradient-to-r after:from-green-500 after:to-cyan-400 after:rounded-full animate-fadeInUp">
                {{ $t('fourNobleTruths.title') }}
            </h2>
            <div class="grid md:grid-cols-2 gap-10">
                <NuxtLink v-for="item in fourNobleTruthsItems" :key="item.key"
                    :to="`/four-noble-truths/${item.key}-${slugify(cleanEnglishName(item.truth.name))}`"
                    class="bg-slate-800/70 backdrop-blur-md p-8 rounded-xl shadow-2xl border border-slate-700 hover:border-green-500 transition-all duration-300 transform hover:scale-105">
                    <h3 class="text-3xl font-semibold text-green-400 mb-4 flex items-center">
                        <!-- SVG icon - keeping static for now -->
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 min-w-8 min-h-8 mr-3 text-green-500"
                            fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M9 10a.01.01 0 001.01.01M15 10a.01.01 0 001.01.01M9 16h6m-3-3v3m0 0h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {{ $t(`fourNobleTruths.${item.key}.name`) }}
                    </h3>
                    <p class="text-slate-300 leading-relaxed text-lg">
                        {{ $t(`fourNobleTruths.${item.key}.description`) }}
                    </p>
                </NuxtLink>
            </div>
        </section>

        <!-- Bát Chánh Đạo -->
        <section class="mb-12">
            <h2
                class="text-5xl font-bold text-purple-400 mb-10 text-center relative pb-4
                     after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0
                     after:w-32 after:h-1 after:bg-gradient-to-r after:from-purple-500 after:to-pink-400 after:rounded-full animate-fadeInUp">
                {{ $t('eightfoldPath.title') }}
            </h2>
            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <NuxtLink v-for="item in eightfoldPathItems" :key="item.key"
                    :to="`/eightfold-path/${item.key}-${slugify(cleanEnglishName(item.path.name))}`"
                    class="group bg-slate-800/70 backdrop-blur-md p-6 rounded-lg shadow-xl border border-slate-700 hover:border-purple-500 transition-all duration-300">
                    <div class="flex justify-center mb-4">
                        <!-- SVG icon - keeping static for now -->
                        <svg xmlns="http://www.w3.org/2000/svg"
                            class="h-12 w-12 text-purple-400 group-hover:text-purple-300 transition-colors" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                    </div>
                    <h3 class="text-xl font-semibold text-purple-300 mb-2 text-center">{{
                        $t(`eightfoldPath.${item.key}.name`) }}</h3>
                    <p class="text-slate-400 text-sm leading-relaxed">{{ $t(`eightfoldPath.${item.key}.description`) }}
                    </p>
                </NuxtLink>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { slugify, cleanEnglishName } from '~/utils/slugify';
import enFourNobleTruths from '~/i18n/locales/en/fourNobleTruths.json';
import enEightfoldPath from '~/i18n/locales/en/eightfoldPath.json';
import { computed } from 'vue';

// Define interfaces for the JSON data structure
interface Truth {
    name: string;
    description: string;
}

interface FourNobleTruthsData {
    title: string;
    truth1: Truth;
    truth2: Truth;
    truth3: Truth;
    truth4: Truth;
    [key: string]: string | Truth; // Allow other keys like 'title'
}

interface Path {
    name: string;
    description: string;
}

interface EightfoldPathData {
    title: string;
    path1: Path;
    path2: Path;
    path3: Path;
    path4: Path;
    path5: Path;
    path6: Path;
    path7: Path;
    path8: Path;
    [key: string]: string | Path; // Allow other keys like 'title'
}


const { t, locale } = useI18n();

// Cast imported JSON data to defined interfaces
const fourNobleTruthsData = enFourNobleTruths as FourNobleTruthsData;
const eightfoldPathData = enEightfoldPath as EightfoldPathData;


// Computed properties to filter out the 'title' and provide items for v-for
const fourNobleTruthsItems = computed(() => {
    return Object.entries(fourNobleTruthsData)
        .filter(([key, value]) => key !== 'title')
        .map(([key, value]) => ({ key, truth: value as Truth }));
});

const eightfoldPathItems = computed(() => {
    return Object.entries(eightfoldPathData)
        .filter(([key, value]) => key !== 'title')
        .map(([key, value]) => ({ key, path: value as Path }));
});


useHead(() => ({
    title: t('seo.title'),
    meta: [
        { name: 'description', content: t('seo.description') },
        { name: 'keywords', content: t('seo.keywords') }
    ]
}))
</script>

<style scoped>
/* Add any page-specific styles here */
</style>