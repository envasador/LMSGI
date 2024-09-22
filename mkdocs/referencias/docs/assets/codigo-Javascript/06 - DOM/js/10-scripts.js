// Generar HTML desde JavaScript

// Cuando publicas un tweet, tienes un textarea que al enviarlo se agrega al listado de tweets, veamos como hacerlo generar HTML desde JavaScript...

// Vamos a crear un nuevo enlace.

// Lo primero que hay que hacer es crear el elemento HTML, en este caso un enlace...
const enlace = document.createElement('a')

// Segundo paso es crear el texto del enlace no, lo haremos con textContent
enlace.textContent = 'Nuevo enlace'             

// Despues vamos a asignar una ruta 
enlace.href = 'https://iesrafaelalberti.es/'   

// Añadimos los atributos que queramos... 
enlace.target  = '_blank'                       // Le añadimos un target

console.log(enlace)

// Ya lo tenemos creado, ahora tenemos que insertar en el DOM
const navegacion = document.querySelector('nav')
navegacion.appendChild(enlace)                  // appendChild nos permite añadirle un hijo (como último hijo)

// Si queremos controlar la posición en la que insertamos, usaremos insertBefore()
console.log(navegacion.children)
navegacion.insertBefore(enlace, navegacion.children[1])     // Lo insertamos antes de la posición 1

