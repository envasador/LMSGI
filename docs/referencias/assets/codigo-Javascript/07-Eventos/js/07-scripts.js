// Prevenir event bubbling con delegation.

// La idea es escuchar el evento superior, y ver donde hace click.

const cardDiv = document.querySelector('.card')

cardDiv.addEventListener('click', e => {
    // Enviamos el evento a la consola y vemos donde hacemos click
    // console.log(e.target)
    // Observamos sus clases
    // console.log(e.target.classList)
    // Sabiendo las clases de cada uno, ya podemos hacernos un condicional..

    if (e.target.classList.contains('titulo')){
        console.log('click en titulo')
    }
    if (e.target.classList.contains('info')){
        console.log('click en info')
    }
    if (e.target.classList.contains('card')){
        console.log('click en card')
    }
})


// Esto se suele conocer como delegación de eventos.