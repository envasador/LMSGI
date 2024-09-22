// Veamos como añadir un elemento a un array utilizando el Spread Operator o Rest Operator...
const carrito = [];

// Añadir un elemento al carrito...
const producto = {
    nombre: 'Monitor 20 Pulgadas', 
    precio: 500
}

const producto2 = {
    nombre: 'Telefono', 
    precio: 500
}
const producto3 =  { 
    nombre: 'Teclado', 
    precio: 50
}

// Para añadir producto al array simplemente agregamos...
let resultado = [...carrito, producto];
 resultado = [...resultado, producto2];

 // Para añadir al inicio...
 resultado = [producto3, ...resultado];

//Esta forma se conoce más como Declarativa mientras que la otra es Imperativa, 
//ambas son muy utilizadas en programación JavaScript
// La declarativa es menos semántica, pero es muy muy usada.

console.table(resultado);