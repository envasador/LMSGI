// Eliminar elementos del DOM

// Es muy común no? cuando borras una foto de facebook o un tweet se elimina automaticamente, 
// también cuando quitas elementos del carrito de compras de amazon.

// Hay 2 formas de eliminar, una es eliminar un elemento por si mismo y la otra es eliminarlo desde el padre...


// Volvemos al nav
const primerEnlace = document.querySelector('a')
console.log(primerEnlace)

//  Eliminar un elemento por si mismo => .remove() 
primerEnlace.remove()

// Eliminar un elemento desde el padre
const navegacion = document.querySelector('.navegacion')

// el siguiente paso es identificar el elemento a eliminar..
console.log(navegacion.children)                        // Vemos que hijos tiene
navegacion.removeChild( navegacion.children[1] )        // Le pasamos la referencia del hijo a eliminar