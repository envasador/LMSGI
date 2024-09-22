// querySelectorAll()
// Devuelve una lista de elementos (NodeList) del documento que coinciden con el selector o grupo de selectores indicados.

// La sintaxis para selectores es la misma, es decir similar a CSS, con el punto para las classes y la # para los ID's, 
// también puedes añadir un selector especifico..

// Pero la diferencia principal, es que querySelectorAll va a devolver todos los elementos que concuerden con el selector
// y no va a limitarte al primero como querySelector.

// Usamos el ejemplo de antes, seleccionamos un card, pero en este caso nos devolverá una colección.
const card = document.querySelectorAll('.card')
console.log(card)

// Antes decíamos que no debería de haber dos elementos con el mismo Id, pero curiosamente esto funciona.
const formularios = document.querySelectorAll('#formulario')
console.log(formularios)

// Si un elemento no existe, me devuelve una colección vacía.
const noExiste = document.querySelectorAll('no-existe')
console.log(noExiste)

