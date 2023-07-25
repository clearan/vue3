<template>
  <div class="login-container">
    <el-row>
      <el-col :span="12">展位</el-col>
      <el-col :span="12">右侧展位</el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.login-container {
  width: 100%;
  height: 100vh;
  background: url('@/assets/images/background.jpg') no-repeat;
  background-size: cover;
}
</style>
