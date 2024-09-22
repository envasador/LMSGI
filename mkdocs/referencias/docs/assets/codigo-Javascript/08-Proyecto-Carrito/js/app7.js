// Eliminando elementos del carrito

// Examinamos el HTML y vemos que los elementos del carrito están dentro de la
// tabla que contiene el div con clase carrito. Ya lo tenemos seleccionado, carrito,
// vamos a trabajar con el.

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

    // Elimina cursos del carrito
    carrito.addEventListener('click', eliminarCurso)
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

 // Elimina cursos del carrito
 function eliminarCurso(e) {
    //console.log('Eliminando curso...') // Tenemos que usar delegation nuevamente.
    // console.log(e.target.classList)
    if (e.target.classList.contains('borrar-curso')){
        console.log('Eliminando curso...')
        
        // Necesitamos el id del curso a eliminar, para filtrar el array 
        //console.log(e.target.getAttribute('data-id'))
        const cursoId = e.target.getAttribute('data-id')
        
        // Eliminamos del array
        articulosCarrito = articulosCarrito.filter((curso) => curso.id !== cursoId)
        console.log(articulosCarrito)

        // Ahora actualizamos el HTML
        carritoHTML(articulosCarrito)
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
    if (existe) {
        const cursos = articulosCarrito.map((curso) => {
            if (curso.id === infoCurso.id) {
                curso.cantidad ++
                return curso 
            } else {
                return curso
            }
        })
        articulosCarrito = [...cursos]
    } else {
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
