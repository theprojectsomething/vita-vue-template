<template>
  <section class="c-section c-section--large">
    <div class="o-container s-entry-content">
      <h1 class="c-title">You got lost :(</h1>
      <p style="s-entry-content__lead">Please <router-link :to="meta.backlink">click here</router-link> to un-lose yourself</p> 
    </div>
  </section>
</template>

<script setup>
import { useRoute } from 'vue-router'
const { meta } = useRoute();
</script>

<style lang="scss" scoped>

</style>
