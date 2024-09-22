// Freezing an object
"use strict";
                 
const producto = {
    name : "Monitor 20",
    price : 20,
    available : true,
    }

// Hacer que un objecto se comporte como una constante
// Lo primero es tener habilitado el modo estricto para tener acceso a los objects methods

Object.freeze( producto )
producto.available = false
console.log(producto.available)
// Si no tengo el modo estricto habilitado y uso el freeze, no va a dar error, 
// pero tampoco va a hacer los cambios en el objeto.
console.log(Object.isFrozen(producto)) // Para saber si un objeto está congelado
