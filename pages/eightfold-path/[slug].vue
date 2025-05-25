<template>
    <div class="container mx-auto px-4">
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

        <!-- Navigation -->
        <div class="flex justify-between mt-8">
            <NuxtLink v-if="prevPathSlug && prevPathName" :to="`/eightfold-path/${prevPathSlug}`"
                class="flex items-center text-purple-400 hover:text-purple-300 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                        clip-rule="evenodd" />
                </svg>
                {{ prevPathName }}
            </NuxtLink>
            <div v-else></div> <!-- Placeholder to maintain spacing -->

            <NuxtLink v-if="nextPathSlug && nextPathName" :to="`/eightfold-path/${nextPathSlug}`"
                class="flex items-center text-purple-400 hover:text-purple-300 transition-colors">
                {{ nextPathName }}
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
const router = useRouter();
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

// List of path keys in order
const pathKeys = ['path1', 'path2', 'path3', 'path4', 'path5', 'path6', 'path7', 'path8'];

// Computed property for the previous path slug
const prevPathSlug = computed(() => {
    const currentKey = slug.value.split('-')[0];
    const currentIndex = pathKeys.indexOf(currentKey);
    if (currentIndex > 0) {
        const prevKey = pathKeys[currentIndex - 1];
        // Use English name for slug generation
        const prevPathEnglish = (enEightfoldPath as EightfoldPathData)[prevKey] as Path;
        return prevPathEnglish ? `${prevKey}-${slugify(cleanEnglishName(prevPathEnglish.name))}` : null;
    }
    return null;
});

// Computed property for the previous path name (localized)
const prevPathName = computed(() => {
    const currentKey = slug.value.split('-')[0];
    const currentIndex = pathKeys.indexOf(currentKey);
    if (currentIndex > 0) {
        const prevKey = pathKeys[currentIndex - 1];
        const prevPath = (localeData.value as EightfoldPathData)[prevKey] as Path;
        return prevPath ? prevPath.name : null;
    }
    return null;
});

// Computed property for the next path slug
const nextPathSlug = computed(() => {
    const currentKey = slug.value.split('-')[0];
    const currentIndex = pathKeys.indexOf(currentKey);
    if (currentIndex < pathKeys.length - 1) {
        const nextKey = pathKeys[currentIndex + 1];
        // Use English name for slug generation
        const nextPathEnglish = (enEightfoldPath as EightfoldPathData)[nextKey] as Path;
        return nextPathEnglish ? `${nextKey}-${slugify(cleanEnglishName(nextPathEnglish.name))}` : null;
    }
    return null;
});

// Computed property for the next path name (localized)
const nextPathName = computed(() => {
    const currentKey = slug.value.split('-')[0];
    const currentIndex = pathKeys.indexOf(currentKey);
    if (currentIndex < pathKeys.length - 1) {
        const nextKey = pathKeys[currentIndex + 1];
        const nextPath = (localeData.value as EightfoldPathData)[nextKey] as Path;
        return nextPath ? nextPath.name : null;
    }
    return null;
});

// Need to compute localeData based on locale change
const localeData = computed(() => {
    switch (locale.value) {
        case 'vi':
            return viEightfoldPath as EightfoldPathData;
        case 'en':
            return enEightfoldPath as EightfoldPathData;
        case 'ja':
            return jaEightfoldPath as EightfoldPathData;
        case 'ko':
            return koEightfoldPath as EightfoldPathData;
        case 'zh':
            return zhEightfoldPath as EightfoldPathData;
        default:
            return viEightfoldPath as EightfoldPathData; // Fallback to Vietnamese
    }
});

// Update head for SEO
useHead(() => ({
    title: path.value ? path.value.name : t('seo.title'),
    meta: [
        { name: 'description', content: path.value ? path.value.description : t('seo.description') },
        // Add other meta tags as needed
    ]
}));

// Add keyboard navigation
const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'ArrowLeft' && prevPathSlug.value) {
        router.push(`/eightfold-path/${prevPathSlug.value}`);
    } else if (event.key === 'ArrowRight' && nextPathSlug.value) {
        router.push(`/eightfold-path/${nextPathSlug.value}`);
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