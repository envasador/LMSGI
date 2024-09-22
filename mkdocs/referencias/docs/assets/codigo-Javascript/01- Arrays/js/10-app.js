const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500},
    { nombre: 'Televisión 50 Pulgadas', precio: 700},
    { nombre: 'Tablet ', precio: 300},
    { nombre: 'Audifonos', precio: 200},
    { nombre: 'Teclado', precio: 50},
    { nombre: 'Telefono', precio: 500},
]

// Si lo sacamos por consola (cambiar return por console.log), vemos que el resultado de ambos es el mismo...

const nuevoArray = carrito.map( function(producto) {
   return  `Articulo: ${ producto.nombre } Precio: $ producto.precio} `;
})

const nuevoArray2 = carrito.forEach( function(producto) {
    return  `Articulo: ${ producto.nombre } Precio: $ producto.precio} `;
 })

 // map es muy similar al forEach, la diferencia es que map te crea un array nuevo...
// console.log(nuevoArray);
// console.log(nuevoArray2);

// Más adelante veremos varios array methods que nos van a ser muy útiles.