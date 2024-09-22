// ForEach y Map con arrow functions...
// Nos copiamos el ejemplo de map y forEach que usamos en arrays...

const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500},
    { nombre: 'Televisión 50 Pulgadas', precio: 700},
    { nombre: 'Tablet ', precio: 300},
    { nombre: 'Audifonos', precio: 200},
    { nombre: 'Teclado', precio: 50},
    { nombre: 'Telefono', precio: 500},
]

// const nuevoArray = carrito.map( function(producto) {
//     return  `Articulo: ${ producto.nombre } Precio: $ producto.precio} `;
//  })
 
//  const nuevoArray2 = carrito.forEach( function(producto) {
//      return  `Articulo: ${ producto.nombre } Precio: $ producto.precio} `;
//   })
 

const nuevoArray = carrito.map( producto => `Articulo: ${ producto.nombre } Precio: $ producto.precio} `)

const nuevoArray2 = carrito.forEach( producto => console.log( `Articulo: ${ producto.nombre } Precio: $ producto.precio} `));

console.log(nuevoArray);
console.log(nuevoArray2);


// Los arrow functions si no se coloca el return y es de una sola linea dan por implicito el return..

