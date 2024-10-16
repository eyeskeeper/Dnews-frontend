<template>
  <div id="BasicAside">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :default-openeds="openedMenus"
      :router="true"
    >
      <el-menu-item>
        <template #title>
          <el-icon>
            <location />
          </el-icon>
          <el-input
            v-model="input"
            style="width: 240px"
            placeholder="输入搜索内容..."
          />
        </template>
      </el-menu-item>
      <el-menu-item index="2">
        <el-icon>
          <icon-menu />
        </el-icon>
        <span>浏览历史</span>
      </el-menu-item>
      <el-menu-item index="3">
        <el-icon>
          <setting />
        </el-icon>
        <span>浏览分析</span>
      </el-menu-item>
      <el-menu-item index="/uploadPage">
        <el-icon>
          <ChatDotSquare />
        </el-icon>
        <span>发布新闻</span>
      </el-menu-item>
      <el-sub-menu index="5">
        <template #title>
          <el-icon><document /></el-icon>
          <span>我的订阅</span>
        </template>
        <el-scrollbar height="300px">
          <el-menu-item v-for="(item, index) in itemList" :key="index">
            <img src="@/assets/星球2.png" class="labelImage" />
            {{ item }}
          </el-menu-item>
        </el-scrollbar>
      </el-sub-menu>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
  ChatDotSquare,
} from "@element-plus/icons-vue";

import { ref } from "vue";

const input = ref("");
const itemList = ref([
  "睡前消息",
  "新华社",
  "新华社",
  "新华社",
  "新华社",
  "新华社",
  "新华社",
  "新华社",
  "新华社",
  "新华社",
  "新华社",
  "新华社",
  "新华社",
  "新华社",
  "新华社",
  "新华社",
]);
//todo: 当页面打开时向后端发请求得到订阅列表
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const openedMenus = ref(["5"]);
</script>
<style scoped>
.labelImage {
  width: 15%;
  border-radius: 50%;
  height: auto;
  margin-right: 5px;
}
</style>
