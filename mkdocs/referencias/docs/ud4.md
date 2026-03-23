# UD2: Fundamentos de JavaScript
## 1. ¿Qué es JavaScript?

Cualquier página web de Internet está construida, como mínimo, por **HTML** (un lenguaje de marcas) y **CSS** (un lenguaje de estilos). El primero permite construir todo el contenido e información de la página mediante etiquetas, mientras que el segundo le da estilo visual y construye una interfaz más agradable para el usuario.

Sin embargo, utilizar solo HTML y CSS nos **limita considerablemente**. Si bien podemos hacer muchas cosas con estos dos lenguajes, hay otras que serían totalmente imposibles. Imagina que quieres mostrar 500 elementos en una página. Con HTML tendrías que escribir 500 líneas de código, una por cada elemento. Con JavaScript, no serían más de 10 líneas, ya que podemos automatizar la tarea con un bucle.

Aquí es donde entra **JavaScript**: un lenguaje de programación que nos permite añadir **interactividad y comportamiento dinámico** a nuestras páginas web.

### El tercer pilar del desarrollo web

Podemos pensar en el desarrollo web como una casa:

- **HTML** es la **estructura**: los cimientos, las paredes, las habitaciones. Define qué contenido hay y cómo está organizado.
- **CSS** es la **decoración**: la pintura, los muebles, la iluminación. Define cómo se ve todo.
- **JavaScript** es la **electricidad y fontanería**: lo que hace que las cosas funcionen. Define qué ocurre cuando pulsas un interruptor o abres un grifo.

```
┌─────────────────────────────────────────────────────────────────┐
│                      PÁGINA WEB                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   HTML              CSS                 JavaScript              │
│   (Estructura)      (Presentación)      (Comportamiento)        │
│                                                                 │
│   • Contenido       • Colores           • Interactividad        │
│   • Semántica       • Tipografías       • Validación            │
│   • Jerarquía       • Layouts           • Animaciones           │
│   • Accesibilidad   • Responsive        • Comunicación API      │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### ¿Qué podemos hacer con JavaScript?

Con JavaScript podemos hacer prácticamente cualquier cosa en una página web:

- **Modificar el contenido**: Cambiar textos, imágenes o cualquier elemento de la página sin recargarla.
- **Responder a acciones del usuario**: Detectar clics, movimientos del ratón, pulsaciones de teclas...
- **Validar formularios**: Comprobar que los datos introducidos son correctos antes de enviarlos.
- **Crear animaciones**: Mover elementos, hacer transiciones, efectos visuales...
- **Comunicarse con servidores**: Enviar y recibir datos sin recargar la página (AJAX/Fetch).
- **Almacenar datos**: Guardar información en el navegador del usuario.

### Un poco de historia

JavaScript fue creado en **1995** por **Brendan Eich** en tan solo **10 días** mientras trabajaba en Netscape. Originalmente se llamaba **Mocha**, luego **LiveScript**, y finalmente **JavaScript**.

Este último nombre fue una estrategia de marketing para aprovechar la popularidad de Java en aquel momento. Sin embargo, es importante entender que **JavaScript y Java son lenguajes completamente diferentes**. El nombre es una fuente constante de confusión para principiantes, pero más allá del nombre, no comparten casi nada.

A pesar de sus humildes orígenes (¡10 días!), JavaScript se ha convertido en uno de los lenguajes de programación más populares del mundo. Hoy en día no solo se usa en navegadores, sino también:

- **En servidores**: Con Node.js podemos crear aplicaciones de backend completas.
- **En móviles**: Con React Native o Ionic podemos crear apps móviles.
- **En escritorio**: Con Electron podemos crear aplicaciones de escritorio (VS Code está hecho con Electron).

> **Nota para el estudiante**: Puedes aprender a programar en semanas, pero eso no significa que no cometas errores. Puedes aprender a programar bien y sin demasiados errores en meses. Pero dominar la programación es una tarea que requiere años. No te frustres si al principio las cosas no salen como esperas. Es completamente normal. La clave está en practicar constantemente y no tener miedo a cometer errores.

---

## 2. La especificación ECMAScript

Cuando hablamos de JavaScript, es importante entender qué es **ECMAScript**. Imagina que ECMAScript es como el "reglamento oficial" que define cómo debe funcionar JavaScript. Es la especificación donde se documentan todos los detalles del lenguaje: qué características debe tener, cómo deben comportarse, qué sintaxis es válida...

### ¿Por qué existe ECMAScript?

En los primeros años de la web, había una guerra entre navegadores. Netscape tenía JavaScript, pero Microsoft creó su propia versión llamada JScript para Internet Explorer. El problema era que cada navegador implementaba el lenguaje a su manera, lo que causaba enormes problemas de compatibilidad. Un código que funcionaba en Netscape podía fallar estrepitosamente en Internet Explorer.

Para solucionar este caos, en 1997 se decidió crear un estándar internacional bajo el nombre de **ECMAScript** (por la organización ECMA International que lo mantiene). De esta forma, los diferentes navegadores (Chrome, Firefox, Safari, Edge...) saben cómo deben desarrollar sus motores de JavaScript para que cualquier código funcione exactamente igual, independientemente del navegador que se utilice.

### La evolución de ECMAScript

ECMAScript va acompañado de un número que indica la versión. En cada nueva versión se añaden nuevas funcionalidades que mantienen JavaScript vivo y moderno:

| Versión | Año | Novedades destacadas |
|---------|-----|---------------------|
| ES1 | 1997 | Primera versión del estándar |
| ES3 | 1999 | Expresiones regulares, try/catch |
| ES5 | 2009 | Modo estricto, JSON nativo, métodos de array (forEach, map, filter...) |
| **ES6/ES2015** | 2015 | **La gran revolución**: let/const, arrow functions, clases, promesas, módulos, template literals, desestructuración... |
| ES2016 | 2016 | Array.includes(), operador exponenciación (**) |
| ES2017 | 2017 | async/await, Object.entries(), Object.values() |
| ES2018 | 2018 | Spread en objetos, Promise.finally() |
| ES2020 | 2020 | Optional chaining (?.), nullish coalescing (??), BigInt |
| ES2021+ | 2021... | Y sigue evolucionando cada año... |

El año **2015** marcó un antes y un después en JavaScript. ES6 (también llamado ES2015) introdujo tantas mejoras que prácticamente transformó el lenguaje. La mayoría del código moderno que verás utiliza características de ES6 o posteriores. Si ves código con `var` en lugar de `let`/`const`, o funciones con `function` en lugar de `=>`, probablemente es código antiguo.

### Compatibilidad entre navegadores

Aunque los navegadores intentan implementar el estándar ECMAScript lo antes posible, no todos lo consiguen al mismo tiempo. Para comprobar si una característica está disponible en los navegadores, puedes consultar:

- **Can I Use** (https://caniuse.com/): Muestra la compatibilidad de cualquier característica web.
- **Tabla Kangax** (https://kangax.github.io/compat-table/es6/): Específica para ECMAScript.

Cuando una característica no está disponible en un navegador antiguo que necesitas soportar, existen dos soluciones:

1. **Polyfill**: Un fragmento de código que "rellena" la funcionalidad que falta.
2. **Transpilador** (como Babel): Una herramienta que convierte código moderno en código compatible con navegadores antiguos.

---

## 3. La consola de JavaScript

La consola es tu **mejor amiga** cuando programas en JavaScript. Es una herramienta que incluyen todos los navegadores modernos donde puedes escribir código, ver mensajes, detectar errores y depurar tus programas. Piensa en ella como una ventana que te permite "hablar" con JavaScript directamente y ver qué está pasando en tu código.

### Cómo acceder a la consola

Todos los navegadores modernos incluyen herramientas de desarrollo (conocidas como **DevTools**). Para acceder a la consola:

**En Windows/Linux:**
- Pulsa `F12` y luego ve a la pestaña "Console"
- O pulsa `Ctrl + Shift + J` para ir directamente a la consola

**En Mac:**
- Pulsa `Cmd + Option + J`

Una vez abierta, verás un cursor parpadeante donde puedes escribir código JavaScript y ver el resultado inmediatamente. Pruébalo: escribe `2 + 2` y pulsa Enter. Verás `4` como resultado.

### El clásico "Hola Mundo"

El primer programa que se hace en cualquier lenguaje de programación es mostrar el mensaje "Hola Mundo". Es una tradición que viene desde los años 70. En JavaScript es muy sencillo:

```javascript
console.log("Hola Mundo");
```

Si escribes esto en la consola y pulsas Enter, verás el mensaje "Hola Mundo" aparecer. ¡Felicidades! Acabas de ejecutar tu primer código JavaScript.

Pero, ¿qué significa exactamente este código?

- `console` es un **objeto** que representa la consola del navegador
- `.log()` es un **método** de ese objeto que muestra información
- `"Hola Mundo"` es el **argumento** que le pasamos, el texto que queremos mostrar

### Los diferentes métodos de console

El objeto `console` tiene varios métodos que nos permiten mostrar información de diferentes formas. Cada uno tiene un estilo visual diferente:

```javascript
// Mensaje informativo normal - aparece en negro/blanco
console.log("Este es un mensaje normal");
console.log("Valor de x:", x);  // Puedes mostrar variables
console.log("Usuario:", usuario, "Edad:", edad);  // Varios valores

// Mensaje de advertencia - aparece en amarillo con icono ⚠️
console.warn("¡Cuidado! Esta función está obsoleta");

// Mensaje de error - aparece en rojo con icono ❌
console.error("¡Error! No se pudo conectar al servidor");

// Mensaje informativo - similar a log pero con icono ℹ️
console.info("La aplicación se ha iniciado correctamente");

// Limpiar toda la consola
console.clear();
```

### Mostrar datos en formato tabla

Cuando trabajamos con arrays u objetos, `console.table()` es increíblemente útil porque muestra los datos en un formato de tabla muy legible:

```javascript
const usuarios = [
    { nombre: "Ana", edad: 25, ciudad: "Madrid" },
    { nombre: "Luis", edad: 30, ciudad: "Barcelona" },
    { nombre: "María", edad: 28, ciudad: "Valencia" }
];

console.table(usuarios);
```

Esto mostrará una tabla con columnas para cada propiedad, mucho más fácil de leer que el formato normal.

### Medir el tiempo de ejecución

A veces queremos saber cuánto tarda en ejecutarse un fragmento de código. Para eso usamos `console.time()` y `console.timeEnd()`:

```javascript
console.time("Mi proceso");

// Código que queremos medir...
let suma = 0;
for (let i = 0; i < 1000000; i++) {
    suma += i;
}

console.timeEnd("Mi proceso");
// Resultado: "Mi proceso: 12.345ms"
```

### El debugger

Cuando tu código no funciona como esperas y necesitas investigar qué está pasando, puedes usar la palabra clave `debugger` para pausar la ejecución:

```javascript
function calcularPrecio(cantidad, precioUnitario) {
    debugger;  // La ejecución se pausará aquí
    let subtotal = cantidad * precioUnitario;
    let iva = subtotal * 0.21;
    return subtotal + iva;
}
```

Cuando el navegador encuentra `debugger`, abre las DevTools y te permite ver el valor de todas las variables, ejecutar el código paso a paso, y entender qué está pasando.

> **Consejo importante**: Acostúmbrate a tener la consola **siempre abierta** mientras desarrollas. Los errores de JavaScript aparecen ahí, y si no la miras, nunca sabrás qué está fallando.

---

## 4. Cómo incluir JavaScript en HTML

Existen varias formas de añadir código JavaScript a una página web. Vamos a verlas ordenadas de **menos recomendable** a **más recomendable**.

### 4.1. JavaScript en línea (inline) — ❌ Evitar siempre

La forma más directa (pero peor) es escribir JavaScript directamente en los atributos HTML:

```html
<button onclick="alert('¡Hola!')">Púlsame</button>
```

**¿Por qué es mala práctica?**

1. **Mezcla HTML con JavaScript**: El HTML debería contener solo estructura.
2. **No es reutilizable**: Si tienes 10 botones que hacen lo mismo, tienes que copiar el código 10 veces.
3. **Difícil de depurar**: Los errores son más difíciles de encontrar.
4. **Problemas de seguridad**: Facilita ataques XSS.

### 4.2. JavaScript interno — ⚠️ Solo para pruebas rápidas

Podemos incluir código JavaScript dentro de etiquetas `<script>` en el propio documento HTML:

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Mi página</title>
</head>
<body>
    <h1>Hola Mundo</h1>
    
    <script>
        console.log("¡La página se ha cargado!");
    </script>
</body>
</html>
```

Esta forma está bien para hacer pruebas rápidas mientras aprendes, pero no es ideal para proyectos reales porque el código JavaScript queda mezclado con el HTML.

### 4.3. JavaScript externo — ✅ Siempre recomendado

La mejor práctica es separar el JavaScript en archivos `.js` independientes:

**index.html:**
```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Mi página</title>
</head>
<body>
    <h1>Hola Mundo</h1>
    
    <script src="js/main.js"></script>
</body>
</html>
```

**js/main.js:**
```javascript
console.log("¡La página se ha cargado!");
```

**Ventajas:**

1. **Separación de responsabilidades**: HTML para estructura, JS para comportamiento.
2. **Reutilización**: El mismo archivo JS puede usarse en varias páginas.
3. **Caché del navegador**: El archivo JS se descarga una vez y se reutiliza.
4. **Más fácil de mantener**: Todo el JavaScript está organizado en archivos.

### Los atributos defer y async

Cuando el navegador encuentra una etiqueta `<script>`, **detiene** la carga del HTML hasta que el script se descarga y ejecuta. Para evitar esto, tenemos dos atributos:

```html
<!-- defer: carga en paralelo, ejecuta al terminar el HTML -->
<script src="app.js" defer></script>

<!-- async: carga en paralelo, ejecuta inmediatamente cuando está listo -->
<script src="app.js" async></script>
```

| Atributo | Carga | Ejecución | Orden garantizado |
|----------|-------|-----------|-------------------|
| (ninguno) | Bloquea HTML | Inmediata | Sí |
| `defer` | En paralelo | Al terminar HTML | Sí |
| `async` | En paralelo | Cuando está listo | No |

> **Recomendación**: Usa `defer` para la mayoría de scripts. Usa `async` solo para scripts independientes como analytics.

---

## 5. Buenas prácticas y código limpio

Antes de empezar a escribir código JavaScript, es fundamental conocer una serie de **buenas prácticas** que te ayudarán a crear código más legible, mantenible y menos propenso a errores. **Cuanto antes las adoptes, mejores hábitos desarrollarás**.

### 5.1. El modo estricto: "use strict"

JavaScript es un lenguaje muy **permisivo** por razones históricas. Esto significa que permite ciertas prácticas que pueden causar errores difíciles de detectar. Veamos un ejemplo:

```javascript
// Sin modo estricto - JavaScript no se queja
function calcularPrecio(cantidad) {
    precio = cantidad * 10;  // ¡Olvidé poner let/const!
    return precio;
}

calcularPrecio(5);
console.log(precio);  // 50 - ¡La variable existe fuera de la función!
```

Al olvidar `let` o `const`, JavaScript crea **automáticamente** una variable global. Esto es peligrosísimo.

El **modo estricto** (`"use strict"`) activa reglas más rigurosas:

```javascript
"use strict";

nombre = "Ana";  // ❌ ReferenceError: nombre is not defined
```

¡Ahora JavaScript nos avisa inmediatamente!

#### Errores que detecta "use strict"

```javascript
"use strict";

// ❌ Variables sin declarar
usuario = "Ana";  // ReferenceError

// ❌ Parámetros duplicados
function suma(a, a, b) { }  // SyntaxError

// ❌ Palabras reservadas para el futuro
let interface = "algo";  // SyntaxError
```

> **¿Cuándo usarlo?** En **módulos ES6** (archivos con `import`/`export`) el modo estricto está activado automáticamente. En scripts tradicionales, añade `"use strict";` al inicio del archivo.

### 5.2. Nombres descriptivos

Una de las tareas más importantes en programación es **ponerle un buen nombre** a una variable. Un buen nombre hace que el código sea autoexplicativo.

```javascript
// ❌ Nombres poco claros
let x = 100;
let t = x * 0.21;
let y = x + t;

// ✅ Nombres descriptivos
let precioBase = 100;
let iva = precioBase * 0.21;
let precioTotal = precioBase + iva;
```

En el segundo ejemplo **no necesitas ningún comentario** para entender qué hace el código.

#### Convenciones de nombrado en JavaScript

```javascript
// camelCase para variables y funciones
let nombreCompleto = "Ana García";
function calcularEdad() { }

// UPPER_SNAKE_CASE para constantes que representan valores fijos
const IVA = 0.21;
const MAX_INTENTOS = 3;

// PascalCase para clases
class Usuario { }
class CarritoDeCompras { }

// Verbos para funciones (hacen cosas)
function obtenerDatos() { }
function calcularTotal() { }
function validarFormulario() { }

// Sustantivos para variables (son cosas)
let usuario = { };
let listaDeProductos = [];

// Prefijos para booleanos
let isActivo = true;       // ¿está activo?
let hasPermiso = false;    // ¿tiene permiso?
let canEditar = true;      // ¿puede editar?
```

### 5.3. Por qué evitar break y continue

Las sentencias `break` y `continue` permiten **interrumpir el flujo normal** de un bucle. Aunque funcionan, su uso excesivo hace que el código sea difícil de seguir.

El problema es que **rompen la predictibilidad** del bucle:

```javascript
// ❌ Con múltiples breaks - ¿cuántas veces se ejecuta?
for (let i = 0; i < 100; i++) {
    if (condicionA) break;
    // ... código ...
    if (condicionB) break;
    // ... más código ...
    if (condicionC) break;
}

// ✅ Mejor: condición explícita
let encontrado = false;
let i = 0;
while (i < 100 && !encontrado) {
    if (datos[i] === valorBuscado) {
        encontrado = true;
    }
    i++;
}

// ✅ Aún mejor: usar métodos de array
const resultado = datos.find(item => item === valorBuscado);
```

#### ⚠️ Cuidado con continue en bucles while

Un error muy común que puede congelar tu navegador:

```javascript
// ❌ ¡BUCLE INFINITO!
let i = 0;
while (i < 10) {
    if (i === 5) {
        continue;  // Salta al inicio...
    }
    console.log(i);
    i++;  // ...pero esto NUNCA se ejecuta cuando i === 5
}
```

### 5.4. Usa siempre comparación estricta (=== y !==)

En JavaScript existen dos tipos de comparación:

- **Comparación débil** (`==`): Convierte los tipos antes de comparar
- **Comparación estricta** (`===`): Compara valor Y tipo

La comparación débil puede dar resultados sorprendentes:

```javascript
// Comparación débil (==) - resultados inesperados
0 == false         // true  😱
"" == false        // true  😱
null == undefined  // true  😱
"5" == 5           // true  😱
[] == false        // true  😱

// Comparación estricta (===) - predecible
0 === false         // false
"" === false        // false
null === undefined  // false
"5" === 5           // false
```

> **Regla de oro**: Usa **siempre** `===` y `!==`. No hay ninguna situación en código moderno donde la comparación débil sea necesaria.

### 5.5. Resumen de buenas prácticas

| Práctica | Recomendación |
|----------|---------------|
| Modo estricto | Usar `"use strict"` en scripts tradicionales |
| Nombres | Descriptivos, en inglés, convención correcta |
| Variables | `const` por defecto, `let` si necesitas reasignar, nunca `var` |
| Comparaciones | Siempre `===` y `!==` |
| `break`/`continue` | Evitar; preferir condiciones claras o métodos de array |
| Comentarios | Explicar el "porqué", no el "qué" |

---

## 6. Variables y constantes

En programación, una **variable** es como una caja etiquetada donde guardamos información. La etiqueta es el **nombre** de la variable, y dentro de la caja está el **valor** que almacena.

```javascript
// Creamos una "caja" llamada "nombre" y guardamos "Ana" dentro
let nombre = "Ana";

// Ahora podemos usar el valor
console.log(nombre);  // "Ana"

// Y podemos cambiar lo que hay dentro
nombre = "Luis";
console.log(nombre);  // "Luis"
```

### Las tres formas de declarar variables

JavaScript nos ofrece tres palabras clave para crear variables:

```javascript
// var - La forma antigua (evitar en código moderno)
var nombre = "Ana";

// let - Variable que puede cambiar su valor
let edad = 25;
edad = 26;  // ✅ Permitido

// const - Constante, no puede reasignarse
const PI = 3.14159;
PI = 3.14;  // ❌ Error: Assignment to constant variable
```

### ¿Por qué evitar var?

La palabra clave `var` tiene comportamientos extraños que pueden causar bugs:

**Problema 1: var ignora los bloques**

```javascript
// Con var - la variable "escapa" del bloque
if (true) {
    var mensaje = "Hola";
}
console.log(mensaje);  // "Hola" - ¡Accesible fuera del if!

// Con let - la variable queda contenida
if (true) {
    let saludo = "Hola";
}
console.log(saludo);  // ❌ ReferenceError: saludo is not defined
```

**Problema 2: var permite redeclarar**

```javascript
// Con var - no da error
var usuario = "Ana";
var usuario = "Luis";  // Sobrescribe silenciosamente

// Con let - te avisa del error
let persona = "Ana";
let persona = "Luis";  // ❌ SyntaxError
```

### Diferencias entre var, let y const

| Característica | var | let | const |
|---------------|-----|-----|-------|
| Ámbito | Función | Bloque | Bloque |
| Puede reasignarse | Sí | Sí | No |
| Puede redeclararse | Sí | No | No |
| Usar en código moderno | ❌ Nunca | ✅ Cuando necesites reasignar | ✅ Por defecto |

### El ámbito de bloque explicado

El **ámbito de bloque** significa que la variable solo existe dentro de las llaves `{ }` donde fue declarada:

```javascript
function ejemplo() {
    let a = 1;  // Existe en toda la función
    
    if (true) {
        let b = 2;  // Solo existe dentro del if
        console.log(a);  // ✅ 1
        console.log(b);  // ✅ 2
    }
    
    console.log(a);  // ✅ 1
    console.log(b);  // ❌ Error: b is not defined
}
```

### const no significa inmutable

`const` solo impide **reasignar** la variable, pero si el valor es un objeto o array, **podemos modificar su contenido**:

```javascript
const usuario = {
    nombre: "Ana",
    edad: 25
};

// ❌ No podemos reasignar
usuario = { nombre: "Luis" };  // TypeError

// ✅ Pero SÍ podemos modificar las propiedades
usuario.nombre = "Luis";  // Funciona
usuario.edad = 26;        // Funciona

// Lo mismo con arrays
const numeros = [1, 2, 3];
numeros = [4, 5, 6];  // ❌ TypeError
numeros.push(4);      // ✅ [1, 2, 3, 4]
```

> **Regla práctica**: Usa `const` por defecto para todo. Solo usa `let` cuando realmente necesites reasignar el valor. **Nunca uses `var`**.

---

## 7. Tipos de datos

En JavaScript, cada valor que manejamos tiene un **tipo de dato**. Es importante conocerlos porque determinan qué operaciones podemos hacer con cada valor.

JavaScript tiene dos categorías principales:
- **Tipos primitivos**: Valores simples e inmutables
- **Tipos de objeto**: Estructuras complejas

### 7.1. Tipos primitivos

#### String (cadenas de texto)

Los strings representan texto:

```javascript
// Tres formas de crear strings
let saludo = "Hola mundo";           // Comillas dobles
let nombre = 'Ana García';           // Comillas simples
let mensaje = `Hola, ${nombre}`;     // Backticks (template literal)
```

Los **template literals** (con backticks) tienen superpoderes:

```javascript
const nombre = "Ana";
const edad = 25;

// 1. Interpolación de variables
const presentacion = `Me llamo ${nombre} y tengo ${edad} años`;
// "Me llamo Ana y tengo 25 años"

// 2. Expresiones dentro de ${}
const precio = 100;
const mensaje = `El total con IVA es ${precio * 1.21}€`;
// "El total con IVA es 121€"

// 3. Múltiples líneas
const html = `
    <div class="card">
        <h2>${nombre}</h2>
        <p>Edad: ${edad} años</p>
    </div>
`;
```

> **¿Cuál usar?** Siempre **template literals** (backticks). Son más legibles y permiten interpolación.

#### Number (números)

JavaScript tiene un solo tipo para todos los números:

```javascript
let entero = 42;
let decimal = 3.14159;
let negativo = -273.15;
let notacionCientifica = 2.5e6;  // 2,500,000

// Valores especiales
let infinito = 1 / 0;        // Infinity
let noNumero = "hola" * 5;   // NaN (Not a Number)

// NaN no es igual a sí mismo
console.log(NaN === NaN);    // false
console.log(isNaN(NaN));     // true (usar esto para comprobar)
```

**Cuidado con los decimales:**

```javascript
console.log(0.1 + 0.2);  // 0.30000000000000004 (!!)
// Esto pasa en TODOS los lenguajes con punto flotante
```

#### Boolean (verdadero/falso)

Solo dos valores posibles:

```javascript
let activo = true;
let bloqueado = false;

// Se usan en condiciones
if (activo) {
    console.log("El usuario está activo");
}

// Resultado de comparaciones
let esMayor = 18 >= 18;  // true
```

#### Undefined y Null

Representan "ausencia de valor":

```javascript
// undefined - "no se ha definido ningún valor"
let sinValor;
console.log(sinValor);  // undefined

// null - "intencionalmente vacío"
let vacio = null;

// La diferencia es semántica:
// - undefined: "no sé qué valor tiene"
// - null: "sé que no tiene valor, a propósito"
```

### 7.2. El operador typeof

Para saber qué tipo de dato es un valor:

```javascript
typeof "Hola"        // "string"
typeof 42            // "number"
typeof true          // "boolean"
typeof undefined     // "undefined"
typeof null          // "object"  ← ¡Bug histórico!
typeof {}            // "object"
typeof []            // "object"  ← Los arrays son objetos
typeof function(){}  // "function"
```

### 7.3. Objetos

Los objetos son colecciones de **pares clave-valor**:

```javascript
// Crear un objeto
let persona = {
    nombre: "Ana",
    edad: 25,
    ciudad: "Madrid",
    activo: true
};

// Acceder a propiedades
console.log(persona.nombre);      // "Ana" (notación de punto)
console.log(persona["edad"]);     // 25 (notación de corchetes)

// Modificar propiedades
persona.edad = 26;

// Añadir nuevas propiedades
persona.email = "ana@email.com";

// Eliminar propiedades
delete persona.activo;

// Objetos anidados
let usuario = {
    nombre: "Ana",
    direccion: {
        calle: "Gran Vía",
        ciudad: "Madrid"
    }
};
console.log(usuario.direccion.ciudad);  // "Madrid"
```

### 7.4. Arrays (listas)

Los arrays son listas ordenadas. Cada elemento tiene un índice que empieza en **0**:

```javascript
let frutas = ["manzana", "pera", "naranja"];
//              [0]        [1]      [2]

// Acceder por índice
console.log(frutas[0]);   // "manzana"
console.log(frutas[2]);   // "naranja"

// Propiedad length
console.log(frutas.length);  // 3

// Métodos básicos
frutas.push("uva");      // Añade al final
frutas.pop();            // Elimina del final
frutas.unshift("kiwi");  // Añade al inicio
frutas.shift();          // Elimina del inicio

// Los arrays pueden contener cualquier tipo
let mixto = [42, "texto", true, null, { nombre: "Ana" }, [1, 2, 3]];
```

### 7.5. Valores Falsy y Truthy

En JavaScript, cualquier valor puede evaluarse como `true` o `false` en un contexto booleano.

**Solo hay 8 valores FALSY:**

```javascript
false       // El booleano false
0           // El número cero
-0          // Cero negativo
0n          // BigInt cero
""          // String vacío
null        // Ausencia de valor
undefined   // Sin definir
NaN         // Not a Number
```

**Todo lo demás es TRUTHY**, incluyendo:

```javascript
"0"           // String con "0" (¡no es el número 0!)
"false"       // String con "false" (¡no es el booleano!)
[]            // Array vacío
{}            // Objeto vacío
```

Este comportamiento se usa mucho en condiciones:

```javascript
let nombre = "";

if (nombre) {
    console.log("Tiene nombre");
} else {
    console.log("No tiene nombre");  // Se ejecuta esto
}

// Valores por defecto
let usuario = null;
let nombreMostrar = usuario || "Anónimo";  // "Anónimo"
```

---

## 8. Operadores

Los operadores son símbolos que nos permiten realizar operaciones con valores.

### 8.1. Operadores aritméticos

```javascript
let a = 10;
let b = 3;

a + b    // 13  Suma
a - b    // 7   Resta
a * b    // 30  Multiplicación
a / b    // 3.333...  División
a % b    // 1   Módulo (resto)
a ** b   // 1000  Exponenciación (10³)

// Incremento y decremento
let c = 5;
c++;     // c ahora es 6
c--;     // c ahora es 5
```

### 8.2. Operadores de asignación

```javascript
let x = 10;

x += 5;   // x = x + 5   → 15
x -= 3;   // x = x - 3   → 12
x *= 2;   // x = x * 2   → 24
x /= 4;   // x = x / 4   → 6
```

### 8.3. Operadores de comparación

```javascript
// Igualdad estricta (SIEMPRE usar)
5 === 5        // true
5 === "5"      // false (diferente tipo)
5 !== "5"      // true

// Comparaciones
5 > 3          // true
5 >= 5         // true
3 < 5          // true
3 <= 2         // false
```

### 8.4. Operadores lógicos

```javascript
// AND (&&) - ambos deben ser true
true && true    // true
true && false   // false

// OR (||) - al menos uno debe ser true
true || false   // true
false || false  // false

// NOT (!) - invierte el valor
!true           // false
!false          // true
```

#### Evaluación en cortocircuito

```javascript
// && devuelve el primer valor falsy, o el último si todos son truthy
"Hola" && "Mundo"   // "Mundo"
"Hola" && ""        // ""

// || devuelve el primer valor truthy, o el último si todos son falsy
"" || "default"     // "default"
"valor" || "otro"   // "valor"

// Uso práctico: valores por defecto
let nombre = usuario.nombre || "Anónimo";
```

### 8.5. Nullish Coalescing (??)

El operador `??` solo considera `null` y `undefined` como "vacíos":

```javascript
// Con || los valores falsy como 0 se ignoran
let cantidad = 0;
let resultado = cantidad || 10;  // 10 (0 es falsy)

// Con ?? solo null/undefined se ignoran
let resultado2 = cantidad ?? 10;  // 0 (0 no es null)
```

### 8.6. Optional Chaining (?.)

Comprueba si cada paso existe antes de continuar:

```javascript
let usuario = {
    nombre: "Ana",
    direccion: {
        ciudad: "Madrid"
    }
};

// Sin optional chaining - puede fallar
console.log(usuario.trabajo.empresa);  // ❌ Error

// Con optional chaining - devuelve undefined
console.log(usuario.trabajo?.empresa);  // undefined (no error)
console.log(usuario.direccion?.ciudad); // "Madrid"
```

---

## 9. Estructuras de control

Las estructuras de control nos permiten tomar decisiones y repetir acciones.

### 9.1. Condicionales: if / else

```javascript
let edad = 18;

// if simple
if (edad >= 18) {
    console.log("Eres mayor de edad");
}

// if / else
let hora = 14;
if (hora < 12) {
    console.log("Buenos días");
} else {
    console.log("Buenas tardes");
}

// if / else if / else
let nota = 7;
if (nota >= 9) {
    console.log("Sobresaliente");
} else if (nota >= 7) {
    console.log("Notable");
} else if (nota >= 5) {
    console.log("Aprobado");
} else {
    console.log("Suspenso");
}
```

### 9.2. Operador ternario

Para condiciones simples:

```javascript
// condición ? valorSiTrue : valorSiFalse
let edad = 20;
let mensaje = edad >= 18 ? "Mayor de edad" : "Menor de edad";
```

### 9.3. Switch

Para muchas condiciones sobre el mismo valor:

```javascript
let dia = 3;
let nombre;

switch (dia) {
    case 1:
        nombre = "Lunes";
        break;
    case 2:
        nombre = "Martes";
        break;
    case 3:
        nombre = "Miércoles";
        break;
    default:
        nombre = "Día inválido";
}
```

> **Importante**: No olvides el `break` después de cada caso.

### 9.4. Bucles

#### Bucle while

```javascript
let contador = 0;
while (contador < 5) {
    console.log("Contador:", contador);
    contador++;
}
// 0, 1, 2, 3, 4
```

#### Bucle for

```javascript
for (let i = 0; i < 5; i++) {
    console.log("Iteración:", i);
}
// 0, 1, 2, 3, 4

// Desglose:
// let i = 0   → Se ejecuta una vez al inicio
// i < 5       → Se comprueba antes de cada iteración
// i++         → Se ejecuta después de cada iteración
```

#### Bucle for...of (para arrays)

```javascript
const frutas = ["manzana", "pera", "naranja"];

for (const fruta of frutas) {
    console.log(fruta);
}
// manzana, pera, naranja
```

#### Bucle for...in (para objetos)

```javascript
const persona = {
    nombre: "Ana",
    edad: 25,
    ciudad: "Madrid"
};

for (const propiedad in persona) {
    console.log(`${propiedad}: ${persona[propiedad]}`);
}
// nombre: Ana
// edad: 25
// ciudad: Madrid
```

> **Regla**: Usa `for...of` para arrays y `for...in` para objetos.

---

## 10. Funciones

Las funciones son **bloques de código reutilizables** que realizan una tarea específica.

### ¿Por qué usar funciones?

```javascript
// ❌ Sin funciones - código repetido
let area1 = 10 * 5;
let area2 = 20 * 15;
let area3 = 7 * 3;

// ✅ Con función - código reutilizable
function calcularArea(base, altura) {
    return base * altura;
}

let area1 = calcularArea(10, 5);   // 50
let area2 = calcularArea(20, 15);  // 300
let area3 = calcularArea(7, 3);    // 21
```

### 10.1. Formas de crear funciones

#### Función declarada

```javascript
function saludar(nombre) {
    return "Hola, " + nombre;
}

console.log(saludar("Ana"));  // "Hola, Ana"
```

#### Función expresada

```javascript
const despedir = function(nombre) {
    return "Adiós, " + nombre;
};
```

#### Arrow function (función flecha) - ES6

```javascript
const duplicar = (numero) => {
    return numero * 2;
};

// Versión corta: si solo hay una línea
const triplicar = numero => numero * 3;

// Sin parámetros
const saludar = () => "Hola";

console.log(duplicar(5));   // 10
console.log(triplicar(3));  // 9
```

> **¿Cuál usar?** Las **arrow functions** son las más utilizadas en código moderno por su sintaxis concisa.

### 10.2. Parámetros y argumentos

```javascript
// Parámetros son las variables en la declaración
function suma(a, b) {  // a y b son parámetros
    return a + b;
}

// Argumentos son los valores al llamar
suma(5, 3);  // 5 y 3 son argumentos

// Parámetros por defecto
function saludar(nombre = "visitante") {
    return `Hola, ${nombre}`;
}

saludar();        // "Hola, visitante"
saludar("Ana");   // "Hola, Ana"

// Rest parameters
function sumarTodos(...numeros) {
    let total = 0;
    for (const num of numeros) {
        total += num;
    }
    return total;
}

sumarTodos(1, 2, 3, 4, 5);  // 15
```

### 10.3. Return

La palabra `return` hace dos cosas:
1. Devuelve un valor
2. Termina la ejecución de la función

```javascript
function verificarEdad(edad) {
    if (edad < 0) {
        return "Edad inválida";  // Sale aquí
    }
    
    if (edad < 18) {
        return "Menor de edad";
    }
    
    return "Mayor de edad";
}
```

### 10.4. Funciones callback

Una **callback** es una función que se pasa como argumento a otra función:

```javascript
function procesarUsuario(nombre, callback) {
    console.log("Procesando...");
    callback(nombre);
}

procesarUsuario("Ana", nombre => {
    console.log("Usuario procesado:", nombre);
});

// Muy usadas en métodos de array
const numeros = [1, 2, 3, 4, 5];

// map: transforma cada elemento
const dobles = numeros.map(n => n * 2);  // [2, 4, 6, 8, 10]

// filter: filtra elementos
const pares = numeros.filter(n => n % 2 === 0);  // [2, 4]

// find: encuentra el primero que cumple
const mayor3 = numeros.find(n => n > 3);  // 4
```

---

## 11. Strings: trabajando con texto

Las cadenas de texto son uno de los tipos de datos más utilizados. JavaScript proporciona muchos métodos para manipularlas.

### 11.1. Propiedades y métodos básicos

```javascript
const texto = "JavaScript es genial";

// Longitud
texto.length;  // 20

// Acceso a caracteres
texto[0];           // "J"
texto.charAt(0);    // "J"
texto.at(-1);       // "l" (último carácter)

// Búsqueda
texto.indexOf("es");        // 11 (posición)
texto.indexOf("Python");    // -1 (no encontrado)
texto.includes("genial");   // true
texto.startsWith("Java");   // true
texto.endsWith("genial");   // true

// Extracción
texto.slice(0, 10);         // "JavaScript"
texto.slice(-6);            // "genial"

// Transformación
texto.toUpperCase();        // "JAVASCRIPT ES GENIAL"
texto.toLowerCase();        // "javascript es genial"
texto.trim();               // Elimina espacios al inicio/final
texto.replace("genial", "increíble");  // "JavaScript es increíble"

// División y unión
texto.split(" ");           // ["JavaScript", "es", "genial"]
["Hola", "mundo"].join("-"); // "Hola-mundo"

// Repetición
"Ja".repeat(3);             // "JaJaJa"

// Relleno
"5".padStart(3, "0");       // "005"
"5".padEnd(3, "0");         // "500"
```

---

## 12. Arrays: trabajando con listas

Los arrays son estructuras fundamentales. Prácticamente cualquier aplicación necesita manejar listas de datos.

### 12.1. Métodos que modifican el array (mutables)

```javascript
const frutas = ["manzana", "pera"];

// Añadir
frutas.push("naranja");      // Al final
frutas.unshift("kiwi");      // Al inicio

// Eliminar
frutas.pop();                // Del final
frutas.shift();              // Del inicio

// Modificar en posición
frutas.splice(1, 0, "uva");  // Insertar en posición 1
frutas.splice(1, 1);         // Eliminar 1 elemento en posición 1

// Ordenar
const numeros = [3, 1, 4, 1, 5];
numeros.sort();              // [1, 1, 3, 4, 5]
numeros.reverse();           // [5, 4, 3, 1, 1]
```

### 12.2. Métodos que devuelven nuevo array (inmutables)

```javascript
const original = [1, 2, 3];

// Crear copia
const copia = [...original];

// Concatenar
const nuevo = original.concat([4, 5]);  // [1, 2, 3, 4, 5]

// Extraer porción
original.slice(1);      // [2, 3]
original.slice(0, 2);   // [1, 2]
```

### 12.3. Array functions (Higher Order Functions)

Estos son los métodos más potentes y utilizados:

```javascript
const productos = [
    { nombre: "Laptop", precio: 1000, stock: 5 },
    { nombre: "Mouse", precio: 25, stock: 50 },
    { nombre: "Teclado", precio: 75, stock: 30 },
    { nombre: "Monitor", precio: 300, stock: 10 }
];

// forEach - Ejecutar código para cada elemento
productos.forEach(p => console.log(p.nombre));

// map - Transformar cada elemento
const nombres = productos.map(p => p.nombre);
// ["Laptop", "Mouse", "Teclado", "Monitor"]

// filter - Filtrar elementos
const caros = productos.filter(p => p.precio > 100);
// [{ nombre: "Laptop"... }, { nombre: "Monitor"... }]

// find - Encontrar el primero que cumpla
const laptop = productos.find(p => p.nombre === "Laptop");

// findIndex - Encontrar la posición
const indice = productos.findIndex(p => p.nombre === "Mouse");  // 1

// some - ¿Alguno cumple?
const hayBaratos = productos.some(p => p.precio < 50);  // true

// every - ¿Todos cumplen?
const todosConStock = productos.every(p => p.stock > 0);  // true

// reduce - Reducir a un único valor
const valorTotal = productos.reduce((total, p) => {
    return total + (p.precio * p.stock);
}, 0);
// 11500
```

### 12.4. Encadenamiento de métodos

```javascript
const resultado = productos
    .filter(p => p.precio > 50)
    .map(p => p.nombre)
    .sort()
    .join(", ");
// "Laptop, Monitor, Teclado"
```

> **¿Cuáles son los más usados?** `map` y `filter` con diferencia. `find` para buscar un elemento concreto. `reduce` cuando necesites acumular valores.

### 12.5. Spread operator y desestructuración

```javascript
// Spread operator (...) - "expandir" un array
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combinado = [...arr1, ...arr2];  // [1, 2, 3, 4, 5, 6]

// Desestructuración
const [primero, segundo, ...resto] = [1, 2, 3, 4, 5];
console.log(primero);  // 1
console.log(segundo);  // 2
console.log(resto);    // [3, 4, 5]
```

---

## 13. Objetos: trabajando con estructuras

Los objetos son el corazón de JavaScript. Permiten agrupar datos relacionados.

### 13.1. Métodos de Object

```javascript
const persona = {
    nombre: "Ana",
    edad: 25,
    ciudad: "Madrid"
};

// Obtener claves
Object.keys(persona);     // ["nombre", "edad", "ciudad"]

// Obtener valores
Object.values(persona);   // ["Ana", 25, "Madrid"]

// Obtener pares [clave, valor]
Object.entries(persona);
// [["nombre", "Ana"], ["edad", 25], ["ciudad", "Madrid"]]

// Comprobar propiedad
"nombre" in persona;  // true
```

### 13.2. Desestructuración de objetos

```javascript
const usuario = {
    nombre: "Ana",
    edad: 25,
    ciudad: "Madrid"
};

// Extraer propiedades
const { nombre, edad } = usuario;
console.log(nombre);  // "Ana"

// Renombrar
const { nombre: nombreUsuario } = usuario;

// Valor por defecto
const { pais = "España" } = usuario;

// En parámetros de función
function mostrarUsuario({ nombre, edad }) {
    console.log(`${nombre} tiene ${edad} años`);
}
mostrarUsuario(usuario);
```

### 13.3. Spread operator en objetos

```javascript
const original = { a: 1, b: 2 };

// Copiar
const copia = { ...original };

// Combinar
const extra = { c: 3 };
const combinado = { ...original, ...extra };
// { a: 1, b: 2, c: 3 }

// Sobrescribir
const modificado = { ...original, b: 10 };
// { a: 1, b: 10 }
```

---

## 14. JSON: formato de intercambio de datos

**JSON** (JavaScript Object Notation) es un formato de texto para intercambiar datos. Es usado en prácticamente todas las APIs web.

### 14.1. Sintaxis JSON

```json
{
    "nombre": "Ana García",
    "edad": 25,
    "activo": true,
    "cursos": ["HTML", "CSS", "JavaScript"],
    "direccion": {
        "calle": "Gran Vía",
        "numero": 123
    }
}
```

**Reglas de JSON:**
- Las claves **siempre** van entre comillas dobles
- Los strings usan comillas dobles (no simples)
- No permite comentarios
- No permite comas finales

### 14.2. Conversión JavaScript ↔ JSON

```javascript
// Objeto → JSON string
const usuario = { nombre: "Ana", edad: 25 };
const jsonString = JSON.stringify(usuario);
// '{"nombre":"Ana","edad":25}'

// JSON string → Objeto
const json = '{"nombre":"Ana","edad":25}';
const objeto = JSON.parse(json);
// { nombre: "Ana", edad: 25 }

// Con formato legible
const formateado = JSON.stringify(usuario, null, 2);
/*
{
  "nombre": "Ana",
  "edad": 25
}
*/
```


### 15 La desestructuración (destructuring) 

Es una expresión de JavaScript introducida en ES6 que permite desempacar valores de arrays o propiedades de objetos en variables distintas de manera sencilla y en una sola línea.

## Concepto básico

La desestructuración te permite extraer datos de estructuras complejas (arrays, objetos, mapas y sets) y crear nuevas variables con esos datos de forma directa, sin tener que acceder a cada elemento individualmente.

## Desestructuración de objetos

Usa llaves `{}` en el lado izquierdo de una asignación para indicar que estás desestructurando un objeto: [lenguajejs](https://lenguajejs.com/javascript/objetos/desestructuracion-objetos/)

```javascript
const usuario = {
  firstName: "Juan",
  lastName: "Pérez",
  age: 30
};

const { firstName, lastName } = usuario;
console.log(firstName); // "Juan"
console.log(lastName);  // "Pérez"
```

Puedes asignar valores por defecto y renombrar variables: 

```javascript
const { firstName: nombre, age: edad = 18 } = usuario;
console.log(nombre); // "Juan"
console.log(edad);   // 30
```

## Desestructuración de arrays

Usa corchetes `[]` y se basa en la posición de los elementos en el array: 

```javascript
const colores = ["rojo", "amarillo", "verde"];

const [primero, segundo, tercero] = colores;
console.log(primero);  // "rojo"
console.log(segundo);  // "amarillo"
```

Puedes "saltarte" elementos que no te interesan dejando espacios vacíos: 

```javascript
const [primero, , tercero] = colores;
console.log(primero);  // "rojo"
console.log(tercero);  // "verde"
```

## Ventajas principales

- **Menos código**: Extraes múltiples valores en una sola línea en lugar de hacer múltiples asignaciones 
- **Mayor legibilidad**: El código es más claro y expresivo
- **Útil en funciones**: Puedes desestructurar parámetros directamente: 

```javascript
function mostrarMenu({ title = "Sin título", width = 200, height = 100 }) {
  console.log(`${title} ${width} ${height}`);
}

mostrarMenu({ title: "Mi Menú", width: 300 }); 
// "Mi Menú 300 100"
```
---

## 15. Recursos y referencias

### Documentación oficial
- **MDN Web Docs**: https://developer.mozilla.org/es/docs/Web/JavaScript
- **JavaScript.info**: https://javascript.info/
- **LenguajeJS**: https://lenguajejs.com/javascript/

### Práctica
- **Eloquent JavaScript**: https://eloquentjavascript.net/
- **JavaScript30**: https://javascript30.com/

### Herramientas
- **Can I Use**: https://caniuse.com/
- **ESLint**: https://eslint.org/

---

## Criterios de evaluación (RA3)

| Criterio | Descripción |
|----------|-------------|
| a) | Se han identificado las características del lenguaje JavaScript |
| b) | Se han identificado los objetos del DOM y los métodos de acceso |
| c) | Se han creado elementos del DOM mediante JavaScript |
| d) | Se ha modificado el contenido de elementos del DOM |
| e) | Se han asociado acciones a eventos del DOM |
| f) | Se han identificado elementos de la interfaz de usuario |

---



