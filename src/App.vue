<template>
  <div id="app" :data-route="currentRoute.name" :data-path="currentRoute.path.replace(/^\/|\/$/g, '')">
    <main class="c-main" id="main" role="main">
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const { currentRoute } = useRouter();
</script>

<style lang="scss">
@import '@/styles/global';
</style>