// Eventos relacionados con el scroll

// Podemos ver webs como apple que tienen acciones que se disparan al hacer scroll, 
// estos eventos suceden en la ventana global, window.
// console.log(window)

// Vamos a ponerle un eventlistener a window y registramos el evento scroll
window.addEventListener('scroll', () => {
   // console.log('scrolling..')
})

// Vamos a detectar ese scroll
window.addEventListener('scroll', () => {
    const scrollPX = window.scrollY
   // console.log(scrollPX)
})

// Ya estamos viendo el scroll, pero como dijimos es habitual que en algún momento del scroll
// queramos disparar una animación, para eso vamos a usar el método getBoundingClientRect().

// Método getBoundingClientRect() => Nos devuelve un objeto (DOMRect) que proporciona información 
// sobre el tamaño de un elemento y su posición relativa a la ventana

window.addEventListener('scroll', () => {
    // Seleccionamos el elemento.
    const premium = document.querySelector('.premium')

    // Usamos getBoundingClientRect()
    const posicion = premium.getBoundingClientRect()

    //console.log(posicion)
})

// El método nos da mucha información, su ancho y alto, la distancia al top y al boton, etc.. 
// Podríamos usarlo para hacer algo así:

window.addEventListener('scroll', () => {
    // Seleccionamos el elemento.
    const premium = document.querySelector('.premium')

    // Usamos getBoundingClientRect()
    const posicion = premium.getBoundingClientRect()

    // Para afinar mas podemos debuggear mandando el objeto a la consola, y calcular la
    // posición exacta donde queremos que salte la animación.
    // console.log(posicion)

    //if (posicion.top < 200) {
    if (posicion.top < 700) {
        console.log('Estamos llegando')
    } else {
        console.log('Aún queda, sigue dando scroll')
    }
})


// Ahora ya podemos hacer la animación, añadir alguna clase css...
