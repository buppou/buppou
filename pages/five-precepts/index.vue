<template>
    <section class="mb-20">
        <h2
            class="text-4xl sm:text-5xl font-bold text-blue-400 mb-10 text-center relative pb-4
                 after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0
                 after:w-32 after:h-1 after:bg-gradient-to-r after:from-blue-500 after:to-cyan-400 after:rounded-full animate-fadeInUp">
            {{ $t('fivePrecepts.title') }}
        </h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            <NuxtLink v-for="item in fivePreceptsItems" :key="item.key"
                :to="`/five-precepts/${item.key}-${slugify(cleanEnglishName(item.precept.name))}`"
                class="bg-slate-800/70 backdrop-blur-md p-8 rounded-xl shadow-2xl border border-slate-700 hover:border-blue-500 transition-all duration-300 transform hover:scale-105 flex flex-col h-full">
                <h3 class="text-3xl font-semibold text-blue-400 mb-4 flex items-center">
                    <!-- Dynamic SVG icon -->
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 min-w-8 min-h-8 mr-3 text-blue-500"
                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            :d="svgIcons[item.key]" />
                    </svg>
                    {{ $t(`fivePrecepts.${item.key}.name`) }}
                </h3>
                <p class="text-slate-300 leading-relaxed text-lg flex-grow">
                    {{ $t(`fivePrecepts.${item.key}.description`) }}
                </p>
            </NuxtLink>
        </div>
    </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { slugify, cleanEnglishName } from '~/utils/slugify';
import enFivePrecepts from '~/i18n/locales/en/fivePrecepts.json';
import { computed } from 'vue';

// Define interfaces for the JSON data structure
interface Precept {
    name: string;
    description: string;
}

interface FivePreceptsData {
    title: string;
    precept1: Precept;
    precept2: Precept;
    precept3: Precept;
    precept4: Precept;
    precept5: Precept;
    [key: string]: string | Precept; // Allow other keys like 'title'
}

const { t, locale } = useI18n();

// Cast imported JSON data to defined interfaces
const fivePreceptsData = enFivePrecepts as FivePreceptsData;

// SVG path data for each item
const svgIcons: { [key: string]: string } = {
    precept1: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z', // Checkmark in circle
    precept2: 'M12 15v2m-2 4h4m6-10a9 9 0 11-18 0 9 9 0 0118 0z', // Hand with coin
    precept3: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z', // Heart with arrow
    precept4: 'M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z', // Speech bubble
    precept5: 'M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z', // Droplet
};

// Computed properties to filter out the 'title' and provide items for v-for
const fivePreceptsItems = computed(() => {
    return Object.entries(fivePreceptsData)
        .filter(([key, value]) => key !== 'title')
        .map(([key, value]) => ({ key, precept: value as Precept }));
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