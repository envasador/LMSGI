// Objeto dentro de un objeto

"use strict";
                 
const producto = {
    name : "Monitor 20",
    price : 20,
    available : true,
    information : {
        peso:"1 kg",
        medida:"10 cm",                    
        origin: {
            pais : "ES",
            }
        }

    }

//let { name, information } = producto
//console.log(name)
//console.log(information)

//let { name, information : { origin } } = producto
//console.log(name)
//console.log(origin)

let { name, information : { origin: {pais} } } = producto
console.log(pais)
