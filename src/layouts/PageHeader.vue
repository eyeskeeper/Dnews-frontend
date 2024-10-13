<template>
  <div aria-label="A complete example of page header">
    <el-page-header @back="onBack">
      <template #content>
        <div class="flex items-center">
          <el-avatar
            class="mr-3"
            :size="32"
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
          />
          <span class="text-large font-600 mr-3"> Title </span>
          <el-tag>Default</el-tag>
        </div>
      </template>
      <template #extra>
        <div class="flex items-center">
          <el-button>Print</el-button>
          <el-button type="primary" class="ml-2">Edit</el-button>
        </div>
      </template>
    </el-page-header>
    <el-divider></el-divider>
  </div>
</template>

<script setup lang="ts">
import { ElNotification as notify } from "element-plus";

const onBack = () => {
  notify("Back");
};
</script>
<script setup lang="ts"></script>

<style scoped></style>
