### Resultado de aprendizaje 5

| Criterio de evaluación | Cómo se evidencia en la actividad |
|------------------------|----------------------------------|
| **a)** Se ha identificado la necesidad de la conversión de documentos para el intercambio de la información. | Se parte de una situación realista (sistema antiguo XML, web moderna que necesita JSON). |
| **b)** Se han establecido ámbitos de aplicación. | Contexto: tienda online que necesita adaptar su inventario para mostrarlo dinámicamente. |
| **c)** Se han analizado las tecnologías implicadas y su modo de funcionamiento. | Uso de DOMParser, manipulación DOM, conversión a JSON y renderizado con JS. |
| **d)** Se ha descrito la sintaxis específica utilizada en la conversión. | La actividad está basada en XML estructurado y su conversión a objetos JSON. |
| **e)** Se han creado especificaciones de conversión. | La función `xmlToJson()` convierte productos del DOM XML a objetos manipulables. |
| **f)** Se han identificado y caracterizado herramientas específicas. | Se emplea JavaScript puro, DOMParser, plantillas HTML y manipulación del DOM. |
| **g)** Se han realizado conversiones sobre documentos para el intercambio de información. | Se ejecuta la transformación completa XML → JSON → visualización HTML. |


### Resultado de aprendizaje 5

| Criterio de evaluación | Cómo se evidencia en la actividad |
|------------------------|----------------------------------|
| **a)** Se ha identificado la necesidad de la conversión de documentos para el intercambio de la información. | Se parte de una situación realista (sistema antiguo XML, web moderna que necesita JSON). |
| **b)** Se han establecido ámbitos de aplicación. | Contexto: tienda online que necesita adaptar su inventario para mostrarlo dinámicamente. |
| **c)** Se han analizado las tecnologías implicadas y su modo de funcionamiento. | Uso de DOMParser, manipulación DOM, conversión a JSON y renderizado con JS. |
| **d)** Se ha descrito la sintaxis específica utilizada en la conversión. | La actividad está basada en XML estructurado y su conversión a objetos JSON. |
| **e)** Se han creado especificaciones de conversión. | La función `xmlToJson()` convierte productos del DOM XML a objetos manipulables. |
| **f)** Se han identificado y caracterizado herramientas específicas. | Se emplea JavaScript puro, DOMParser, plantillas HTML y manipulación del DOM. |
| **g)** Se han realizado conversiones sobre documentos para el intercambio de información. | Se ejecuta la transformación completa XML → JSON → visualización HTML. |



### 🧪 Variante: carga del XML desde archivo remoto

#### ✅ Opción 1: Cargar XML desde una URL accesible

```js
// Hacemos una petición HTTP a la URL del archivo XML
fetch('ruta/al/archivo.xml')
  // Leemos la respuesta como texto
  .then(response => response.text())
  .then(xmlTexto => {
    // Convertimos el texto en un documento XML (DOM)
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlTexto, "application/xml");

    // Creamos un array para almacenar los productos
    const productos = [];
    const nodos = xmlDoc.getElementsByTagName("producto");

    // Recorremos cada nodo <producto>
    for (let producto of nodos) {
      // Extraemos los valores de las etiquetas internas
      const nombre = producto.querySelector("nombre").textContent;
      const precio = parseFloat(producto.querySelector("precio").textContent);
      const stock = parseInt(producto.querySelector("stock").textContent);
      productos.push({ nombre, precio, stock }); // Añadimos al array
    }

    // Mostramos los productos en consola (o podemos llamar a mostrarTabla)
    console.log(productos);
  })
  .catch(error => {
    // En caso de error (ej: URL incorrecta, fallo de red)
    console.error("Error al cargar el XML:", error);
  });
```

> Asegúrate de que la URL está en el mismo servidor o que el servidor remoto tiene habilitado CORS.

---

#### ✅ Opción 2: Usar un proxy CORS (para pruebas)

Si el archivo XML está en un servidor que no permite CORS, puedes usar un proxy como `https://cors-anywhere.herokuapp.com/` solo para pruebas:

```js
// URL del XML original
const urlOriginal = 'https://ejemplo.com/archivo.xml';
// Proxy para evitar bloqueo por CORS
const proxy = 'https://cors-anywhere.herokuapp.com/';
// Construimos la URL final
const urlProxificada = proxy + urlOriginal;

// Igual que antes, pero usando la URL con proxy
fetch(urlProxificada)
    .then(response => response.text())
    .then(xmlTexto => {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlTexto, "application/xml");

        const productos = [];
        const nodos = xmlDoc.getElementsByTagName("producto");

        for (let producto of nodos) {
            const nombre = producto.querySelector("nombre").textContent;
            const precio = parseFloat(producto.querySelector("precio").textContent);
            const stock = parseInt(producto.querySelector("stock").textContent);
            productos.push({ nombre, precio, stock });
        }

        console.log(productos);
    })
    .catch(error => {
        console.error("Error al cargar el XML (con proxy):", error);
    });
```

> 💡 Este proxy es útil para prácticas o pruebas, pero no debe usarse en producción. Accede primero a `https://cors-anywhere.herokuapp.com/corsdemo` para habilitar temporalmente el acceso.
