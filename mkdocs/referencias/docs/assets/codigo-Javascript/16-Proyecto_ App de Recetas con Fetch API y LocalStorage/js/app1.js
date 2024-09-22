// App recetas
// https://www.themealdb.com/

function iniciarApp() {
  obtenerCategorias()

  function obtenerCategorias() {
    url = 'https://www.themealdb.com/api/json/v1/1/categories.php'
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.categories)
      })
  }
}

document.addEventListener('DOMContentLoaded', iniciarApp)
