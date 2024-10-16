<template>
  <div>
    <el-form
      ref="formRef"
      :model="threeMatter"
      label-width="auto"
      class="demo-dynamic"
      :inline="true"
    >
      <el-form-item prop="email" label="时间">
        <el-input v-model="threeMatter.time" />
      </el-form-item>
      <el-form-item prop="email" label="地点">
        <el-input v-model="threeMatter.location" />
      </el-form-item>
      <el-form-item prop="email" label="人物">
        <el-input v-model="threeMatter.character" />
      </el-form-item>
    </el-form>
    <el-form>
      <el-form-item
        v-for="(domain, index) in dynamicValidateForm.domains"
        :key="domain.key"
        :label="'领域' + index"
        :prop="'domains.' + index + '.value'"
        :rules="{
          required: true,
          trigger: 'blur',
        }"
      >
        <el-col :span="7">
          <el-input v-model="domain.value1" />
        </el-col>
        <el-col :span="1">
          <span class="text-gray-500">-</span>
        </el-col>
        <el-col :span="7">
          <el-input v-model="domain.value2" />
        </el-col>
        <el-col :span="1">
          <span class="text-gray-500">-</span>
        </el-col>
        <el-col :span="7">
          <el-input v-model="domain.value3" />
        </el-col>
        <el-button class="mt-2" @click.prevent="removeDomain(domain)">
          Delete
        </el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm(formRef)"
          >Submit</el-button
        >
        <el-button @click="addDomain">New domain</el-button>
        <el-button @click="resetForm(formRef)">Reset</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script setup lang="ts">
import { ref, reactive } from "vue";
import type { FormInstance } from "element-plus";

const threeMatter = ref({
  time: new Date("2023-2-23T25:61:56"),
  location: "",
  character: "",
});

const formRef = ref<FormInstance>();
const dynamicValidateForm = reactive<{
  domains: DomainItem[];
}>({
  domains: [
    {
      key: 1,
      value1: "",
      value2: "",
      value3: "",
    },
  ],
});

interface DomainItem {
  key: number;
  value1: string;
  value2: string;
  value3: string;
}

const removeDomain = (item: DomainItem) => {
  const index = dynamicValidateForm.domains.indexOf(item);
  if (index !== -1) {
    dynamicValidateForm.domains.splice(index, 1);
  }
};

const addDomain = () => {
  dynamicValidateForm.domains.push({
    key: Date.now(),
    value1: "",
    value2: "",
    value3: "",
  });
};

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.validate((valid) => {
    if (valid) {
      console.log("submit!");
    } else {
      console.log("error submit!");
    }
  });
};

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};
</script>
<style scoped>
.demo-dynamic .el-input {
  --el-input-width: 220px;
}

.demo-dynamic .el-select {
  --el-select-width: 220px;
}
</style>
