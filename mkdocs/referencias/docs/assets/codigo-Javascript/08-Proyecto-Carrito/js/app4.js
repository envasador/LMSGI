// Limpiamos el HTML (se duplican)

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

    // Agregamos elementos al array del carrito
    articulosCarrito = [...articulosCarrito, infoCurso]
    carritoHTML(articulosCarrito)
 }


 // Muestra el carrito de compras en el HTML
 function carritoHTML() {

    // Limpiamos el HTML
    limpiarHTML()

    articulosCarrito.forEach((curso) => {
        const row = document.createElement('tr')
        console.log(curso.titulo)
        row.innerHTML = `
            <td>${curso.titulo}</td>
            `
        contenedorCarrito.appendChild(row)
    })
 }

 // Función para limpiar el HTML (elimina los cursos del tbody)
 function limpiarHTML() {
    //contenedorCarrito.innerHTML = ''

    // Hay una manera de hacerlo mucho mas eficiente
    while (contenedorCarrito.firstChild) {
        contenedorCarrito.firstChild.remove()
        // o borrando por referencia desde el padre..
        // contenedorCarrito.removeChild(contenedorCarrito.firstChild)
    }
 }