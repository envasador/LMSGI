# UD2.1: MANIPULACIÓN DEL DOM

## Introducción

El DOM (Document Object Model) es la representación en memoria que el navegador crea del documento HTML. No es el código HTML que escribimos, sino una estructura de datos viva que JavaScript puede leer y modificar. Esta unidad establece las bases para manipular dinámicamente páginas web, permitiendo crear experiencias interactivas y actualizaciones sin necesidad de recargar la página.

---

## 1. Fundamentos del DOM

### Introducción

Para trabajar eficazmente con JavaScript en el navegador, primero debemos comprender qué es el DOM y cómo está estructurado. El DOM no es simplemente nuestro código HTML, sino una representación viva y navegable que el navegador crea automáticamente cuando carga una página. Esta estructura en forma de árbol nos permite acceder, modificar y manipular cualquier parte de la página web mediante código.

Entender el DOM como árbol de nodos es fundamental: cada elemento, cada fragmento de texto, e incluso cada comentario tiene su lugar en esta jerarquía. Cuando dominamos cómo movernos por este árbol, podemos localizar cualquier elemento y establecer relaciones entre ellos (padres, hijos, hermanos), lo cual es la base de toda manipulación dinámica del contenido web.

### 1.1. ¿Qué es el DOM?

El DOM es un árbol de objetos que representa la estructura del documento HTML. Cada elemento HTML, fragmento de texto y comentario se convierte en un nodo que JavaScript puede manipular.

**Conceptos clave:**
- HTML es texto estático; el DOM es una estructura dinámica en memoria
- El navegador parsea el HTML y construye el DOM automáticamente
- JavaScript accede al DOM a través del objeto global `document`
- Los cambios en el DOM se reflejan inmediatamente en la página

**Tipos de nodos principales:**

```javascript
// Node.ELEMENT_NODE = 1 (elementos HTML como <div>, <p>)
// Node.TEXT_NODE = 3 (el texto dentro de los elementos)
// Node.COMMENT_NODE = 8 (comentarios HTML)
```

### 1.2. Navegación por el árbol del DOM

Una vez que tenemos acceso al DOM, necesitamos poder movernos por él para encontrar elementos relacionados. JavaScript proporciona propiedades que nos permiten navegar por las relaciones familiares entre nodos: padres, hijos y hermanos.

**Navegación por elementos (recomendado):**
```javascript
const elemento = document.querySelector('div');

elemento.parentElement           // Elemento padre
elemento.children                // Hijos (solo elementos)
elemento.firstElementChild       // Primer hijo elemento
elemento.nextElementSibling      // Hermano siguiente
```

**Recomendación:** Usar las propiedades de elementos (`children`, `nextElementSibling`) porque ignoran los nodos de texto causados por espacios en blanco en el HTML.

---

## 2. Selección de Elementos

### Introducción

Antes de poder modificar cualquier elemento de la página, necesitamos poder localizarlo. JavaScript nos proporciona varios métodos para seleccionar elementos del DOM, cada uno con sus propias ventajas y casos de uso específicos.

Los métodos clásicos (`getElementById`, `getElementsByClassName`) son más rápidos pero limitados en su capacidad de búsqueda. Los métodos modernos (`querySelector`, `querySelectorAll`) ofrecen máxima flexibilidad al permitir usar cualquier selector CSS válido, aunque con un pequeño coste de rendimiento. La clave está en saber cuándo usar cada uno: no siempre el método más moderno es el más apropiado.

Un concepto importante aquí son las "colecciones vivas" vs "estáticas": algunas colecciones se actualizan automáticamente cuando el DOM cambia, mientras que otras son capturas fijas del momento en que se ejecutó la consulta. Entender esta diferencia evitará comportamientos inesperados en nuestro código.

### 2.1. Métodos clásicos

Los métodos clásicos de selección son funciones específicas para buscar elementos por su ID, clase o etiqueta HTML. Aunque más limitados que los selectores modernos, siguen siendo útiles por su velocidad y simplicidad en búsquedas básicas.

```javascript
// getElementById: Más rápido, busca por ID único
const header = document.getElementById('main-header');

// getElementsByClassName: Devuelve colección viva
const tarjetas = document.getElementsByClassName('card');

// getElementsByTagName: Busca por etiqueta HTML
const parrafos = document.getElementsByTagName('p');
```

### 2.2. Selectores modernos

Los selectores modernos utilizan la misma sintaxis que CSS, permitiendo búsquedas complejas en una sola línea. `querySelector` devuelve el primer elemento coincidente, mientras que `querySelectorAll` devuelve todos los elementos que cumplan el criterio.

```javascript
// querySelector: devuelve el PRIMER elemento que coincida
const primerBoton = document.querySelector('.btn');
const enlace = document.querySelector('nav a.active');

// querySelectorAll: devuelve TODOS los elementos (NodeList)
const todosBotones = document.querySelectorAll('.btn');

todosBotones.forEach(boton => {
  console.log(boton.textContent);
});
```

### 2.3. ¿Cuándo usar cada método?

Elegir el método correcto depende del contexto: la complejidad de la búsqueda, si necesitamos una colección viva o estática, y consideraciones de rendimiento cuando trabajamos con muchos elementos.

| Método | Cuándo usar |
|--------|-------------|
| getElementById | Buscar por ID único, máxima velocidad |
| getElementsByClassName | Necesitas colección que se actualice automáticamente |
| querySelector | Selectores CSS complejos, un solo elemento |
| querySelectorAll | Selectores CSS complejos, múltiples elementos |

**Optimización importante:**
```javascript
// ✅ BIEN: Cachear la selección cuando se usa múltiples veces
const container = document.querySelector('.container');
for (let i = 0; i < 100; i++) {
  container.appendChild(elemento);
}
```

---

## 3. Creación y Modificación de Elementos

### Introducción

La verdadera potencia de JavaScript en el navegador surge cuando podemos crear y modificar elementos dinámicamente. Esto nos permite construir interfaces que responden a las acciones del usuario, cargar contenido desde APIs, y actualizar la página sin necesidad de recargarla completamente.

Existen dos filosofías principales para añadir contenido al DOM: crear elementos paso a paso usando `createElement` (más control, más seguro, más verboso) o insertar HTML como texto usando `innerHTML` (más rápido de escribir, potencialmente peligroso). La elección correcta depende del contexto y, especialmente, de si estamos trabajando con datos que provienen de usuarios.

Un aspecto crítico es el rendimiento: cada vez que modificamos el DOM visible, el navegador debe recalcular estilos y redibujar partes de la página. Por ello, aprenderemos técnicas para minimizar estas operaciones costosas, construyendo estructuras completas en memoria antes de insertarlas. Esta diferencia puede significar que una operación tarde 10 milisegundos en lugar de 1000.

También abordaremos la seguridad: cuando trabajamos con contenido que proviene de usuarios, un método incorrecto puede permitir ataques XSS (Cross-Site Scripting) donde código malicioso se ejecuta en el navegador de otros usuarios.

### 3.1. Creación de elementos

El método `createElement` permite construir nuevos elementos HTML programáticamente, pieza por pieza. Los elementos creados existen en memoria hasta que los insertamos explícitamente en el DOM, lo que nos da total control sobre su configuración antes de que sean visibles.

```javascript
// createElement: Crear elemento en memoria
const div = document.createElement('div');
div.className = 'card';
div.textContent = 'Contenido';

// Crear estructura compleja
const article = document.createElement('article');
const titulo = document.createElement('h3');
titulo.textContent = 'Título del artículo';
article.appendChild(titulo);
```

**DocumentFragment para mejor rendimiento:**

Cuando necesitamos añadir muchos elementos al DOM, `DocumentFragment` actúa como un contenedor temporal que nos permite construir toda la estructura en memoria y luego insertarla de una sola vez, minimizando los costosos recálculos del navegador.

```javascript
// ✅ Un solo reflow
const fragmento = document.createDocumentFragment();

for (let i = 0; i < 100; i++) {
  const li = document.createElement('li');
  li.textContent = `Item ${i}`;
  fragmento.appendChild(li);
}

lista.appendChild(fragmento);
```

### 3.2. Inserción en el DOM

Una vez creados los elementos, necesitamos insertarlos en el documento. Los métodos modernos como `append`, `prepend`, `before` y `after` simplifican esta tarea con nombres intuitivos que indican exactamente dónde se insertará el contenido.

```javascript
const elemento = document.createElement('div');
const referencia = document.querySelector('#punto');

// Métodos modernos
referencia.append(elemento);      // Al final
referencia.prepend(elemento);     // Al principio
referencia.before(elemento);      // Antes (hermano)
referencia.after(elemento);       // Después (hermano)
```

### 3.3. Modificación de contenido

Para cambiar el contenido de elementos existentes, tenemos principalmente dos opciones: `textContent` que trata todo como texto plano (seguro), e `innerHTML` que interpreta HTML (potencialmente peligroso). La elección correcta es crucial para la seguridad de nuestra aplicación.

```javascript
const div = document.querySelector('div');

// textContent: Solo texto, SEGURO con datos de usuario
div.textContent = 'Texto del usuario';

// innerHTML: Interpreta HTML, PELIGROSO con datos de usuario
div.innerHTML = '<strong>Contenido confiable</strong>';
```

**Regla de seguridad:**
```javascript
// ❌ NUNCA con datos de usuario
div.innerHTML = datosUsuario;

// ✅ SIEMPRE con datos de usuario
div.textContent = datosUsuario;
```

### 3.4. Clonación de elementos

La clonación nos permite duplicar elementos existentes, útil cuando tenemos una estructura base que queremos repetir múltiples veces con pequeñas variaciones. El método `cloneNode` puede hacer copias superficiales o profundas según nuestras necesidades.

```javascript
const original = document.querySelector('.modelo');

// Clonar con todos sus descendientes
const clon = original.cloneNode(true);

// ⚠️ Los eventos NO se clonan, hay que añadirlos de nuevo
```

**Patrón template:**

El elemento `<template>` de HTML5 está diseñado específicamente para contener fragmentos HTML que se clonarán múltiples veces, ofreciendo una forma limpia de separar estructura de lógica.

```html
<template id="tarjeta-template">
  <div class="tarjeta">
    <h3></h3>
    <p></p>
  </div>
</template>
```

```javascript
const template = document.querySelector('#tarjeta-template');
const clon = document.importNode(template.content, true);
clon.querySelector('h3').textContent = 'Título';
```

### 3.5. Eliminación de elementos

Eliminar elementos del DOM es tan importante como añadirlos. El método moderno `remove()` simplifica esta operación eliminando la necesidad de referenciar al elemento padre.

```javascript
// Método moderno
elemento.remove();
```

---

## 4. Atributos y Propiedades

### Introducción

Los elementos HTML tienen dos formas de almacenar información: atributos (lo que escribimos en el HTML) y propiedades (el estado actual en JavaScript). Aunque a menudo parecen lo mismo, entender su diferencia es crucial, especialmente en formularios donde el valor inicial puede ser diferente del valor actual que el usuario ha introducido.

Los atributos `data-*` merecen mención especial: son el mecanismo estándar para almacenar información personalizada en elementos HTML. Con ellos podemos guardar IDs de base de datos, configuraciones de componentes, o cualquier metadata que necesitemos sin contaminar los atributos estándar de HTML. JavaScript nos da acceso cómodo a través de la API `dataset`, convirtiendo automáticamente entre el formato kebab-case de HTML y camelCase de JavaScript.

Esta capacidad de asociar datos a elementos es fundamental para crear aplicaciones interactivas donde cada elemento "sabe" qué información representa.

### 4.1. Diferencia entre atributos y propiedades

Los atributos son valores que se escriben en el HTML y representan el estado inicial, mientras que las propiedades son las características del objeto JavaScript que reflejan el estado actual del elemento. Esta distinción es especialmente importante en elementos de formulario.

```javascript
const input = document.querySelector('input');

// PROPIEDAD: estado actual
console.log(input.value); // Lo que el usuario escribió

// ATRIBUTO: valor inicial del HTML
console.log(input.getAttribute('value')); // Valor original
```

### 4.2. Métodos de atributos

JavaScript proporciona métodos estándar para leer, escribir, verificar y eliminar atributos HTML de cualquier elemento. Estos métodos son especialmente útiles para atributos personalizados o cuando necesitamos acceder al valor original del HTML.

```javascript
elemento.getAttribute('id');
elemento.setAttribute('data-estado', 'activo');
elemento.hasAttribute('data-estado');
elemento.removeAttribute('data-estado');
```

### 4.3. Dataset API (data-* attributes)

Los atributos `data-*` son el estándar HTML5 para almacenar información personalizada. La propiedad `dataset` nos da acceso cómodo a estos atributos, convirtiendo automáticamente los nombres de kebab-case a camelCase y viceversa.

```html
<div class="producto" 
     data-id="123" 
     data-precio="29.99" 
     data-en-stock="true">
</div>
```

```javascript
const producto = document.querySelector('.producto');

// Leer (conversión automática a camelCase)
console.log(producto.dataset.id);       // "123"
console.log(producto.dataset.enStock);  // "true"

// Escribir
producto.dataset.descuento = "10";

// ⚠️ Todos los valores son strings
const precio = Number(producto.dataset.precio);
```

---

## 5. Gestión de Clases CSS

### Introducción

La forma más limpia y mantenible de cambiar la apariencia de elementos es mediante clases CSS. En lugar de modificar estilos individuales desde JavaScript, definimos clases en CSS con todos sus estilos asociados, y simplemente añadimos o quitamos esas clases según sea necesario.

La API `classList` hace esto extremadamente sencillo, ofreciendo métodos intuitivos para todas las operaciones comunes: añadir, quitar, alternar (toggle), verificar existencia. El método `toggle` es especialmente útil con su segundo parámetro opcional que permite hacer la operación condicional en una sola línea.

Este enfoque de "separación de responsabilidades" (CSS para estilos, JavaScript para comportamiento) hace el código más legible, facilita el trabajo en equipo, y permite que diseñadores y desarrolladores trabajen de forma más independiente.

### 5.1. classList

La propiedad `classList` proporciona una API moderna y cómoda para manipular las clases CSS de un elemento, con métodos que cubren todas las operaciones habituales de forma clara y concisa.

```javascript
const elemento = document.querySelector('div');

elemento.classList.add('activo');
elemento.classList.remove('activo');
elemento.classList.toggle('activo');
elemento.classList.contains('activo');
```

### 5.2. Patrones comunes

Ciertos patrones de uso de clases aparecen repetidamente en aplicaciones web: elementos mutuamente exclusivos (solo uno activo), estados condicionales, y toggles simples son los más frecuentes.

**Estado activo único:**
```javascript
function activarTab(tabClickeado) {
  document.querySelectorAll('.tab').forEach(tab => {
    tab.classList.remove('activo');
  });
  tabClickeado.classList.add('activo');
}
```

**Estados condicionales:**
```javascript
input.classList.toggle('valido', input.value.length >= 3);
```

### 5.3. Mejores prácticas

La regla general es usar clases para cualquier cambio de estilo predefinido, reservando los estilos inline solo para valores que se calculan dinámicamente y no pueden conocerse de antemano.

```javascript
// ✅ Clases para estados
elemento.classList.add('error');

// ❌ Estilos inline para estados
elemento.style.color = 'red';
```

---

## 6. Manipulación de Estilos CSS

### Introducción

Aunque usar clases CSS es la forma preferida de cambiar estilos, hay situaciones donde necesitamos establecer valores calculados dinámicamente: posiciones en animaciones, tamaños basados en datos del usuario, colores personalizados elegidos por el usuario, etc.

Para estos casos, JavaScript nos da acceso directo a los estilos mediante la propiedad `style` (para establecer valores) y `getComputedStyle` (para leer los valores finales aplicados). Es importante entender que `style` solo accede a estilos inline, por lo que no sirve para leer estilos definidos en CSS.

Las variables CSS (custom properties) representan un punto intermedio ideal: definimos variables en CSS y las modificamos desde JavaScript, combinando lo mejor de ambos mundos. Un cambio en una variable puede afectar a múltiples elementos simultáneamente, lo que las hace perfectas para sistemas de temas o personalización global.

### 6.1. La propiedad style

La propiedad `style` permite establecer estilos CSS inline directamente desde JavaScript. Solo puede leer estilos que se hayan establecido inline, no los definidos en hojas de estilo CSS.

```javascript
// Establecer estilos inline (propiedades en camelCase)
elemento.style.color = 'red';
elemento.style.backgroundColor = 'yellow';

// ⚠️ Solo lee estilos inline, no de CSS
console.log(elemento.style.color);
```

### 6.2. getComputedStyle

Para leer los estilos finales que el navegador ha aplicado a un elemento (después de procesar todas las hojas de estilo CSS), usamos `getComputedStyle`, que devuelve los valores computados de todas las propiedades.

```javascript
// Leer estilos finales aplicados
const estilos = getComputedStyle(elemento);
console.log(estilos.color);      // "rgb(255, 0, 0)"
console.log(estilos.fontSize);   // "20px"
```

### 6.3. Cuándo usar cada método

La decisión entre estilos inline y clases CSS debe basarse en si el valor es dinámico (calculado) o estático (predefinido). Los valores dinámicos justifican estilos inline, mientras que estados predefinidos deben usar clases.

```javascript
// ✅ Inline para valores dinámicos
elemento.style.width = `${anchoCalculado}px`;

// ✅ Clases para estados predefinidos
elemento.classList.add('activo');
```

### 6.4. CSS Variables (Custom Properties)

Las variables CSS son propiedades personalizadas que podemos definir en CSS y modificar desde JavaScript, permitiendo cambios globales coordinados con un solo comando. Son ideales para sistemas de temas y personalización.

```css
:root {
  --color-primario: #3498db;
  --espaciado: 16px;
}

.boton {
  background-color: var(--color-primario);
}
```

```javascript
// Cambiar variable global
document.documentElement.style.setProperty('--color-primario', '#e74c3c');

// Leer variable
const estilos = getComputedStyle(document.documentElement);
const color = estilos.getPropertyValue('--color-primario');
```

---

## 7. Propiedades Útiles de Elementos

### Introducción

Los elementos del DOM exponen una gran cantidad de información útil sobre sí mismos: sus dimensiones, posición en la página, cuánto se ha scrolleado su contenido, etc. Estas propiedades son fundamentales para crear interacciones avanzadas: detectar si un elemento es visible en la pantalla, posicionar tooltips correctamente, crear efectos parallax, implementar scroll infinito, etc.

Es importante distinguir entre las diferentes medidas: `clientWidth` excluye bordes y scrollbars, `offsetWidth` incluye bordes pero no márgenes, `scrollWidth` representa el tamaño total del contenido aunque no sea visible. Cada una tiene su caso de uso específico según qué queramos medir exactamente.

### 7.1. Dimensiones y posición

Los elementos proporcionan varias propiedades para conocer su tamaño y ubicación, cada una midiendo aspectos ligeramente diferentes según si incluyen bordes, padding, scroll, etc.

```javascript
const elemento = document.querySelector('div');

// Dimensiones
elemento.clientWidth    // Ancho sin bordes
elemento.offsetWidth    // Ancho total (incluye padding y borde)
elemento.scrollHeight   // Alto del contenido total

// Posición
elemento.offsetTop      // Distancia al offsetParent
elemento.offsetLeft

// Scroll
elemento.scrollTop      // Píxeles scrolleados verticalmente
```

### 7.2. Información del elemento

Además de dimensiones, los elementos exponen información básica sobre su identidad y características como el tipo de etiqueta HTML, su ID y sus clases.

```javascript
elemento.tagName        // "DIV" (siempre mayúsculas)
elemento.id
elemento.className
```

---

## Actividades Prácticas

### Actividad 1: Generador de Lista Dinámica
Crear una función que genere una lista HTML a partir de un array de objetos con estructura compleja.

### Actividad 2: Sistema de Pestañas
Implementar tabs donde solo una pestaña esté activa a la vez, gestionando clases y contenido.

### Actividad 3: Filtro de Productos
Sistema de filtrado usando `data-*` attributes para categoría, precio y disponibilidad.

### Actividad 4: Constructor de Temas
Interfaz para personalizar colores y tamaños usando CSS variables, con preview en tiempo real.

---

## Recursos

**Documentación:**
- [LenguajeJS - DOM](https://lenguajejs.com/dom/)
- [MDN - Document Object Model](https://developer.mozilla.org/es/docs/Web/API/Document_Object_Model)

**Herramientas:**
- Chrome DevTools - Panel Elements
