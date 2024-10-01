// .includes y .some => Para comprobar si un elemento existe en el array
// Ambos van a devolver true o false en función de si el elemento existe.

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Television', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Telefono', precio: 700 },
]

// Para comprobar si un valor existe en un array
meses.forEach((mes) => {
    if (mes === "Enero"){
        console.log("Enero existe")
    }
})

// Tenemos otra opción, .includes (devuelve true o false)
const resultado = meses.includes('Enero')
console.log(resultado)

// El problema es que .includes no vale para un array de objetos, pero tenemos .some  (devuelve true o false)
const resultado2 = carrito.some(producto => producto.nombre === 'Teclado')
console.log(resultado2)

// Tambien funciona en un array tradicional
const resultado3 = meses.some(mes => mes === 'Febrero')
console.log(resultado3)
