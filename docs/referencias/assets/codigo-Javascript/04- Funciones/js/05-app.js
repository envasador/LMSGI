// Funciones => parametros y argumentos...

// Para que tus funciones puedan ser más versatiles deberán utilizar parametros y 
// argumentos


function saludar(nombre, apellido) { // nombre y apellido son **parametros**, son valores que se le pueden pasar a la función... Los valores digamos no son reales, pues son variables...
    console.log( `Hola ${nombre}  ${apellido} ` );
}
saludar('Juan', 'De la torre'); // Pablo y De la torre son **argumentos**, son los valores reales...

saludar();
