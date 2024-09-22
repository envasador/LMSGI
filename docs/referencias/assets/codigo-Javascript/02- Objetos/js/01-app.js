"use strict";
let name = "Monitor 20"
let price = 20
let available = true
        
const producto = {
    name : "Monitor 20",
    price : 20,
    available : true,
    'estado producto': "disponible"  //cuidado con los espacios, solo podemos acceder a ellos
                                     // con notación de corchetes.           
    }
console.log(producto)
console.log(producto["name"]) // Es la sintaxis menos común para acceder a los objetos.
console.log(producto.price)
console.log(producto.price)
console.log(producto["estado producto"]) // Este caso sería la única exepción a usar la notación []

// Agregamos propiedades en ejecución
producto.color = "verde" // obviamente si la propiedad existe, la sobreescribe

// Eliminamos una propiedad
delete producto.available
console.log(producto)