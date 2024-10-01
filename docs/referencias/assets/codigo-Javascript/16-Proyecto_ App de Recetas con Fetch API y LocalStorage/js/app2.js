// Vamos a crear una función que coja las categorías y ls muestre en el select

// Seleccionamos el select
const selectCategorias = document.querySelector('#categorias')

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

document.addEventListener('DOMContentLoaded', iniciarApp)

// Función que pinta las categorías
function mostrarCategorias(categorias) {
  categorias.forEach((categoria) => {
    // creamos un elemento option
    const option = document.createElement('OPTION')
    //Le asigamos el nombre de la categoria al valor del option
    option.value = categoria.strCategory
    option.textContent = categoria.strCategory
    // console.log(option)
    // console.log(categoria)
    // Añadimos los options al HTML
    selectCategorias.appendChild(option)
  })
}

document.addEventListener('DOMContentLoaded', iniciarApp)
