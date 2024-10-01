// Actualizando la cantidad de elementos

// Ahora mismo cuando añadimos dos veces el mismo curso, nos está 
// duplicando el curso, cuando debería de aumentar la cantidad.

// Esto lo podríamos controlar en la función añadirCurso, comprobando si
// el curso ya está en el array antes de añadirlo.

//  *** Variables *** 
const carrito = document.querySelector('#carrito')
const contenedorCarrito = document.querySelector('#lista-carrito tbody')
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito')
const listaCursos = document.querySelector('#lista-cursos')
let articulosCarrito = []


//  *** Listeners *** 
cargarEventListeners()
function cargarEventListeners () {
    listaCursos.addEventListener('click', añadirCurso)
}


//  *** Funciones *** 

// Función para añadir cursos al carrito
function añadirCurso(e) {
    e.preventDefault()  
    if (e.target.classList.contains('agregar-carrito')) {  
        const curso = e.target.parentElement.parentElement 
        leerDatosCurso(curso)
    }
 }

 // Lee la información del curso seleccionado.
 function leerDatosCurso(curso) {
    const infoCurso = {
        imagen:curso.querySelector('img').src,
        titulo:curso.querySelector('h4').textContent,
        precio:curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }

    // Revisamos si el curso ya existe en el carrito
    const existe = articulosCarrito.some(curso => curso.id === infoCurso.id)
    console.log(existe) // comprobamos si funciona
    if (existe) {
        // Actualizamos la cantidad
        // Vamos a iterar con map sobre todos los elementos del carrito,
        // y cuando encuentr el curso que buscamos, aumentamos la cantidad.
        const cursos = articulosCarrito.map((curso) => {
            if (curso.id === infoCurso.id) {
                curso.cantidad ++
                return curso // Devuelve el objeto actualizado
            } else {
                // Habrá elementos que no incrementemos, pero tambien tienen
                // que estar en el nuevo array...
                return curso
            }
        })
        articulosCarrito = [...cursos]

    } else {
        // Lo añadimos al carrito
        articulosCarrito = [...articulosCarrito, infoCurso]
    }
    carritoHTML(articulosCarrito)
 }


 // Muestra el carrito de compras en el HTML
 function carritoHTML() {
    limpiarHTML()
    articulosCarrito.forEach((curso) => {
        const {imagen, titulo, precio, cantidad, id} = curso
        const row = document.createElement('tr')
        row.innerHTML = `
            <td> 
                <img src="${curso.imagen}" width="100">
            </td>
            <td>${titulo}</td>
            <td>${precio}</td>
            <td>${cantidad}</td>
            <td>
                <a href="#" class="borrar-curso" data-id="${id}">X</a>
            </td>
            `
        contenedorCarrito.appendChild(row)
    })
 }

 // Función para limpiar el HTML (elimina los cursos del tbody)
 function limpiarHTML() {
    while (contenedorCarrito.firstChild) {
        contenedorCarrito.firstChild.remove()
    }
 }
