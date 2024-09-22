<h2 class="r-fit-text" style="text-align: center"> Desarrollo Web en Entorno Cliente </h2>

<img class="r-stretch" style="text-align: center" src="assets/DWEC-cover.png">

---

## Construyendo Interfaces de Usuario Dinámicas

<img class="r-stretch" style="text-align: center" src="assets/ud5/interfaces-dinamicas.png">

---

<img class="r-stretch" style="text-align: center" src="assets/ud5/react.png">

---

## Introducción a React

- Lanzado en 2013 por Facebook<!-- \+ .element: class="fragment" -->

- Mantenido por la comunidad global<!-- \+ .element: class="fragment" -->

- Librería, no un framework<!-- \+ .element: class="fragment" -->

Note:
React es una de las tecnologías web más revolucionarias. Lanzada por Facebook en 2013, es mantenida tanto por ellos como por una extensa comunidad de código abierto.


## 

- Fácil de implementar

- Centrado en interfaces gráficas<!-- \+ .element: class="fragment" -->

Note:
A diferencia de muchas tecnologías web, React es una librería enfocada en la interfaz gráfica del usuario, fácil de integrar en varios desarrollos y que consume datos a través de API, generalmente REST.


## Reactividad en React

- Interfaz de usuario reactiva<!-- \+ .element: class="fragment" -->

- Actualización automática del UI<!-- \+ .element: class="fragment" -->

- Analogía con fórmulas de Excel<!-- \+ .element: class="fragment" -->

Note:
React debe su nombre a la capacidad de crear interfaces de usuario reactivas, que actualizan todo el UI de forma automática y en cadena, similar a cómo funcionan las fórmulas en Excel.

---

## JSX: El Corazón de React

- Sintaxis JSX: JavaScript XML<!-- \+ .element: class="fragment" -->

- Mezcla de XML y HTML<!-- \+ .element: class="fragment" -->

- Construcción rápida de elementos HTML<!-- \+ .element: class="fragment" -->

Note:
JSX, una mezcla de XML y HTML, es la sintaxis propia de React que facilita la creación rápida y sencilla de elementos HTML.


## Transpilación en React

- Uso de JSX no interpretable directamente<!-- \+ .element: class="fragment" -->

- Transpilación a JavaScript nativo<!-- \+ .element: class="fragment" -->

- Herramientas como Webpack y Babel<!-- \+ .element: class="fragment" -->

Note:
Dado que las aplicaciones JSX no son interpretables directamente por navegadores, se utiliza un proceso de transpilación (a través de herramientas como Webpack y Babel) para convertir el código JSX a JavaScript nativo.


## 
<img class="r-stretch" style="text-align: center" src="assets/ud5/webpack.png">

---

## React y el Backend

- React para UI, backend separado<!-- \+ .element: class="fragment" -->

- Integración con diversas API<!-- \+ .element: class="fragment" -->

- Uso común con NodeJS<!-- \+ .element: class="fragment" -->

Note:
React se usa exclusivamente para la creación de interfaces gráficas, dejando el desarrollo del backend a otras tecnologías, lo que lo hace extremadamente portátil y comúnmente integrado con NodeJS para el desarrollo del API.


## 
<img class="r-stretch" style="text-align: center" src="assets/ud5/back.png">

---

## React y Web Components

- Concepto de Web Components<!-- \+ .element: class="fragment" -->

- Creación de etiquetas HTML personalizadas<!-- \+ .element: class="fragment" -->

- Ejemplo de etiqueta `<login>`
<!-- \+ .element: class="fragment" -->

Note:
React utiliza el concepto de Web Components, permitiendo la creación de etiquetas HTML personalizadas, como `<login>`, para representar componentes reutilizables en la interfaz de usuario.


## Ejemplo de Aplicación React

- Componentes como NavBar y Login<!-- \+ .element: class="fragment" -->

- Uso de etiquetas no estándar HTML<!-- \+ .element: class="fragment" -->

- Reutilización de componentes<!-- \+ .element: class="fragment" -->

Note:
Un ejemplo de aplicación en React muestra el uso de componentes reutilizables como `NavBar` y `Login`, que son etiquetas no estándar de HTML pero fundamentales en React.


## 
<img class="r-stretch" style="text-align: center" src="assets/ud5/components.png">

---

## React y el Shadow DOM

- React opera en el cliente<!-- \+ .element: class="fragment" -->

- Uso del Shadow DOM para eficiencia<!-- \+ .element: class="fragment" -->

- Proceso de reconciliación con DOM real<!-- \+ .element: class="fragment" -->

Note:
React utiliza el Shadow DOM, una versión propia del DOM, para realizar cambios de forma eficiente antes de actualizar el DOM real del navegador, un proceso conocido como reconciliación.


## 
<img class="r-stretch" style="text-align: center" src="assets/ud5/dom.png">


## 
<img class="r-stretch" style="text-align: center" src="assets/ud5/dom-2.png">

---

## Estados en React

- Componentes con estados propios<!-- \+ .element: class="fragment" -->

- Ejemplo: Formularios en diferentes estados<!-- \+ .element: class="fragment" -->

- Actualizaciones reactivas en la UI<!-- \+ .element: class="fragment" -->

Note:
Los estados en React son fundamentales, permitiendo a los componentes mostrar datos y formatos diferentes. Un cambio de estado implica un proceso de reconciliación para actualizar la UI.


## 
<img class="r-stretch" style="text-align: center" src="assets/ud5/dom-3.png">

---

## Despliegue de Aplicaciones React

- Montaje en el elemento root<!-- \+ .element: class="fragment" -->

- Bundle.js contiene la aplicación<!-- \+ .element: class="fragment" -->

- Webpack para transpilación y empaquetado<!-- \+ .element: class="fragment" -->

Note:
En el despliegue, React monta la aplicación en un elemento `root` en HTML, utilizando `bundle.js` que contiene toda la aplicación, generada por Webpack tras la transpilación.


## 

~~~
<!DOCTYPE html>
<html>
  <head>
  </head>
  <body>
    <div id="root"></div>
    <script type="text/javascript" src="/bundle.js"></script>
  </body>
</html> 
~~~

---

## React en la Práctica

Note:
Presentar un ejemplo práctico, como un pequeño componente o aplicación, explicando el proceso de desarrollo paso a paso, desde la creación del componente hasta la gestión del estado y la renderización.

---

## Recursos y Comunidad

- [Documentación y tutoriales](https://reactjs.org/)<!-- \+ .element: class="fragment" -->

Note:
Proporcionar recursos útiles para aprender más sobre React, como la documentación oficial, tutoriales online y mencionar comunidades activas en foros y grupos de Discord o GitHub.

---

## React en el Mundo Real: Uso y Demanda Laboral

- Popularidad y adopción<!-- \+ .element: class="fragment" -->

- Demanda laboral<!-- \+ .element: class="fragment" -->

- Empresas y casos de éxito<!-- \+ .element: class="fragment" -->

- Beneficios del aprendizaje<!-- \+ .element: class="fragment" -->

<small>Fuente: https://www.codeinwp.com/blog/angular-vs-vue-vs-react/</small><!-- \+ .element: class="fragment" -->

Note:
Mostrar estadísticas sobre la popularidad de React y su demanda en el mercado laboral. Discutir ejemplos de grandes empresas que utilizan React y hablar sobre los beneficios de aprender esta tecnología en términos de oportunidades de carrera.

---

<!-- .slide: data-background-video="assets/searching.mp4" data-background-opacity="0.6" data-background-video-loop data-background-video-muted-->

## ¿Dudas?
