<template>
  <div class="common-layout">
    <el-container>
      <el-header id="header">
        <BasicHeader />
      </el-header>
      <el-container>
        <el-aside width="15%">
          <BasicAside />
        </el-aside>
        <el-container>
          <el-main>
            <!--            todo:改为router-view形式-->
            <MainNews />
          </el-main>
          <el-footer>
            <a
              href="https://space.bilibili.com/60530600?spm_id_from=333.1007.0.0"
              target="_blank"
              rel="noopener noreferrer"
              >联系站长</a
            >
          </el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>
<script setup lang="ts">
import BasicHeader from "@/layouts/BasicHeader.vue";
import BasicAside from "@/layouts/BasicAside.vue";
import MainNews from "@/views/main/MainNews.vue";
</script>
<style scoped>
.common-layout {
  #header {
    margin-bottom: 20px;
  }
}
</style>
