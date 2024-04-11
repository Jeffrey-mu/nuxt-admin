<script setup lang="ts">
defineOptions({
  name: 'DefaultLayout',
})

const head = useLocaleHead({
  addDirAttribute: true,
  addSeoAttributes: true,
})

const title = '模版管理系统'
</script>

<template>
  <Html :lang="head.htmlAttrs.lang" :dir="head.htmlAttrs.dir">
    <Head>
      <Title>{{ title }}</Title>
      <Link
        v-for="link in head.link" :id="link.id" :key="link.id" :rel="link.rel" :href="link.href"
        :hreflang="link.hreflang"
      />
      <Meta v-for="meta in head.meta" :id="meta.id" :key="meta.id" :property="meta.property" :content="meta.content" />
    </Head>

    <Body>
      <a-layout class="h-screen flex flex-col">
        <layout-header />
        <a-layout class="flex-1">
          <layout-sider />
          <a-layout class="p-3">
            <layout-breadcrumb />
            <a-layout-content class="bg-white shadow-sm p-4">
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
