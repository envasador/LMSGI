// Ejemplos local Storage

// Local Storage funciona con una especie de clave valor.

// Para almacenar en local storage
localStorage.setItem('nombre', 'Manuel')

// Para almacenar en session storage
sessionStorage.setItem('nombre', 'Pepe')

// Local Storage solo soporta strings, no soporta arrays ni objetos.
const producto = {
    nombre: 'curso javascript',
    precio: 20
}

// Pero puedes almacenarlos convirtiendolos a "string"..
const productoString = JSON.stringify(producto)

console.log(productoString)

localStorage.setItem('carrito', productoString)


 // Lo mismo con arrays
 const meses = ['Enero', 'Febrero', 'Marzo']
 localStorage.setItem('meses', JSON.stringify(meses))