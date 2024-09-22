// Evitar la propagación en contenido generado desde Javascript

// Este es el código que hicimos para generar un card nuevo

const parrafo1 = document.createElement('P');
parrafo1.textContent = 'Concierto';
parrafo1.classList.add('categoria');
parrafo1.classList.add('concierto');

// Segundo parrafo
const parrafo2 = document.createElement('P');
parrafo2.textContent = 'Concierto de Rock';
// parrafo2.textContent = 'Click a un elemento creado desde Js';
parrafo2.classList.add('titulo');

// 3er parrafo...
const parrafo3 = document.createElement('p');
parrafo3.textContent = '$800 por persona';
parrafo3.classList.add('precio');


// *** Le asignamos un evento a este parrafo 3 *** 
parrafo3.onclick = nuevaFuncion

// crear el div...
const info = document.createElement('div');
info.classList.add('info');
info.appendChild(parrafo1)
info.appendChild(parrafo2)
info.appendChild(parrafo3);

// Vamos a crear la imagen
const imagen = document.createElement('img');
imagen.src = 'img/hacer2.jpg';

// Crear el Card..
const contenedorCard = document.createElement('div');
contenedorCard.classList.add('contenedorCard');

// Vamos a asignar la imagen al card...
contenedorCard.appendChild(imagen);

// y el info
contenedorCard.appendChild(info);

// Insertarlo en el HTML...
const contenedor = document.querySelector('.hacer .contenedor-cards');
contenedor.appendChild(contenedorCard); // al inicio info


// *** Escribimos la función *** 

function nuevaFuncion() {
    console.log('click en parrafo 3')
} 

// Si necesitamos pasarle parámetros., la sintaxis sería diferente.

// Intuitivamente haríamos eso, pero al ponerle () a la función,
// le estamos diciendo que se ejecuta, que no espere al click.
parrafo2.onclick = nuevaFuncion2(1)

function nuevaFuncion2(id) {
    console.log('click en parrafo 3', id)
} 

// La solución sería algo así:
parrafo2.onclick = function() {
    nuevaFuncion2(1)
}

function nuevaFuncion2(id) {
    console.log('click en parrafo 3', id)
} 
// Esta sintaxis es muy muy común.


