"use strict";


// Agregamos métodos, que básicamente son los prototypes.
class Cliente {
    constructor(nombre, edad) {
        this.nombre=nombre
        this.edad=edad
    }
    mostrarInformacion() {
        return `Cliente: ${this.nombre}, tu edad es ${this.edad} `
    }
}
const juan = new Cliente("juan", 40)
console.log(juan)
console.log(juan.mostrarInformacion())


// Propiedades estáticas --> Para mostrarlas no requieres una instancia
class Cliente2 {
    constructor(nombre, edad) {
        this.nombre=nombre
        this.edad=edad
    }
    mostrarInformacion() {
        return `Cliente: ${this.nombre}, tu edad es ${this.edad}`
    }
    static bienvenido() {
        return `Bienvenido al centro`
    }
}
console.log(Cliente2.bienvenido())
const luis = new Cliente("luis", 50)
//console.log(luis.bienvenido()) - si trato de llamarlo desde el objeto, dará error.
console.log(luis)  // De hecho ni siquiera está en el objeto, si lo inspeccionas.
