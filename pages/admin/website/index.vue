<script lang="ts" setup>
const { data } = useFetch('http://47.104.212.164:3000/websiteList?template_id=&name=&orderBy=id&data_pool_id=&pageIndex=1&pageSize=10', {
  headers: {
    Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYWRtaW4iLCJwYXNzd29yZCI6ImlkZ3RlY2huZXR3b3JrLTgwOCIsImlhdCI6MTcxMjgxNjgwNiwiZXhwIjoxNzEyOTAzMjA2fQ.DuTsdvfgpKv8WfmOcdoR_lxxlIx9zOMERDNHxUTa9mw',
  },
})
const columns = [
  {
    title: 'name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'bucket',
    dataIndex: 'bucket',
    key: 'type',
  },
  {
    title: '操作',
    key: 'action',
  },
]
</script>

<template>
  <div class="mb-4">
    <a-button>查询</a-button>
  </div>
  <a-table :columns="columns" :data-source="data.data" bordered>
    <template #headerCell="{ column }">
      <template v-if="column.key === 'name'">
        <span>
          Name
        </span>
      </template>
    </template>

    <template #bodyCell="{ column, record }">
      <template v-if="column.key === 'name'">
        <a>
          {{ record.name }}
        </a>
      </template>
      <template v-else-if="column.key === 'tags'">
        <span>
          <a-tag
            v-for="tag in record.tags"
            :key="tag"
            :color="tag === 'loser' ? 'volcano' : tag.length > 5 ? 'geekblue' : 'green'"
          >
            {{ tag.toUpperCase() }}
          </a-tag>
        </span>
      </template>
      <template v-else-if="column.key === 'action'">
        <span />
        <span />
      </template>
    </template>
  </a-table>
</template>
