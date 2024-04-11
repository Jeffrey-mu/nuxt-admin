<script setup lang="ts">
const selectedKeys2 = ref<string[]>(['1'])
const collapsed = ref<boolean[]>(false)
const openKeys = ref<string[]>(['sub1'])
</script>

<template>
  <a-layout-sider v-model:collapsed="collapsed" width="200" collapsible>
    <a-menu
      v-model:selectedKeys="selectedKeys2" v-model:openKeys="openKeys" theme="dark" mode="inline"
    >
      <a-sub-menu key="sub1">
        <template #title>
          <span class="flex items-center gap-3">
            <SettingOutlined />
            <span>配置面板</span>
          </span>
        </template>
        <a-menu-item key="1">
          <NuxtLink to="/admin/template">
            模版管理
          </NuxtLink>
        </a-menu-item>
        <a-menu-item key="2">
          <NuxtLink to="/admin/website">
            网站管理
          </NuxtLink>
        </a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub2">
        <template #title>
          <span class="flex items-center gap-3">
            <UserOutlined />
            <span>个人中心</span>
          </span>
        </template>
        <a-menu-item key="5">
          option5
        </a-menu-item>
        <a-menu-item key="6">
          option6
        </a-menu-item>
        <a-menu-item key="7">
          option7
        </a-menu-item>
        <a-menu-item key="8">
          option8
        </a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub3">
        <template #title>
          <span class="flex items-center gap-3">
            <HddOutlined />
            <span>数据管理</span>
          </span>
        </template>
        <a-menu-item key="9">
          option9
        </a-menu-item>
        <a-menu-item key="10">
          option10
        </a-menu-item>
        <a-menu-item key="11">
          option11
        </a-menu-item>
        <a-menu-item key="12">
          option12
        </a-menu-item>
      </a-sub-menu>
    </a-menu>
  </a-layout-sider>
</template>
