<template>
  <!--svg:图标外层的容器节点 内部需要与use标签结合使用-->
  <svg :style="{ width, height }">
    <!--xlink : href 指定使用哪个图标，属性值必须是 # icon-图标名字-->
    <use :xlink:href="prefix + name" :fill="color"></use>
  </svg>
</template>
<script setup>
//接受父组件传递过来的数据
defineProps({
  prefix: {
    type: String,
    default: '#icon-',
  },
  //svg矢量图的名字
  name: {
    type: String,
  },
  //svg矢量图的颜色
  color: {
    type: String,
  },
  width: {
    type: String,
    default: '16px',
  },
  height: {
    type: String,
    default: '16px',
  },
})
</script>
<style scoped lang="scss"></style>
