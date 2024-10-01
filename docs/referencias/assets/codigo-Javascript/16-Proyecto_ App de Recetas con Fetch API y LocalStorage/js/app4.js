// Ahora vamos a mostrar las recetas por pantalla

const selectCategorias = document.querySelector('#categorias')

selectCategorias.addEventListener('change', obtenerRecetas)
document.addEventListener('DOMContentLoaded', iniciarApp)

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

  // Iteramos en el resultado
  recetas.forEach((receta) => {
    // Hacemos destructuring...
    const { idMeal, strMeal, strMealThumb } = receta

    // Tenemos dos opciones, hacerlo con innerHTML y template string
    // (mas rápido) o insertando los elementps mediante scripting
    // (mas flexible)...

    // Creamos un contenedor para las recetas
    const contenedorRecetas = document.createElement('DIV')

    // Vamos a ponerlos en tres columnas
    contenedorRecetas.classList.add('col-md-4')

    // Hacemos el card de la receta
    const recetaCard = document.createElement('DIV')
    recetaCard.classList.add('card', 'mb-4')

    // Creamos la imagen
    const recetaImagen = document.createElement('IMG')
    recetaImagen.classList.add('card-img-top')
    recetaImagen.alt = `Imagen de la receta ${strMeal}`
    recetaImagen.src = strMealThumb

    // Body del cart
    const recetaCardBody = document.createElement('DIV')
    recetaCardBody.classList.add('card-body')

    // console.log(contenedorRecetas)
    // console.log(recetaCard)
    console.log(recetaImagen)
  })
}

// Ahora tenemos que mostrar la receta, vamos a hacerlo en una ventana modal...
