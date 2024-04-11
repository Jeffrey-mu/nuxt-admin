<script setup lang="ts">
definePageMeta({
  layout: 'template',
})
/**/ const Header = resolveComponent('TemplateHeaderH2') /**/
/**/ const Footer = resolveComponent('TemplateFooterF2') /**/
</script>

<template>
  <Header />
  <slot />
  <Footer />
</template>
