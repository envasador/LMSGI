// Eventos de raton

const nav  = document.querySelector('.navegacion')

// Registramos un listener para el nav

nav.addEventListener('click', () => {
    //console.log('click en nav')
})

// nav.addEventListener('mouseenter', () => {
//     console.log('entrando en nav')
//     nav.style.backgroundColor = "white"
// })

// nav.addEventListener('mouseout', () => {
//     console.log('saliendo en nav')
//     nav.style.backgroundColor = "transparent"
// })

nav.addEventListener('dblclick', () => {
    console.log('dblclick en nav')
})

// Probando algunos eventos..
// mouseenter   -  Entrando con el raton en el elemento que escucha.
// mouseout     -  Saliendo con el raton en el elemento que escucha.
// mousedown    -  Presionando el boton el raton en el elemento que escucha.
// mouseup      -  Soltado el boton del raton en el elemento que escucha.
// dblclick     -  Doble click de raton en el elemento que escucha.
