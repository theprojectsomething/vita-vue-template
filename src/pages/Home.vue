<template>
  <section class="c-section c-section--small">
    <div class="o-container">
      <h1 class="c-title">Home</h1>
      <button class="c-button c-button--text c-button--primary" @click="++count">Temp count: {{ count }}</button>
      <button class="c-button c-button--text c-button--secondary" @click="store.commit('increment')">Permanent count: {{ store.state.count }}</button>
      <router-link to="this-is-an-invalid-url">FourOhFour</router-link>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'
const store = useStore();

let count = ref(0);
</script>

<style lang="scss" scoped>
  .o-container {
    display: flex;
    flex-direction: column;
    align-items: center;

    * {
      margin-bottom: 1em;
    }
  }
</style>
