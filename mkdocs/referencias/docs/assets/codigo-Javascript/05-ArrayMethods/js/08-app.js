const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Television', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Telefono', precio: 700 },
]

// Ahora vamos a tratar con el array de objetos

const productoNuevo = { nombre: 'Mesa', precio:450 }

// Esto me va a dar error, productoNuevo es un objeto y no es iterable.
// const carrito2 = [...carrito, ...productoNuevo]  //error
// console.log(carrito2)

const carrito3 = [...carrito, productoNuevo]
console.log(carrito3)

//Igualmente podemos darle la vuelta
const carrito4 = [productoNuevo, ...carrito]
console.log(carrito4)