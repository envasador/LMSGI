// Al igual que los objetos los arrays forman una parte muy importante 
//en cualquier lenguaje de programación

// Un ejemplo de un array es un carrito de compras, sirve para agrupar 
//elementos del mismo tipo.

// También la forma en que facebook muestra un listado de amigos o personas 
// que le dieron Me Gusta a tu última foto, seguramente es un array.

// Veamos primero como crear un Array...
const numeros = [10,20,30,40,50];
console.log(numeros);
//console.table(numeros); // Para ver el array en modo table

// En JavaScript cuando veas esos corchetes son buen indicativo de que esto es un array, 
//a diferencia de los objetos is recuerdas su sintaxis es la de unas llaves { }

// El array anterior fue de números, también puedes crear uno de Strings por ejemplo y se puede crear utilizando la palabra new
const meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio');
console.log(meses);

// Ahora no es obligatorio que el array tenga numeros o strings unicamente, también puede tener un poco de todo:
const deTodo = ["Hola", 10, true, "si", null, { nombre: 'Juan', trabajo: 'Programador'}, [1,2,3,4]];
console.log(deTodo);

// incluso un array puede tener un array dentro

// Personalmente encuentro más fácil de utilizar la sintaxis de llaves asi que esa sera la que estaremos utilizando.