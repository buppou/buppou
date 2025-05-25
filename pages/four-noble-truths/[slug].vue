<template>
    <div class="container mx-auto px-4 py-12">
        <NuxtLink to="/" class="flex items-center text-green-400 hover:text-green-300 transition-colors mb-8">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            {{ $t('backToHome') }}
        </NuxtLink>
        <div v-if="truth">
            <h1 class="text-4xl font-bold text-green-400 mb-6">{{ truth.name }}</h1>
            <p class="text-slate-300 leading-relaxed text-lg mb-4">{{ truth.description }}</p>
            <p v-if="truth.details" class="text-slate-300 leading-relaxed text-lg">{{ truth.details }}</p>
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

// Import all locale data for Four Noble Truths
import viFourNobleTruths from '~/i18n/locales/vi/fourNobleTruths.json';
import enFourNobleTruths from '~/i18n/locales/en/fourNobleTruths.json';
import jaFourNobleTruths from '~/i18n/locales/ja/fourNobleTruths.json';
import koFourNobleTruths from '~/i18n/locales/ko/fourNobleTruths.json';
import zhFourNobleTruths from '~/i18n/locales/zh/fourNobleTruths.json';

// Define interface for the data structure
interface Truth {
    name: string;
    description: string;
    details?: string;
}

interface FourNobleTruthsData {
    title: string;
    truth1: Truth;
    truth2: Truth;
    truth3: Truth;
    truth4: Truth;
    [key: string]: string | Truth; // Allow other keys like 'title'
}

const route = useRoute();
const { t, locale } = useI18n();

const slug = computed(() => route.params.slug as string);

// Computed property to find the correct truth data based on the slug and current locale
const truth = computed(() => {
    if (!slug.value) return null;

    // Extract the key from the slug (part before the first hyphen)
    const key = slug.value.split('-')[0];

    // Get the correct locale data
    let localeData: FourNobleTruthsData;
    switch (locale.value) {
        case 'vi':
            localeData = viFourNobleTruths as FourNobleTruthsData;
            break;
        case 'en':
            localeData = enFourNobleTruths as FourNobleTruthsData;
            break;
        case 'ja':
            localeData = jaFourNobleTruths as FourNobleTruthsData;
            break;
        case 'ko':
            localeData = koFourNobleTruths as FourNobleTruthsData;
            break;
        case 'zh':
            localeData = zhFourNobleTruths as FourNobleTruthsData;
            break;
        default:
            localeData = viFourNobleTruths as FourNobleTruthsData; // Fallback to Vietnamese
    }

    // Find the truth by key, ensuring it's not the title
    const foundTruth = localeData[key];
    if (foundTruth && typeof foundTruth !== 'string') {
        return foundTruth;
    }

    return null;
});

// Update head for SEO
useHead(() => ({
    title: truth.value ? truth.value.name : t('seo.title'),
    meta: [
        { name: 'description', content: truth.value ? truth.value.description : t('seo.description') },
        // Add other meta tags as needed
    ]
}));
</script>

<style scoped>
/* Add any page-specific styles here */
</style>