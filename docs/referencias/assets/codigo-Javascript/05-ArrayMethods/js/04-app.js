// .filter() => Crea un array nuevo con todos los elementos que cumplan la
// condición implementada en la función que le pasemos.

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Television', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Telefono', precio: 300 },
]

// Buscar elementos que valgan 300

// Con .forEeach
let resultado0 = []
carrito.forEach((producto) => {
    if (producto.precio === 300) { resultado0 = [...resultado0,producto] }
})
console.log(resultado0)

// Con .filter => Antes con findIndex no podíamos sacar dos elementos que valían 300,filter es mas versatil
let resultado = carrito.filter(producto => producto.precio === 300)
console.log(resultado)

// Todos los elementos de mas de 600
let resultado2 = carrito.filter(producto => producto.precio > 200)
console.log(resultado2)

// Todos los elementos entre dos precios => 100 < producto.precio < 500 (Esto no funcionaría)
let resultado3 = carrito.filter(producto => 100 < producto.precio && producto.precio < 500)
console.log(resultado3)

// Todos los elementos que no sean teclados
let resultado4 = carrito.filter(producto => producto.nombre !== 'Teclado')
console.log(resultado4)