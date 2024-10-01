// Fetch API desde un JSON (Array)

// obtenerDatos() // En el caso de no tener botón, bastaría con llamar a la función

const cargarJSONArrayBtn = document.querySelector('#cargarJSONArray')
cargarJSONArrayBtn.addEventListener('click', obtenerDatos)

function obtenerDatos() {
  url = '/data/empleados.json'
  fetch(url)
    .then((res) => res.json())
    .then((data) => mostrarHTML(data))
}

function mostrarHTML(empleados) {
  const contenido = document.querySelector('#contenido')

  let html = ``

  empleados.forEach((empleado) => {
    const { nombre, trabajo, empresa } = empleado
    html += `
    <p>Empleado: ${nombre} </p>
    <p>trabajo: ${trabajo} </p>
    <p>empresa: ${empresa} </p>
    `
  })
  contenido.innerHTML = html
}
