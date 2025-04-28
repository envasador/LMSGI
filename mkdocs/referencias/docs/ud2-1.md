---
hide:
  - navigation
---

# **UT2.1 Introducción a HTML5**

## **1. Historia de HTML y evolución hacia HTML5**
   - **Origen de HTML (1990-1991)**: HTML (HyperText Markup Language) fue creado por Tim Berners-Lee, el padre de la World Wide Web. La primera versión fue muy básica, con un conjunto limitado de etiquetas que permitían estructurar contenido sencillo.
   - **Evolución de HTML**: A lo largo de los años, HTML evolucionó para incluir nuevas funcionalidades como tablas, estilos, y formularios en HTML 3.2 y 4.01.
   - **La necesidad de HTML5**:
     - Con el auge de la web multimedia y las aplicaciones interactivas, HTML4 se quedó atrás.
     - Se necesitaba un lenguaje estándar que soportara video, audio y gráficos sin necesidad de plugins como Flash.
     - HTML5 fue desarrollado por el W3C e introducido en 2008, con la meta de crear una web más semántica, accesible y compatible con dispositivos móviles.
   - **Características clave de HTML5**:
     - Soporte multimedia nativo (audio y video).
     - Nuevas APIs, como Canvas para gráficos 2D, Web Storage y Geolocation.
     - Mayor énfasis en la semántica del contenido con nuevas etiquetas.

## **2. Estructura básica de un documento HTML5**
   - **DOCTYPE**: El documento HTML5 comienza con `<!DOCTYPE html>`, que le indica al navegador que debe interpretar el documento como HTML5.
   - **Etiquetas principales**:
     - `<html>`: Elemento raíz que envuelve todo el contenido.
     - `<head>`: Contiene metadatos sobre el documento (como el título, enlaces a hojas de estilo, meta descripciones, etc.).
     - `<meta charset="UTF-8">`: Para definir la codificación de caracteres del documento (UTF-8 es el estándar recomendado).
     - `<title>`: Define el título que se muestra en la pestaña del navegador.
     - `<body>`: Contiene el contenido visible para el usuario (texto, imágenes, videos, etc.).

```html
<!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Mi primer documento HTML5</title>
    </head>
    <body>
        <h1>¡Hola, Mundo!</h1>
        <p>Este es un documento básico en HTML5.</p>
    </body>
    </html>
```

## **3. Etiquetas básicas en HTML5**

### **3.1. Etiquetas de encabezado y párrafo**
  - **`<h1>` a `<h6>`**: Para definir títulos y subtítulos en el documento.
    - `<h1>` es el nivel más importante y `<h6>` el menos importante.
  - **`<p>`**: Para definir párrafos de texto.

### **3.2. Etiquetas de contenido en bloque y en línea**
  - **Contenido en bloque**:
    - `<div>`: Un contenedor genérico para contenido en bloque.
    - `<section>`: Agrupa contenido temático relacionado.
    - `<article>`: Para contenido independiente que podría ser reutilizado, como una publicación de blog.
    - `<header>`, `<footer>`, `<nav>`: Partes estructurales de una página web.
  - **Contenido en línea**:
    - `<span>`: Un contenedor genérico para contenido en línea.
    - `<a href="#">`: Enlaces que permiten la navegación entre páginas.
    - **Etiquetas de estilo en línea**: `<strong>`, `<em>`, `<mark>`, `<code>` para marcar texto con importancia, énfasis, resaltado o código fuente.

### **3.3. Listas**
  - **Listas ordenadas** (`<ol>`) y no ordenadas (`<ul>`) con elementos de lista (`<li>`).

### **3.4. Imágenes y multimedia**
  -  **`<img src="ruta" alt="descripción">`**: Inserta una imagen.
  - **`<video>` y `<audio>`**: Etiquetas para incorporar multimedia nativa, sin necesidad de plugins.
      - Ejemplo de video:
```html
    <video controls>
        <source src="video.mp4" type="video/mp4">
        Tu navegador no soporta la etiqueta video.
    </video>
```

### **3.5. Formularios**
  - El uso de formularios es esencial para la interacción del usuario.
    - **`<form>`**: Contenedor del formulario.
    - **`<input type="text">`, `<input type="email">`, `<input type="submit">`**: Campos de entrada de datos.
    - **`<label>`**: Para etiquetar los campos de entrada.
```html
  <form action="/submit" method="POST">
      <label for="nombre">Nombre:</label>
      <input type="text" id="nombre" name="nombre">
      <input type="submit" value="Enviar">
  </form>
```

### **3.6. Tablas en HTML5**
Las tablas permiten organizar datos en filas y columnas. Aunque no se recomienda para la maquetación de páginas, siguen siendo útiles para mostrar datos tabulares.

  - **`<table>`**: Elemento contenedor de la tabla.
  - **`<thead>`**: Agrupa el encabezado de la tabla.
  - **`<tbody>`**: Agrupa el cuerpo de la tabla.
  - **`<tr>`**: Define una fila en la tabla.
  - **`<th>`**: Define una celda de encabezado (por defecto en negrita y centrada).
  - **`<td>`**: Define una celda de datos en la tabla.

Ejemplo básico de tabla:
```html
   <table>
       <thead>
           <tr>
               <th>Nombre</th>
               <th>Edad</th>
               <th>Ciudad</th>
           </tr>
       </thead>
       <tbody>
           <tr>
               <td>Juan</td>
               <td>25</td>
               <td>Madrid</td>
           </tr>
           <tr>
               <td>Ana</td>
               <td>30</td>
               <td>Barcelona</td>
           </tr>
       </tbody>
   </table>
```

- **Atributos importantes**:
    - **`border`**: Define el grosor del borde de la tabla. (En HTML5 se recomienda usar CSS para manejar estilos).
    - **`colspan`**: Hace que una celda se extienda por varias columnas.
    - **`rowspan`**: Hace que una celda se extienda por varias filas.

Ejemplo con **`colspan`** y **`rowspan`**:
```html
   <table border="1">
       <thead>
           <tr>
               <th>Producto</th>
               <th>Precio</th>
               <th>Cantidad</th>
           </tr>
       </thead>
       <tbody>
           <tr>
               <td>Manzanas</td>
               <td>1.00€</td>
               <td rowspan="2">10</td>
           </tr>
           <tr>
               <td>Peras</td>
               <td>1.50€</td>
           </tr>
           <tr>
               <td colspan="2">Total</td>
               <td>20€</td>
           </tr>
       </tbody>
   </table>
```

## **4. HTML5 Semántico: Un enfoque hacia la accesibilidad y SEO**
  - La introducción de etiquetas semánticas en HTML5 mejora la accesibilidad para lectores de pantalla y optimiza el SEO.
    - **`<article>`, `<section>`, `<aside>`, `<header>`, `<footer>`, `<nav>`**: Ayudan a estructurar mejor el contenido, proporcionando información clara sobre su función.
  - **Beneficios de las etiquetas semánticas**:
      - Mejoran la comprensión del contenido por parte de los motores de búsqueda.
      - Facilitan la lectura del código por otros desarrolladores.
      - Mejoran la accesibilidad para usuarios con discapacidades.

## **Recursos complementarios**
  - [Documentación oficial de HTML5 (MDN Web Docs)](https://developer.mozilla.org/es/docs/Web/HTML)
  - [W3C HTML5 Specification](https://www.w3.org/TR/html5/)
  - [HTML5 by Manz](https://lenguajehtml.com/html/)

Ejemplos y ejercicios prácticos: Crear una página HTML básica que incluya un formulario de contacto, un artículo con imágenes y videos, y una lista de tareas.

## Material de refuerzo y ampliación

Se recomienda la realización de los siguientes cursos de la [Learn HTML by Building a Cat Photo App](https://www.freecodecamp.org/learn/2022/responsive-web-design/learn-html-by-building-a-cat-photo-app/step-1)  de freeCodeCamp.


