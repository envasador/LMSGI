// Herencias

 // Agregamos métodos, que básicamente son los prototypes.
 class Cliente {
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

// Herencia, empresa será una clasde hijo de cliente, hereda los atributos y métodos.
class Empresa extends Cliente {
}

const juan = new Cliente("juan", 50)
const empresa = new Empresa("codigo con juan", 500) // Se heredan las propiedades y métodos
console.log(empresa.mostrarInformacion())

// Podemos ampliar el constructor...

class Empresa2 extends Cliente {
    constructor (nombre, edad, telefono, categoria) {
        //this.nombre = nombre // Tenemos que usar una sintaxis diferente, usamos "super"
        //this.edad = edad
        super(nombre, edad)  // Así heredamos los atributos de un conistructor padre
        this.telefono = telefono
        this.categoria = categoria
    }
    // Si escribes un metodo con el mismo nombre que la clase padre, lo reescribe.
    static bienvenido() {
        return `Bienvenido al IES`  // Como se llama igual que el método padre, lo reescribe
    }

}

const luis = new Cliente("juan", 50)
const empresa2 = new Empresa2("codigo con juan", 500, 666666666, "online") // Se heredan las propiedades y métodos
console.log(empresa2)
console.log(Empresa2.bienvenido())
console.log(empresa2.mostrarInformacion()) // Como no existe en el hijo, toma el de la clase padre

console.log(Cliente.bienvenido())
console.log(Empresa.bienvenido())