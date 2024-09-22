// Fetch API consumir datos desde un txt...

const cargarTxtBtn = document.querySelector('#cargarTxt')

cargarTxtBtn.addEventListener('click', obtenerDatos)

function obtenerDatos() {
  fetch('data/datos.txt') // URL
    .then((respuesta) => {
      console.log(respuesta)

      console.log(respuesta.headers.get('Content-Type'))
      console.log(respuesta.status) // Estado
      console.log(respuesta.statusText) //estado en texto
      console.log(respuesta.url) // URL a la que consultamos

      // Hay que decirle que método vamos a utilizar... JSON o Texto, en este caso recibimos un texto.

      return respuesta.text()
    })
    .then((data) => {
      console.log(data)
    })
    .catch((error) => {
      console.log(error)
    })

  // fetch(url)
  // .then((res) => res.text())
  // .then((data) => console.log(data))
}
