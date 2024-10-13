<script setup lang="ts">
import { ref } from "vue";

const activeIndex = ref("1");
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};

const HeadSrc = "@/assets/setting.svg";
const LogoSrc = "@/assets/logo.svg";
</script>

<template>
  <div id="BasicHeader">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      :ellipsis="false"
      @select="handleSelect"
    >
      <el-menu-item>
        <img style="width: 30px" src="@/assets/logo.svg" alt="logo" />
        <div id="title">Dnews</div>
      </el-menu-item>
      <el-menu-item index="1">最近新闻</el-menu-item>
      <el-menu-item index="2">高级搜索</el-menu-item>
      <el-menu-item index="3">数据解析</el-menu-item>
      <el-menu-item index="4">世界树</el-menu-item>
      <el-menu-item index="5">百家争鸣</el-menu-item>
      <div id="setting">
        <img style="width: 20px" src="@/assets/setting.svg" alt="setting" />
        <div style="margin-left: 5px">name</div>
      </div>
    </el-menu>
  </div>
</template>

<style scoped>
#BasicHeader {
  #title {
    margin-left: 10px;
  }

  #setting {
    display: flex;
    margin-left: auto;
    align-items: center;
  }
}
</style>
