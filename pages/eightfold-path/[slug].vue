<template>
    <div class="container mx-auto px-4 py-12">
        <NuxtLink to="/" class="flex items-center text-purple-400 hover:text-purple-300 transition-colors mb-8">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            {{ $t('backToHome') }}
        </NuxtLink>
        <div v-if="path">
            <h1 class="text-4xl font-bold text-purple-400 mb-6">{{ path.name }}</h1>
            <p class="text-slate-300 leading-relaxed text-lg mb-4">{{ path.description }}</p>
            <p v-if="path.details" class="text-slate-300 leading-relaxed text-lg">{{ path.details }}</p>
        </div>
        <div v-else>
            <p class="text-red-500">{{ $t('notFound') }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';

// Import all locale data for Eightfold Path
import viEightfoldPath from '~/i18n/locales/vi/eightfoldPath.json';
import enEightfoldPath from '~/i18n/locales/en/eightfoldPath.json';
import jaEightfoldPath from '~/i18n/locales/ja/eightfoldPath.json';
import koEightfoldPath from '~/i18n/locales/ko/eightfoldPath.json';
import zhEightfoldPath from '~/i18n/locales/zh/eightfoldPath.json';

// Define interface for the data structure
interface Path {
    name: string;
    description: string;
    details?: string;
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

const route = useRoute();
const { t, locale } = useI18n();

const slug = computed(() => route.params.slug as string);

// Computed property to find the correct path data based on the slug and current locale
const path = computed(() => {
    if (!slug.value) return null;

    // Extract the key from the slug (part before the first hyphen)
    const key = slug.value.split('-')[0];

    // Get the correct locale data
    let localeData: EightfoldPathData;
    switch (locale.value) {
        case 'vi':
            localeData = viEightfoldPath as EightfoldPathData;
            break;
        case 'en':
            localeData = enEightfoldPath as EightfoldPathData;
            break;
        case 'ja':
            localeData = jaEightfoldPath as EightfoldPathData;
            break;
        case 'ko':
            localeData = koEightfoldPath as EightfoldPathData;
            break;
        case 'zh':
            localeData = zhEightfoldPath as EightfoldPathData;
            break;
        default:
            localeData = viEightfoldPath as EightfoldPathData; // Fallback to Vietnamese
    }

    // Find the path by key, ensuring it's not the title
    const foundPath = localeData[key];
    if (foundPath && typeof foundPath !== 'string') {
        return foundPath;
    }

    return null;
});

// Update head for SEO
useHead(() => ({
    title: path.value ? path.value.name : t('seo.title'),
    meta: [
        { name: 'description', content: path.value ? path.value.description : t('seo.description') },
        // Add other meta tags as needed
    ]
}));
</script>

<style scoped>
/* Add any page-specific styles here */
</style>