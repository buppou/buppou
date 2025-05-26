<template>
    <div>
        <FourNobleTruthsIndex />
        <EightfoldPathIndex />
        <FivePreceptsIndex />
        <TenWholesomeActionsIndex />
    </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import FourNobleTruthsIndex from '~/pages/four-noble-truths/index.vue';
import EightfoldPathIndex from '~/pages/eightfold-path/index.vue';
import FivePreceptsIndex from '~/pages/five-precepts/index.vue';
import TenWholesomeActionsIndex from '~/pages/ten-wholesome-actions/index.vue';

const { t } = useI18n();

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