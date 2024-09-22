// querySelector()
// Selecciona el primer elemento del documento que coincida con el selector o grupo de selectores especificado.

// Usa sintaxis CSS, . para clases, # para Id, y podemos usar grupos de selectores.

// Seleccionamos un card, y nos devolverá el primero...
const card = document.querySelector('.card')
console.log(card)

// Para ser mas especiíficos, podemos usar un grupo de selectores como en CSS.
// Por ejemplo, en la web tenemos el siguiente código, y queremos seleccionar el elemento con clase info.
{/* 
<div class="contenedor-cards premium">
    <div class="info">
        <h3>Una nueva sección de alojamientos de lujo</h3>
        <a href="#" class="boton btn-mi-viaje">Explorar alojamientos </a>
    </div>
</div>  
*/}
const info = document.querySelector('.premium .info')
console.log(info)


// Vamos a seleccionar ahora el segundo card de hospedaje...
const segundoCard = document.querySelector('section.hospedaje .card:nth-child(2)')
console.log(segundoCard)
// :nth-child(), nos permiten seleccionar elementos o series de elementos dentro 
// de una colección haciendo referencia a la posición del elemento. 

// Vamos a seleccionar por ID, en concreto el formulario.
const formulario = document.querySelector('#formulario')
console.log(formulario)

// Tambien podemos seleccionar elementos por su etiqueta HTML
const nav = document.querySelector('nav')
console.log(nav)
