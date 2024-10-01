

//"use strict";

// Funciones en objetos y this

price = 30;
            
const producto = {
    name : "Monitor 20",
    price : 20,
    available : true,
    mostrarInfo: function() {
        console.log(`El producto vale ${price}`) // Va a buscar el valos fuera,
        // si no estamos en modo estricto, lo cocgerá
        console.log(`El producto vale ${this.price}`) // This le dice que coja el valor del objeto.
    }
}
            
producto.mostrarInfo()