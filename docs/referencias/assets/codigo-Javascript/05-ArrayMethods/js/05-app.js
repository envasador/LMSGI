// .find() => devuelve el primer elemento del que cumpla la condición implementada
// en la función que le pasamos.

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Television', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Telefono', precio: 300 },
]

// Buscar elementos

// Con .forEach
let resultado = []
carrito.forEach(producto => {
    if (producto.nombre === 'Tablet') {resultado = producto}
})
console.log(resultado)

// Con .find
let resultado2 = carrito.find(producto => producto.nombre === 'Tablet')
console.log(resultado2)

// Devuelve el primer elemento que cunple la condición
let resultado3 = carrito.find(producto => producto.precio === 300)
console.log(resultado3)

// Si ningún elemento la cumple, no devuelve nada
let resultado4 = carrito.find(producto => producto.nombre === 'NoExiste')
console.log(resultado4)