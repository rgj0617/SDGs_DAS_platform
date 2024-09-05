<template>
  <div class="homePage">
    123
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
@keyframes slideBackgroundColor {
  0% {
    background-position: 0% 0%;
  }
  50% {
    background-position: 100% 100%;
  }
  100% {
    background-position: 0% 0%;
  }
}
.homePage {
  width: 100%;
  min-height: 94.5vh;
  background: linear-gradient(to bottom right, #4378b4, #93d0e0, #adaed2);
  background-size: 200% 200%;
  animation: slideBackgroundColor 10s ease infinite;
}
</style>