// Eventos de teclado (cuando escribimos en los inputs)

// Son muy habituales en la validación de formularios

// Seleccionamos el input de busqueda
const busqueda = document.querySelector('.busqueda')

// Le asignamos un evento
busqueda.addEventListener('input', () => {
    console.log("Input ejecutandose...")
})


// Probando algunos eventos..
// keydown  - Cuando presionas una tecla.
// keyup    - Cuando sueltas la tecla.
// blur     - Cuando sales del input (pierde el foco) -> Muy útil en las validaciones
// copy     - Cuando copio texto
// paste    - Cuando pego texto
// cut      - Cuando corto texto 
// input    - Se ejecuta en todas las situaciones anteriores, excepto blur.


// Ahora, lo ideal seria saber el texto que se escribe o poderlo leer...

// Le pasamos el evento que está sucediendo, e.
busqueda.addEventListener('input', (e) => {
    console.log("Escribiendo...")
    console.log(e)            // Vemos el evento 
    console.log(e.type)       // Sobre que tipo de elemento se está ejecutando
    console.log(e.target)     // Nos devuelve el elemento concreto
    console.log(e.target.value) // Vemos el contenido, lo que está escribiendo.
                                // Ideal para hacer busquedas y filtrados al vuelo.
})


// También podemos usarlo con declaración de función.

busqueda.addEventListener('input',  leerInput);

function leerInput(e) {
    console.log(e); 
}


// e.target.value tambien nos puede servir para validar
busqueda.addEventListener('input', (e) => {
    if (e.target.value === '') {
        console.log('Falló la validación')
    }
})