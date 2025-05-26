<template>
    <div class="container mx-auto px-4">
        <div v-if="precept">
            <h1 class="text-4xl font-bold text-blue-400 mb-6">{{ precept.name }}</h1>
            <p class="text-slate-300 leading-relaxed text-lg mb-4">{{ precept.description }}</p>
            <p v-if="precept.details" class="text-slate-300 leading-relaxed text-lg">{{ precept.details }}</p>
        </div>
        <div v-else>
            <p class="text-red-500">{{ $t('notFound') }}</p>
        </div>

        <!-- Navigation -->
        <div class="flex justify-between mt-8">
            <NuxtLink v-if="prevPreceptSlug && prevPreceptName" :to="`/five-precepts/${prevPreceptSlug}`"
                class="flex items-center text-blue-400 hover:text-blue-300 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                        clip-rule="evenodd" />
                </svg>
                {{ prevPreceptName }}
            </NuxtLink>
            <div v-else></div> <!-- Placeholder to maintain spacing -->

            <NuxtLink v-if="nextPreceptSlug && nextPreceptName" :to="`/five-precepts/${nextPreceptSlug}`"
                class="flex items-center text-blue-400 hover:text-blue-300 transition-colors">
                {{ nextPreceptName }}
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

// Import all locale data for Five Precepts
import viFivePrecepts from '~/i18n/locales/vi/fivePrecepts.json';
import enFivePrecepts from '~/i18n/locales/en/fivePrecepts.json';
import jaFivePrecepts from '~/i18n/locales/ja/fivePrecepts.json';
import koFivePrecepts from '~/i18n/locales/ko/fivePrecepts.json';
import zhFivePrecepts from '~/i18n/locales/zh/fivePrecepts.json';

// Define interface for the data structure
interface Precept {
    name: string;
    description: string;
    details?: string;
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

const route = useRoute();
const router = useRouter();
const { t, locale } = useI18n();

const slug = computed(() => route.params.slug as string);

// Computed property to find the correct precept data based on the slug and current locale
const precept = computed(() => {
    if (!slug.value) return null;

    // Extract the key from the slug (part before the first hyphen)
    const key = slug.value.split('-')[0];

    // Get the correct locale data
    let localeData: FivePreceptsData;
    switch (locale.value) {
        case 'vi':
            localeData = viFivePrecepts as FivePreceptsData;
            break;
        case 'en':
            localeData = enFivePrecepts as FivePreceptsData;
            break;
        case 'ja':
            localeData = jaFivePrecepts as FivePreceptsData;
            break;
        case 'ko':
            localeData = koFivePrecepts as FivePreceptsData;
            break;
        case 'zh':
            localeData = zhFivePrecepts as FivePreceptsData;
            break;
        default:
            localeData = viFivePrecepts as FivePreceptsData; // Fallback to Vietnamese
    }

    // Find the precept by key, ensuring it's not the title
    const foundPrecept = localeData[key];
    if (foundPrecept && typeof foundPrecept !== 'string') {
        return foundPrecept;
    }

    return null;
});

// List of precept keys in order
const preceptKeys = ['precept1', 'precept2', 'precept3', 'precept4', 'precept5'];

// Computed property for the previous precept slug
const prevPreceptSlug = computed(() => {
    const currentKey = slug.value.split('-')[0];
    const currentIndex = preceptKeys.indexOf(currentKey);
    if (currentIndex > 0) {
        const prevKey = preceptKeys[currentIndex - 1];
        // Use English name for slug generation
        const prevPreceptEnglish = (enFivePrecepts as FivePreceptsData)[prevKey] as Precept;
        return prevPreceptEnglish ? `${prevKey}-${slugify(cleanEnglishName(prevPreceptEnglish.name))}` : null;
    }
    return null;
});

// Computed property for the previous precept name (localized)
const prevPreceptName = computed(() => {
    const currentKey = slug.value.split('-')[0];
    const currentIndex = preceptKeys.indexOf(currentKey);
    if (currentIndex > 0) {
        const prevKey = preceptKeys[currentIndex - 1];
        const prevPrecept = (localeData.value as FivePreceptsData)[prevKey] as Precept;
        return prevPrecept ? prevPrecept.name : null;
    }
    return null;
});

// Computed property for the next precept slug
const nextPreceptSlug = computed(() => {
    const currentKey = slug.value.split('-')[0];
    const currentIndex = preceptKeys.indexOf(currentKey);
    if (currentIndex < preceptKeys.length - 1) {
        const nextKey = preceptKeys[currentIndex + 1];
        // Use English name for slug generation
        const nextPreceptEnglish = (enFivePrecepts as FivePreceptsData)[nextKey] as Precept;
        return nextPreceptEnglish ? `${nextKey}-${slugify(cleanEnglishName(nextPreceptEnglish.name))}` : null;
    }
    return null;
});

// Computed property for the next precept name (localized)
const nextPreceptName = computed(() => {
    const currentKey = slug.value.split('-')[0];
    const currentIndex = preceptKeys.indexOf(currentKey);
    if (currentIndex < preceptKeys.length - 1) {
        const nextKey = preceptKeys[currentIndex + 1];
        const nextPrecept = (localeData.value as FivePreceptsData)[nextKey] as Precept;
        return nextPrecept ? nextPrecept.name : null;
    }
    return null;
});

// Need to compute localeData based on locale change
const localeData = computed(() => {
    switch (locale.value) {
        case 'vi':
            return viFivePrecepts as FivePreceptsData;
        case 'en':
            return enFivePrecepts as FivePreceptsData;
        case 'ja':
            return jaFivePrecepts as FivePreceptsData;
        case 'ko':
            return koFivePrecepts as FivePreceptsData;
        case 'zh':
            return zhFivePrecepts as FivePreceptsData;
        default:
            return viFivePrecepts as FivePreceptsData; // Fallback to Vietnamese
    }
});

// Update head for SEO
useHead(() => ({
    title: precept.value ? precept.value.name : t('seo.title'),
    meta: [
        { name: 'description', content: precept.value ? precept.value.description : t('seo.description') },
        // Add other meta tags as needed
    ]
}));

// Add keyboard navigation
const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'ArrowLeft' && prevPreceptSlug.value) {
        router.push(`/five-precepts/${prevPreceptSlug.value}`);
    } else if (event.key === 'ArrowRight' && nextPreceptSlug.value) {
        router.push(`/five-precepts/${nextPreceptSlug.value}`);
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
/* Dummy comment to trigger re-evaluation */
</style>