<script setup lang="ts">
import Layout from './Layout.vue'

const data = ref([])
fetch('http://47.104.212.164:3000/dataList?data_type_id=&main_title=&content=&src=&pageIndex=1&pageSize=10&manager_name=admin', {
  headers: {
    Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYWRtaW4iLCJwYXNzd29yZCI6ImlkZ3RlY2huZXR3b3JrLTgwOCIsImlhdCI6MTcxMjgxNjgwNiwiZXhwIjoxNzEyOTAzMjA2fQ.DuTsdvfgpKv8WfmOcdoR_lxxlIx9zOMERDNHxUTa9mw',
  },
}).then((res) => {
  return res.json()
}).then((res) => {
  data.value = res.data
})
definePageMeta({
  layout: 'template',
})
/**/ const Body = resolveComponent('TemplateBodyB2') /**/
</script>

<template>
  <Layout>
    <Body :data="data" />
  </Layout>
</template>
