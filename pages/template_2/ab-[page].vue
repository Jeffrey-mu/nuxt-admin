<script setup lang="ts">
import Layout from './Layout.vue'

definePageMeta({
  layout: 'template',
})
</script>

<template>
  <Layout>
    <!-- 12 -->
    {{ $route.params.page }}
    <TemplateCommonAboutUs v-if="$route.params.page === 'about-us'" />
    <TemplateCommonPrivacyPolicy v-if="$route.params.page === 'privacy-policy'" />
    <TemplateCommonTermsofUse v-if="$route.params.page === 'terms-of-use'" />
  </Layout>
</template>
