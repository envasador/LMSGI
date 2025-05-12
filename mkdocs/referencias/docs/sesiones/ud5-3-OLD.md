# **UT5.3: Transformación de documentos con Javscript**

## 5.3.1 Objetivos

  - Comprender la importancia de la transformación de documentos para la interoperabilidad entre aplicaciones.
  - Identificar los formatos de intercambio de información más utilizados: JSON, XML y CSV.
  - Analizar las herramientas y métodos actuales para convertir documentos en el navegador y en Node.js.
  - Aplicar técnicas en JavaScript para convertir datos entre diferentes formatos.
  - Utilizar librerías como xml2js o PapaParse para facilitar las conversiones de datos.
  - Desarrollar scripts funcionales que automaticen la lectura, transformación y visualización de datos.

## 5.3.2 Introducción y contextualización

En el desarrollo de aplicaciones web y servicios digitales, el intercambio de información entre sistemas heterogéneos es una necesidad constante. No siempre todos los sistemas usan el mismo formato de datos, por lo que es imprescindible transformar documentos de un formato a otro de forma precisa y automatizada.

Los formatos de datos más utilizados en la actualidad para el intercambio son:

  - **JSON** (JavaScript Object Notation): ligero, fácil de leer y escribir, y muy usado en APIs web.
  - **XML** (eXtensible Markup Language): más formal y estructurado, todavía presente en entornos empresariales.
  - **CSV** (Comma-Separated Values): muy simple, pero útil para intercambiar datos tabulares.

En esta unidad aprenderás a:

  - Comprender la estructura y sintaxis de los principales formatos de intercambio.
  - Identificar herramientas y tecnologías que permiten la conversión entre documentos.
  - Utilizar JavaScript para transformar datos en distintos formatos, tanto en cliente como en servidor.
  - Aplicar estos conocimientos en una actividad práctica guiada.

💡 El objetivo principal será priorizar el uso de JSON como formato estándar actual, sin dejar de entender cómo trabajar con XML y CSV en casos donde sea necesario.

### Aplicaciones reales

A continuación, se describen algunos casos reales en los que se requiere transformar documentos usando JavaScript:

  - **Integración de APIs antiguas:** Hay muchas APIs públicas que todavía devuelven los datos en XML. Por ejemplo, servicios meteorológicos, bancos o sistemas de transporte. Si queremos mostrar esos datos en una página web moderna, necesitaremos convertir ese XML en JSON para poder manipularlo con JavaScript.
  - **Migración de sistemas:** Al modernizar una aplicación web, es común recibir datos en XML desde sistemas antiguos y transformarlos a JSON para almacenarlos en bases de datos NoSQL o consumirlos en SPAs (Single Page Applications).
  - **Transformaciones para visualización:** Bibliotecas como D3.js, Chart.js o incluso React requieren los datos en JSON. Si los datos vienen en XML (por ejemplo, desde un archivo o una herramienta de exportación), deberemos convertirlos. 
  - **Carga de datos en el frontend:** En una aplicación sin backend, si los datos están almacenados en XML (por ejemplo, un archivo de configuración), podemos transformarlos en JSON en el navegador para usarlos dinámicamente. 
  - **Importación y exportación de datos en hojas de cálculo:** Muchos usuarios y empresas trabajan con Excel o Google Sheets, que permiten importar y exportar datos en formato CSV. Si una aplicación web necesita permitir al usuario descargar informes o cargar datos desde una hoja de cálculo, será necesario convertir entre JSON (usado internamente en la app) y CSV (usado por el usuario final) usando JavaScript.


## 5.3.3 Tecnologías de transformación de documentos. Estándares y ámbitos de aplicación

La transformación de documentos es una tarea habitual en el desarrollo web. Por ejemplo, una página puede necesitar mostrar datos que vienen en formato XML, pero su código JavaScript trabaja internamente con JSON. En estos casos, necesitamos herramientas que nos permitan convertir datos de un formato a otro de forma automática y fiable.

Hoy en día, esta tarea se realiza principalmente con JavaScript, gracias a que es un lenguaje que puede ejecutarse tanto en el navegador (frontend) como en el servidor (usando Node.js). Además, existen editores, bibliotecas y herramientas modernas que facilitan mucho el trabajo.


### Lenguajes y entornos actuales

#### JavaScript

JavaScript permite analizar, modificar y convertir datos en distintos formatos de forma sencilla. Es muy potente para tareas de transformación porque:

  - Tiene funciones nativas para trabajar con JSON (JSON.stringify() y JSON.parse()). 
  - Puede trabajar con XML utilizando objetos como DOMParser o bibliotecas externas. 
  - Puede generar o leer CSV usando código personalizado o librerías como PapaParse.

Además, al ejecutarse tanto en cliente (navegador) como en servidor (Node.js), permite una gran flexibilidad:

  - En el navegador, se puede transformar XML a JSON para usar los datos en una interfaz web. 
  - En el servidor, se puede recibir un archivo CSV, convertirlo a JSON y almacenarlo en una base de datos.

#### Herramientas modernas de desarrollo

Para trabajar con transformación de documentos, es recomendable usar un buen entorno de desarrollo. Estas son algunas opciones:

  - Visual Studio Code (VS Code): Gratuito, muy popular entre estudiantes y profesionales. Tiene extensiones útiles para trabajar con JSON, XML, CSV, depuración de código y ejecución de scripts Node.js. 
  - WebStorm: Entorno profesional de pago (gratuito para educación) con funciones avanzadas de autocompletado, depuración, integración con bibliotecas y proyectos Node.js. 
  - Playgrounds online: Sitios web como JSFiddle, CodePen o RunKit permiten probar transformaciones de datos sin necesidad de instalar nada. Son útiles para hacer pruebas rápidas o resolver ejercicios en clase.


#### Bibliotecas y funciones útiles

En JavaScript existen muchas funciones nativas y bibliotecas que facilitan el trabajo de transformación. Algunas de las más utilizadas son:

  - JSON.parse(): Convierte un texto en formato JSON a un objeto JavaScript. 
  - JSON.stringify(): Convierte un objeto JavaScript a texto en formato JSON. 
  - DOMParser: Permite analizar texto XML en el navegador y convertirlo en un objeto manipulable con JavaScript. 
  - xml2js: Biblioteca para Node.js que transforma XML en JSON y viceversa. 
  - PapaParse: Biblioteca muy utilizada para leer o generar archivos CSV fácilmente desde JavaScript.

Estas herramientas permiten realizar tareas como:

  - Convertir datos XML de una API antigua en JSON para usarlos con JavaScript moderno. 
  - Leer un archivo CSV cargado por el usuario y convertirlo a JSON para mostrarlo o procesarlo. 
  - Preparar informes descargables en formato CSV desde datos internos en JSON.

#### Ámbitos de aplicación

La transformación de documentos se aplica en muchos contextos reales. Algunos ejemplos:

Ámbito	Descripción
Aplicaciones web modernas	Usan datos en formato JSON para actualizar la interfaz sin recargar la página. Si reciben los datos en XML, deben convertirlos primero.
Consumo de APIs	Algunas APIs (especialmente antiguas) devuelven XML. Es necesario convertirlo a JSON para trabajar con él cómodamente en JavaScript.
Automatización en el servidor	Con Node.js se pueden procesar archivos automáticamente: convertir un CSV a JSON, validar estructuras, guardar datos, etc.
Interoperabilidad entre sistemas	Si una empresa trabaja con software antiguo que exporta XML o CSV, podemos transformarlo a JSON para integrarlo con aplicaciones modernas.
Importación y exportación de datos	Muchas apps permiten al usuario descargar sus datos en CSV (informes, listados, etc.). Para eso, hay que transformar internamente el JSON a CSV.


## 5.3.4 Estructura y sintaxis de los formatos de intercambio

Para poder transformar correctamente documentos entre diferentes formatos, es importante tener presente **cómo están organizados los datos en cada uno de ellos**. En esta unidad, trabajaremos principalmente con **JSON** como formato actual preferente, pero también será necesario entender las características básicas de **XML** y **CSV**.

---

### JSON (formato principal)

```json
{
  "nombre": "Lucía",
  "edad": 19,
  "asignaturas": ["LMSGI", "Programación"]
}
```

- Basado en **pares clave-valor**.
- Puede contener objetos y listas anidadas.
- Muy fácil de trabajar con JavaScript (`JSON.parse()` y `JSON.stringify()`).
- Formato **ligero**, ideal para APIs y almacenamiento en el frontend.

> JSON es el formato preferido en desarrollo web moderno. Es más manejable que XML y permite representar estructuras complejas fácilmente.

---

### XML

```xml
<alumno>
  <nombre>Lucía</nombre>
  <edad>19</edad>
</alumno>
```

- Usa **etiquetas de apertura y cierre** como en HTML.
- Permite estructuras jerárquicas complejas.
- Puede ser validado con DTD o XSD.
- Más **verboso** que JSON.

> Aunque está en desuso en muchas aplicaciones modernas, todavía se utiliza en **sistemas antiguos o integraciones empresariales**.

---

### CSV

```csv
nombre,edad
Lucía,19
Pedro,20
```

- Organiza los datos en **filas y columnas**.
- La primera fila suele contener los nombres de las columnas.
- No admite estructuras complejas ni jerarquías.
- Muy útil para exportar/importar datos en hojas de cálculo (Excel, Google Sheets).

> El CSV es práctico, ligero y ampliamente compatible, pero limitado a estructuras planas.

---

### 🧠 Comparativa de sintaxis

| Formato | Estructura   | Ventajas principales               | Limitaciones                          |
|---------|--------------|------------------------------------|----------------------------------------|
| JSON    | Jerárquica   | Ligero, fácil de manipular en JS   | No directamente compatible con Excel   |
| XML     | Jerárquica   | Flexible, validable, estructurado  | Verboso, más difícil de manejar en JS  |
| CSV     | Tabular      | Ligero, ideal para hojas de cálculo| No soporta estructuras anidadas        |


## 5.3.5 Creación y uso de transformaciones (con JavaScript)

Una parte fundamental del desarrollo moderno es **transformar datos entre formatos** como XML, JSON o CSV. En esta sección aprenderás a hacerlo usando **JavaScript puro** y, cuando sea útil, algunas **librerías especializadas**.

Todas las transformaciones que veremos pueden ejecutarse en:

- **El navegador** (por ejemplo, para procesar un archivo local cargado por el usuario).
- **Node.js** (por ejemplo, para automatizar la conversión de archivos en un backend o script).

---

### 🟢 De XML a JSON (DOMParser + función personalizada)

#### 📄 Ejemplo: conversión de XML a JSON en el navegador

Este ejemplo usa `DOMParser` para analizar texto XML y lo transforma en un objeto JSON recorriendo sus nodos hijos.

```js
// XML de ejemplo como cadena de texto
const xmlTexto = `
<persona>
  <nombre>Lucía</nombre>
  <edad>22</edad>
</persona>
`;

const parser = new DOMParser();
const xmlDoc = parser.parseFromString(xmlTexto, "application/xml");

function xmlToJson(xml) {
  const obj = {};
  for (let node of xml.children) {
    obj[node.nodeName] = node.textContent;
  }
  return obj;
}

const resultado = xmlToJson(xmlDoc.documentElement);
console.log(resultado);
```

---

### 🟠 De CSV a JSON (con función personalizada)

#### 📄 Ejemplo: conversión de CSV a JSON con JavaScript puro

Esta función analiza un texto CSV con cabecera y lo convierte en una lista de objetos, donde cada fila representa un registro.

```js
const csv = `nombre,edad
Lucía,22
Pedro,21`;

function csvToJson(csv) {
  const [cabecera, ...filas] = csv.trim().split("\n");
  const campos = cabecera.split(",");

  return filas.map(fila => {
    const valores = fila.split(",");
    const obj = {};
    campos.forEach((campo, i) => obj[campo] = valores[i]);
    return obj;
  });
}

console.log(csvToJson(csv));
```

---

### 🔵 De JSON a CSV

#### 📄 Ejemplo: conversión de JSON a CSV

Esta función toma un array de objetos y genera un texto CSV con cabecera y filas separadas por comas.

```js
const datos = [
  { nombre: "Lucía", edad: 22 },
  { nombre: "Pedro", edad: 21 }
];

function jsonToCsv(datos) {
  const cabecera = Object.keys(datos[0]).join(",");
  const filas = datos.map(obj => Object.values(obj).join(","));
  return [cabecera, ...filas].join("\n");
}

console.log(jsonToCsv(datos));
```

---

### Librerías útiles para transformar documentos

Además de usar JavaScript puro, en proyectos reales es habitual usar **librerías** que nos ahorran tiempo y código. A continuación, explicamos dos muy utilizadas: **`xml2js`** para XML y **`PapaParse`** para CSV.

---

#### `xml2js` – Conversión de XML a JSON en Node.js

`xml2js` es una librería para Node.js que convierte automáticamente XML en objetos JSON. Es muy útil cuando trabajamos con archivos XML en el backend o en scripts.

##### Instalación

```bash
npm install xml2js
```

##### Código de ejemplo

```js
const fs = require('fs');
const xml2js = require('xml2js');

const xml = fs.readFileSync('archivo.xml', 'utf8');

xml2js.parseString(xml, (err, result) => {
  if (err) {
    console.error("Error al analizar el XML:", err);
    return;
  }
  console.log(result);
});
```

> 🧠 **Ventaja**: `xml2js` maneja estructuras complejas, atributos y listas sin necesidad de escribir funciones personalizadas.

---

#### `PapaParse` – Lectura y escritura de CSV

`PapaParse` es una de las librerías más completas para trabajar con CSV. Puede usarse tanto en el navegador como en Node.js.

##### Enlace CDN (para navegador)

```html
<script src="https://cdn.jsdelivr.net/npm/papaparse@5.4.1/papaparse.min.js"></script>
```

##### Conversión de CSV a JSON

```js
const csvData = `nombre,edad\nLucía,22\nPedro,21`;

Papa.parse(csvData, {
  header: true,
  complete: function(results) {
    console.log(results.data);
  }
});
```

##### Conversión de JSON a CSV

```js
const datos = [
  { nombre: "Lucía", edad: 22 },
  { nombre: "Pedro", edad: 21 }
];

const csv = Papa.unparse(datos);
console.log(csv);
```

> 🧠 **Ventajas**:
> - Evita errores al dividir texto manualmente.
> - Soporta archivos reales, carga desde formularios y exportación directa.
> - Compatible con navegadores y Node.js.


---

## 5.3.6 Actividad guiada: Transformación y visualización de datos

### 📝 Enunciado

Estás desarrollando una página web para una tienda online. El sistema de inventario es antiguo y exporta los datos en formato **XML**. Tu objetivo es:

- Transformar los datos XML a **JSON** usando **JavaScript**.
- Mostrar los productos en una **tabla HTML**.
- Resaltar en rojo aquellos productos que tengan **poco stock**.

---

### 📄 Datos de partida (XML)

```xml
<productos>
  <producto>
    <nombre>Monitor 24"</nombre>
    <precio>149.99</precio>
    <stock>15</stock>
  </producto>
  <producto>
    <nombre>Teclado mecánico</nombre>
    <precio>89.50</precio>
    <stock>30</stock>
  </producto>
  <producto>
    <nombre>Ratón inalámbrico</nombre>
    <precio>39.99</precio>
    <stock>10</stock>
  </producto>
</productos>
```

---

### 💻 Tareas

1. Introduce el XML como texto en tu archivo HTML.
2. Usa `DOMParser` para convertirlo en un documento DOM.
3. Implementa una función `xmlToJson()` para transformar el XML a JSON.
4. Recorre el JSON y genera una tabla HTML con los productos.
5. Resalta en rojo los productos con `stock < 20`.

---

### 📁 Archivo HTML con solución orientativa

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Inventario de productos</title>
  <style>
    table { border-collapse: collapse; width: 100%; }
    th, td { border: 1px solid #ccc; padding: 8px; }
    .bajo-stock { background-color: #fdd; }
  </style>
</head>
<body>
  <h1>Inventario de productos</h1>
  <div id="tabla-contenedor"></div>

  <script>
    const xmlTexto = `
    <productos>
      <producto>
        <nombre>Monitor 24"</nombre>
        <precio>149.99</precio>
        <stock>15</stock>
      </producto>
      <producto>
        <nombre>Teclado mecánico</nombre>
        <precio>89.50</precio>
        <stock>30</stock>
      </producto>
      <producto>
        <nombre>Ratón inalámbrico</nombre>
        <precio>39.99</precio>
        <stock>10</stock>
      </producto>
    </productos>
    `;

    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlTexto, "application/xml");

    function xmlToJson(xml) {
      const productos = [];
      const nodos = xml.getElementsByTagName("producto");

      for (let producto of nodos) {
        const nombre = producto.querySelector("nombre").textContent;
        const precio = parseFloat(producto.querySelector("precio").textContent);
        const stock = parseInt(producto.querySelector("stock").textContent);
        productos.push({ nombre, precio, stock });
      }

      return productos;
    }

    const inventario = xmlToJson(xmlDoc);

    function mostrarTabla(datos) {
      let html = `
        <table>
          <thead>
            <tr><th>Nombre</th><th>Precio</th><th>Stock</th></tr>
          </thead>
          <tbody>
      `;

      datos.forEach(producto => {
        const clase = producto.stock < 20 ? "bajo-stock" : "";
        html += `
          <tr class="${clase}">
            <td>${producto.nombre}</td>
            <td>${producto.precio.toFixed(2)} €</td>
            <td>${producto.stock}</td>
          </tr>
        `;
      });

      html += "</tbody></table>";
      document.getElementById("tabla-contenedor").innerHTML = html;
    }

    mostrarTabla(inventario);
  </script>
</body>
</html>
```

---

