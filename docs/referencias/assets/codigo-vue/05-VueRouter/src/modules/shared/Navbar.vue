<template>
  <div>
    <router-link :to="{ name: 'pokemon-home' }">Pokemon List</router-link>
    <router-link :to="{ name: 'pokemon-id', params: { id: 1 } }"
      >Pokemon por id's</router-link
    >
    <router-link :to="{ name: 'pokemon-about' }">About</router-link>
    <router-link :to="{ name: 'spiderman-home' }">Characters</router-link>
    <router-link :to="{ name: 'spiderman-about' }">Spiderman About</router-link>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
div {
  padding: 0 40px;
}

div a {
  font-weight: hold;
  color: #2c3e50;
  margin: 0 10px;
}

.router-link-exact-active {
  color: red;
}
</style>
