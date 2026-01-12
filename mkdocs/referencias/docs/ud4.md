# UD2: Introducción a JavaScript y manipulación del DOM

---


# PARTE 1: FUNDAMENTOS DE JAVASCRIPT

## 1. ¿Qué es JavaScript?

JavaScript es un **lenguaje de programación interpretado** que se ejecuta principalmente en el navegador del usuario. Mientras HTML estructura el contenido y CSS lo estiliza, JavaScript añade **interactividad y comportamiento dinámico** a las páginas web.

### Características fundamentales

- **Lenguaje de alto nivel**: Su sintaxis es relativamente cercana al lenguaje humano, lo que facilita su aprendizaje.
- **Tipado dinámico**: No es necesario declarar el tipo de las variables; JavaScript lo infiere automáticamente.
- **Orientado a eventos**: Responde a acciones del usuario como clics, pulsaciones de teclas o movimientos del ratón.
- **Multiplataforma**: Funciona en cualquier navegador moderno sin necesidad de plugins adicionales.
- **Interpretado**: El navegador lee el código y lo ejecuta línea por línea, sin necesidad de compilación previa.

### JavaScript en el ecosistema web

```
┌─────────────────────────────────────────────────────────┐
│                    PÁGINA WEB                           │
├─────────────────────────────────────────────────────────┤
│  HTML          │  CSS           │  JavaScript           │
│  (Estructura)  │  (Presentación)│  (Comportamiento)     │
│                │                │                       │
│  - Contenido   │  - Colores     │  - Interactividad     │
│  - Semántica   │  - Tipografía  │  - Validación         │
│  - Jerarquía   │  - Layout      │  - Dinamismo          │
│  - Accesibilidad│ - Animaciones │  - Comunicación API   │
└─────────────────────────────────────────────────────────┘
```

---

## 2. La especificación ECMAScript

ECMAScript es la **especificación oficial** donde se definen todos los detalles de cómo debe funcionar JavaScript. Los navegadores (Chrome, Firefox, Edge, Safari) implementan motores de JavaScript que siguen esta especificación.

### Evolución histórica

| Versión | Año | Novedades principales |
|---------|-----|----------------------|
| ES1 | 1997 | Primera versión |
| ES3 | 1999 | Expresiones regulares, try/catch |
| ES5 | 2009 | Modo estricto, JSON, métodos de array |
| **ES6/ES2015** | 2015 | let/const, arrow functions, clases, promesas, módulos |
| ES2016 | 2016 | includes(), exponenciación (**) |
| ES2017 | 2017 | async/await, Object.entries() |
| ES2018+ | 2018+ | Spread en objetos, Promise.finally(), etc. |

> **Importante**: ES6 (2015) marcó un antes y un después. La mayoría del código moderno utiliza características de ES6+.

### Compatibilidad y Polyfills

No todos los navegadores soportan todas las características de JavaScript al mismo tiempo. Para verificar compatibilidad:

- **Can I Use**: https://caniuse.com/
- **Tabla Kangax**: https://kangax.github.io/compat-table/es6/

!!! tip "Consejo"
    Un **polyfill** es un fragmento de código que proporciona funcionalidad que el navegador no soporta nativamente.


---

## 3. La consola de JavaScript

La consola es la herramienta principal para **depurar** y **probar** código JavaScript.

### Acceso a la consola

- **Windows/Linux**: `Ctrl + Shift + J` (directo a consola) o `F12` → pestaña Console
- **Mac**: `Cmd + Option + J`

### Métodos principales de console

```javascript
// Mensaje informativo
console.log("Hola mundo");

// Advertencia (texto amarillo)
console.warn("Cuidado con este valor");

// Error (texto rojo)
console.error("Ha ocurrido un error");

// Información
console.info("Versión 1.0.0");

// Tabla (para arrays y objetos)
console.table([
    { nombre: "Ana", edad: 25 },
    { nombre: "Luis", edad: 30 }
]);

// Agrupar mensajes
console.group("Datos del usuario");
console.log("Nombre: Ana");
console.log("Edad: 25");
console.groupEnd();

// Medir tiempo de ejecución
console.time("proceso");
// ... código a medir ...
console.timeEnd("proceso");

// Limpiar consola
console.clear();
```

### Debugger

La palabra clave `debugger` detiene la ejecución del código y abre las DevTools:

```javascript
function calcular(a, b) {
    debugger; // La ejecución se pausa aquí
    return a + b;
}
```

---

## 4. Cómo incluir JavaScript en HTML

Existen tres formas de incluir JavaScript, ordenadas de **menos a más recomendable**:

### 4.1 JavaScript inline (evitar)

```html
<button onclick="alert('Hola')">Clic aquí</button>
```

❌ **Problemas**: Mezcla HTML con JavaScript, difícil de mantener, no reutilizable.

### 4.2 JavaScript interno (para pruebas rápidas)

```html
<!DOCTYPE html>
<html>
<head>
    <title>Mi página</title>
</head>
<body>
    <h1>Contenido</h1>
    
    <script>
        console.log("JavaScript interno");
    </script>
</body>
</html>
```

### 4.3 JavaScript externo (recomendado)

```html
<!DOCTYPE html>
<html>
<head>
    <title>Mi página</title>
</head>
<body>
    <h1>Contenido</h1>
    
    <script src="js/main.js" defer></script>
</body>
</html>
```

### Atributos defer y async

```html
<!-- Sin atributos: bloquea el HTML hasta que carga y ejecuta -->
<script src="app.js"></script>

<!-- defer: carga en paralelo, ejecuta después del HTML -->
<script src="app.js" defer></script>

<!-- async: carga en paralelo, ejecuta cuando está listo -->
<script src="app.js" async></script>
```

| Atributo | Carga | Ejecución | Orden garantizado |
|----------|-------|-----------|-------------------|
| (ninguno) | Bloquea | Inmediata | Sí |
| `defer` | Paralela | Al terminar HTML | Sí |
| `async` | Paralela | Cuando está listo | No |

> **Recomendación**: Usa `defer` para scripts que manipulan el DOM.

---

## 5. Variables y constantes

### Declaración de variables

JavaScript ofrece tres formas de declarar variables:

```javascript
// var - Forma antigua, evitar en código moderno
var antigua = "no usar";

// let - Variable que puede cambiar
let contador = 0;
contador = 1; // ✅ Permitido

// const - Constante, no puede reasignarse
const PI = 3.14159;
PI = 3.14; // ❌ Error: Assignment to constant variable
```

### Diferencias entre var, let y const

| Característica | var | let | const |
|---------------|-----|-----|-------|
| Ámbito | Función | Bloque | Bloque |
| Reasignable | Sí | Sí | No |
| Redeclarable | Sí | No | No |
| Hoisting | Sí (undefined) | Sí (TDZ*) | Sí (TDZ*) |

*TDZ = Temporal Dead Zone (no accesible antes de declaración)

```javascript
// Ámbito de bloque vs función
if (true) {
    var x = 1;   // Accesible fuera del if
    let y = 2;   // Solo dentro del if
    const z = 3; // Solo dentro del if
}
console.log(x); // 1
console.log(y); // Error: y is not defined
```

### Convenciones de nombres

```javascript
// camelCase para variables y funciones
let nombreCompleto = "Ana García";
function calcularTotal() { }

// UPPER_SNAKE_CASE para constantes "verdaderas"
const MAX_INTENTOS = 3;
const API_URL = "https://api.ejemplo.com";

// PascalCase para clases
class Usuario { }
```

> **Regla**: Usa `const` por defecto. Usa `let` solo cuando necesites reasignar.

---

## 6. Tipos de datos

JavaScript tiene **tipos primitivos** y **tipos complejos (objetos)**.

### 6.1 Tipos primitivos

```javascript
// String (cadenas de texto)
let texto = "Hola mundo";
let texto2 = 'También con comillas simples';
let plantilla = `Template literal con ${texto}`;

// Number (números)
let entero = 42;
let decimal = 3.14;
let negativo = -10;
let infinito = Infinity;
let noNumero = NaN; // Not a Number

// Boolean (verdadero/falso)
let activo = true;
let bloqueado = false;

// Undefined (variable declarada sin valor)
let sinValor;
console.log(sinValor); // undefined

// Null (ausencia intencional de valor)
let vacio = null;

// Symbol (identificador único, ES6)
let id = Symbol("descripcion");

// BigInt (enteros muy grandes, ES2020)
let grande = 9007199254740991n;
```

### 6.2 El operador typeof

```javascript
typeof "Hola"       // "string"
typeof 42           // "number"
typeof true         // "boolean"
typeof undefined    // "undefined"
typeof null         // "object" (bug histórico)
typeof Symbol()     // "symbol"
typeof {}           // "object"
typeof []           // "object"
typeof function(){} // "function"
```

### 6.3 Tipos complejos: Objetos

```javascript
// Objeto literal
let persona = {
    nombre: "Ana",
    edad: 25,
    activo: true,
    direccion: {
        calle: "Mayor",
        numero: 10
    }
};

// Acceso a propiedades
console.log(persona.nombre);           // "Ana"
console.log(persona["edad"]);          // 25
console.log(persona.direccion.calle);  // "Mayor"
```

### 6.4 Arrays (listas)

```javascript
// Declaración
let frutas = ["manzana", "pera", "naranja"];
let mixto = [1, "dos", true, null];

// Acceso por índice (empieza en 0)
console.log(frutas[0]); // "manzana"
console.log(frutas[2]); // "naranja"

// Propiedades y métodos comunes
frutas.length;           // 3
frutas.push("uva");      // Añade al final
frutas.pop();            // Elimina del final
frutas.unshift("kiwi");  // Añade al inicio
frutas.shift();          // Elimina del inicio
frutas.indexOf("pera");  // 1 (posición)
frutas.includes("pera"); // true
```

---

## 7. Operadores

### 7.1 Operadores aritméticos

```javascript
let a = 10, b = 3;

a + b   // 13  Suma
a - b   // 7   Resta
a * b   // 30  Multiplicación
a / b   // 3.333...  División
a % b   // 1   Módulo (resto)
a ** b  // 1000  Exponenciación (ES2016)

// Incremento y decremento
let c = 5;
c++;    // c = 6 (postincremento)
++c;    // c = 7 (preincremento)
c--;    // c = 6 (postdecremento)
```

### 7.2 Operadores de asignación

```javascript
let x = 10;

x += 5;  // x = x + 5  → 15
x -= 3;  // x = x - 3  → 12
x *= 2;  // x = x * 2  → 24
x /= 4;  // x = x / 4  → 6
x %= 4;  // x = x % 4  → 2
x **= 3; // x = x ** 3 → 8
```

### 7.3 Operadores de comparación

```javascript
// Igualdad débil (convierte tipos)
5 == "5"     // true ⚠️
0 == false   // true ⚠️
null == undefined // true ⚠️

// Igualdad estricta (compara valor Y tipo)
5 === "5"    // false ✅
0 === false  // false ✅

// Desigualdad
5 != "5"     // false (débil)
5 !== "5"    // true (estricta) ✅

// Comparación
5 > 3        // true
5 >= 5       // true
3 < 5        // true
3 <= 2       // false
```

> **Regla de oro**: Siempre usa `===` y `!==` para evitar errores de conversión de tipos.

### 7.4 Operadores lógicos

```javascript
// AND (&&) - Ambos deben ser verdaderos
true && true    // true
true && false   // false
false && true   // false

// OR (||) - Al menos uno verdadero
true || false   // true
false || true   // true
false || false  // false

// NOT (!) - Invierte el valor
!true           // false
!false          // true
!0              // true (0 es falsy)
!"texto"        // false (string no vacío es truthy)

// Nullish Coalescing (??) - ES2020
// Devuelve el lado derecho si el izquierdo es null o undefined
let nombre = null ?? "Anónimo";     // "Anónimo"
let edad = 0 ?? 18;                 // 0 (no es null/undefined)
let valor = undefined ?? "default"; // "default"
```

### 7.5 Valores Falsy y Truthy

```javascript
// Valores FALSY (se evalúan como false)
false
0
-0
""           // string vacío
null
undefined
NaN

// Todo lo demás es TRUTHY
"0"          // string con contenido
[]           // array vacío
{}           // objeto vacío
"false"      // string con contenido
```

---

## 8. Estructuras de control

### 8.1 Condicionales

```javascript
// if - else if - else
let edad = 18;

if (edad < 16) {
    console.log("Menor de edad");
} else if (edad < 18) {
    console.log("Casi mayor de edad");
} else {
    console.log("Mayor de edad");
}

// Operador ternario
let mensaje = edad >= 18 ? "Mayor" : "Menor";

// Switch
let dia = 3;
switch (dia) {
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miércoles");
        break;
    default:
        console.log("Otro día");
}
```

### 8.2 Bucles

```javascript
// for clásico
for (let i = 0; i < 5; i++) {
    console.log(i); // 0, 1, 2, 3, 4
}

// while
let contador = 0;
while (contador < 3) {
    console.log(contador);
    contador++;
}

// do...while (se ejecuta al menos una vez)
let num = 0;
do {
    console.log(num);
    num++;
} while (num < 3);

// for...of (para arrays - obtiene valores)
const colores = ["rojo", "verde", "azul"];
for (const color of colores) {
    console.log(color); // rojo, verde, azul
}

// for...in (para objetos - obtiene claves)
const persona = { nombre: "Ana", edad: 25 };
for (const clave in persona) {
    console.log(`${clave}: ${persona[clave]}`);
}
```

### 8.3 Control de bucles

```javascript
// break - sale del bucle
for (let i = 0; i < 10; i++) {
    if (i === 5) break;
    console.log(i); // 0, 1, 2, 3, 4
}

// continue - salta a la siguiente iteración
for (let i = 0; i < 5; i++) {
    if (i === 2) continue;
    console.log(i); // 0, 1, 3, 4
}
```

---

## 9. Funciones

Las funciones permiten **agrupar código reutilizable** bajo un nombre.

### 9.1 Declaración de funciones

```javascript
// Función declarada (function declaration)
function saludar(nombre) {
    return "Hola, " + nombre;
}

// Función expresada (function expression)
const despedir = function(nombre) {
    return "Adiós, " + nombre;
};

// Arrow function (ES6)
const duplicar = (numero) => {
    return numero * 2;
};

// Arrow function simplificada (una línea, return implícito)
const triplicar = numero => numero * 3;

// Uso
saludar("Ana");     // "Hola, Ana"
duplicar(5);        // 10
triplicar(3);       // 9
```

### 9.2 Parámetros

```javascript
// Parámetros por defecto (ES6)
function saludar(nombre = "visitante") {
    return `Hola, ${nombre}`;
}
saludar();          // "Hola, visitante"
saludar("Ana");     // "Hola, Ana"

// Rest parameters (ES6)
function sumar(...numeros) {
    return numeros.reduce((acc, num) => acc + num, 0);
}
sumar(1, 2, 3, 4);  // 10

// Desestructuración en parámetros
function mostrarUsuario({ nombre, edad }) {
    console.log(`${nombre} tiene ${edad} años`);
}
mostrarUsuario({ nombre: "Ana", edad: 25 });
```

### 9.3 Scope (ámbito)

```javascript
// Variable global
let global = "Soy global";

function ejemplo() {
    // Variable local
    let local = "Soy local";
    console.log(global); // ✅ Accesible
    console.log(local);  // ✅ Accesible
}

console.log(global); // ✅ Accesible
console.log(local);  // ❌ Error: local is not defined
```

### 9.4 Funciones callback

Una **callback** es una función que se pasa como argumento a otra función:

```javascript
// Función que recibe callback
function procesar(numero, callback) {
    return callback(numero);
}

// Uso con diferentes callbacks
procesar(5, n => n * 2);    // 10
procesar(5, n => n ** 2);   // 25

// Ejemplo con setTimeout
setTimeout(() => {
    console.log("Esto aparece después de 2 segundos");
}, 2000);

// Ejemplo con arrays
const numeros = [1, 2, 3, 4, 5];

// forEach - ejecuta función por cada elemento
numeros.forEach(n => console.log(n));

// map - transforma cada elemento
const dobles = numeros.map(n => n * 2); // [2, 4, 6, 8, 10]

// filter - filtra elementos
const pares = numeros.filter(n => n % 2 === 0); // [2, 4]

// find - encuentra el primer elemento
const mayor3 = numeros.find(n => n > 3); // 4

// reduce - reduce a un valor
const suma = numeros.reduce((acc, n) => acc + n, 0); // 15
```

---

## 10. Strings y Template Literals

### 10.1 Métodos de strings

```javascript
let texto = "JavaScript es genial";

// Propiedades
texto.length;              // 20

// Acceso a caracteres
texto[0];                  // "J"
texto.charAt(0);           // "J"

// Búsqueda
texto.indexOf("es");       // 11
texto.includes("genial");  // true
texto.startsWith("Java");  // true
texto.endsWith("genial");  // true

// Extracción
texto.slice(0, 10);        // "JavaScript"
texto.substring(11, 13);   // "es"

// Transformación
texto.toUpperCase();       // "JAVASCRIPT ES GENIAL"
texto.toLowerCase();       // "javascript es genial"
texto.trim();              // Elimina espacios inicio/fin
texto.replace("genial", "increíble"); // "JavaScript es increíble"

// División
texto.split(" ");          // ["JavaScript", "es", "genial"]
```

### 10.2 Template Literals (ES6)

```javascript
const nombre = "Ana";
const edad = 25;

// Concatenación clásica
let mensaje1 = "Hola, " + nombre + ". Tienes " + edad + " años.";

// Template literal (backticks `)
let mensaje2 = `Hola, ${nombre}. Tienes ${edad} años.`;

// Multilínea
let html = `
    <div class="card">
        <h2>${nombre}</h2>
        <p>Edad: ${edad}</p>
    </div>
`;

// Expresiones dentro de ${}
let precio = 100;
let descuento = 0.2;
console.log(`Precio final: ${precio * (1 - descuento)}€`); // "Precio final: 80€"
```

---

## 11. Arrays avanzados

### 11.1 Métodos mutables vs inmutables

```javascript
// MUTABLES - modifican el array original
const arr = [3, 1, 4, 1, 5];
arr.push(9);        // Añade al final
arr.pop();          // Elimina del final
arr.shift();        // Elimina del inicio
arr.unshift(2);     // Añade al inicio
arr.splice(1, 2);   // Elimina/inserta elementos
arr.sort();         // Ordena
arr.reverse();      // Invierte

// INMUTABLES - devuelven nuevo array
const original = [1, 2, 3];
original.concat([4, 5]); // [1, 2, 3, 4, 5]
original.slice(1);       // [2, 3]
original.map(x => x * 2); // [2, 4, 6]
original.filter(x => x > 1); // [2, 3]
// original sigue siendo [1, 2, 3]
```

### 11.2 Array functions (Higher Order Functions)

```javascript
const productos = [
    { nombre: "Laptop", precio: 1000, stock: 5 },
    { nombre: "Mouse", precio: 25, stock: 50 },
    { nombre: "Teclado", precio: 75, stock: 30 },
    { nombre: "Monitor", precio: 300, stock: 10 }
];

// map - Transformar
const nombres = productos.map(p => p.nombre);
// ["Laptop", "Mouse", "Teclado", "Monitor"]

// filter - Filtrar
const caros = productos.filter(p => p.precio > 100);
// [{ nombre: "Laptop"... }, { nombre: "Monitor"... }]

// find - Encontrar uno
const laptop = productos.find(p => p.nombre === "Laptop");
// { nombre: "Laptop", precio: 1000, stock: 5 }

// findIndex - Encontrar índice
const indice = productos.findIndex(p => p.nombre === "Mouse");
// 1

// some - ¿Alguno cumple?
const hayBaratos = productos.some(p => p.precio < 50);
// true

// every - ¿Todos cumplen?
const todosConStock = productos.every(p => p.stock > 0);
// true

// reduce - Reducir a un valor
const valorTotal = productos.reduce((total, p) => total + (p.precio * p.stock), 0);
// 5000 + 1250 + 2250 + 3000 = 11500

// Encadenamiento
const resultado = productos
    .filter(p => p.precio > 50)
    .map(p => p.nombre)
    .sort();
// ["Laptop", "Monitor", "Teclado"]
```

### 11.3 Spread operator y desestructuración

```javascript
// Spread operator (...)
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combinado = [...arr1, ...arr2]; // [1, 2, 3, 4, 5, 6]

// Copiar array
const copia = [...arr1];

// Desestructuración de arrays
const [primero, segundo, ...resto] = [1, 2, 3, 4, 5];
console.log(primero); // 1
console.log(segundo); // 2
console.log(resto);   // [3, 4, 5]

// Intercambiar valores
let a = 1, b = 2;
[a, b] = [b, a]; // a = 2, b = 1
```

---

## 12. Objetos avanzados

### 12.1 Manipulación de objetos

```javascript
const usuario = {
    nombre: "Ana",
    edad: 25,
    email: "ana@email.com"
};

// Acceso
usuario.nombre;          // "Ana"
usuario["edad"];         // 25

// Añadir/modificar propiedades
usuario.telefono = "123456789";
usuario.edad = 26;

// Eliminar propiedad
delete usuario.telefono;

// Comprobar existencia
"nombre" in usuario;     // true
usuario.hasOwnProperty("nombre"); // true

// Obtener claves, valores, entradas
Object.keys(usuario);    // ["nombre", "edad", "email"]
Object.values(usuario);  // ["Ana", 25, "ana@email.com"]
Object.entries(usuario); // [["nombre", "Ana"], ["edad", 25], ...]
```

### 12.2 Desestructuración de objetos

```javascript
const persona = {
    nombre: "Ana",
    edad: 25,
    ciudad: "Madrid",
    trabajo: {
        empresa: "Tech Corp",
        cargo: "Developer"
    }
};

// Desestructuración básica
const { nombre, edad } = persona;
console.log(nombre); // "Ana"

// Renombrar variable
const { nombre: nombreUsuario } = persona;
console.log(nombreUsuario); // "Ana"

// Valores por defecto
const { pais = "España" } = persona;
console.log(pais); // "España"

// Desestructuración anidada
const { trabajo: { empresa } } = persona;
console.log(empresa); // "Tech Corp"

// En parámetros de función
function mostrar({ nombre, edad }) {
    console.log(`${nombre} tiene ${edad} años`);
}
mostrar(persona);
```

### 12.3 Spread operator en objetos

```javascript
const original = { a: 1, b: 2 };

// Copiar objeto
const copia = { ...original };

// Combinar objetos
const extra = { c: 3, d: 4 };
const combinado = { ...original, ...extra };
// { a: 1, b: 2, c: 3, d: 4 }

// Sobrescribir propiedades
const modificado = { ...original, b: 10 };
// { a: 1, b: 10 }
```

---

## 13. JSON (JavaScript Object Notation)

JSON es un formato de intercambio de datos basado en la sintaxis de objetos JavaScript.

### 13.1 Sintaxis JSON

```json
{
    "nombre": "Ana García",
    "edad": 25,
    "activo": true,
    "cursos": ["HTML", "CSS", "JavaScript"],
    "direccion": {
        "calle": "Mayor",
        "numero": 10
    },
    "telefono": null
}
```

**Reglas JSON**:
- Las claves siempre van entre comillas dobles
- Los strings siempre usan comillas dobles
- No permite comentarios
- No permite comas finales (trailing commas)
- No permite funciones

### 13.2 Conversión JavaScript ↔ JSON

```javascript
// Objeto JavaScript → JSON string
const objeto = { nombre: "Ana", edad: 25 };
const jsonString = JSON.stringify(objeto);
// '{"nombre":"Ana","edad":25}'

// JSON string → Objeto JavaScript
const json = '{"nombre":"Ana","edad":25}';
const objetoJS = JSON.parse(json);
// { nombre: "Ana", edad: 25 }

// stringify con formato
const formateado = JSON.stringify(objeto, null, 2);
/*
{
  "nombre": "Ana",
  "edad": 25
}
*/
```

---

# PARTE 2: MANIPULACIÓN DEL DOM

## 14. ¿Qué es el DOM?

El **DOM (Document Object Model)** es una representación en forma de árbol de todos los elementos de una página HTML. JavaScript puede acceder y modificar este árbol para crear páginas dinámicas.

### Visualización del árbol DOM

```
                    document
                        │
                      html
                    /      \
                head        body
                  │        /    \
                title    div     footer
                         │
                       /   \
                     h1     p
```

### El objeto document

```javascript
// document representa todo el documento HTML
console.log(document);

// Propiedades útiles
document.title;          // Título de la página
document.URL;            // URL actual
document.domain;         // Dominio
document.body;           // Elemento <body>
document.head;           // Elemento <head>
document.documentElement; // Elemento <html>
```

---

## 15. Selección de elementos

### 15.1 Métodos tradicionales

```javascript
// Por ID (devuelve un elemento o null)
const elemento = document.getElementById("miId");

// Por clase (devuelve HTMLCollection)
const elementos = document.getElementsByClassName("miClase");

// Por etiqueta (devuelve HTMLCollection)
const parrafos = document.getElementsByTagName("p");

// Por name (devuelve NodeList)
const inputs = document.getElementsByName("email");
```

### 15.2 Métodos modernos (recomendados)

```javascript
// querySelector - devuelve el PRIMER elemento que coincide
const elemento = document.querySelector("#miId");
const elemento2 = document.querySelector(".miClase");
const elemento3 = document.querySelector("div.container > p");

// querySelectorAll - devuelve TODOS los elementos (NodeList)
const elementos = document.querySelectorAll(".miClase");
const parrafos = document.querySelectorAll("p");
const items = document.querySelectorAll("ul li");

// Diferencia NodeList vs HTMLCollection
// NodeList: estático, tiene forEach
// HTMLCollection: vivo (se actualiza), no tiene forEach
```

### 15.3 Selectores CSS en JavaScript

```javascript
// Por ID
document.querySelector("#miId");

// Por clase
document.querySelector(".miClase");
document.querySelectorAll(".miClase");

// Por etiqueta
document.querySelector("p");

// Por atributo
document.querySelector("[data-id='123']");
document.querySelector("input[type='text']");

// Combinadores
document.querySelector("div p");        // Descendiente
document.querySelector("div > p");      // Hijo directo
document.querySelector("h1 + p");       // Hermano adyacente
document.querySelector("h1 ~ p");       // Hermanos generales

// Pseudo-clases
document.querySelector("li:first-child");
document.querySelector("li:nth-child(2)");
document.querySelector("input:not([disabled])");
```

### 15.4 Búsquedas acotadas

```javascript
// Buscar dentro de un elemento específico
const menu = document.querySelector("#menu");
const enlaces = menu.querySelectorAll("a");

// Equivalente en una sola línea
const enlaces2 = document.querySelectorAll("#menu a");
```

### 15.5 Navegación por el DOM

```javascript
const elemento = document.querySelector(".item");

// Elementos padre/hijo/hermano
elemento.parentElement;           // Padre
elemento.children;                // Hijos (HTMLCollection)
elemento.firstElementChild;       // Primer hijo
elemento.lastElementChild;        // Último hijo
elemento.previousElementSibling;  // Hermano anterior
elemento.nextElementSibling;      // Hermano siguiente

// Métodos de búsqueda relativa
elemento.closest(".container");   // Ancestro más cercano
elemento.matches(".active");      // ¿Coincide con selector?
```

---

## 16. Modificación de contenido

### 16.1 Contenido de texto

```javascript
const parrafo = document.querySelector("p");

// textContent - texto plano (recomendado)
parrafo.textContent = "Nuevo texto";
console.log(parrafo.textContent);

// innerText - texto visible (respeta CSS)
parrafo.innerText = "Texto visible";

// Diferencia: textContent incluye texto oculto por CSS
// innerText solo muestra lo visible
```

### 16.2 Contenido HTML

```javascript
const div = document.querySelector("div");

// innerHTML - contenido HTML interno
div.innerHTML = "<p>Párrafo <strong>con negrita</strong></p>";
console.log(div.innerHTML);

// outerHTML - incluye el propio elemento
console.log(div.outerHTML);
// <div><p>Párrafo <strong>con negrita</strong></p></div>

// ⚠️ SEGURIDAD: innerHTML puede ejecutar scripts maliciosos
// Nunca uses innerHTML con datos del usuario sin sanitizar
```

### 16.3 Atributos HTML

```javascript
const enlace = document.querySelector("a");

// Propiedades directas (atributos estándar)
enlace.href = "https://ejemplo.com";
enlace.id = "miEnlace";
enlace.className = "link activo";

// Métodos getAttribute/setAttribute (cualquier atributo)
enlace.getAttribute("href");
enlace.setAttribute("href", "https://otro.com");
enlace.hasAttribute("target");
enlace.removeAttribute("target");

// Atributos data-*
const elemento = document.querySelector("[data-id]");
elemento.dataset.id;           // Acceso a data-id
elemento.dataset.userId = "5"; // Crea data-user-id
```

---

## 17. Manipulación de clases CSS

### 17.1 className

```javascript
const elemento = document.querySelector("div");

// Obtener todas las clases como string
console.log(elemento.className); // "card activo destacado"

// Reemplazar todas las clases
elemento.className = "nueva-clase";
```

### 17.2 classList (recomendado)

```javascript
const elemento = document.querySelector("div");

// Propiedades
elemento.classList;        // DOMTokenList ["card", "activo"]
elemento.classList.length; // 2
elemento.classList.value;  // "card activo"

// Métodos
elemento.classList.add("nueva");              // Añadir
elemento.classList.add("clase1", "clase2");   // Añadir varias
elemento.classList.remove("antigua");         // Eliminar
elemento.classList.toggle("activo");          // Alternar
elemento.classList.contains("card");          // ¿Contiene? → true/false
elemento.classList.replace("old", "new");     // Reemplazar

// toggle con condición
elemento.classList.toggle("visible", isVisible); // Añade si true, quita si false
```

---

## 18. Manipulación de estilos CSS

### 18.1 Propiedad style

```javascript
const elemento = document.querySelector("div");

// Estilos inline (camelCase)
elemento.style.color = "red";
elemento.style.backgroundColor = "#f0f0f0";
elemento.style.fontSize = "16px";
elemento.style.marginTop = "20px";
elemento.style.display = "none";

// Obtener valor
console.log(elemento.style.color);

// Eliminar estilo
elemento.style.color = "";
elemento.style.removeProperty("color");
```

### 18.2 getComputedStyle

```javascript
const elemento = document.querySelector("div");

// Obtiene TODOS los estilos aplicados (CSS + inline)
const estilos = getComputedStyle(elemento);

console.log(estilos.color);           // rgb(0, 0, 0)
console.log(estilos.fontSize);        // 16px
console.log(estilos.getPropertyValue("font-size")); // 16px
```

> **Mejor práctica**: Usa clases CSS en lugar de estilos inline cuando sea posible.

---

## 19. Creación de elementos

### 19.1 createElement

```javascript
// 1. Crear elemento
const div = document.createElement("div");

// 2. Configurar elemento
div.id = "miDiv";
div.className = "card";
div.textContent = "Contenido";
div.innerHTML = "<p>Párrafo</p>";

// 3. Añadir al DOM
document.body.appendChild(div);
```

### 19.2 API de Elementos (métodos modernos)

```javascript
const container = document.querySelector(".container");
const nuevo = document.createElement("div");
nuevo.textContent = "Nuevo elemento";

// before/after - fuera del elemento
container.before(nuevo);  // Antes del container
container.after(nuevo);   // Después del container

// prepend/append - dentro del elemento
container.prepend(nuevo); // Como primer hijo
container.append(nuevo);  // Como último hijo

// replaceChildren - reemplaza todos los hijos
container.replaceChildren(nuevo);

// replaceWith - reemplaza el propio elemento
container.replaceWith(nuevo);

// remove - elimina el elemento
nuevo.remove();
```

### 19.3 Inserción adyacente (insertAdjacent)

```javascript
const referencia = document.querySelector(".referencia");

// insertAdjacentHTML - insertar HTML
referencia.insertAdjacentHTML("beforebegin", "<p>Antes</p>");
referencia.insertAdjacentHTML("afterbegin", "<p>Primer hijo</p>");
referencia.insertAdjacentHTML("beforeend", "<p>Último hijo</p>");
referencia.insertAdjacentHTML("afterend", "<p>Después</p>");

// insertAdjacentElement - insertar elemento
const elem = document.createElement("span");
referencia.insertAdjacentElement("beforeend", elem);

// insertAdjacentText - insertar texto
referencia.insertAdjacentText("beforeend", "Texto añadido");
```

**Posiciones de inserción**:
```
<!-- beforebegin -->
<div class="referencia">
    <!-- afterbegin -->
    Contenido existente
    <!-- beforeend -->
</div>
<!-- afterend -->
```

### 19.4 Clonación de elementos

```javascript
const original = document.querySelector(".card");

// Clon superficial (solo el elemento)
const clonSuperficial = original.cloneNode(false);

// Clon profundo (elemento + hijos)
const clonProfundo = original.cloneNode(true);

document.body.appendChild(clonProfundo);
```

---

## 20. Eventos en JavaScript

### 20.1 ¿Qué son los eventos?

Los eventos son **acciones o sucesos** que ocurren en el navegador y a los que podemos responder con código JavaScript.

**Eventos comunes**:
- `click` - Clic del ratón
- `dblclick` - Doble clic
- `mouseover` / `mouseout` - Ratón entra/sale
- `mousedown` / `mouseup` - Botón presionado/soltado
- `keydown` / `keyup` - Tecla presionada/soltada
- `submit` - Envío de formulario
- `change` - Cambio en input
- `input` - Entrada de datos
- `focus` / `blur` - Foco ganado/perdido
- `load` - Carga completada
- `scroll` - Desplazamiento
- `resize` - Cambio de tamaño

### 20.2 Formas de manejar eventos

```javascript
// ❌ 1. Desde HTML (evitar)
<button onclick="alert('Hola')">Click</button>

// ⚠️ 2. Propiedad on[evento]
const btn = document.querySelector("button");
btn.onclick = function() {
    alert("Hola");
};
// Limitación: solo una función por evento

// ✅ 3. addEventListener (recomendado)
btn.addEventListener("click", function() {
    alert("Hola");
});
// Permite múltiples funciones
```

### 20.3 addEventListener

```javascript
const boton = document.querySelector("#miBoton");

// Sintaxis básica
boton.addEventListener("click", function() {
    console.log("¡Click!");
});

// Con arrow function
boton.addEventListener("click", () => {
    console.log("¡Click!");
});

// Con función nombrada (permite removeEventListener)
function handleClick() {
    console.log("¡Click!");
}
boton.addEventListener("click", handleClick);

// Eliminar evento
boton.removeEventListener("click", handleClick);
```

### 20.4 El objeto Event

```javascript
boton.addEventListener("click", function(event) {
    // Propiedades comunes
    console.log(event.type);        // "click"
    console.log(event.target);      // Elemento que disparó el evento
    console.log(event.currentTarget); // Elemento con el listener
    console.log(event.timeStamp);   // Momento del evento
    
    // Para eventos de ratón
    console.log(event.clientX);     // Posición X en viewport
    console.log(event.clientY);     // Posición Y en viewport
    console.log(event.button);      // Botón del ratón (0=izq, 2=der)
    
    // Para eventos de teclado
    console.log(event.key);         // Tecla pulsada
    console.log(event.code);        // Código de tecla
    console.log(event.ctrlKey);     // ¿Ctrl presionado?
    console.log(event.shiftKey);    // ¿Shift presionado?
    
    // Métodos
    event.preventDefault();         // Cancela acción por defecto
    event.stopPropagation();        // Detiene propagación
});
```

### 20.5 Propagación de eventos

Los eventos se propagan en dos fases:
1. **Captura** (capturing): De documento hacia el elemento
2. **Burbujeo** (bubbling): Del elemento hacia el documento

```javascript
// Por defecto, addEventListener escucha en fase de burbujeo
elemento.addEventListener("click", handler);

// Para escuchar en fase de captura
elemento.addEventListener("click", handler, true);
// o
elemento.addEventListener("click", handler, { capture: true });
```

```
┌─────────────────────────────────────────────────┐
│ document                                        │
│   ┌───────────────────────────────────────────┐ │
│   │ <body>                                    │ │
│   │   ┌─────────────────────────────────────┐ │ │
│   │   │ <div>                               │ │ │
│   │   │   ┌───────────────────────────────┐ │ │ │
│   │   │   │ <button>  ← CLICK             │ │ │ │
│   │   │   └───────────────────────────────┘ │ │ │
│   │   │              ↑ Burbujeo            │ │ │
│   │   └─────────────────────────────────────┘ │ │
│   │                  ↑ Burbujeo               │ │
│   └───────────────────────────────────────────┘ │
│                      ↑ Burbujeo                 │
└─────────────────────────────────────────────────┘
```

### 20.6 Delegación de eventos

Técnica para manejar eventos en elementos dinámicos o múltiples:

```javascript
// ❌ Ineficiente: un listener por cada botón
document.querySelectorAll(".btn").forEach(btn => {
    btn.addEventListener("click", handler);
});

// ✅ Delegación: un listener en el contenedor
document.querySelector(".container").addEventListener("click", function(e) {
    // Verificar si el clic fue en un botón
    if (e.target.matches(".btn")) {
        console.log("Botón clickeado:", e.target.textContent);
    }
});
```

### 20.7 Opciones de addEventListener

```javascript
elemento.addEventListener("click", handler, {
    once: true,      // Se ejecuta solo una vez
    passive: true,   // No llamará preventDefault()
    capture: false,  // Escuchar en fase de captura
    signal: controller.signal // Para cancelar con AbortController
});

// AbortController para cancelar eventos
const controller = new AbortController();

elemento.addEventListener("click", handler, {
    signal: controller.signal
});

// Más tarde, cancelar todos los eventos asociados
controller.abort();
```

---

## 21. Eventos comunes

### 21.1 Eventos de ratón

```javascript
const elemento = document.querySelector(".interactivo");

elemento.addEventListener("click", (e) => {
    console.log("Click");
});

elemento.addEventListener("dblclick", (e) => {
    console.log("Doble click");
});

elemento.addEventListener("mouseenter", (e) => {
    console.log("Ratón entra");
});

elemento.addEventListener("mouseleave", (e) => {
    console.log("Ratón sale");
});

elemento.addEventListener("mousemove", (e) => {
    console.log(`Posición: ${e.clientX}, ${e.clientY}`);
});

elemento.addEventListener("contextmenu", (e) => {
    e.preventDefault(); // Evita menú contextual
    console.log("Click derecho");
});
```

### 21.2 Eventos de teclado

```javascript
document.addEventListener("keydown", (e) => {
    console.log("Tecla:", e.key);
    console.log("Código:", e.code);
    
    // Detectar combinaciones
    if (e.ctrlKey && e.key === "s") {
        e.preventDefault();
        console.log("Guardar");
    }
    
    // Teclas especiales
    if (e.key === "Escape") {
        console.log("Escape presionado");
    }
    
    if (e.key === "Enter") {
        console.log("Enter presionado");
    }
});

document.addEventListener("keyup", (e) => {
    console.log("Tecla soltada:", e.key);
});
```

### 21.3 Eventos de formulario

```javascript
const formulario = document.querySelector("form");
const input = document.querySelector("input");

// Envío de formulario
formulario.addEventListener("submit", (e) => {
    e.preventDefault(); // Evita envío tradicional
    console.log("Formulario enviado");
    // Procesar datos...
});

// Cambio en input (al perder foco)
input.addEventListener("change", (e) => {
    console.log("Valor cambiado:", e.target.value);
});

// Entrada de datos (en tiempo real)
input.addEventListener("input", (e) => {
    console.log("Escribiendo:", e.target.value);
});

// Foco
input.addEventListener("focus", () => {
    console.log("Input tiene foco");
});

input.addEventListener("blur", () => {
    console.log("Input pierde foco");
});
```

### 21.4 Eventos de ventana

```javascript
// Carga completa
window.addEventListener("load", () => {
    console.log("Página completamente cargada");
});

// DOM listo (antes que load)
document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM listo");
});

// Scroll
window.addEventListener("scroll", () => {
    console.log("Scroll Y:", window.scrollY);
});

// Redimensionado
window.addEventListener("resize", () => {
    console.log("Ancho:", window.innerWidth);
});
```

---

## 22. Ejemplo práctico: Lista de tareas

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lista de Tareas</title>
    <style>
        .completada {
            text-decoration: line-through;
            opacity: 0.6;
        }
        .tarea {
            padding: 10px;
            margin: 5px 0;
            background: #f0f0f0;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
    </style>
</head>
<body>
    <h1>Lista de Tareas</h1>
    
    <form id="formTarea">
        <input type="text" id="inputTarea" placeholder="Nueva tarea..." required>
        <button type="submit">Añadir</button>
    </form>
    
    <div id="listaTareas"></div>
    
    <script>
        // Elementos del DOM
        const formulario = document.querySelector("#formTarea");
        const inputTarea = document.querySelector("#inputTarea");
        const listaTareas = document.querySelector("#listaTareas");
        
        // Array para almacenar tareas
        let tareas = [];
        
        // Función para renderizar tareas
        function renderizarTareas() {
            listaTareas.innerHTML = "";
            
            tareas.forEach((tarea, index) => {
                const div = document.createElement("div");
                div.className = `tarea ${tarea.completada ? "completada" : ""}`;
                div.innerHTML = `
                    <span>${tarea.texto}</span>
                    <div>
                        <button data-accion="completar" data-index="${index}">
                            ${tarea.completada ? "Deshacer" : "Completar"}
                        </button>
                        <button data-accion="eliminar" data-index="${index}">
                            Eliminar
                        </button>
                    </div>
                `;
                listaTareas.appendChild(div);
            });
        }
        
        // Evento: Añadir tarea
        formulario.addEventListener("submit", (e) => {
            e.preventDefault();
            
            const texto = inputTarea.value.trim();
            if (texto) {
                tareas.push({ texto, completada: false });
                inputTarea.value = "";
                renderizarTareas();
            }
        });
        
        // Evento: Delegación para botones
        listaTareas.addEventListener("click", (e) => {
            if (e.target.matches("button")) {
                const accion = e.target.dataset.accion;
                const index = parseInt(e.target.dataset.index);
                
                if (accion === "completar") {
                    tareas[index].completada = !tareas[index].completada;
                } else if (accion === "eliminar") {
                    tareas.splice(index, 1);
                }
                
                renderizarTareas();
            }
        });
    </script>
</body>
</html>
```

---

## 23. Recursos y referencias

### Documentación oficial
- **MDN Web Docs**: https://developer.mozilla.org/es/docs/Web/JavaScript
- **JavaScript.info**: https://javascript.info/
- **LenguajeJS**: https://lenguajejs.com/javascript/
- **LenguajeJS DOM**: https://lenguajejs.com/dom/
- **LenguajeJS Eventos**: https://lenguajejs.com/eventos/

### Práctica
- **Eloquent JavaScript**: https://eloquentjavascript.net/
- **JavaScript30**: https://javascript30.com/

### Herramientas
- **Can I Use**: https://caniuse.com/
- **DevDocs**: https://devdocs.io/javascript/

---

## Criterios de evaluación UD2 (RA3)

| Criterio | Descripción |
|----------|-------------|
| a) | Se han identificado las características del lenguaje JavaScript |
| b) | Se han identificado los objetos del DOM y los métodos de acceso |
| c) | Se han creado elementos del DOM mediante JavaScript |
| d) | Se ha modificado el contenido de elementos del DOM |
| e) | Se han asociado acciones a eventos del DOM |
| f) | Se han identificado elementos de la interfaz de usuario |
