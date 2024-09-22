// Vamos aponer en comun todo lo visto creando un nuevo card de forma dinámica
// Es lo que hacemos en React.js o Vue cuando traemos información de una API y la renderizamos.


// Si vemos el HTML, esta es el código de un card:
{/* <div class="card">
<img src="img/hacer1.jpg">
<div class="info">
    <p class="categoria concierto">concierto</p>
    <p class="titulo">Música electrónica 2021</p>
    <p class="precio">$1,200 por persona</p>
</div>
</div> <!--.card--> */}


// Creamos los 3  parrafos

// Primer parrafo
const parrafo1 = document.createElement('p')
parrafo1.textContent = 'concierto'
parrafo1.classList.add('categoria', 'concierto')

// Segundo parrafo
const parrafo2 = document.createElement('p')
parrafo2.textContent = 'Música nueva!'
parrafo2.classList.add('titulo')

// Tercer parrafo
const parrafo3 = document.createElement('p')
parrafo3.textContent = '$600 por persona'
parrafo3.classList.add('precio')

// Vamos a crear el div que contiene esos parrafos
const info = document.createElement('div')
info.classList.add('info')
console.log(info)

// Ahora vamos a insertar los parrafos en el div como nodos hijos.
info.appendChild(parrafo1)
info.appendChild(parrafo2)
info.appendChild(parrafo3)

// Vamos a crear la imagen
const imagen = document.createElement('img')
imagen.src = 'https://www.lavanguardia.com/files/og_thumbnail/uploads/2018/06/21/5fa52e18ed2b0.jpeg'

// Creamos el div que contiene el card
const newCard = document.createElement('div')
newCard.classList.add('card')
// console.log(cardContent)

// Le asignamos la imagen y el div info al card 
newCard.appendChild(imagen)
newCard.appendChild(info)

console.log(newCard)

// Lo insertamos en el DOM
const cardParent = document.querySelector('.contenedor-cards')
cardParent.appendChild(newCard)

// Si lo queremos insertar por ejemplo en la posición 0..
// cardParent.insertBefore(newCard, cardParent.children[0])


// Parece mucho código solo para esto, y es cierto que las librerías y frameworks lo hacen
// casi automático, pero no siempre tendremos esa posibilidad. Tenemos que saber manejar el DOM