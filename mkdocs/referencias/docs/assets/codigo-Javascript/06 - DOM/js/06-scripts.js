// Modificar textos o imágenes
// Ya sabemos como seleccionar nodos, ahora veamos como modificarlos.

// Veamos por ejemplo como modificar el texto del h1 del documento

// Primero tenemos que seleccionarlo...
const encabezado = document.querySelector('h1')
console.log(encabezado)

// ¿Como accedemos ahora al texto? 3 formas de hacerlo...
console.log(encabezado.innerText)          // Trae solo el texto, pero si tiene la propiedad visibility:hidden, no lo encuentra.
console.log(encabezado.textContent)        // Trae solo el texto, lo encuentra aunque tenga la propiedad visibility:hidden.
console.log(encabezado.innerHTML)          // Nos trae el HTML

// Podríamos seleccionar directamente el contenido (Chaining)
// encabezado1 = document.querySelector('h1').textContent
// console.log(encabezado1)

// Asignamos el nuevo valor
document.querySelector('h1').textContent = "Nuevo h1 desde javascript"

// otra opción seria con una variable.
const nuevoH1 = "Nuevo h1 desde una variable javascript"
document.querySelector('h1').textContent = nuevoH1


// Ahora vamos a cambiar una imagen

const imagen = document.querySelector('.card img')
// console.log(imagen)
imagen.src = 'img/hacer2.jpg'