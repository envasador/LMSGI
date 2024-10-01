//  Keys, values & entrie


//"use strict";


const producto = {
    name : "Monitor 20",
    price : 20,
    available : true,
}

console.log(producto)
console.log(Object.keys(producto))   // Te devueve la propiedad (a veces se usa para saber si está vacío)
console.log(Object.values(producto)) // Te devuelve el valor
console.log(Object.entries(producto)) // Te devuelve ambos en pares
 