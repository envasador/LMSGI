// Seal object -- No se permiten agregar ni eliminar propiedades, 
// pero si modificar su valor

"use strict";
                 
const producto = {
    name : "Monitor 20",
    price : 20,
    available : true,
    }
            
// El método sellar hace que no se puedan agregar ni eliminar propiedades, 
// pero si modificar las existentes.

Object.seal(producto)
producto.name = "coche"
console.log(producto.name)   
// producto.tipo = "camion"  -> error
console.log(Object.isSealed(producto)) // Comprueba si está sellado
