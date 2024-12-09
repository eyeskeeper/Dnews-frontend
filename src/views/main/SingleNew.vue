<template>
  <page-header></page-header>
  <div id="SingleNew">
    <el-row :gutter="20">
      <el-col :span="18" id="content">
        <div style="margin-left: 15%; margin-right: 15%">
          <div v-html="htmlValue"></div>
        </div>
      </el-col>
      <el-col :span="6">
        <div id="relateValue">
          <el-card
            class="relateCard"
            v-for="(value, index) in fakeListValue"
            :key="index"
            style="margin-top: 10px"
            @click="routerClick"
          >
            {{ value.avt }}{{ value.value }}
          </el-card>
          <el-button type="primary" @click="loadMore" style="margin-top: 20px"
            >加载更多</el-button
          >
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script setup lang="ts">
import PageHeader from "@/layouts/PageHeader.vue";
import { ref } from "vue";
const htmlValue = ref(
  '<h2 style="text-align: start; line-height: 1.5;">最佳实践<a href="https://cn.vuejs.org/guide/essentials/computed.html#best-practices" target="">​</a></h2><h3 style="text-align: start; line-height: 1.5;">Getter 不应有副作用<a href="https://cn.vuejs.org/guide/essentials/computed.html#getters-should-be-side-effect-free" target="">​</a></h3><p style="text-align: start;">计算属性的 getter 应只做计算而没有任何其他的副作用，这一点非常重要，请务必牢记。举例来说，<strong>不要改变其他状态、在 getter 中做异步请求或者更改 DOM</strong>！一个计算属性的声明中描述的是如何根据其他值派生一个值。因此 getter 的职责应该仅为计算和返回该值。在之后的指引中我们会讨论如何使用<a href="https://cn.vuejs.org/guide/essentials/watchers.html" target="">侦听器</a>根据其他响应式状态的变更来创建副作用。</p><h3 style="text-align: start; line-height: 1.5;">避免直接修改计算属性值<a href="https://cn.vuejs.org/guide/essentials/computed.html#avoid-mutating-computed-value" target="">​</a></h3><p style="text-align: start;">从计算属性返回的值是派生状态。可以把它看作是一个“临时快照”，每当源状态发生变化时，就会创建一个新的快照。更改快照是没有意义的，因此计算属性的返回值应该被视为只读的，并且永远不应该被更改——应该更新它所依赖的源状态以触发新的计算。</p><h3 style="text-align: start; line-height: 1.5;"></h3><h2 style="text-align: start; line-height: 1.5;">计算属性缓存 vs 方法<a href="https://cn.vuejs.org/guide/essentials/computed.html#computed-caching-vs-methods" target="">​</a></h2><p style="text-align: start;">你可能注意到我们在表达式中像这样调用一个函数也会获得和计算属性相同的结果：</p><p style="text-align: start;"><span>template</span></p><pre style="text-align: left;"><code style="text-align: left;">&lt;p&gt;{{ calculateBooksMessage() }}&lt;/p&gt;\n' +
    "\n" +
    "\n" +
    '<span style="font-size: 12px;">js</span></code></pre><pre style="text-align: left;"><code style="text-align: left;">// 组件中\n' +
    "methods: {\n" +
    "  calculateBooksMessage() {\n" +
    "    return this.author.books.length &gt; 0 ? 'Yes' : 'No'\n" +
    "  }\n" +
    '}</code></pre><p style="text-align: start;">若我们将同样的函数定义为一个方法而不是计算属性，两种方式在结果上确实是完全相同的，然而，不同之处在于<strong>计算属性值会基于其响应式依赖被缓存</strong>。一个计算属性仅会在其响应式依赖更新时才重新计算。这意味着只要 <span><code>author.books</code></span> 不改变，无论多少次访问 <span><code>publishedBooksMessage</code></span> 都会立即返回先前的计算结果，而不用重复执行 getter 函数。</p><p style="text-align: start;">这也解释了为什么下面的计算属性永远不会更新，因为 <span><code>Date.now()</code></span> 并不是一个响应式依赖：</p><h2 style="text-align: start; line-height: 1.5;"></h2><h3 style="text-align: start; line-height: 1.5;"></h3><h2 style="text-align: start; line-height: 1.5;"></h2><p>hello</p>'
);
const fakeListValue = ref([
  {
    avt: "aaaaaaf",
    value: "safa",
  },
  {
    avt: "aaaaaaf",
    value: "safa",
  },
  {
    avt: "aaaaaaf",
    value: "safa",
  },
  {
    avt: "aaaaaaf",
    value: "safa",
  },
  {
    avt: "aaaaaaf",
    value: "safa",
  },
  {
    avt: "aaaaaaf",
    value: "safa",
  },
]);
const loadMore = () => {
  alert("成功加载更多");
};
const routerClick = () => {
  alert("跳转成功");
};
</script>
<style scoped>
#content {
  background-color: rgba(240, 240, 240, 0.5);
  border-radius: 20px;
}
.relateCard:hover {
  background-color: rgba(240, 240, 240);
}
</style>
