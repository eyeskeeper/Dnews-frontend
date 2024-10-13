<template>
  <div id="LoginPage">
    <el-card id="LoginPage-card">
      <h2>登录（狐獴图片）</h2>
      账号
      <el-input
        style="width: 240px; margin-left: 10px; margin-bottom: 10px"
      ></el-input>
      密码
      <el-input
        v-model="password"
        style="width: 240px; margin-left: 10px; margin-bottom: 10px"
        type="password"
        placeholder="Please input password"
        show-password
      ></el-input>
      <el-button text color="#ffffff"> 登录 </el-button>
      <el-button text> 注册 </el-button>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const password = ref("");
</script>

<style scoped>
#LoginPage {
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background: linear-gradient(200deg, #72afd3, #96fbc4);
}
#LoginPage-card {
  width: 22%;
}
</style>
