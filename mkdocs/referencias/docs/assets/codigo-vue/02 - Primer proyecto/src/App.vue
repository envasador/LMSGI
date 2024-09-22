<template>
  <h1>Vue3</h1>
  <!-- <Counter title="Personas que entran" /> -->
  <!-- <Counter start="10" /> -->
  <Counter v-bind:start="-10" />
</template>

<script>
import Counter from './components/Counter.vue'

export default {
  components: { Counter },
}
</script>

<style scoped></style>
