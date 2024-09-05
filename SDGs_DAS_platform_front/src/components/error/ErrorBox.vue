<template>
  <div class="flexibleBoxContainer">
    <div v-for="i in 9" :key="i" class="item">
      <div class="content">
        {{ boxContent[i - 1] }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const boxContent = [
      "山有木兮木有枝\n心悦君兮君不知",
      "愿君多采撷\n此物最相思",
      "玲珑骰子安红豆\n入骨相思知不知",
      "惆怅双鸳不到\n幽阶一夜苔生",
      "曾经沧海难为水\n除却巫山不是云",
      "恨不生同时\n日日与君好",
      "相思相见知何日\n此时此夜难为情",
      "心想事成\n前程似锦",
      "但愿人长久\n千里共婵娟",
    ];
    return { boxContent };
  },
});
</script>

<style scoped lang="scss">
.flexibleBoxContainer {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  margin-top: 50px;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
  transition: 0.5s;
  .item {
    background-color: red;
    display: flex;
    align-items: center;
    justify-content: center;
    .content {
      font-size: 1vw;
      opacity: 0;
      color: white;
      // 保留html语法，这样\n才能生效
      white-space: pre-wrap;
      transition: opacity 1s ease-in-out;
    }
    &:hover .content {
      opacity: 1;
    }
  }
}

@for $i from 0 through 8 {
  .item:nth-child(#{$i + 1}) {
    background: hsl($i * 40, 100%, 74%);
  }
  .flexibleBoxContainer:has(.item:nth-child(#{$i + 1}):hover) {
    $r: floor(calc($i / 3)) + 1;
    $c: $i % 3 + 1;
    $arr: 1fr 1fr 1fr;
    $rows: set-nth($arr, $r, 2fr);
    $cols: set-nth($arr, $c, 2fr);

    grid-template-rows: $rows;
    grid-template-columns: $cols;
  }
}
</style>