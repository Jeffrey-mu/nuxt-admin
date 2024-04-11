<script setup lang="ts">
import preview from '@/db/preview.json'

definePageMeta({
  layout: 'template',
})
/**/ const Body = resolveComponent('TemplateBodyB1') /**/
</script>

<template>
  <TemplateLayout>
    <Body />
  </TemplateLayout>
</template>
