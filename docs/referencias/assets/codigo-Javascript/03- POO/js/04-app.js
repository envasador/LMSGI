"use strict";

// Propiedades privadas 
// Sabemos que en POO hay atributos privados y publicos, privados solo son accesibles en la clase
// publicos, desde la clase y desde el objeto

class Cliente {
    #nombre  // Con la # le decimos que es privado.
    constructor(nombre, edad) {
        //this.nombre=nombre
        this.#nombre=nombre
        this.edad=edad
    }
    mostrarInformacion() {
       // return `Cliente: ${this.nombre}, tu edad es ${this.edad}`
        return `Cliente: ${this.#nombre}, tu edad es ${this.edad}`

    }
    static bienvenido() {
        return `Bienvenido al centro`
    }
}

const juan = new Cliente("juan", 200)
//console.log(juan.nombre) // Es un atributo publico, puedo acceder desde el objeto
//console.log(juan.#nombre) // Nos da error, es privado.
console.log(juan.mostrarInformacion())