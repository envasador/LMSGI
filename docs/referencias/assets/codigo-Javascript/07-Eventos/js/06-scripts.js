// Propagación de eventos (bubbling)

// Es cuando se lanza un evento y este se propaga por otros sitios, dando resutados inesperados.

const cardDiv = document.querySelector('.card')
const infoDiv = document.querySelector('.info')
const tituloDiv = document.querySelector('.titulo')

// Les asignamos un listener a cada uno..

cardDiv.addEventListener('click', () => {
    console.log('Click en card')
})

infoDiv.addEventListener('click', () => {
    console.log('Click en info')
})

tituloDiv.addEventListener('click', () => {
    console.log('Click en titulo')
})

// Si probamos el código, vemos que:
// - Cuando hacemos click en card, salta el click de card
// - Cuando hacemos click en info, salta el click de info y se propaga a card
// - Cuando hacemos click en titulo, salta el click de titulo, y se propaga a info y a card
// Esto es la propagación de eventos (event bubbling) de Javascript.

// Tenemos varias formas de prevenir esto. Veamos una de ellas:

cardDiv.addEventListener('click', e => {
    e.stopPropagation()
    console.log('Click en card')
})

infoDiv.addEventListener('click', e => {
    e.stopPropagation()
    console.log('Click en info')
})

tituloDiv.addEventListener('click', e => {
    e.stopPropagation()
    console.log('Click en titulo')
})

// Vemos que ahora, pasándole el evento y usando stopPropagation(), ya no se propaga.