"use strict";

// Las clases en Js son azucar sintáctico sobre los prototypes

// Class Declaration --- Mucho mas popular
class Cliente {            
}

// Class Expresion
const Cliente2 = class {
}

const juan = new Cliente() // Se instancia igual independientemente de como las declaremos
console.log(juan)

// Declaramos el constructor, valores iniciales de la clase...
class Cliente3 {
    constructor(nombre, edad) {
        this.nombre=nombre
        this.edad=edad
    }
}
const pepe = new Cliente3("pepe", 40)
console.log(pepe)
