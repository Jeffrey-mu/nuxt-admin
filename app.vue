<script setup lang="ts">
defineOptions({
  name: 'App',
})

const theme = {
  token: {
    // colorPrimary: '#00b96b',
  },
}
</script>

<template>
  <NuxtLayout>
    <a-config-provider
      :theme="theme"
    >
      <NuxtPage />
    </a-config-provider>
  </NuxtLayout>
</template>

<style scoped>

</style>
