// Como recuperamos los datos...

const nombre = localStorage.getItem('nombre') 

console.log(nombre)


const productoJson = localStorage.getItem('carrito')
console.log(productoJson) 

const producto = JSON.parse(productoJson)
console.log(producto)

console.log(JSON.parse(localStorage.getItem('meses')))
