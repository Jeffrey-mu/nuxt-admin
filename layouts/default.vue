<script setup lang="ts">
defineOptions({
  name: 'DefaultLayout',
})

const title = '模版管理系统'
</script>

<template>
  <Html>
    <Head>
      <Title>{{ title }}</Title>
      <Link />
    </Head>

    <Body>
      <a-layout class="h-screen flex flex-col">
        <layout-header />
        <a-layout class="flex-1">
          <layout-sider />
          <a-layout class="p-3">
            <layout-breadcrumb />
            <a-layout-content class="bg-white shadow-sm p-4 overflow-auto">
              <slot />
            </a-layout-content>
          </a-layout>
        </a-layout>
      </a-layout>
    </Body>
  </Html>
</template>

<style scoped>

</style>
