<template>
    <div class="container mx-auto px-4">
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

        <!-- Navigation -->
        <div class="flex justify-between mt-8">
            <NuxtLink v-if="prevTruthSlug && prevTruthName" :to="`/four-noble-truths/${prevTruthSlug}`"
                class="flex items-center text-green-400 hover:text-green-300 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                        clip-rule="evenodd" />
                </svg>
                {{ prevTruthName }}
            </NuxtLink>
            <div v-else></div> <!-- Placeholder to maintain spacing -->

            <NuxtLink v-if="nextTruthSlug && nextTruthName" :to="`/four-noble-truths/${nextTruthSlug}`"
                class="flex items-center text-green-400 hover:text-green-300 transition-colors">
                {{ nextTruthName }}
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd" />
                </svg>
            </NuxtLink>
            <div v-else></div> <!-- Placeholder to maintain spacing -->
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { computed, onMounted, onUnmounted } from 'vue';
import { slugify, cleanEnglishName } from '~/utils/slugify';

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
const router = useRouter();
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

// List of truth keys in order
const truthKeys = ['truth1', 'truth2', 'truth3', 'truth4'];

// Computed property for the previous truth slug
const prevTruthSlug = computed(() => {
    const currentKey = slug.value.split('-')[0];
    const currentIndex = truthKeys.indexOf(currentKey);
    if (currentIndex > 0) {
        const prevKey = truthKeys[currentIndex - 1];
        // Use English name for slug generation
        const prevTruthEnglish = (enFourNobleTruths as FourNobleTruthsData)[prevKey] as Truth;
        return prevTruthEnglish ? `${prevKey}-${slugify(cleanEnglishName(prevTruthEnglish.name))}` : null;
    }
    return null;
});

// Computed property for the previous truth name (localized)
const prevTruthName = computed(() => {
    const currentKey = slug.value.split('-')[0];
    const currentIndex = truthKeys.indexOf(currentKey);
    if (currentIndex > 0) {
        const prevKey = truthKeys[currentIndex - 1];
        const prevTruth = (localeData.value as FourNobleTruthsData)[prevKey] as Truth;
        return prevTruth ? prevTruth.name : null;
    }
    return null;
});

// Computed property for the next truth slug
const nextTruthSlug = computed(() => {
    const currentKey = slug.value.split('-')[0];
    const currentIndex = truthKeys.indexOf(currentKey);
    if (currentIndex < truthKeys.length - 1) {
        const nextKey = truthKeys[currentIndex + 1];
        // Use English name for slug generation
        const nextTruthEnglish = (enFourNobleTruths as FourNobleTruthsData)[nextKey] as Truth;
        return nextTruthEnglish ? `${nextKey}-${slugify(cleanEnglishName(nextTruthEnglish.name))}` : null;
    }
    return null;
});

// Computed property for the next truth name (localized)
const nextTruthName = computed(() => {
    const currentKey = slug.value.split('-')[0];
    const currentIndex = truthKeys.indexOf(currentKey);
    if (currentIndex < truthKeys.length - 1) {
        const nextKey = truthKeys[currentIndex + 1];
        const nextTruth = (localeData.value as FourNobleTruthsData)[nextKey] as Truth;
        return nextTruth ? nextTruth.name : null;
    }
    return null;
});

// Need to compute localeData based on locale change
const localeData = computed(() => {
    switch (locale.value) {
        case 'vi':
            return viFourNobleTruths as FourNobleTruthsData;
        case 'en':
            return enFourNobleTruths as FourNobleTruthsData;
        case 'ja':
            return jaFourNobleTruths as FourNobleTruthsData;
        case 'ko':
            return koFourNobleTruths as FourNobleTruthsData;
        case 'zh':
            return zhFourNobleTruths as FourNobleTruthsData;
        default:
            return viFourNobleTruths as FourNobleTruthsData; // Fallback to Vietnamese
    }
});

// Update head for SEO
useHead(() => ({
    title: truth.value ? truth.value.name : t('seo.title'),
    meta: [
        { name: 'description', content: truth.value ? truth.value.description : t('seo.description') },
        // Add other meta tags as needed
    ]
}));

// Add keyboard navigation
const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'ArrowLeft' && prevTruthSlug.value) {
        router.push(`/four-noble-truths/${prevTruthSlug.value}`);
    } else if (event.key === 'ArrowRight' && nextTruthSlug.value) {
        router.push(`/four-noble-truths/${nextTruthSlug.value}`);
    }
};

onMounted(() => {
    window.addEventListener('keydown', handleKeyDown);
});

onUnmounted(() => {
    window.removeEventListener('keydown', handleKeyDown);
});
</script>

<style scoped>
/* Add any page-specific styles here */
</style>