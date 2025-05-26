<template>
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
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { slugify, cleanEnglishName } from '~/utils/slugify';
import enFourNobleTruths from '~/i18n/locales/en/fourNobleTruths.json';
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

const { t, locale } = useI18n();

// Cast imported JSON data to defined interfaces
const fourNobleTruthsData = enFourNobleTruths as FourNobleTruthsData;

// SVG path data for each item
const svgIcons: { [key: string]: string } = {
    truth1: 'M9 10a.01.01 0 001.01.01M15 10a.01.01 0 001.01.01M9 16h6m-3-3v3m0 0h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    truth2: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
    truth3: 'M9.663 17h4.673M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    truth4: 'M12 2a10 10 0 100 20 10 10 0 000-20zM12 14a2 2 0 100-4 2 2 0 000 4zM12 2v2m0 16v2m8-10h2M2 12h2m14.828-5.657l1.414-1.414M5.657 18.343L4.243 19.757m14.828 1.414l-1.414-1.414M4.243 4.243L5.657 5.657',
};

// Computed properties to filter out the 'title' and provide items for v-for
const fourNobleTruthsItems = computed(() => {
    return Object.entries(fourNobleTruthsData)
        .filter(([key, value]) => key !== 'title')
        .map(([key, value]) => ({ key, truth: value as Truth }));
});

useHead(() => ({
    title: t('fourNobleTruths.title'),
    meta: [
        { name: 'description', content: t('seo.description') },
        { name: 'keywords', content: t('seo.keywords') }
    ]
}))
</script>

<style scoped>
/* Add any page-specific styles here */
</style>