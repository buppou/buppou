<template>
    <div class="container mx-auto px-4">
        <div v-if="action">
            <h1 class="text-4xl font-bold text-pink-400 mb-6">{{ action.name }}</h1>
            <p class="text-slate-300 leading-relaxed text-lg mb-4">{{ action.description }}</p>
            <p v-if="action.details" class="text-slate-300 leading-relaxed text-lg">{{ action.details }}</p>
        </div>
        <div v-else>
            <p class="text-red-500">{{ $t('notFound') }}</p>
        </div>

        <!-- Navigation -->
        <div class="flex justify-between mt-8">
            <NuxtLink v-if="prevActionSlug && prevActionName" :to="`/ten-wholesome-actions/${prevActionSlug}`"
                class="flex items-center text-pink-400 hover:text-pink-300 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                        clip-rule="evenodd" />
                </svg>
                {{ prevActionName }}
            </NuxtLink>
            <div v-else></div> <!-- Placeholder to maintain spacing -->

            <NuxtLink v-if="nextActionSlug && nextActionName" :to="`/ten-wholesome-actions/${nextActionSlug}`"
                class="flex items-center text-pink-400 hover:text-pink-300 transition-colors">
                {{ nextActionName }}
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

// Import all locale data for Ten Wholesome Actions
import viTenWholesomeActions from '~/i18n/locales/vi/tenWholesomeActions.json';
import enTenWholesomeActions from '~/i18n/locales/en/tenWholesomeActions.json';
import jaTenWholesomeActions from '~/i18n/locales/ja/tenWholesomeActions.json';
import koTenWholesomeActions from '~/i18n/locales/ko/tenWholesomeActions.json';
import zhTenWholesomeActions from '~/i18n/locales/zh/tenWholesomeActions.json';

// Define interface for the data structure
interface Action {
    name: string;
    description: string;
    details?: string;
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

const route = useRoute();
const router = useRouter();
const { t, locale } = useI18n();

const slug = computed(() => route.params.slug as string);

// Computed property to find the correct action data based on the slug and current locale
const action = computed(() => {
    if (!slug.value) return null;

    // Extract the key from the slug (part before the first hyphen)
    const key = slug.value.split('-')[0];

    // Get the correct locale data
    let localeData: TenWholesomeActionsData;
    switch (locale.value) {
        case 'vi':
            localeData = viTenWholesomeActions as TenWholesomeActionsData;
            break;
        case 'en':
            localeData = enTenWholesomeActions as TenWholesomeActionsData;
            break;
        case 'ja':
            localeData = jaTenWholesomeActions as TenWholesomeActionsData;
            break;
        case 'ko':
            localeData = koTenWholesomeActions as TenWholesomeActionsData;
            break;
        case 'zh':
            localeData = zhTenWholesomeActions as TenWholesomeActionsData;
            break;
        default:
            localeData = viTenWholesomeActions as TenWholesomeActionsData; // Fallback to Vietnamese
    }

    // Find the action by key, ensuring it's not the title
    const foundAction = localeData[key];
    if (foundAction && typeof foundAction !== 'string') {
        return foundAction;
    }

    return null;
});

// List of action keys in order
const actionKeys = ['action1', 'action2', 'action3', 'action4', 'action5', 'action6', 'action7', 'action8', 'action9', 'action10'];

// Computed property for the previous action slug
const prevActionSlug = computed(() => {
    const currentKey = slug.value.split('-')[0];
    const currentIndex = actionKeys.indexOf(currentKey);
    if (currentIndex > 0) {
        const prevKey = actionKeys[currentIndex - 1];
        // Use English name for slug generation
        const prevActionEnglish = (enTenWholesomeActions as TenWholesomeActionsData)[prevKey] as Action;
        return prevActionEnglish ? `${prevKey}-${slugify(cleanEnglishName(prevActionEnglish.name))}` : null;
    }
    return null;
});

// Computed property for the previous action name (localized)
const prevActionName = computed(() => {
    const currentKey = slug.value.split('-')[0];
    const currentIndex = actionKeys.indexOf(currentKey);
    if (currentIndex > 0) {
        const prevKey = actionKeys[currentIndex - 1];
        const prevAction = (localeData.value as TenWholesomeActionsData)[prevKey] as Action;
        return prevAction ? prevAction.name : null;
    }
    return null;
});

// Computed property for the next action slug
const nextActionSlug = computed(() => {
    const currentKey = slug.value.split('-')[0];
    const currentIndex = actionKeys.indexOf(currentKey);
    if (currentIndex < actionKeys.length - 1) {
        const nextKey = actionKeys[currentIndex + 1];
        // Use English name for slug generation
        const nextActionEnglish = (enTenWholesomeActions as TenWholesomeActionsData)[nextKey] as Action;
        return nextActionEnglish ? `${nextKey}-${slugify(cleanEnglishName(nextActionEnglish.name))}` : null;
    }
    return null;
});

// Computed property for the next action name (localized)
const nextActionName = computed(() => {
    const currentKey = slug.value.split('-')[0];
    const currentIndex = actionKeys.indexOf(currentKey);
    if (currentIndex < actionKeys.length - 1) {
        const nextKey = actionKeys[currentIndex + 1];
        const nextAction = (localeData.value as TenWholesomeActionsData)[nextKey] as Action;
        return nextAction ? nextAction.name : null;
    }
    return null;
});

// Need to compute localeData based on locale change
const localeData = computed(() => {
    switch (locale.value) {
        case 'vi':
            return viTenWholesomeActions as TenWholesomeActionsData;
        case 'en':
            return enTenWholesomeActions as TenWholesomeActionsData;
        case 'ja':
            return jaTenWholesomeActions as TenWholesomeActionsData;
        case 'ko':
            return koTenWholesomeActions as TenWholesomeActionsData;
        case 'zh':
            return zhTenWholesomeActions as TenWholesomeActionsData;
        default:
            return viTenWholesomeActions as TenWholesomeActionsData; // Fallback to Vietnamese
    }
});

// Update head for SEO
useHead(() => ({
    title: action.value ? action.value.name : t('seo.title'),
    meta: [
        { name: 'description', content: action.value ? action.value.description : t('seo.description') },
        // Add other meta tags as needed
    ]
}));

// Add keyboard navigation
const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'ArrowLeft' && prevActionSlug.value) {
        router.push(`/ten-wholesome-actions/${prevActionSlug.value}`);
    } else if (event.key === 'ArrowRight' && nextActionSlug.value) {
        router.push(`/ten-wholesome-actions/${nextActionSlug.value}`);
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