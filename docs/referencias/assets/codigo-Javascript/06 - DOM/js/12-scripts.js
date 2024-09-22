// Un ejemplo de lo que podemos hacer, nos sirve tambien para ir introduciendo los eventos.

// Lo que vamos a hacer es implementar la funcionalidad mediante a cual al 
// hacer click en el botón de mas info (abajo a la derecha), se va a desplegar el footer

// Lo primero que tenemos que hacer es seleccionar el botón
const btnFlotante = document.querySelector('.btn-flotante')

// Ahora seleccionamos el footer
const footer = document.querySelector('.footer')

// Le ponemos un event listener al botón
// btnFlotante.addEventListener('click', (e) => {
//     console.log("Les diste click al boton")
// })

// Podemos hacerlo con una función externa, esto va a depender de la cantidad de código que lleve la función
btnFlotante.addEventListener('click', mostrarOcultarFooter)

// function mostrarOcultarFooter () {
//     console.log("Les diste click al boton")
// }

// Lo que mueve el footer es una clase de css:

// .btn-flotante.activo {
//     background-color: var(--primario);
//     color: var(--claro);
// }

// .footer.activo {
//     bottom: 0;
// }

// Entonces nosotros vamos a tener que aplicar esa clase al footer y al botón, cada vez que se haga click en el botón.

// function mostrarOcultarFooter () {
//     footer.classList.add('activo')
//     btnFlotante.classList.add('activo')

// }

// Ahora tendremos que tener en cuenta que si ya le hemos dado y está activo, si vuelve a hacer click, 
// tenemos que quitarsela para que se oculte.

function mostrarOcultarFooter () {
    if (footer.classList.contains('activo')){
        footer.classList.remove('activo')
        btnFlotante.classList.remove('activo')
    } else {
        footer.classList.add('activo')
        btnFlotante.classList.add('activo')
    }
}


// Podríamos usar this, ya que es el mismo btnFlotante el que está ejecutando la función..
// function mostrarOcultarFooter () {
//     if (footer.classList.contains('activo')){
//         footer.classList.remove('activo')
//         this.classList.remove('activo')
//     } else {
//         footer.classList.add('activo')
//         this.classList.add('activo')
//     }
// }

// Ahora idealmente podríamos cambiar el contenido del boton cuando esté activo para que se 
// vea que presionandolo se cierra el footer, sería mas intuitivo.
function mostrarOcultarFooter () {
    if (footer.classList.contains('activo')){
        footer.classList.remove('activo')
        this.classList.remove('activo')
        this.textContent = 'Mas información'
    } else {
        footer.classList.add('activo')
        this.classList.add('activo')
        this.textContent = 'X Cerrar'
    }
}

