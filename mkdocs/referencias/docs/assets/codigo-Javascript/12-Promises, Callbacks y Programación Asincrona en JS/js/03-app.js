// Vamos a definir un promise

const aplicarDescuento = new Promise((resolve, reject) => {
  // Puede ser arrow function...
  const descuento = true

  // Comentar estas siguientes lineas, y descomentar el console.log
  // para ver el estado pending...
  if (descuento) {
    resolve('Descuento Aplicado')
  } else {
    reject('No se pudo aplicar el descuento')
  }
})

// console.log(aplicarDescuento); // Para ver el estado de la promesa

aplicarDescuento
  .then((resultado) => {
    console.log(resultado)
  })
  .catch((error) => {
    console.log(error)
  })

console.log(aplicarDescuento)

// En los Promises hay 3 valores posibles, completada, pendiente, o rechazada...
// Fullfilled - se ha cumplido
// Rejected - se ha recahzado o no se pudo cumplir
// Pending - pendiente

// Una vez que se cumple el promise tambien podemos llamar a una función
// con la respuesta que nos da...

// aplicarDescuento
//   .then((resultado) => {
//     descuento(mensaje);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// function descuento(mensaje) {
//   console.log(mensaje);
// }
