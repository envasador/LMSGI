"use strict";

// Get y Set

class Cliente {
    #nombre  // Con la # le decimos que es privado.

    setNombre (nombre) {
        this.#nombre = nombre;
    }
    getNombre (nombre) {
        return this.#nombre;
    }
}

const juan = new Cliente()
juan.setNombre("Juan")
console.log(juan.getNombre())
// console.log(juan.#nombre) // Error, es privada