// Traversing the DOM - Recorrer el DOM a través de sus nodos.
// Todo en JavaScript esta conectado en el document, la forma en que te moverás entre diferentes 
// elementos se le conoce como Traversing the DOM, ir recorriendolo..


// *** Traversing a hijos *** 

const navegacion = document.querySelector('nav')
console.log(navegacion)

// Cada elemento en la navegación los diferentes elementos se les conoce como Nodos... 
// y podemos listarlos de la siguientes formas...

console.log(navegacion.childNodes)

// también existe algo llamado Children
console.log(navegacion.children)

// La diferencia es que childNodes te va a mostrar hasta los espacios en blanco, children te muestra solo los elementos.

// Hay mucha información aqui...
console.log(navegacion.children[0].nodeType) // Tipo de Node = 1 es un eleemnto
console.log(navegacion.children[0].nodeName) // Que etiqueta es.

// Por ejemplo si selecciono el primer card...

const card = document.querySelector('.card');
console.log(card.nodeType);
console.log(card.nodeName);

// 1 = Elemento
// 2 - Atributo
// 3 - Text node
// 8 - Commentario
// 9 - Documento
// 10 - doctype

// En javascript puedes seleccionar un elemento y navegar en sus diferentes elementos. 
// Por ejemplo vamos a hacer traversing en los cards

console.log(card.children)                              // Listamos los hijos de card
console.log(card.children[1])                           // Accedemos a info
console.log(card.children[1].children)                  // Listamos los hijos de info y vemos que tambien tiene hijos
console.log(card.children[1].children[0])               // Accedemos a un hijo de info

// Acceder al titulo
console.log(card.children[1].children)                  // Vemos que el títul es la posicion 1
console.log(card.children[1].children[1])
console.log(card.children[1].children[1].textContent)   // Ya estamos en el texto del título.
card.children[1].children[1].textContent = 'Nuevo título desde traversing de DOM'  

// Cambiamos la imagen haciendo traversing
// Accedemos a la imagen
console.log(card.children);
console.log(card.children[0]);
console.log(card.children[0].src);

// Cambiamos la imagen
card.children[0].src = 'img/hacer2.jpg'


// Children es una buena forma de acceder a los elementos por su posición, 
// pero supongamos que de nuestra navegación queremos acceder al primer o último enlace...
console.log(navegacion.lastChild);
console.log(navegacion.lastElementChild);

// Si quieres acceder al primero
console.log(navegacion.firstChild)
console.log(navegacion.firstElementChild);

// Cambiar el primer texto...
navegacion.firstElementChild.textContent = 'Nuevo Enlace...'


//  *** Traversing de hijo a padre *** 
// Antes vimos como hacer traversing de un elemento padre hacia el hijo, 
// JavaScript también te permite seleccionar un elemento hijo e ir navegando hacia el padre...

// console.log(card.parentNode) -> Pasa como con childNodes, tiene en cuenta los espacios en blanco.
console.log(card.parentElement)                             // Accedemos al contenedor que tiene los cards (contenedor-cards).
console.log(card.parentElement.parentElement)               // Accedemos al section class="hacer"
console.log(card.parentElement.parentElement.parentElement) // Accedemos al main



//  *** Traversing a hermanos  ***  (elementos de su mismo nivel)
// Vamos a pasar del primer card al segundo
console.log(card)
console.log(card.nextElementSibling)                        // Siguiente Elemento
console.log(card.nextElementSibling.nextElementSibling)     // Siguiente Elemento

// Tambien podemos acceder al elemento previo
const ultimo = document.querySelector('.card:nth-child(4)')
console.log(ultimo)
console.log(ultimo.previousElementSibling)                  // Accedemos al elemento anterior


