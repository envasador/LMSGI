// Veamos algunas operaciones útiles en los arrays,


const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];

console.log(meses)
console.log(meses[0])
console.log(meses[1])

// Si quieres saber cuantos elementos hay un array puedes utilizar la propiedad
console.log(meses.length);

// ahora, si recuerdas vimos como acceder a un array, 
// pero si este array tuviera 40 elementos sería muy complicado ir 1 por 1, 
// si tienes un carrito de compras y agregas o quitas elementos del carrito, 
// ese array crece de forma dinamica, entonces, como acceder a todos los elementos? 
// con un iterador, y en javascript hay varios, veamos el for que existe en diferentes lenguajes...

for (let i = 0; i < meses.length; i++) {
    console.log(meses[i]);
}