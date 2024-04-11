<script setup lang="ts">
definePageMeta({
  layout: 'template',
})
/**/ const Header = resolveComponent('TemplateHeaderH1') /**/
/**/ const Footer = resolveComponent('TemplateFooterF1') /**/
</script>

<template>
  <Header />
  <slot />
  <Footer />
</template>
