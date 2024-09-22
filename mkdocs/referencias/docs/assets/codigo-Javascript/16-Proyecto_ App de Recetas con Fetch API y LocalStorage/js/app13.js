// Vamos a comprobar que la receta no exista ya en localStorage
// antes de guardarla, para que no aparezcan repetidas.
// Haremos para ello una pequeña validación.

document.addEventListener('DOMContentLoaded', iniciarApp)

const selectCategorias = document.querySelector('#categorias')
selectCategorias.addEventListener('change', obtenerRecetas)

const resultado = document.querySelector('#resultado')

const modal = new bootstrap.Modal('#modal', {})

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
  limpiarHTML(resultado)

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

    const recetaHeading = document.createElement('H3')
    recetaHeading.classList.add('card-title', 'mb-3')
    recetaHeading.textContent = strMeal

    const recetaButton = document.createElement('BUTTON')
    recetaButton.classList.add('btn', 'btn-danger', 'w-100')
    recetaButton.textContent = 'Ver receta'

    recetaButton.onclick = function () {
      seleccionarReceta(idMeal)
    }

    recetaCardBody.appendChild(recetaHeading)
    recetaCardBody.appendChild(recetaButton)

    recetaCard.appendChild(recetaImagen)
    recetaCard.appendChild(recetaCardBody)

    contenedorRecetas.appendChild(recetaCard)

    resultado.appendChild(contenedorRecetas)
  })
}

function seleccionarReceta(id) {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  fetch(url)
    .then((res) => res.json())
    .then((data) => mostrarRecetaModal(data.meals[0]))
}

function mostrarRecetaModal(receta) {
  const { idMeal, strInstructions, strMeal, strMealThumb } = receta

  const modalTitle = document.querySelector('.modal .modal-title')
  const modalBody = document.querySelector('.modal .modal-body')

  modalTitle.textContent = strMeal

  modalBody.innerHTML = `
  <img class='img-fluid' src='${strMealThumb}' alt='${strMeal}'>
  <h3 class="my-3">Instructions</h3>
  <p>${strInstructions}</p>
  <h3 class="my-3"> Ingredientes y Cantidades</h3> 
  `
  const listGroup = document.createElement('UL')
  listGroup.classList.add('list-group')

  for (let i = 1; i <= 20; i++) {
    if (receta[`strIngredient${i}`]) {
      const ingrediente = receta[`strIngredient${i}`]
      const cantidad = receta[`strMeasure${i}`]

      const ingredienteLi = document.createElement('LI')
      ingredienteLi.classList.add('list-group-item')
      ingredienteLi.textContent = `${ingrediente} - ${cantidad}`

      listGroup.appendChild(ingredienteLi)
    }
  }

  modalBody.appendChild(listGroup)

  const modalFooter = document.querySelector('.modal-footer')

  limpiarHTML(modalFooter)

  const btnFavorito = document.createElement('BUTTON')
  btnFavorito.classList.add('btn', 'btn-danger', 'col')
  btnFavorito.textContent = 'Guardar favorito'
  modalFooter.appendChild(btnFavorito)
  btnFavorito.onclick = function () {
    // *** Antes de almacenarlo, llamamos a la función que comprueba si existe***
    // console.log(existeFavorito(idMeal))
    if (existeFavorito(idMeal)) {
      // console.log('Existe')
      return
    }
    agregarFavorito({
      id: idMeal,
      title: strMeal,
      img: strMealThumb,
    })
  }

  const btnCerrar = document.createElement('BUTTON')
  btnCerrar.classList.add('btn', 'btn-secondary', 'col')
  btnCerrar.textContent = 'Cerrar'
  modalFooter.appendChild(btnCerrar)
  btnCerrar.onclick = function () {
    modal.hide()
  }

  modal.show()
}

// Función que va a añadir el favorito a localStorage
function agregarFavorito(receta) {
  const favoritos = JSON.parse(localStorage.getItem('recetasFavoritos')) ?? []
  localStorage.setItem(
    'recetasFavoritos',
    JSON.stringify([...favoritos, receta])
  )
}

// *** Función para comprobar si el item que añadimos a favoritos ya existe ***
function existeFavorito(id) {
  const favoritos = JSON.parse(localStorage.getItem('recetasFavoritos')) ?? []
  return favoritos.some((favorito) => favorito.id === id)
  // Ahora nos vamos al botón favorito y antes de llamar a la funcion que
  // almacena, comprobamos si existe.
}

function limpiarHTML(selector) {
  while (selector.firstChild) {
    selector.removeChild(selector.firstChild)
  }
}

// Quizás estaría bien implementar la funcionalidad de que si una receta ya está
// en favoritos, pueda eliminarla
