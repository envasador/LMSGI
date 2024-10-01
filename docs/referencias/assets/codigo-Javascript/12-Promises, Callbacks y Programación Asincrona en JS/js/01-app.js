// Listado de paises
const paises = [
  "Francia",
  "España",
  "Portugal",
  "Australia",
  "Inglaterra",
  "Irlanda",
];

// Añade un pais despues de 2 segundos...
function nuevoPais(pais, callback) {
  setTimeout(() => {
    paises.push(pais);
    callback();
  }, 2000); // El segundo ya paso, y se añade uno nuevo, ejecutamos el callback para que se vuelva a llamar la función
}

//1. Los paises se muestran despues de 1 segundo --- Simula la descarga de paises, pero claro si los descargamos y luego
// se añade otro...
function mostrarPaises() {
  setTimeout(() => {
    paises.forEach((pais) => {
      console.log(pais);
    });
  }, 1000); // Después de un segundo obtenemos los paises...
}

mostrarPaises();

// Añadir nuevo pais
nuevoPais("Alemania", mostrarPaises); // mostrarPaises es el callback, una vez añadido alemania se va a ejecutar esa linea...
