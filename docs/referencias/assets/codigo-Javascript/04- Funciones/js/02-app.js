// Agunas diferencias entre ambas, si llamamos la función antes de declararla...

sumar();
function sumar() {
    console.log(2 + 2);
}

sumar2();
const sumar2 = function() {
    console.log(3 + 3);
}

// Vemos que la primera funciona y la segunda no.
// Eso pasa porque JavaScript se ejecuta en 2 vueltas, es le conoce como Hoisting.
// La primer vuelta (etapa de creación) registra todas las funciones y las variables.  
// La segunda vuelta (etapa de ejecución) es la que executa tu codigo.

// Por lo tanto el primer código funciona porque function se registra primero y después se ejecuta el código.
// El segundo no funciona porque si bien es una función no es declarada como tal, lo ve más bien como una variable...

// El código se ejecutaría asi:

// const sumar2;
// sumar2(); // en este momento es undefined...
// sumar2 = function() {
//     console.log(3 + 3); // pero como ya habiamos llamado la función, se queda como undefined
// }

// Esta es una pregunta típica de entrevista para JS Developer...
