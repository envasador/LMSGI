"use strict";

// A veces necesitamos unir dos objetos
const producto = {
    name : "Monitor 20",
    price : 20,
    available : true,
    }

const medidas = {
        peso: "1 kg",
        medida: "1m"
    }

console.log(producto)
console.log(medidas)
// Podemos usar el método assign
const resultado = Object.assign(producto, medidas)
console.log(resultado)

// Otra opción, mejor que la anterior es usando el operador spread..
const resultado2 = {...producto, ...medidas}   // Sin duda está es la más usada.
console.log(resultado2)
