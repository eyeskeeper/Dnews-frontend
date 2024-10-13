<template>
  <div id="RegistryPage">
    <el-card id="RegistryPage-card">
      <h2>注册（图片）</h2>
      账号
      <el-input
        v-model="account"
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
      邮箱
      <el-input
        v-model="email"
        style="width: 240px; margin-left: 10px; margin-bottom: 10px"
        type="password"
        show-password
      ></el-input>
      <el-button text> 注册 </el-button>
    </el-card>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";

const password = ref("");
const account = ref("");
const email = ref("");
</script>
<style scoped>
#RegistryPage {
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background: linear-gradient(200deg, #72afd3, #96fbc4);
}
#RegistryPage-card {
  width: 22%;
}
</style>
