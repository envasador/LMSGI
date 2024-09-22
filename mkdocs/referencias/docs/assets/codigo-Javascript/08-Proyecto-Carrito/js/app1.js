// Estrutura

//  *** Variables *** 
const carrito = document.querySelector('#carrito')
const contenedorCarrito = document.querySelector('#lista-carrito tbody')
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito')
const listaCursos = document.querySelector('#lista-cursos')


//  *** Listeners *** 

// Añadimos una función que cargue todos los event listeners
cargarEventListeners()
function cargarEventListeners () {
    // Cuando presionas el botón de añadir al carrito.
    listaCursos.addEventListener('click', añadirCurso)
}


//  *** Funciones *** 

// Función para añadir cursos al carrito
function añadirCurso(e) {
    e.preventDefault()  // Paramos la accion por defecto
    // Probamos que haya comunicación
    //console.log('Añadiendo curso...')

    // Prevenimos la propagacion de eventos
    //console.log(e.target.classList)
    if (e.target.classList.contains('agregar-carrito')) {  
        console.log('Añadiendo curso...')
        console.log(e.target)
    }
}

// En el último clg vemos que estamos accediendo al botón, pero a nosotros nos van a interesar todos 
// los datos del curso seleccionado para mostrarlo en el carrito, tendremos que hacer traversing...

