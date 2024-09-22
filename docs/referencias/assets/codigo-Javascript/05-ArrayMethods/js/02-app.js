// .findIndex => Para encontrar el índice de un elemento en el array

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Television', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Telefono', precio: 300 },
]

// Buscamos el index de un mes.

// Usando .foreach  
//.forEach tiene un segundo parámetro opcional que es el index.
meses.forEach((mes,index) => {
    if(mes === 'Marzo') {
        console.log(index)  
    }
})

// Usando .findIndex
const indice = meses.findIndex(mes => mes === 'Mayo' )
console.log(indice) 

// Si no encuentra el elemento devuelve -1
const indice2 = meses.findIndex(mes => mes === 'Diciembre' )
console.log(indice2) 

// Tambien nos sirve para el array de objetos
const indice3 = carrito.findIndex(producto => producto.precio === 100)
console.log(indice3) // Si hay dos que cumplen la condición, devuelve el primero.

// Si hay dos que cumplen la condición, devuelve el primero.
const indice4 = carrito.findIndex(producto => producto.precio === 100)
console.log(indice4) 