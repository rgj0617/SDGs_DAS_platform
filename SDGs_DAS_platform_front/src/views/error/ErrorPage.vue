<template>
  <div class="errorContainer">
    <div class="info">
      <h1>404 Not Found</h1>
      <h3>偶尔的迷失，是提醒你应该休息了</h3>
    </div>
    <ErrorBox style="width: 60vh; height: 60vh"></ErrorBox>
  </div>
</template>
  
<script setup lang="ts">
import ErrorBox from "../../components/error/ErrorBox.vue";
</script>
  
<style scoped lang="scss">
.errorContainer {
  // justify-content: center;
  .info {
    margin-top: 12vh;
    text-align: center;
  }
}
</style>