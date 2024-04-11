<script setup lang="ts">
definePageMeta({
  layout: 'template',
})
</script>

<template>
  <TemplateLayout>
    <!-- 12 -->
    {{ $route.params.page }}
    <TemplateCommonAboutUs v-if="$route.params.page === 'about-us'" />
    <TemplateCommonPrivacyPolicy v-if="$route.params.page === 'privacy-policy'" />
    <TemplateCommonTermsofUse v-if="$route.params.page === 'terms-of-use'" />
  </TemplateLayout>
</template>
