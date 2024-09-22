// Eventos del propio formulario

// Vamos a mencionar un evento nada mas, submit, pero es bastante importante.

// Seleccionamos el formulario
const formulario = document.querySelector('#formulario')

// Le asignamos un listener
formulario.addEventListener('submit', (e) => {
    // Si quitamos  e.preventDefault(), al darle al botón va a hacer la acción por defecto para
    // ese elemento. En este caso el elemento es un boton submit y lo que hará será enviar
    // el form por post.
    e.preventDefault()
    console.log('buscando...')
    console.log(e)

    // Podemos obtener mas información..
    console.log(e.target.method)    // Que método usa
    console.log(e.target.action)    // Que action por default, hacia donde va...
})

// En vez de usar función de flecha anónima, podemos usar la declaración de función

formulario.addEventListener('submit', validarformulario)

function validarformulario () {
    e.preventDefault()
    console.log('buscando...')
}

// Si ejecuto el código tal y como está no va a prevenir la acción por defecto, tenemos que pasarle el
// evento, pero en validarformulario no tenemos parámetros. No es necesario, simplemente le pasamos el
// evento como argumento a la función...

formulario.addEventListener('submit', validarformulario)

function validarformulario (e) {
    e.preventDefault()
    console.log('buscando...')
}
