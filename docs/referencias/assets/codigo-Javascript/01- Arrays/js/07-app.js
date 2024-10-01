const carrito = [];

const producto = {
    nombre: 'Monitor 20 Pulgadas', 
    precio: 500
}

const producto2 = {
    nombre: 'Telefono', 
    precio: 500
}

carrito.push(producto);
carrito.push(producto2);
const producto3 =  { 
    nombre: 'Teclado', 
    precio: 50
}
carrito.unshift(producto3);

// Veamos como Eliminar elementos de un array... con un objeto utilizábamos delete, 
// los arrays también son sencillos de manipular

// Eliminar el primer elemento...
// carrito.shift();

// // Eliminar el ultimo elemento...
// carrito.pop();


// Ahora supongamos que deseas eliminar del centro...
// Usamos el métono splice, le pasamos dos parámetros...
//El primer parámetros indica desde donde queremos cortar, y el segundo parametro es el número elementos vamos a eliminar, 

carrito.splice(1,0); 
// 0 significa nada, entonces seria igual a no tener nada, si no le pasas un valor va a borrar todos a partir de ahi..

// carrito.splice(1, 2);



console.log(carrito);