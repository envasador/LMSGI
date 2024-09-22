// concatenar arrays

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
const meses2 = ['Agosto', 'Septiembre'];

//Con el método .concat 
const resultado = meses.concat(meses2)
console.log(resultado)

// Con el spread operator
const resultado2 = [...meses, ...meses2]
console.log(resultado2)

// Uniendo varios arrays
const meses3 = ['Octubre']
const resultado3 = [...meses, ...meses2, ...meses3]
console.log(resultado3)

// Recordemos que nosotros le decimos el orden de como unirlos
const meses4 = ['Octubre']
const resultado4 = [ ...meses3, ...meses, ...meses2]
console.log(resultado4)

// Y si intentamos unirle un solo mes, es decir el string directamente...
const resultado5 = [...meses, ..."Noviembre"]
console.log(resultado5) // Como supuestamente es un array (...), va a iterar sobre el.

const resultado6 = [...meses, "Noviembre"] // Sin los ..., le decimos que es un solo elemento
console.log(resultado6)

//Recordemos que no estamos modificando el array original 
console.log(meses)