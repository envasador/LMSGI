// Como eliminar elementos de localstorage

localStorage.removeItem('nombre')

// No tenemos toda la funcionalidad de un CRUD, nos haria falta un update, 
// no hay como tal un Update... lo que podrías hacer es...

const meses = JSON.parse(localStorage.getItem('meses'))

meses.push('nuevoMes')

console.log(meses)

localStorage.setItem('meses', JSON.stringify(meses))
