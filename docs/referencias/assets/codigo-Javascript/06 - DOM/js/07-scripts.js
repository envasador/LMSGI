// Modificar el CSS desde JavaScript

// Podemos modificar clases, agregarlas, etc..

// Vamos a cambiar el color del encabezado de antes.
const encabezado = document.querySelector('h1')
console.log(encabezado.style) // Vemos los estilos

// En javascript se usan los mismos estilos, pero se escriben diferente:
// Cuando el nombre de la propiedad es compuesto, se suprime el guión y se escribe en camelCase
// Por ejemplo, background-color sería backgroundColor.

encabezado.style.backgroundColor = 'red'

// Cambiamos la fuente
encabezado.style.fontFamily = 'Arial'
encabezado.style.textTransform = 'uppercase'

// Esto nos viene bien para cosas sencillas, pero lo ideal es añadirle clases.
// Añadimos una clase al primer card
const card = document.querySelector('.card')
console.log(card) // Podemos ver en la consola que tenemos el classList.
card.classList.add('nueva-clase') // Añadimos una nueva clase
card.classList.add('nueva-clase', 'segunda-clase') // Podemos añadir mas de una
console.log(card.classList)  

// Eliminamos clases
card.classList.remove('segunda-clase') 
console.log(card.classList)  
