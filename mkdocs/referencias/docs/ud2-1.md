---
hide:
  - navigation
---

# Unidad de Trabajo 2 **Guía completa de HTML5**.

Esta guía integra los conceptos esenciales de HTML5, incluyendo su sintaxis, atributos, etiquetas semánticas, multimedia, formularios, tablas, y etiquetas modernas. Está organizada de manera lógica para facilitar el aprendizaje progresivo del lenguaje.


## 1. Introducción a HTML5

**HTML5** es la quinta y más reciente versión del lenguaje de marcado HTML (HyperText Markup Language), utilizado para estructurar y presentar contenido en la web. Fue desarrollado para mejorar las capacidades de HTML4 y XHTML, ofreciendo nuevas características que facilitan la creación de aplicaciones web más ricas, interactivas y semánticas.

### **Características Principales de HTML5:**

- **Semántica Mejorada:** Nuevas etiquetas que proporcionan una mejor estructura y significado al contenido.
- **Multimedia Integrada:** Soporte nativo para audio y video sin necesidad de plugins externos.
- **Gráficos y Efectos Visuales:** Elemento `<canvas>` para gráficos dinámicos y `<svg>` para gráficos vectoriales.
- **Formularios Mejorados:** Nuevos tipos de entrada y validaciones.
- **APIs y Funcionalidades Avanzadas:** Geolocalización, almacenamiento local, arrastrar y soltar, entre otros.

---

## 2. Estructura Básica de un Documento HTML5

Comprender la estructura básica de un documento HTML5 es fundamental antes de profundizar en etiquetas y atributos específicos.

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Título de la Página</title>
    <!-- Enlaces a hojas de estilo, scripts, etc. -->
</head>
<body>
    <!-- Contenido de la página -->
</body>
</html>
```

### **Descripción de la Estructura:**

- `<!DOCTYPE html>`: Declara el tipo de documento y la versión de HTML (HTML5).
- `<html lang="es">`: Elemento raíz del documento, con el atributo `lang` indicando el idioma.
- `<head>`: Contiene metadatos, enlaces a hojas de estilo, scripts y el título de la página.
- `<meta charset="UTF-8">`: Define la codificación de caracteres.
- `<meta name="viewport" content="width=device-width, initial-scale=1.0">`: Configura el viewport para dispositivos móviles.
- `<title>`: Título que aparece en la pestaña del navegador.
- `<body>`: Contiene todo el contenido visible de la página web.

---

## 3. Sintaxis de las Etiquetas en HTML5

### **Estructura Básica de una Etiqueta HTML5**

Cada elemento en HTML5 se representa mediante una etiqueta que generalmente consta de una etiqueta de apertura y una de cierre, aunque algunas son auto-cerradas.

```html
<etiqueta atributo="valor">Contenido</etiqueta>
```

- **Etiqueta de Apertura (`<etiqueta>`):** Indica el inicio de un elemento.
- **Atributos:** Proporcionan información adicional sobre el elemento.
- **Contenido:** Lo que se encuentra entre la etiqueta de apertura y la de cierre.
- **Etiqueta de Cierre (`</etiqueta>`):** Indica el final del elemento.

### **Etiquetas Auto-cerradas**

Algunas etiquetas no requieren contenido y se auto-cierran.

```html
<etiqueta atributo="valor" />
```

**Ejemplos Comunes:**

- `<img src="imagen.jpg" alt="Descripción de la imagen" />`
- `<br />` (Salto de línea)
- `<hr />` (Línea horizontal)

### **Buenas Prácticas de Sintaxis**

1. **Indentación y Formato:** Mantén una estructura clara y bien indentada para mejorar la legibilidad.
2. **Uso de Comillas:** Siempre utiliza comillas para los valores de los atributos (`atributo="valor"`).
3. **Atributos Relevantes:** Incluye solo los atributos necesarios para cada etiqueta.
4. **Cierre de Etiquetas:** Asegúrate de cerrar todas las etiquetas que lo requieran para evitar errores de renderizado.

---

## 4. Atributos en HTML5

HTML5 introduce una variedad de **atributos** que mejoran la funcionalidad y la accesibilidad de los elementos. A continuación, se detallan los **atributos globales**, **específicos** de etiquetas comunes, y **de accesibilidad**.

### 4.1. Atributos Globales

Los atributos globales están disponibles para la mayoría de las etiquetas HTML5.

#### **1. `id`**
- **Descripción:** Identificador único para el elemento.
- **Uso:** Permite la referencia del elemento mediante CSS o JavaScript.
- **Ejemplo:**
  
    ```html
    <div id="miDiv">Contenido</div>
    ```

#### **2. `class`**
- **Descripción:** Define una o varias clases para el elemento.
- **Uso:** Facilita la aplicación de estilos CSS o la selección en JavaScript.
  - **Ejemplo:**
  
      ```html
    <p class="texto-importante">Texto destacado</p>
    ```

#### **3. `style`**
- **Descripción:** Aplica estilos CSS en línea al elemento.
- **Uso:** Útil para estilos rápidos o específicos.
- **Ejemplo:**

    ```html
    <h1 style="color: blue;">Título Azul</h1>
    ```

#### **4. `title`**
- **Descripción:** Proporciona información adicional que aparece como tooltip al pasar el cursor.
- **Ejemplo:**

    ```html
  <abbr title="World Health Organization">WHO</abbr>
    ```

#### **5. `data-*`**
- **Descripción:** Permite almacenar datos personalizados privados para la página o aplicación.
- **Uso:** Accesibles mediante JavaScript.
- **Ejemplo:**
   
  ```html
  <div data-user-id="12345">Usuario</div>
  ```

#### **6. `hidden`**
- **Descripción:** Indica que el elemento no es relevante y debe ocultarse.
- **Ejemplo:**
  
  ```html
  <p hidden>Este párrafo está oculto.</p>
  ```

#### **7. `lang`**
- **Descripción:** Especifica el idioma del elemento.
- **Ejemplo:**
  
  ```html
  <p lang="es">Este texto está en español.</p>
  ```

#### **8. `tabindex`**
- **Descripción:** Controla el orden de tabulación de los elementos interactivos.
- **Ejemplo:**

  ```html
  <button tabindex="1">Primer Botón</button>
  ```

### 4.2. Atributos Específicos de Etiquetas Comunes

#### **1. `<a>` (Enlace)**
- **`href`**: URL del destino del enlace.
- **`target`**: Especifica dónde abrir el enlace (e.g., `_blank` para una nueva pestaña).
- **`rel`**: Define la relación entre el documento actual y el enlazado (e.g., `noopener`, `nofollow`).

**Ejemplo:**

```html
<a href="https://www.ejemplo.com" target="_blank" rel="noopener">Visitar Ejemplo</a>
```

#### **2. `<img>` (Imagen)**
- **`src`**: Ruta de la imagen.
- **`alt`**: Texto alternativo que describe la imagen.
- **`width` y `height`**: Dimensiones de la imagen.

**Ejemplo:**

```html
<img src="logo.png" alt="Logo de la Empresa" width="200" height="100" />
```

#### **3. `<input>` (Campo de Entrada)**
- **`type`**: Tipo de entrada (e.g., `text`, `email`, `password`).
- **`name`**: Nombre del campo para el envío de datos.
- **`value`**: Valor predefinido del campo.
- **`placeholder`**: Texto de ayuda dentro del campo.
- **`required`**: Indica que el campo es obligatorio.

**Ejemplo:**

```html
<input type="email" name="correo" placeholder="tuemail@ejemplo.com" required />
```

#### **4. `<button>` (Botón)**
- **`type`**: Tipo de botón (e.g., `button`, `submit`, `reset`).
- **`disabled`**: Desactiva el botón.

**Ejemplo:**

```html
<button type="submit">Enviar</button>
```

#### **5. `<form>` (Formulario)**
- **`action`**: URL a la que se enviarán los datos del formulario.
- **`method`**: Método de envío (`GET` o `POST`).
- **`enctype`**: Tipo de codificación para los datos del formulario.

**Ejemplo:**

```html
<form action="/enviar" method="post">
    <!-- Campos del formulario -->
</form>
```

### 4.3. Atributos de Accesibilidad

HTML5 también enfatiza la accesibilidad, permitiendo el uso de atributos que mejoran la interacción con tecnologías de asistencia.

#### **`aria-*`**
- **Descripción:** Atributos de accesibilidad que mejoran la interacción con tecnologías de asistencia.
- **Ejemplo:**
  ```html
  <button aria-label="Cerrar" onclick="cerrarVentana()">X</button>
  ```

---

## 5. Etiquetas Semánticas en HTML5

Las etiquetas semánticas proporcionan significado al contenido, mejorando la accesibilidad y optimizando el SEO.

### **Principales Etiquetas Semánticas:**

1. **`<header>`**
    - **Descripción:** Define el encabezado de una página o sección.
    - **Ejemplo:**
      
      ```html
      <header>
          <h1>Bienvenido a Mi Sitio Web</h1>
          <nav>
              <ul>
                  <li><a href="#">Inicio</a></li>
                  <li><a href="#">Servicios</a></li>
                  <li><a href="#">Contacto</a></li>
              </ul>
          </nav>
      </header>
      ```

2. **`<nav>`**
    - **Descripción:** Define un conjunto de enlaces de navegación.
    - **Ejemplo:** (Incluido en el ejemplo de `<header>` arriba)

3. **`<main>`**
    - **Descripción:** Representa el contenido principal del documento.
    - **Ejemplo:**
      
      ```html
      <main>
          <article>
              <h2>Título del Artículo</h2>
              <p>Contenido del artículo...</p>
          </article>
      </main>
      ```

4. **`<section>`**
    - **Descripción:** Define una sección genérica del documento.
    - **Ejemplo:**
      
      ```html
      <section>
          <h2>Sección de Servicios</h2>
          <p>Descripción de los servicios ofrecidos...</p>
      </section>
      ```

5. **`<article>`**
    - **Descripción:** Representa contenido independiente, como un artículo de blog o una noticia.
    - **Ejemplo:** (Incluido en el ejemplo de `<main>` arriba)

6. **`<aside>`**
    - **Descripción:** Define contenido complementario, como barras laterales o widgets.
    - **Ejemplo:**
      
      ```html
      <aside>
          <h3>Información Adicional</h3>
          <p>Contenido adicional relacionado...</p>
      </aside>
      ```

7. **`<footer>`**
    - **Descripción:** Define el pie de página de una sección o documento.
    - **Ejemplo:**
    
      ```html
      <footer>
          <p>&copy; 2024 Mi Sitio Web. Todos los derechos reservados.</p>
      </footer>
      ```

---

## 6. Multimedia en HTML5

HTML5 facilita la incorporación de contenido multimedia sin necesidad de plugins externos.

### 6.1. Etiqueta `<video>`

- **Descripción:** Inserta contenido de video.
- **Atributos Comunes:**
    - `controls`: Muestra los controles de reproducción.
    - `autoplay`: Inicia la reproducción automáticamente.
    - `loop`: Reproduce el video en bucle.
    - `muted`: Inicia el video sin sonido.
    - `poster`: Imagen de previsualización antes de la reproducción.

**Ejemplo:**

```html
<video width="640" height="360" controls>
    <source src="video-ejemplo.mp4" type="video/mp4">
    <source src="video-ejemplo.ogg" type="video/ogg">
    Tu navegador no soporta el elemento de video.
</video>
```

### 6.2. Etiqueta `<audio>`

- **Descripción:** Inserta contenido de audio.
- **Atributos Comunes:** Similar a `<video>`.

**Ejemplo:**

```html
<audio controls>
    <source src="audio-ejemplo.mp3" type="audio/mpeg">
    <source src="audio-ejemplo.ogg" type="audio/ogg">
    Tu navegador no soporta el elemento de audio.
</audio>
```

### 6.3. Etiqueta `<canvas>`

- **Descripción:** Permite dibujar gráficos mediante scripting (JavaScript).
- **Ejemplo:**
  
```html
  <canvas id="miCanvas" width="200" height="100" style="border:1px solid #000000;">
      Tu navegador no soporta el elemento canvas.
  </canvas>

  <script>
      var canvas = document.getElementById('miCanvas');
      var contexto = canvas.getContext('2d');
      contexto.fillStyle = '#FF0000';
      contexto.fillRect(20, 20, 150, 75);
  </script>
```

### 6.4. Etiqueta `<svg>`

- **Descripción:** Permite integrar gráficos vectoriales escalables directamente en HTML.
- **Ejemplo:**
  
  ```html
  <svg width="100" height="100">
      <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />
  </svg>
  ```

**Descripción del Ejemplo:**

- Dibuja un círculo con centro en (50,50), radio 40, borde verde y relleno amarillo.

---

## 7. Formularios Mejorados en HTML5

HTML5 introduce nuevas etiquetas y atributos que mejoran la funcionalidad y la validación de los formularios.

### 7.1. Fieldsets y Leyendas

Los fieldsets agrupan elementos relacionados dentro de un formulario, mientras que la leyenda proporciona una descripción para el grupo.

**Ejemplo de Fieldset:**

```html
<form action="/registrar" method="post">
    <fieldset>
        <legend>Información Personal</legend>
        
        <label for="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre" required />
        
        <label for="apellido">Apellido:</label>
        <input type="text" id="apellido" name="apellido" required />
    </fieldset>
    
    <fieldset>
        <legend>Información de Contacto</legend>
        
        <label for="email">Correo Electrónico:</label>
        <input type="email" id="email" name="email" required />
        
        <label for="telefono">Teléfono:</label>
        <input type="tel" id="telefono" name="telefono" />
    </fieldset>
    
    <input type="submit" value="Registrar" />
</form>
```

**Descripción del Ejemplo:**

- **`<fieldset>`:** Agrupa campos relacionados del formulario.
- **`<legend>`:** Título descriptivo del grupo de campos.

### 7.2. Nuevos Tipos de Input

HTML5 introduce varios nuevos tipos de campos de entrada que mejoran la experiencia del usuario y la validación de datos.

- `email`: Valida que el contenido sea una dirección de correo electrónico.
- `tel`: Para números de teléfono.
- `url`: Valida que el contenido sea una URL válida.
- `number`: Para números con controles de incremento y decremento.
- `date`, `time`, `datetime-local`: Para seleccionar fechas y horas.
- `range`: Para seleccionar un rango de valores mediante un control deslizante.

### 7.3. Atributos Nuevos en Formularios

- `placeholder`: Texto de ayuda dentro del campo de entrada.
- `required`: Campo obligatorio.
- `pattern`: Expresión regular para validar el formato.
- `autocomplete`: Habilita o deshabilita la autocompletación.

**Ejemplo de Formulario Completo:**

```html
<form action="/submit" method="post">
    <fieldset>
        <legend>Datos Personales</legend>
        
        <label for="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre" placeholder="Tu Nombre" required />
        
        <label for="email">Correo Electrónico:</label>
        <input type="email" id="email" name="email" placeholder="tuemail@ejemplo.com" required />
        
        <label for="edad">Edad:</label>
        <input type="number" id="edad" name="edad" min="1" max="120" />
    </fieldset>
    
    <fieldset>
        <legend>Preferencias</legend>
        
        <label for="satisfaccion">Nivel de Satisfacción:</label>
        <input type="range" id="satisfaccion" name="satisfaccion" min="0" max="10" />
    </fieldset>
    
    <input type="submit" value="Enviar" />
</form>
```

---

## 8. Tablas en HTML5

Las tablas se utilizan para representar datos tabulares. HTML5 introduce nuevas etiquetas semánticas para mejorar su estructura.

### **Elementos Principales de una Tabla:**

1. **`<table>`**
    - Contenedor principal de la tabla.

2. **`<caption>`**
    - Proporciona un título o descripción para la tabla.

3. **`<thead>`**
    - Agrupa el encabezado de la tabla.

4. **`<tbody>`**
    - Agrupa el cuerpo de la tabla.

5. **`<tfoot>`**
    - Agrupa el pie de la tabla.

6. **`<tr>`**
    - Define una fila en la tabla.

7. **`<th>`**
    - Define una celda de encabezado.

8. **`<td>`**
    - Define una celda de datos.

### **Ejemplo de Tabla Completa:**

```html
<table>
    <caption>Estadísticas de Ventas 2024</caption>
    <thead>
        <tr>
            <th>Mes</th>
            <th>Ventas</th>
            <th>Objetivo</th>
            <th>Resultado</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Enero</td>
            <td>$10,000</td>
            <td>$8,000</td>
            <td>Superado</td>
        </tr>
        <tr>
            <td>Febrero</td>
            <td>$7,500</td>
            <td>$9,000</td>
            <td>No alcanzado</td>
        </tr>
        <!-- Más filas -->
    </tbody>
    <tfoot>
        <tr>
            <td>Total</td>
            <td>$17,500</td>
            <td>$17,000</td>
            <td>Promedio</td>
        </tr>
    </tfoot>
</table>
```

### **Estilos CSS para Tablas:**

Para mejorar la apariencia de las tablas, puedes aplicar estilos CSS.

```html
<style>
    table {
        width: 100%;
        border-collapse: collapse;
    }
    caption {
        caption-side: top;
        font-weight: bold;
        margin-bottom: 10px;
    }
    th, td {
        border: 1px solid #ddd;
        padding: 8px;
        text-align: center;
    }
    th {
        background-color: #f2f2f2;
    }
    tr:nth-child(even) {
        background-color: #f9f9f9;
    }
    tr:hover {
        background-color: #eaeaea;
    }
</style>
```

---

## 9. Etiquetas Modernas en HTML5

HTML5 introduce etiquetas que mejoran la interactividad y la experiencia del usuario sin depender de scripts adicionales.

### 9.1. Etiquetas `<details>` y `<summary>`

Permiten crear secciones desplegables que mejoran la interactividad y la experiencia del usuario.

**Descripción de las Etiquetas:**

- **`<details>`:** Contenedor para contenido adicional que puede ser mostrado u ocultado.
- **`<summary>`:** Proporciona un resumen o título para el contenido dentro de `<details>`. Es visible siempre y al hacer clic despliega el contenido.

**Ejemplo de Uso:**

```html
<details>
    <summary>Más Información</summary>
    <p>Este es el contenido adicional que se muestra al expandir el detalle.</p>
</details>
```

**Descripción del Ejemplo:**

- Al cargar la página, solo se muestra "Más Información".
- Al hacer clic, se despliega el párrafo con el contenido adicional.

### 9.2. Etiqueta `<progress>`

- **Descripción:** Representa el progreso de una tarea.
- **Atributos:**
    - `value`: Valor actual del progreso.
    - `max`: Valor máximo del progreso.

**Ejemplo:**

```html
<label for="prog">Carga:</label>
<progress id="prog" value="70" max="100">70%</progress>
```

### 9.3. Etiqueta `<meter>`

- **Descripción:** Representa una medida escalar dentro de un rango conocido.
- **Atributos:**
    - `value`: Valor actual.
    - `min`, `max`: Rango de valores.
    - `low`, `high`, `optimum`: Valores para indicar rangos específicos.

**Ejemplo:**

```html
<label for="cpu">Uso de CPU:</label>
<meter id="cpu" value="0.6" min="0" max="1">60%</meter>
```

### 9.4. Etiqueta `<mark>`

- **Descripción:** Resalta texto importante.

**Ejemplo:**

```html
<p>Este es un <mark>texto destacado</mark> en el párrafo.</p>
```

### 9.5. Etiqueta `<time>`

- **Descripción:** Representa una fecha u hora.
- **Atributo `datetime`:** Proporciona una representación legible por máquinas de la fecha/hora.

**Ejemplo:**

```html
<time datetime="2024-10-10">10 de Octubre de 2024</time>
```

### 9.6. Etiqueta `<template>`

- **Descripción:** Contiene contenido que no se muestra en la página hasta que se lo active mediante JavaScript.

**Ejemplo:**

```html
<template id="miPlantilla">
    <div class="card">
        <h3>Título</h3>
        <p>Contenido de la tarjeta.</p>
    </div>
</template>
```

---

## 10. Buenas Prácticas de HTML5

1. **Semántica:** Utiliza etiquetas semánticas para mejorar la accesibilidad y el SEO.
2. **Accesibilidad:** Emplea atributos como `aria-*` y etiquetas adecuadas para asegurar que tu contenido sea accesible para todos los usuarios.
3. **Validación:** Utiliza validadores de HTML para asegurarte de que tu código cumple con los estándares.
4. **Optimización de Recursos:** Minimiza el uso de recursos externos y optimiza imágenes y scripts para mejorar el rendimiento.
5. **Responsive Design:** Asegúrate de que tu sitio sea adaptable a diferentes tamaños de pantalla utilizando la etiqueta `<meta viewport>` y técnicas de diseño responsivo.
6. **Evitar Uso Excesivo de Inline Styles:** Prefiere el uso de hojas de estilo externas para mantener el código limpio y facilitar el mantenimiento.

---

## 11. Conclusión

HTML5 ha transformado el desarrollo web al proporcionar una estructura más semántica, herramientas multimedia integradas y mejoras en la interacción del usuario. Dominar las etiquetas, atributos y nuevas funcionalidades de HTML5 es esencial para crear aplicaciones web modernas, accesibles y eficientes.

### **Puntos Clave a Recordar:**

1. **Semántica:** Utiliza etiquetas semánticas para mejorar la accesibilidad y el SEO.
2. **Accesibilidad:** Emplea atributos como `aria-*` y etiquetas adecuadas para asegurar que tu contenido sea accesible para todos los usuarios.
3. **Multimedia y Gráficos:** Aprovecha las capacidades integradas para audio, video y gráficos sin depender de plugins externos.
4. **Formularios Avanzados:** Implementa formularios con validaciones y tipos de entrada mejorados para una mejor experiencia del usuario.
5. **Interactividad:** Utiliza etiquetas como `<details>` y `<summary>` para agregar interactividad sin necesidad de scripts adicionales.

---

## 12. Recursos Adicionales

- [Documentación Oficial de HTML5 (MDN Web Docs)](https://developer.mozilla.org/es/docs/Web/HTML)
- [Guía de Accesibilidad en HTML5](https://developer.mozilla.org/es/docs/Web/Accessibility)
- [Tutoriales de CSS para Estilizar HTML5](https://www.w3schools.com/css/)
- [Validador de HTML del W3C](https://validator.w3.org/)
- [Introducción a las APIs de HTML5](https://developer.mozilla.org/es/docs/Web/API)
- [Documentación oficial de HTML5 (MDN Web Docs)](https://developer.mozilla.org/es/docs/Web/HTML)
- [W3C HTML5 Specification](https://www.w3.org/TR/html5/)
- [HTML5 by Manz](https://lenguajehtml.com/html/)

Ejemplos y ejercicios prácticos: Crear una página HTML básica que incluya un formulario de contacto, un artículo con imágenes y videos, y una lista de tareas.

## Material de refuerzo y ampliación

Se recomienda la realización de los siguientes cursos de la [Learn HTML by Building a Cat Photo App](https://www.freecodecamp.org/learn/2022/responsive-web-design/learn-html-by-building-a-cat-photo-app/step-1)  de freeCodeCamp.

---
