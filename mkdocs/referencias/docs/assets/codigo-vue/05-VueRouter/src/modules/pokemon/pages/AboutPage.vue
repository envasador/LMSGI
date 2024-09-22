<template>
  <h1>About Page</h1>
  <h2>{{ name }}</h2>
  <button @click="changeName">Change Name</button>
</template>

<script>
export default {
  data() {
    return {
      name: 'IES Rafael Allerti',
    }
  },
  methods: {
    changeName() {
      ;(this.name = '2 DAW'), console.log(this.name)
    },
  },
  // beforeCreate() {
  //   this.name = 'Jose Antonio'
  // },
  // created() {
  //   this.name = 'Jose Antonio'
  //   // Ideal para llamada a una API
  // },

  // beforeMount() {
  //   console.log('beforeMount')
  // },
  // mounted() {
  //   console.log('mounted')
  // },
  // beforeUpdate() {
  //   console.log('beforeUpdate')
  // },
  // updated() {
  //   console.log('updated')
  // },
  // beforeUnmount() {
  //   console.log('beforeUnmount')
  // },
  // unmounted() {
  //   console.log('unmounted')
  // },
  // errorCaptured() {
  //   console.log('errorCaptured')
  // },
  // renderTracked() {
  //   console.log('renderTracked')
  // },
  // renderTriggered() {
  //   console.log('renderTriggered')
  // },
  // activated() {
  //   console.log('activated')
  // },
  // deactivated() {
  //   console.log('deactivated')
  // },
}
</script>
