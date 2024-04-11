<script lang="ts" setup>
import { DownOutlined, SmileOutlined } from '@ant-design/icons-vue'
import templateApi from '@/db/template.json'

const columns = [
  {
    name: 'name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'type',
    dataIndex: 'type',
    key: 'type',
  },
  {
    title: '操作',
    key: 'action',
  },
]
function handlePreview(record: any) {
  useFetch(`/api/preview?record=${JSON.stringify(record)}`).then((res) => {
    console.log(res)
    useRouter().push({ path: `/template_${record.id}` })
  })
}

function handleBuild(record: any) {
  useFetch(`/api/build?record=${JSON.stringify(record)}`).then((res) => {
    console.log(res)
    useRouter().push({ path: `/template_${record.id}` })
  })
}
const data = templateApi.data
</script>

<template>
  <div class="mb-4">
    <a-button>查询</a-button>
  </div>
  <a-table :columns="columns" :data-source="data" bordered>
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
        <span>
          <a-button @click="handlePreview(record)">预览</a-button>
        </span>
        <span>
          <a-button @click="handleBuild(record)">
            打包
          </a-button>
        </span>
      </template>
    </template>
  </a-table>
</template>
