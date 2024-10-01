// Mostrando el curso seleccionado en el carrito

//  *** Variables *** 
const carrito = document.querySelector('#carrito')
const contenedorCarrito = document.querySelector('#lista-carrito tbody')
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito')
const listaCursos = document.querySelector('#lista-cursos')

// Declaramos una variable para almacenar los artículos
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

    console.log(articulosCarrito) // Vemos si se estan añadiendo

    carritoHTML(articulosCarrito)
 }


 // Muestra el carrito de compras en el HTML
 function carritoHTML() {
    articulosCarrito.forEach((curso) => {
        // Ahora por cada iteración tenemos que crear una trow
        const row = document.createElement('tr')
        console.log(curso.titulo)
        // Ahora generamos el contenido de la row, usaremos innerhtml y template strings
        row.innerHTML = `
            <td>${curso.titulo}</td>
            `
        // Insertamos el HTML generado al tbody del carrito
        // Ya teníamos seleccionado el contenedor, contenedorCarrito.
        contenedorCarrito.appendChild(row)
    })
 }

 
// Si añadimos al carrito, vemos que al añadir varios cursos se repiten los anteriores. 
// Tenemos que limpiar el HTML cada vez que vayamos a añadir un curso.
// Esto lo vamos a hacer, justo antes de mostrar los elementos