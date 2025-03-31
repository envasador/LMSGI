---
hide:
  - navigation
---

# **UD4 Tema: Introducción a JavaScript Moderno**

## **Introducción**
JavaScript es un lenguaje de programación diseñado para añadir interactividad y dinamismo a las páginas web. Se utiliza tanto en el lado del cliente (navegador) como en el lado del servidor (con tecnologías como Node.js). Con el tiempo, JavaScript ha evolucionado significativamente, convirtiéndose en un lenguaje potente y versátil.

#### **Historia y evolución**
- 1995: Creación de JavaScript por Brendan Eich en Netscape.
- ECMAScript 2015 (ES6): Introducción de características modernas como `let`, `const`, clases y funciones flecha.

#### **Características de los lenguajes de script de cliente**
- **Ejecución en el cliente:** El código se ejecuta en el navegador del usuario, reduciendo la carga en el servidor.
- **Interactividad:** Permite respuestas dinámicas a las acciones del usuario.
- **Integración con HTML y CSS:** JavaScript trabaja junto con estos lenguajes para crear experiencias web ricas.
- **Sintaxis flexible:** Soporta múltiples paradigmas como programación orientada a objetos y funcional.
- **Estándares:** ECMAScript (ES) establece las reglas y funcionalidades que definen el lenguaje JavaScript.

#### **Integración en una página web**
Podemos incluir JavaScript en nuestras páginas HTML de varias maneras:

```html
<script>
  console.log('Hola desde JavaScript');
</script>
```
O vinculando un archivo externo:
```html
<script src="app.js" defer></script>
```

Recomendación: Utiliza siempre `defer` o `async` para optimizar la carga del script.


---

## **Variables**
Las variables son contenedores para almacenar datos. JavaScript moderno ofrece tres formas principales de declararlas:

- `let`: Para valores que pueden cambiar.
- `const`: Para valores constantes (que no cambian).
- `var`: Obsoleto; se recomienda evitarlo debido a problemas con el alcance.

#### **Ejemplo:**
```javascript
let nombre = "Juan";
const edad = 30;
// edad = 31; // Esto causará un error.
```

#### **Scope y Hoisting**
`let` y `const` tienen un alcance de bloque, mientras que `var` ignora los bloques. Esto puede causar errores inesperados si no se usa con cuidado.
```javascript
if (true) {
  let mensaje = "Hola";
  console.log(mensaje); // Hola
}
// console.log(mensaje); // Error: no está definido
```

**Mejor práctica:** Usa siempre `const` si el valor no cambia y `let` para valores variables.

---

## **Strings**
Los strings representan texto. Se pueden definir usando comillas simples (`'`), dobles (`"`), o plantillas literales (`` ` ``).

#### **Características importantes:**
1. **Interpolación:**
   ```javascript
   const nombre = "Ana";
   console.log(`Hola, ${nombre}!`); // Hola, Ana!
   ```

2. **Métodos útiles:**
   ```javascript
   let texto = " JavaScript moderno ";
   console.log(texto.trim().toUpperCase()); // "JAVASCRIPT MODERNO"
   ```

**Mejor práctica:** Usa plantillas literales para concatenar strings y mejorar la legibilidad del código.

---

## **Números**
JavaScript maneja números de punto flotante por defecto. Puedes realizar operaciones matemáticas básicas y avanzadas usando el objeto `Math`.

#### **Ejemplo:**
```javascript
console.log(10 + 5); // 15
console.log(Math.pow(2, 3)); // 8
console.log(Math.random()); // Número aleatorio entre 0 y 1
```

**Mejor práctica:** Usa bibliotecas como `BigInt` o `Decimal.js` para cálculos de alta precisión.

---

## **Operadores**
Los operadores permiten realizar cálculos y evaluaciones lógicas.

#### **Ejemplo:**
1. **Aritméticos:**
   ```javascript
   console.log(10 % 3); // 1 (módulo)
   ```
2. **Lógicos:**
   ```javascript
   console.log(10 > 5 && 5 < 8); // true
   ```

---

## **Booleans**
Los valores booleanos pueden ser `true` o `false`. También existen valores "truthy" (considerados verdaderos) y "falsy" (considerados falsos).

#### **Ejemplo:**
```javascript
console.log(Boolean("")); // false
console.log(Boolean(42)); // true
```

**Mejor práctica:** Siempre verifica explícitamente las condiciones para evitar errores con valores "truthy" y "falsy".


## Valores Truthy y Falsy

En JavaScript, cada valor tiene una propiedad booleana inherente, que se considera truthy (verdadera) o falsy (falsa) cuando se evalúa en un contexto booleano.

### Valores Falsy

Los siguientes valores son siempre considerados falsy en JavaScript:

- `false`
- `0` (cero)
- `-0` (cero negativo)
- `0n` (BigInt cero)
- `''`, `""`, ``` (cadenas vacías)
- `null`
- `undefined`
- `NaN`
- `document.all`[3]

## Valores Truthy

Todos los demás valores son considerados truthy. Algunos ejemplos incluyen:

- Números distintos de cero (positivos y negativos)
- Cadenas no vacías
- Objetos y arrays (incluso si están vacíos)
- Funciones
- `true`
- Fechas

### Evaluación en Contextos Booleanos

JavaScript utiliza la coerción de tipos en contextos booleanos[5]. Esto significa que los valores se convierten automáticamente a `true` o `false` cuando se utilizan en operaciones que requieren un booleano, como en las declaraciones `if` o en operadores lógicos.

Por ejemplo:

```
if (42) {
    console.log("Este código se ejecutará porque 42 es truthy");
}

if ("") {
    console.log("Este código no se ejecutará porque una cadena vacía es falsy");
}
```

### Aplicaciones Prácticas

Entender los conceptos de truthy y falsy es crucial para escribir código JavaScript eficiente y evitar errores sutiles. Por ejemplo, se pueden utilizar para asignar valores predeterminados o para realizar comprobaciones condicionales de manera concisa[1].

```
let username = "";
let displayName = username || "Invitado";
console.log(displayName); // Imprimirá "Invitado"
```

En este caso, si `username` es falsy (una cadena vacía), se asignará "Invitado" a `displayName`.


---

## **Objetos**
Un objeto es una colección de propiedades clave-valor.

#### **Creación y manipulación:**
```javascript
const persona = { nombre: "Luis", edad: 25 };
console.log(persona.nombre); // Luis
persona.edad = 26; // Modificación
```

**Mejor práctica:** Usa la desestructuración para trabajar con objetos:
```javascript
const { nombre, edad } = persona;
console.log(nombre); // Luis
```

---

## **Arrays**
Los arrays son listas ordenadas de elementos.

#### **Ejemplo:**
```javascript
let numeros = [1, 2, 3];
numeros.push(4);
console.log(numeros); // [1, 2, 3, 4]
```

**Métodos útiles:**
- `map`: Para transformar elementos.
- `filter`: Para filtrar elementos.
- `reduce`: Para calcular un resultado acumulado.

---

## **Fechas**
El objeto `Date` maneja fechas y horas.

#### **Ejemplo:**
```javascript
const ahora = new Date();
console.log(ahora.getFullYear()); // 2024
```

**Mejor práctica:** Usa bibliotecas como `date-fns` o `moment` para trabajar con fechas más complejas.

---

## **Estructuras de control**
Permiten tomar decisiones o repetir acciones.

#### **Ejemplo:**
```javascript
if (edad >= 18) {
  console.log("Mayor de edad");
} else {
  console.log("Menor de edad");
}
```

**Mejor práctica:** Usa `switch` o un objeto de configuración para manejar múltiples condiciones.

---

## **Iteradores**
Permiten recorrer arrays u objetos iterables.

#### **Ejemplo:**
```javascript
let frutas = ["manzana", "pera", "uva"];
frutas.forEach(fruta => console.log(fruta));
```

---

## **Funciones**
Las funciones encapsulan lógica reutilizable.

#### **Ejemplo:**
```javascript
const saludar = (nombre) => `Hola, ${nombre}!`;
console.log(saludar("Marta"));
```

**Mejor práctica:** Usa funciones puras que no dependan del estado externo.

---

## **Métodos de Arrays**
Métodos clave para trabajar con arrays:

#### **Ejemplo:**
```javascript
const numeros = [1, 2, 3, 4];
const dobles = numeros.map(num => num * 2);
console.log(dobles); // [2, 4, 6, 8]
```

---

## **Programación Orientada a Objetos (POO)**
La POO en JavaScript se basa en clases y objetos.

#### **Ejemplo:**
```javascript
class Animal {
  constructor(nombre) {
    this.nombre = nombre;
  }
  saludar() {
    return `Hola, soy ${this.nombre}`;
  }
}

class Perro extends Animal {
  ladrar() {
    return "Guau!";
  }
}

const miPerro = new Perro("Max");
console.log(miPerro.saludar()); // Hola, soy Max
```

---

## **DOM (Document Object Model)**
El DOM es una representación estructurada del documento HTML o XML cargado en el navegador. Permite interactuar y manipular elementos, estilos y contenido de la página web.

#### **Selección y acceso a elementos**
Podemos seleccionar elementos en el DOM utilizando métodos como:
- `getElementById`: Selecciona un elemento por su ID.
- `querySelector`: Selecciona el primer elemento que coincide con un selector CSS.
- `querySelectorAll`: Selecciona todos los elementos que coinciden con un selector CSS.

**Ejemplo:**
```javascript
const titulo = document.getElementById("titulo");
const botones = document.querySelectorAll("button");
console.log(titulo.textContent); // Muestra el texto del elemento con ID "titulo"
```

#### **Creación y modificación de elementos**
Podemos crear nuevos elementos y añadirlos al DOM, o modificar los existentes.

**Ejemplo:**
```javascript
// Crear un nuevo párrafo\const nuevoParrafo = document.createElement("p");
nuevoParrafo.textContent = "Este es un párrafo dinámico.";

// Añadirlo al cuerpo del documento
document.body.appendChild(nuevoParrafo);

// Modificar un elemento existente
const titulo = document.querySelector("h1");
titulo.textContent = "Título actualizado";
```

**Mejor práctica:** Utiliza fragmentos de documento (`DocumentFragment`) para insertar múltiples elementos de manera eficiente.

#### **Eliminación de elementos**
Podemos eliminar elementos del DOM utilizando métodos como:
- `removeChild`: Elimina un elemento hijo de su nodo padre.
- `remove`: Elimina un elemento directamente.

**Ejemplo:**
```javascript
const elemento = document.querySelector("#elemento-a-eliminar");
elemento.remove();
```

#### **Manipulación de estilos**
El DOM permite modificar los estilos CSS de los elementos dinámicamente.

**Ejemplo:**
```javascript
const caja = document.querySelector(".caja");
caja.style.backgroundColor = "blue";
caja.style.color = "white";
```

**Mejor práctica:** Para múltiples cambios de estilo, utiliza clases CSS:
```javascript
caja.classList.add("nueva-clase");
caja.classList.remove("otra-clase");
```

---

## **Eventos**
Los eventos en JavaScript permiten ejecutar código en respuesta a acciones del usuario, como hacer clic en un botón, mover el ratón o cargar la página.

#### **Tipos de eventos comunes**
- `click`: Se activa cuando un usuario hace clic en un elemento.
- `mouseover`: Se activa cuando el puntero del ratón pasa sobre un elemento.
- `keyup`: Se activa cuando el usuario suelta una tecla.
- `submit`: Se activa al enviar un formulario.

#### **Manejo de eventos**
Podemos asignar eventos a elementos utilizando:
- `addEventListener`: Método recomendado, permite agregar múltiples manejadores a un mismo evento.

**Ejemplo:**
```javascript
const boton = document.querySelector("#mi-boton");

boton.addEventListener("click", () => {
  alert("¡Botón pulsado!");
});
```

#### **Delegación de eventos**
Es una técnica que asigna el evento a un contenedor común en lugar de a cada elemento individual. Es útil cuando los elementos se crean dinámicamente.

**Ejemplo:**
```javascript
const lista = document.querySelector("ul");

lista.addEventListener("click", (evento) => {
  if (evento.target.tagName === "LI") {
    console.log(`Elemento clicado: ${evento.target.textContent}`);
  }
});
```

**Mejor práctica:** Usa delegación de eventos para mejorar el rendimiento y reducir el número de manejadores de eventos en el DOM.

## Material de refuerzo y ampliación

Se recomienda la realización de los siguientes cursos de la [certificación algoritmos de javascript y estructuras de datos](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures-v8/) de freeCodeCamp.

* Learn Basic String and Array Methods by Building a Music Player
* Learn the Date Object by Building a Date Formatter
* Learn Advanced Array Methods by Building a Statistics Calculator
* Learn Basic OOP by Building a Shopping Cart
