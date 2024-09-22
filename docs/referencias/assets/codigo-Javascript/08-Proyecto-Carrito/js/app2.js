// Leemos los datos del curso seleccionado

//  *** Variables *** 
const carrito = document.querySelector('#carrito')
const contenedorCarrito = document.querySelector('#lista-carrito tbody')
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito')
const listaCursos = document.querySelector('#lista-cursos')


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
        // console.log(e.target)
        const curso = e.target.parentElement.parentElement 
        // console.log(curso)

        // Enviamos los datos del curso a otra función que los lea.
        leerDatosCurso(curso)
    }
 }

 // Lee la información del curso seleccionado y la extrae.
 function leerDatosCurso(curso) {
    console.log(curso)

    // Creamos un objeto con el contenido del curso actual
    const infoCurso = {
        // No tenemos que hacer el queryselector desde el document, ya estamos en curso
        imagen:curso.querySelector('img').src,
        titulo:curso.querySelector('h4').textContent,
        precio:curso.querySelector('.precio span').textContent,
        // Cada curso necesita un id propio, en este caso lo hemos asignado 
        // en el html, lo norma es que esté en mi BBDD o me lo de la API.
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }
    console.log(infoCurso)

 }


 // Ya tenemos el curso que ha seleccionado el usuario, veamos como añadirlo al carrito...