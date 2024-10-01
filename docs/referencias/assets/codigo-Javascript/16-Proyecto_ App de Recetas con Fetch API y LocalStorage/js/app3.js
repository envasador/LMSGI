// Ahora, en función de la categoría que se elija, vamos a llamar
// a la API para que nos traiga las recetas de esa categoría

const selectCategorias = document.querySelector('#categorias')

// Ponemos un listener al select y escuchamos por el evento change.
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

// Función que captura la categoría seleccionada y la manda a otra función
// para que llame a la API
function obtenerRecetas(e) {
  // console.log('Seleccionando categoria')
  // console.log(e.target.value)
  const categoria = e.target.value
  // Construimos la url dinámica
  url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoria}`
  // Le pedimos a la API las recetas de la categoria que recibimos
  fetch(url)
    .then((res) => res.json())
    .then((data) => console.log(data))
}
