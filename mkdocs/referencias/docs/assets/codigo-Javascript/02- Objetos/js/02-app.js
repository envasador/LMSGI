"use strict";
                 
const producto = {
    name : "Monitor 20",
    price : 20,
    available : true,
    'estado producto': "disponible"  
    }


// Asignar valores del objeto una variable
//console.log(producto.name)
//let name = producto.name
//console.log(name)

// Esta es la forma de hacerlo hasta ES6, ahora tenemos object distructuring...
// let { name } = producto // Extraer la propiedad name del objeto producto 
                        // y la almacena en una variable name, todo en un paso.
//  console.log(name)
//  let {price} = producto
//   console.log(price)
let {name, price, available} = producto
console.log(name, price, available)
console.log(price)
console.log(available)