<script setup lang="ts">
/**/ const Header = resolveComponent('TemplateHeaderH1') /**/
/**/ const Footer = resolveComponent('TemplateFooterF1') /**/
</script>

<template>
  <Header />
  <slot />
  <Footer />
</template>
