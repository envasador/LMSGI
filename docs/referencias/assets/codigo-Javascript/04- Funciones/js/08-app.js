// Funciones que retornan valores

// Actualmente hemos tenido funciones que envian datos a la consola, 
// obviamente sabemos que no es lo normal, una función suele devolver algo.

function sumar(a, b) {
    return a + b;
}

const resultado = sumar(1,2);

console.log(resultado);


// Un ejemplo más real....
let total = 0;
function agregarCarrito(precio) {
    return total += precio;
}

function calcularImpuesto(total) {
    return 1.15 * total;
}

total = agregarCarrito(200);
total = agregarCarrito(300);
total = agregarCarrito(400);
console.log(total);


const totalPagar = calcularImpuesto(total);

console.log(`El total a pagar es de ${totalPagar}`);