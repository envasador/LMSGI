// .every() => Comprueba si todos los elemantos del array cumplen la condición dada,
// en el caso de que todos la complan devuelve true, y si uno solo no la cumple, devuelve false.

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Television', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Telefono', precio: 300 },
]

// .every va a devolver true, si todos los elementos cumplen una condición 
let resultado = carrito.every((producto) => producto.precio < 1000 )
console.log(resultado)

// Si no todos la cumplen, va a devolver false 
let resultado2 = carrito.every((producto) => producto.precio < 500 )
console.log(resultado2)

// Si recordamos some, true si algun elemento cumple la condición...
const resultado3 = carrito.some(producto => producto.precio < 500)
console.log(resultado3)

// Parece como que .every es el AND y some el OR.
