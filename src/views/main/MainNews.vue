<template>
  <page-header></page-header>
  <div id="MainNews">
    <el-card
      class="box-card"
      v-for="(val, index) in 10"
      :key="index"
      style="height: 10%"
    >
      <img
        src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
        style="width: 100%"
      />
      <template #footer>
        <div id="text-script">
          <span>TitleTitleTitleTitleTitle</span>
          <div>
            <!--            使用iconfont图标-->
            <span class="iconfont">&#xe612;</span>
            <el-button size="small" :icon="Search" />
            <el-button size="small" :icon="StarFilled" />
            <el-button size="small" :icon="Share" />
            <el-button size="small" :icon="Comment" />
          </div>
        </div>
      </template>
    </el-card>
  </div>
  <div class="demo-pagination-block" style="margin-top: 10px">
    <el-pagination
      v-model:current-page="currentPage"
      v-model:page-size="pageSize"
      size="default"
      :background="background"
      layout="prev, pager, next, jumper"
      :total="1000"
      @current-change="handleCurrentChange"
    />
  </div>
</template>
<script setup lang="ts">
import PageHeader from "@/layouts/PageHeader.vue";
import { ref } from "vue";
import { Share, StarFilled, Comment, Search } from "@element-plus/icons-vue";

const currentPage = ref(5);
const pageSize = ref(100);
const background = ref(false);
const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`);
};
</script>
<style scoped>
#MainNews {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around; /* 均匀分布 */
  gap: 10px; /* 卡片之间的间距 */
}
.box-card {
  flex: 1 1 calc(20% - 10px); /* 每行最多显示4个卡片，根据需要调整 */
  box-sizing: border-box;
}
#text-script {
  max-height: 20%;
}
</style>
