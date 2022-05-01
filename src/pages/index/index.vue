<template>
  <view class="content bg-orange-700 dark:bg-black">
    <image class="logo" src="/static/logo.png" />
    <view class="text-area">
      <text class="title text-red-500">{{ title }}</text>
      <text class="title">{{ title }}</text>
    </view>
    <view>
      <button @click="changeColor">changeColor</button>
    </view>
  </view>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  const title = ref('Hello');
  const theme = ref<boolean>(false);
  const changeColor = () => {
    if (!theme.value) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    theme.value = !theme.value;
  };
</script>

<style lang="scss">
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .logo {
    height: 200rpx;
    width: 200rpx;
    margin-top: 200rpx;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 50rpx;
  }

  .text-area {
    display: flex;
    justify-content: center;
  }

  .title {
    font-size: 36rpx;
  }
</style>
