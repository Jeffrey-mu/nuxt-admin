<script setup lang="ts">
</script>

<template>
  <a-layout-header class="flex justify-between items-center">
    <h2 class="text-2xl text-white">
      模版管理系统
    </h2>
    <div>
      <a-popover placement="bottom">
        <template #content>
          <p>退出登陆</p>
          <p>个人中心</p>
        </template>
        <a-avatar class="cursor-pointer">
          <template #icon>
            <UserOutlined />
          </template>
        </a-avatar>
      </a-popover>
    </div>
  </a-layout-header>
</template>
