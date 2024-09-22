<template>
  <div>
    <div>{{ customTitle }}</div>
    <p>{{ counter }}</p>
    <div>
      <button v-on:click="increase">+1</button>
      <button v-on:click="decrease">-1</button>
    </div>
    <p>{{ counter }} <sup>2</sup> = {{ getSquareComputed }}</p>
  </div>
</template>

<script>
export default {
  // name: 'Pato',
  // props: ['title'],
  props: {
    title: String,
    start: {
      type: Number,
      // required: true,
      default: 5,
      validator(value) {
        return value >= 0
      },
    },
  },

  data() {
    return {
      counter: this.start,
    }
  },
  methods: {
    increase() {
      // this.counter++
      this.counter = this.counter + 1
    },
    decrease() {
      this.counter--
    },
    getSquare() {
      console.log('getSquare')
      return this.counter * this.counter
    },
  },
  computed: {
    getSquareComputed() {
      console.log('getSquareComputed')
      return this.counter * this.counter
    },
    customTitle() {
      return this.title || 'Mi titulo por defecto'
    },
  },
}
</script>

<style scoped></style>
