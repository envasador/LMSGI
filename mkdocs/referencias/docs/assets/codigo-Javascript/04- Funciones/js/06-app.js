
// Parametros por default...

// Algunas veces mandaras llamar una función que no tendrá los argumentos que se requieren, 
// por ejemplo cuando llenas tu perfil de facebook tal vez no llenas todos los campos,   
// en esos casos son muy convenientes por parametros por default, 
// veamos nuestra función si solo le pasamos el nombre pero no el apellido

// Puedes ver que en la consola aparecerá undefined

// function saludar(nombre, apellido) { 
//     console.log( `Hola ${nombre}  ${apellido} ` );
// }
// saludar('Juan'); 

// Ahora si no está el segundo campo, dirá que no existe

// function saludar(nombre, apellido ="No existe") { 
//     console.log( `Hola ${nombre}  ${apellido} ` );
// }
// saludar('Juan'); 

// Ahora mejor, lo dejamos en blanco.

// function saludar(nombre, apellido ="") { 
//     console.log( `Hola ${nombre}  ${apellido} ` );
// }
// saludar('Juan'); 


// Ahora si no tiene nombre, sigue saliendo mal.

// function saludar(nombre, apellido ="") { 
//     console.log( `Hola ${nombre}  ${apellido} ` );
// }
// saludar(); 


// Mejor aún
function saludar(nombre = 'Desconocido', apellido = '') { 
    console.log( `Hola ${nombre}  ${apellido} ` );
}
saludar('Juan', 'De la torre'); 

saludar('Juan');

saludar();