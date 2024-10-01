// Parametros en un arrow Function...


// Funcion tradicional con parámetros
const aprendiendo = function(tecnologia) {
    console.log(`Aprendiendo ${tecnologia}`);
}
aprendiendo('Javascript')


// La pasamos a arrow function
const aprendiendo = (tecnologia) => console.log(`aprendiendo ${tecnologia}`);
aprendiendo('JavaScript');

// si es un solo parmetro no necesitamos el parentesis
const aprendiendo = tecnologia => console.log(`aprendiendo ${tecnologia}`);
aprendiendo('JavaScript');

// multiples parametros si requieren parentesis
const aprendiendo = (tecn1, tecn2) => console.log(`Aprendiendo ${tecn1} ${tecn2}`);
aprendiendo('JS', 'Node.js');

