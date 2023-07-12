<template>
  <div>
    <el-button type="primary" :icon="Plus">我是App</el-button>
    <svg style="height: 120px; width: 120px">
      <use xlink:href="#icon-phone" fill="yellow"></use>
    </svg>
  </div>
</template>

<script setup lang="ts">
import { Plus } from '@element-plus/icons-vue'
</script>

<style scoped lang="scss">
.wrap {
  width: 200px;
}
</style>
