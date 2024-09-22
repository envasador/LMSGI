// Fetch API desde una API

const cargarAPIBtn = document.querySelector('#cargarAPI')
cargarAPIBtn.addEventListener('click', obtenerDatos)

function obtenerDatos() {
  const url = 'https://picsum.photos/list'
  fetch(url)
    .then((res) => res.json())
    .then((data) => mostrarHTML(data))
}

function mostrarHTML(photos) {
  const contenido = document.querySelector('#contenido')

  let html = ``

  photos.forEach((photo) => {
    const { filename, author, post_url } = photo
    html += `
      <p>Empleado: ${filename} </p>
      <p>trabajo: ${author} </p>
      <a href=${post_url}>Ver imagen</a>
      `
  })
  contenido.innerHTML = html
}
