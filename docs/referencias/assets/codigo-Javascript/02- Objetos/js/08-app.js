// Object constructor vs Object Literal

 //"use strict";

            
// Object Literal
const producto = {
    name : "Monitor 20",
    price : 20,
    available : true,
}
console.log(producto)


// Object Constructor  ---- Se utiliza menos, pertenece a la POO antogua de Js
function Producto(name,price) {
    this.name = name
    this.price = price
    this.available = true
}
const producto2 = new Producto("Television", 200)
console.log(producto2)

