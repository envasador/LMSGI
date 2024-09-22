// Al Igual que los objetos un array se puede modificar a pesar de utilizar la palabra const

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];

meses[0] = 'Nuevo Mes'


// También se puede añadir al final
meses[6] = 'Ultimo Mes'

// Al igual que los objetos en los arrays existen métodos que son bastante útiles, 
// así que veamos algunos ejemplos ahora.

console.table(meses);