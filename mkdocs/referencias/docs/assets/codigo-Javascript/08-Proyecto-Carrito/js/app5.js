// Mostramos el resto de la informacion

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
    articulosCarrito = [...articulosCarrito, infoCurso]
    carritoHTML(articulosCarrito)
 }


 // Muestra el carrito de compras en el HTML
 function carritoHTML() {
    limpiarHTML()
    articulosCarrito.forEach((curso) => {
        const row = document.createElement('tr')
        // Tenemos toda la información en el objeto, solo tenemos
        // que mostrarla, generemos una td por cada aributo que queremos
        // mostrar.
        // Tenemmos que seguir el orden en el que se muestra en el carrito,
        // Imagen	Nombre	Precio	Cantidad
        row.innerHTML = `
            <td> 
                <img src="${curso.imagen}" width="100">
            </td>
            <td>${curso.titulo}</td>
            <td>${curso.precio}</td>
            <td>${curso.cantidad}</td>
            <td>
                <a href="#" class="borrar-curso" data-id="${curso.id}">X</a>
            </td>
            `
            // console.log(row)
        contenedorCarrito.appendChild(row)
    })
 }

 // Función para limpiar el HTML (elimina los cursos del tbody)
 function limpiarHTML() {
    while (contenedorCarrito.firstChild) {
        contenedorCarrito.firstChild.remove()
    }
 }

 
 // Una vez que este funcionando, hay que tratar de mejorar el código, 
 // Aplicamos destructuring...

//  function carritoHTML() {
//     limpiarHTML()
//     articulosCarrito.forEach((curso) => {
//         const {imagen, titulo, precio, cantidad, id} = curso
//         const row = document.createElement('tr')
//         row.innerHTML = `
//             <td> 
//                 <img src="${curso.imagen}" width="100">
//             </td>
//             <td>${titulo}</td>
//             <td>${precio}</td>
//             <td>${cantidad}</td>
//             <td>
//                 <a href="#" class="borrar-curso" data-id="${id}">X</a>
//             </td>
//             `
//         contenedorCarrito.appendChild(row)
//     })
//  }


// Ahora mismo cuando añadimos dos veces el mismo curso, nos está 
// duplicando el curso, cuando debería de aumentar la cantidad.