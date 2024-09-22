// getElementById()
// Selecciona un elemento por su ID.
// Podemos recorrer los valores como si fuera un array.


// Accedemos al elemento con id "footer"
const footer = document.getElementById('footer')
console.log(footer)

// Si seleccionamos un elemento que no existe, devuelve un null
const noExiste = document.getElementById('no-existe')
console.log(noExiste)

// Sabemos que los id deben de ser únicos, pero HTML no se queja si le ponemos el mismo id a dos elementos. 
// Si se da ese caso y usamos getElementById, nos va a seleccionar el primero que encuentre...
const formulario = document.getElementById('formulario')
console.log(formulario) 

// Existen otro par de selectores que hoy en día son los más comunes, tienen una sintaxis muy similar a la de CSS, vamos a verlos...