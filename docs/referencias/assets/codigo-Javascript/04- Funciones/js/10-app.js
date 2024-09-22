// Vamos a ver lo que son los arrow Functions!!

// Los arrow functions son otra forma de declarar funciones y 
// fueron añadidas en las últimas versiones.
// Parecen un poco "intimidantes" al principio, pero son muy fáciles de usar.

//Vamosa transformar una paso a paso
const aprendiendo = function() {
    console.log('Aprendiendo JavaScript');
}

//Primero quitamos la palabra function, y esta se convierte en una => que va despues del ()
const aprendiendo = () =>  {
    console.log('Aprendiendo JavaScript');
}

// Si el "bloque" de código es de una sola linea, no requiere llaves
const aprendiendo = () => console.log('Aprendiendo JavaScript');

// si tiene una sola linea, da por implicito que devuelve un valor, no necesitamos return
const aprendiendo = () => 'Aprendiendo JavaScript';


console.log(aprendiendo());

