<template>
  <div>
    <el-button type="primary" :icon="Plus">我是App</el-button>
    <test />
  </div>
</template>

<script setup lang="ts">
import { Plus } from '@element-plus/icons-vue'
import test from '@/components/test.vue'
</script>

<style scoped lang="scss">
.wrap {
  width: 200px;
}
</style>
