// Listado de paises
const paises = []

// Añade un pais despues de 2 segundos...
function nuevoPais(pais, callback) {
  paises.push(pais)
  console.log(`Agregado: ${pais}`)
  callback()
}

function mostrarPaises() {
  console.log(paises)
}

// Los paises se muestran despues de 1 segundo
function iniciarCallbackHell() {
  setTimeout(() => {
    // Añadir nuevo pais
    nuevoPais('Alemania', mostrarPaises)
    setTimeout(() => {
      nuevoPais('Francia', mostrarPaises)
      setTimeout(() => {
        nuevoPais('Inglaterra', mostrarPaises)
      }, 3000)
    }, 3000) // Después de un segundo obtenemos los paises...
  }, 3000)
}

iniciarCallbackHell()
