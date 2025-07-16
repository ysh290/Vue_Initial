<template>
  <dev class="a">
    <h1>svg测试</h1>
    <SvgIcon name="edit" color="pink" width="40px" height="40px"></SvgIcon>
  </dev>
  <hr />
  <el-button type="primary" :icon="Delete">info</el-button>
</template>
<script setup>
//由于已经注册成为全局组件，无需再引入
// import SvgIcon from '@/components/SvgIcon/index.vue'

import { Check, Delete, Edit, Message, Search, Star } from '@element-plus/icons-vue'
</script>
<style scoped lang="scss">
// .a {
//   color: red;
// }
</style>
