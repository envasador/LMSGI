// El método reduce() ejecuta una función reductora sobre cada elemento de un array, 
// devolviendo como resultado un único valor.

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Television', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Telefono', precio: 300 },
]

// Vamos a calcular el total del precio de los articulos del carrito

// Usando .forEach
let total = 0
carrito.forEach ((producto) => {
    total += producto.precio
})
console.log(total)


// Usando .reduce
let resultado = carrito.reduce((total,producto) => total + producto.precio,0)
console.log(resultado)


// Su sintaxis es diferente a de otros arrays methods:

array2 = [0, 1, 2, 3, 4]
console.log(array2)
let resultado2 = array2.reduce((previousValue, currentValue, index, array) => {
        console.log({previousValue, currentValue})
        return(previousValue + currentValue)
})
console.log(resultado2)

// Se dice que es bastante elegante y actual, en mi opinión rara vez es necesario, 
// hace el código poco legible, en cuanto eficiencia, no hay diferencia.
// Un video muy interesante: https://www.youtube.com/watch?v=qaGjS7-qWzg 

//Otros ejemplos de .reduce.

// Reduce para el cálculo del máximo
let numeros = [8, 4, 12, 2, 9]
const maximo = numeros.reduce((accum, numero) => Math.max(accum,numero))

console.log(maximo)


// Reduce para encontrar valores repetidos

const nombres = ['Pepe', 'Maria', 'Luis', 'Pepe', 'Juan', 'Jose', 'Jose', 'Jose']

const cantidadNombres= nombres.reduce((contadorNombre ,nombre) => {
            contadorNombre[nombre] = (contadorNombre[nombre] || 0) + 1;
            return contadorNombre
}, {})

console.log(cantidadNombres)

//contadorNombre = {
// Maria: 1
// Pepe:2

// }