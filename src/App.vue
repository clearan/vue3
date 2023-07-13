<template>
  <div>
    <el-button type="primary" :icon="Plus">我是App</el-button>
    <Svg name="phone" color="yellow" width="50px"></Svg>
    <Page></Page>
  </div>
</template>

<script setup lang="ts">
import { Plus } from '@element-plus/icons-vue'
// import Svg from '@/components/SvgIcon/index.vue'
// import Page from '@/components/Pagination/index.vue'
</script>

<style scoped lang="scss">
.wrap {
  width: 200px;
}
</style>
