l-men<template>
  <el-menu
    :default-active="activeIndex"
    :ellipsis="false"
    class="elMenu"
    mode="horizontal"
    background-color="#4378b4"
    text-color="#fff"
    active-text-color="#ffd04b"
    @select="handleSelect"
  >
  <img
        class="GMSlogo"
        style=" margin-left: 25px; margin-right: 50px"
        src="/navigation/logo.png"
        alt=""
      />
    <el-menu-item index="home" class="menuItem">首页</el-menu-item>
    <el-sub-menu index="singleTarget"  class="menuItem">
      <template #title>单目标建模</template>
      <el-menu-item index="singleTarget/1">统计数据</el-menu-item>
      <el-menu-item index="singleTarget/2">遥感数据</el-menu-item>
      <el-sub-menu index="singleTarget/4">
        <template #title>test item</template>
        <el-menu-item index="singleTarget/4/1">item one</el-menu-item>
        <el-menu-item index="singleTarget/4/2">item two</el-menu-item>
        <el-menu-item index="singleTarget/4/3">item three</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
    <el-sub-menu index="multiTarget"  class="menuItem">
      <template #title>多目标模拟</template>
      <el-menu-item index="multiTarget/1">自定义体系构建</el-menu-item>
      <el-menu-item index="multiTarget/2">SDG综合情景分析</el-menu-item>
    </el-sub-menu>
    <el-menu-item index="dataBase"  class="menuItem">数据库</el-menu-item>
    <el-sub-menu index="visual"  class="menuItem">
      <template #title>可视化</template>
      <el-menu-item index="visual/1">时间序列</el-menu-item>
      <el-menu-item index="visual/2">地图可视化</el-menu-item>
      <el-menu-item index="visual/3">专题页面</el-menu-item>
    </el-sub-menu>
    <el-menu-item index="personalSpace/userId"  class="menuItem" style="margin-left: auto;">个人中心</el-menu-item>
    <el-menu-item index="login"  class="menuItem" >登录</el-menu-item>
  </el-menu>
</template>
  
<script setup lang="ts">
import { useRouter } from "vue-router";
import { ref } from 'vue'
const router = useRouter();

const activeIndex = ref('home')
const handleSelect = (key: string, _keyPath: string[]) => {
  // console.log(key, keyPath)
  let route = "/" + key;
  router.push(route);
}

// const isActive = (page: string) => {
//   return router.currentRoute.value.matched[0].name === page;
// };

</script>
  
<style lang="scss" scoped>
.elMenu{
  font-weight: 800;
  height: 60px;
  border-bottom: 0px !important;
  :deep(.el-menu-item){
    font-size: 18px;

  }
  :deep(.el-sub-menu__title){
    font-size: 18px;
  }
}

</style>
  