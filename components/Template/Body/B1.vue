<script setup lang="ts">
const props = defineProps<{ data: any }>()
</script>

<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 m-10">
    <div v-for="item in props.data" :key="item" class="rounded overflow-hidden shadow-lg">
      <img class="w-full" :src="`http://47.104.212.164:3000/${item.picture}`" alt="Sunset in the mountains">
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">
          {{ item.main_title }}
        </div>
        <p class="text-gray-700 text-base">
          {{ item.description }}
        </p>
      </div>
      <div class="px-6 pt-4 pb-2">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
