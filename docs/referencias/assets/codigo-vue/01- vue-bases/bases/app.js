const app = Vue.createApp({
  // template: `
  // <h1> Hola Mundo </h1>
  // <p> Desde Vue.js </p>
  // `

  data() {
    return {
      quote: "I'm Batman",
      author: 'Bruce Wayne',
    }
  },
  methods: {
    changeQuote() {
      console.log('Hola Mundo')
      this.author = 'Manuel'

      this.capitalize()
    },
    capitalize() {
      this.quote = this.quote.toUpperCase()
    },
  },
})

app.mount('#myApp')
