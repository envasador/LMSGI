// Vamos a implementar la funcionalidad de que si una receta ya está
// en favoritos, pueda eliminarla

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

  // Botones de cerrar y añadir a favoritos
  const modalFooter = document.querySelector('.modal-footer')

  limpiarHTML(modalFooter)

  const btnFavorito = document.createElement('BUTTON')

  // btnFavorito.classList.add('btn', 'btn-danger', 'col')
  existeFavorito(idMeal)
    ? btnFavorito.classList.add('btn', 'btn-warning', 'col')
    : btnFavorito.classList.add('btn', 'btn-danger', 'col')

  // (2)Hacemos condicional el textContent del botón
  // btnFavorito.textContent = 'Guardar favorito'

  btnFavorito.textContent = existeFavorito(idMeal)
    ? 'Eliminar favorito'
    : 'Guardar favorito'
  // Ya funciona, pero es poco dinámico, tenemos que cerrar la receta y abrir
  // para que cambie el botón, podemos hacerlo al estilo de react y vue (3)

  modalFooter.appendChild(btnFavorito)
  btnFavorito.onclick = function () {
    if (existeFavorito(idMeal)) {
      // ** Si existe, damos la opción de eliminarlo **
      eliminarFavorito(idMeal)
      // Ya funciona, ahora para hacerlo mas visual, vamos
      // a cambiar el textContent del botón (2)
      // (4) Cambiamos el textcontent del botón una vez eliminado
      btnFavorito.textContent = 'Guardar favorito'
      btnFavorito.classList.remove('btn-warning')
      btnFavorito.classList.add('btn-danger')
      return
    }
    agregarFavorito({
      id: idMeal,
      title: strMeal,
      img: strMealThumb,
    })
    // (3) Podemos cambiar el botón aquí, una vez que se agrege, cambiamos ese botón
    btnFavorito.textContent = 'Eliminar favorito'
    btnFavorito.classList.remove('btn-danger')
    btnFavorito.classList.add('btn-warning')

    // (4) Hacemos lo contrario en eliminar, una vez elinado cambiamos el botón
  }
  const btnCerrar = document.createElement('BUTTON')
  btnCerrar.classList.add('btn', 'btn-secondary', 'col')
  btnCerrar.textContent = 'Cerrar'
  modalFooter.appendChild(btnCerrar)
  btnCerrar.onclick = function () {
    modal.hide()
  }
  // Mostramos el modal
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

// *** Función que va a eliminar el favorito a localStorage ***
function eliminarFavorito(id) {
  const favoritos = JSON.parse(localStorage.getItem('recetasFavoritos')) ?? []
  const nuevosFavoritos = favoritos.filter((favorito) => favorito.id !== id)
  localStorage.setItem('recetasFavoritos', JSON.stringify(nuevosFavoritos))
  // (1) Actualizamos ahora la función que disparamos con el botón
}

// Función para comprobar si el item que añadimos a favoritos ya existe
function existeFavorito(id) {
  const favoritos = JSON.parse(localStorage.getItem('recetasFavoritos')) ?? []
  // console.log(favoritos)

  return favoritos.some((favorito) => favorito.id === id)
}

// Limpia el HTML ya existente en el selector que le pasemos
function limpiarHTML(selector) {
  while (selector.firstChild) {
    selector.removeChild(selector.firstChild)
  }
}

// Estaría bien mostrarle al usuario una alerta para decirle que la receta
// se ha añadido correctamente a los favoritos
