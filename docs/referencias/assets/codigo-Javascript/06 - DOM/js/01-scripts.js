let elemento
elemento = document                     // Seleccionamos el documento
elemento = document.all                 
elemento = document.URL                 // Seleccionamos la url
elemento = document.domain              // Seleccionamos el domain (parte de la url)
elemento = document.body                // Seleccionamos el elemento body

elemento = document.forms               // Seleccionamos la colección de formularios del documento
elemento = document.forms[0]            // Seleccionamos el elemento 0 de la colección de forms
elemento = document.forms[0].id         // Seleccionamos el id del elemento
elemento = document.forms[0].method     // Seleccionamos el method del elemento
elemento = document.forms[0].action     // Seleccionamos el action del elemento
elemento = document.forms[0].classList  // Seleccionamos la lista de clases del elemento

elemento = document.links               // Seleccionamos la colección de links (a) del documento
elemento = document.links[4]            // Seleccionamos el elemento 4 de la colección de lins
elemento = document.links[4].className  // Seleccionamos las clases del elemento (las devuelve como strings)
elemento = document.links[4].classList  // Seleccionamos las clases del elemento (las devuelve como colección)


elemento = document.images               // Seleccionamos la colección de imagenes
elemento = document.scripts              // Seleccionamos la colección de scripts


// Esta no es la sintaxis que habitualmente vamos a usar, pero viene bien para hacerse una idea de que tenemos.


console.log(elemento)