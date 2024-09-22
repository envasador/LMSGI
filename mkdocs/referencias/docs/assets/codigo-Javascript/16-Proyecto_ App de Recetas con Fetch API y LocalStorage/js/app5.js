// Ahora tenemos que mostrar la receta en una ventana modal...

document.addEventListener('DOMContentLoaded', iniciarApp)

const selectCategorias = document.querySelector('#categorias')
selectCategorias.addEventListener('change', obtenerRecetas)

// Seleccionamos el div para inyectar todo el scripting que hemos creado
const resultado = document.querySelector('#resultado')

function iniciarApp() {
  obtenerCategorias()

  function obtenerCategorias() {
    url = 'https://www.themealdb.com/api/json/v1/1/categories.php'
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        mostrarCategorias(data.categories)
      })
  }
}

function mostrarCategorias(categorias) {
  categorias.forEach((categoria) => {
    const option = document.createElement('OPTION')
    option.value = categoria.strCategory
    option.textContent = categoria.strCategory
    selectCategorias.appendChild(option)
  })
}

function obtenerRecetas(e) {
  const categoria = e.target.value
  url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoria}`
  fetch(url)
    .then((res) => res.json())
    .then((data) => mostrarRecetas(data.meals))
}

function mostrarRecetas(recetas = []) {
  console.log(recetas)

  recetas.forEach((receta) => {
    const { idMeal, strMeal, strMealThumb } = receta

    const contenedorRecetas = document.createElement('DIV')

    contenedorRecetas.classList.add('col-md-4')

    const recetaCard = document.createElement('DIV')
    recetaCard.classList.add('card', 'mb-4')

    const recetaImagen = document.createElement('IMG')
    recetaImagen.classList.add('card-img-top')
    recetaImagen.alt = `Imagen de la receta ${strMeal}`
    recetaImagen.src = strMealThumb

    const recetaCardBody = document.createElement('DIV')
    recetaCardBody.classList.add('card-body')

    // Nos hace falta un header para la receta (Nombre de la receta)
    const recetaHeading = document.createElement('H3')
    recetaHeading.classList.add('card-title', 'mb-3')
    recetaHeading.textContent = strMeal
    // console.log(recetaHeading)

    // Por último, un botón...
    const recetaButton = document.createElement('BUTTON')
    recetaButton.classList.add('btn', 'btn-danger', 'w-100')
    recetaButton.textContent = 'Ver receta'
    console.log(recetaHeading)

    // Ya tenemos todo el scripting, vamos a renderizarlo en el HTML
    //El objetivo es tener algo, como:
    // .card
    //    img
    //    .card body
    //    h3
    //    button

    // Primero añadimos en el card-body el heading y el button
    recetaCardBody.appendChild(recetaHeading)
    recetaCardBody.appendChild(recetaButton)

    // Ahora el siguiente nivel
    recetaCard.appendChild(recetaImagen)
    recetaCard.appendChild(recetaCardBody)

    // Ahora, tenemos un contenedor que tiene las columnas bootstrap, en el vamos
    //  renderizar el card que hemos construido.
    contenedorRecetas.appendChild(recetaCard)

    // Ya tenemos seleccionado el div, resultado, donde queremos inyectar todo el código
    // generado, vamos a ello:
    resultado.appendChild(contenedorRecetas)
  })
}

// Ya tenemos renderizadas las recetas, pero si elegimos una segunda categoría,
// vemos que los imprime debajo de la actual, tenemos por tanto que limpiar
// el HTML que ya existe.
