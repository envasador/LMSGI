// Fetch API desde un JSON (Objeto)

const cargarJSONBtn = document.querySelector('#cargarJSON')
cargarJSONBtn.addEventListener('click', obtenerDatos)

function obtenerDatos() {
  console.log('cargando....')
  url = '/data/empleado.json'
  fetch(url)
    .then((res) => res.json())
    // .then((data) => console.log(data))
    .then((data) => mostrarHTML(data))
}

function mostrarHTML({ empresa, nombre, trabajo }) {
  // console.log(data)
  const contenido = document.querySelector('#contenido')

  contenido.innerHTML = `
  <p>Empleado: ${nombre} </p>
  <p>trabajo: ${trabajo} </p>
  <p>empresa: ${empresa} </p>
  `
}
