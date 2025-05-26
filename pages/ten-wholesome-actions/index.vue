<template>
    <section class="mb-20">
        <h2
            class="text-5xl font-bold text-blue-400 mb-10 text-center relative pb-4
                  after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0
                  after:w-32 after:h-1 after:bg-gradient-to-r after:from-blue-500 after:to-cyan-400 after:rounded-full animate-fadeInUp">
            {{ $t('tenWholesomeActions.title') }}
        </h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            <NuxtLink v-for="item in tenWholesomeActionsItems" :key="item.key"
                :to="`/ten-wholesome-actions/${item.key}-${slugify(cleanEnglishName(item.action.name))}`"
                class="bg-slate-800/70 backdrop-blur-md p-8 rounded-xl shadow-2xl border border-slate-700 hover:border-blue-500 transition-all duration-300 transform hover:scale-105">
                <h3 class="text-3xl font-semibold text-blue-400 mb-4 flex items-center">
                    <!-- Dynamic SVG icon -->
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 min-w-8 min-h-8 mr-3 text-blue-500"
                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            :d="svgIcons[item.key]" />
                    </svg>
                    {{ $t(`tenWholesomeActions.${item.key}.name`) }}
                </h3>
                <p class="text-slate-300 leading-relaxed text-lg">
                    {{ $t(`tenWholesomeActions.${item.key}.description`) }}
                </p>
            </NuxtLink>
        </div>
    </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { slugify, cleanEnglishName } from '~/utils/slugify';
import enTenWholesomeActions from '~/i18n/locales/en/tenWholesomeActions.json';
import { computed } from 'vue';

// Define interfaces for the JSON data structure
interface Action {
    name: string;
    description: string;
}

interface TenWholesomeActionsData {
    title: string;
    action1: Action;
    action2: Action;
    action3: Action;
    action4: Action;
    action5: Action;
    action6: Action;
    action7: Action;
    action8: Action;
    action9: Action;
    action10: Action;
    [key: string]: string | Action; // Allow other keys like 'title'
}

const { t, locale } = useI18n();

// Cast imported JSON data to defined interfaces
const tenWholesomeActionsData = enTenWholesomeActions as TenWholesomeActionsData;

// SVG path data for each item (using generic icons for now, can be customized)
const svgIcons: { [key: string]: string } = {
    action1: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z', // Checkmark in circle
    action2: 'M12 15v2m-2 4h4m6-10a9 9 0 11-18 0 9 9 0 0118 0z', // Hand with coin
    action3: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z', // Heart with arrow
    action4: 'M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z', // Speech bubble
    action5: 'M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z', // Droplet
    action6: 'M13 10V3L4 14h7v7l9-11h-7z', // Lightning bolt
    action7: 'M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z', // Ellipsis in circle
    action8: 'M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a6 6 0 0012 0h-12zm6 2c-3.314 0-6-2.686-6-6v-2A6 6 0 0112 4a6 6 0 016 6v2c0 3.314-2.686 6-6 6z', // Person with open hands
    action9: 'M18 12H6m12 0a2 2 0 100 4m0-4a2 2 0 110 4m-6-6a2 2 0 100 4m0-4a2 2 0 110 4m-6-6a2 2 0 100 4m0-4a2 2 0 110 4', // Minus sign
    action10: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M18 19H6', // Book
};

// Computed properties to filter out the 'title' and provide items for v-for
const tenWholesomeActionsItems = computed(() => {
    return Object.entries(tenWholesomeActionsData)
        .filter(([key, value]) => key !== 'title')
        .map(([key, value]) => ({ key, action: value as Action }));
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