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
                        <!-- Dynamic SVG icon -->
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 min-w-8 min-h-8 mr-3 text-green-500"
                            fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                :d="svgIcons[item.key]" />
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
                        <!-- Dynamic SVG icon -->
                        <svg xmlns="http://www.w3.org/2000/svg"
                            class="h-12 w-12 text-purple-400 group-hover:text-purple-300 transition-colors" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                :d="svgIcons[item.key]" />
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

// SVG path data for each item
const svgIcons: { [key: string]: string } = {
    truth1: 'M9 10a.01.01 0 001.01.01M15 10a.01.01 0 001.01.01M9 16h6m-3-3v3m0 0h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    truth2: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
    truth3: 'M9.663 17h4.673M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    truth4: 'M12 2a10 10 0 100 20 10 10 0 000-20zM12 14a2 2 0 100-4 2 2 0 000 4zM12 2v2m0 16v2m8-10h2M2 12h2m14.828-5.657l1.414-1.414M5.657 18.343L4.243 19.757m14.828 1.414l-1.414-1.414M4.243 4.243L5.657 5.657',
    path1: 'M15 12a3 3 0 11-6 0 3 3 0 016 0zM2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z',
    path2: 'M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z',
    path3: 'M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z',
    path4: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    path5: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    path6: 'M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 11-18 0 9 9 0 0118 0z',
    path7: 'M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7.014A8.003 8.003 0 0112 3c1.398 0 2.743.57 3.714 1.543C18.371 6.014 19 9.014 19 11c0 .857-.173 1.685-.49 2.443M12 12a2 2 0 100-4 2 2 0 000 4zM12 12v6',
    path8: 'M12 6v.01M12 12v.01M12 18v.01M12 3a9 9 0 100 18 9 9 0 000-18z',
};


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