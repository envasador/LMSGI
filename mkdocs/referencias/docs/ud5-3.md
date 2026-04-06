---
hide:
  - navigation
---


# 5.3 — Fetch y APIs

## 1. De la teoría a la práctica

En la unidad anterior aprendiste cómo funciona la asincronía en JavaScript: callbacks, Promises, async/await. Ahora vamos a usarlo con algo real.

Una **API** (Application Programming Interface) es una puerta trasera que un servicio ofrece para que otras aplicaciones puedan pedir sus datos. Tú haces una petición a una URL y recibes un JSON con la información que necesitas. El tiempo de espera de esa petición es exactamente el tipo de operación asíncrona que viste en la unidad anterior.

La herramienta que usarás para hacer esas peticiones es `fetch`.

## 2. Fetch API

`fetch` es la función nativa de JavaScript para hacer peticiones HTTP. Le pasas una URL y te devuelve una Promise que, cuando se resuelve, contiene la respuesta del servidor.

```javascript
fetch('https://una-api.com/datos')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
```

Hay dos `.then()` encadenados. El primero recibe el objeto `response`, que es la respuesta HTTP en bruto — con cabeceras, código de estado, etc., pero sin los datos todavía. Para extraer el cuerpo como JSON llamamos a `response.json()`, que devuelve otra Promise. El segundo ya recibe los datos parseados, listos para usar.

### Códigos de estado HTTP

Cuando un servidor responde a tu petición, siempre incluye un **código de estado** que indica qué ha pasado:

| Código | Significado |
|--------|-------------|
| `200` | OK — todo fue bien |
| `201` | Created — el recurso se creó correctamente |
| `400` | Bad Request — la petición está mal formada |
| `401` | Unauthorized — necesitas autenticarte |
| `403` | Forbidden — autenticado pero sin permiso |
| `404` | Not Found — el recurso no existe |
| `500` | Internal Server Error — el servidor ha petado |

`response.ok` es `true` cuando el código está entre `200` y `299`, y `false` para todo lo demás. `response.status` te da el número exacto por si necesitas distinguir entre un `401` y un `404`.

### throw: lanzar errores manualmente

`fetch` no lanza error automáticamente cuando el servidor responde con un `404` o un `500`. La petición técnicamente llegó y tuvo respuesta, así que `fetch` la considera resuelta. Eres tú quien tiene que comprobar si fue exitosa y lanzar el error si no lo fue.

`throw` es la forma de lanzar un error manualmente. Cuando lo ejecutas, la función para en ese punto y el error salta al `catch` más cercano:

```javascript
fetch('https://pokeapi.co/api/v2/pokemon/pikachuu')
    .then(response => {
        if (!response.ok) {
            throw new Error(`Error ${response.status}: Pokémon no encontrado`);
        }
        return response.json();
    })
    .catch(error => console.error(error.message));
```

`throw` no es exclusivo de `fetch` — puedes usarlo en cualquier función para señalar que algo no debería haber ocurrido:

```javascript
function calcularDescuento(precio, porcentaje) {
    if (precio < 0)       throw new Error('El precio no puede ser negativo');
    if (porcentaje > 100) throw new Error('El porcentaje no puede superar 100');
    return precio * (1 - porcentaje / 100);
}
```

## 3. Fetch con async/await

La misma petición escrita con `async/await` es mucho más fácil de seguir:

```javascript
async function obtenerDatos(url) {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Error ${response.status}`);
        }

        const data = await response.json();
        return data;

    } catch (error) {
        console.error('Algo fue mal:', error.message);
    }
}
```

A partir de aquí usaremos siempre `async/await`. Es el estilo moderno y el que encontrarás en proyectos reales.

## 4. Un ejemplo real: la PokéAPI

La [PokéAPI](https://pokeapi.co) tiene datos de todos los Pokémon, es gratuita y no requiere registro. Es perfecta para practicar.

```javascript
async function obtenerPokemon(nombre) {
    try {
        const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${nombre}`
        );

        if (!response.ok) {
            throw new Error(`Error ${response.status}: "${nombre}" no encontrado`);
        }

        const data = await response.json();

        console.log('Nombre:', data.name);
        console.log('Altura:', data.height, 'dm');
        console.log('Peso:',   data.weight, 'hg');

        const tipos = data.types.map(t => t.type.name).join(', ');
        console.log('Tipos:', tipos);

    } catch (error) {
        console.error('Error:', error.message);
    }
}

obtenerPokemon('pikachu');
```

Pruébalo en la consola del navegador ahora mismo. Si todo va bien deberías ver los datos de Pikachu en décimas de segundo.

## Varias peticiones a la vez: Promise.all

A veces necesitas hacer varias peticiones simultáneas y esperar a que todas terminen. Hacerlo en secuencia con varios `await` es innecesariamente lento — cada petición esperaría a que termine la anterior:

```javascript
// Lento — secuencial
const pikachu    = await fetch('.../pikachu').then(r => r.json());
const charmander = await fetch('.../charmander').then(r => r.json());
const squirtle   = await fetch('.../squirtle').then(r => r.json());
```

`Promise.all` lanza todas a la vez y espera a que todas se resuelvan:

```javascript
async function obtenerVariosPokemon() {
    try {
        const [res1, res2, res3] = await Promise.all([
            fetch('https://pokeapi.co/api/v2/pokemon/pikachu'),
            fetch('https://pokeapi.co/api/v2/pokemon/charmander'),
            fetch('https://pokeapi.co/api/v2/pokemon/squirtle')
        ]);

        const [pikachu, charmander, squirtle] = await Promise.all([
            res1.json(), res2.json(), res3.json()
        ]);

        console.log(pikachu.name, charmander.name, squirtle.name);

    } catch (error) {
        console.error('Error:', error.message);
    }
}
```

Hay un detalle importante: **si cualquiera de las Promises falla, `Promise.all` falla entera**. No espera al resto ni te da los resultados parciales. Si necesitas que los errores individuales no cancelen las demás, usa `Promise.allSettled`:

```javascript
const resultados = await Promise.allSettled([
    fetch('.../pikachu'),
    fetch('.../esto-no-existe'),
    fetch('.../squirtle')
]);

resultados.forEach(resultado => {
    if (resultado.status === 'fulfilled') {
        console.log('OK:', resultado.value);
    } else {
        console.log('Falló:', resultado.reason);
    }
});
```

`Promise.allSettled` siempre espera a todas y te devuelve el estado de cada una — sin que el fallo de una afecte a las demás.

## POST: enviar datos a un servidor

Hasta ahora solo hemos leído datos con `GET`. Pero `fetch` también puede **enviar** datos. Para eso usas el método `POST`, e incluyes el cuerpo de la petición con los datos que quieres mandar.

Para practicar usaremos **JSONPlaceholder** ([jsonplaceholder.typicode.com](https://jsonplaceholder.typicode.com)), una API falsa diseñada para esto. Acepta peticiones y responde como si las procesara, sin guardar nada realmente.

```javascript
async function crearPost(titulo, contenido) {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title:  titulo,
                body:   contenido,
                userId: 1
            })
        });

        if (!response.ok) throw new Error(`Error ${response.status}`);

        const data = await response.json();
        console.log('Creado con id:', data.id);
        return data;

    } catch (error) {
        console.error('Error:', error.message);
    }
}

crearPost('Mi primer post', 'Contenido del post');
```

Fíjate en las tres diferencias respecto a un `fetch` normal:

**`method: 'POST'`** — por defecto `fetch` hace GET. Para cualquier otro método tienes que indicarlo.

**`headers`** — le dice al servidor que el cuerpo está en formato JSON. Sin esto el servidor puede no saber cómo interpretar los datos.

**`body`** — el contenido que envías, convertido a string con `JSON.stringify`. `fetch` solo puede enviar texto.

## Axios: cuando fetch se queda corto

`fetch` es nativo y funciona bien, pero en proyectos reales tiene algunas limitaciones: no lanza error en respuestas `4xx` o `5xx` automáticamente, no tiene timeout nativo y siempre necesitas el segundo `await response.json()`.

**Axios** es la librería HTTP más popular del ecosistema JavaScript y resuelve todo eso:

```html
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
```

```javascript
async function obtenerPokemon(nombre) {
    try {
        const { data } = await axios.get(
            `https://pokeapi.co/api/v2/pokemon/${nombre}`
        );

        console.log('Nombre:', data.name);
        console.log('Altura:', data.height, 'dm');

    } catch (error) {
        if (error.response) {
            console.error(`Error ${error.response.status}: no encontrado`);
        } else {
            console.error('Error de red:', error.message);
        }
    }
}
```

Axios devuelve el JSON directamente en `data` sin necesitar `.json()`, y lanza el error automáticamente si el servidor responde con un código de error. Dentro del `catch`, `error.response` contiene la respuesta si hubo una, o es `undefined` si el problema fue de red.

## Herramientas para explorar APIs

Antes de escribir una sola línea de código, explora la API con alguna de estas herramientas. La idea es entender qué devuelve y qué campos te interesan *antes* de programar.

**Postman** es la más completa. Permite hacer peticiones, guardar colecciones, añadir cabeceras y autenticación. Imprescindible cuando la API requiere autenticación o tiene muchos endpoints.

**Hoppscotch** ([hoppscotch.io](https://hoppscotch.io)) funciona directamente en el navegador sin instalar nada. Para APIs públicas es perfecta.

**Thunder Client** es una extensión de VS Code que hace lo mismo sin salir del editor.

## Ejercicio: buscador de Pokémon

Construye un buscador que muestre los datos del Pokémon en la página, con gestión de errores y feedback visual.

### HTML

```html
<input type="text" id="input-pokemon" placeholder="Buscar Pokémon...">
<button id="btn-buscar">Buscar</button>
<div id="resultado"></div>
```

### JavaScript

```javascript
const input     = document.querySelector('#input-pokemon');
const btnBuscar = document.querySelector('#btn-buscar');
const resultado = document.querySelector('#resultado');

async function buscar() {
    const nombre = input.value.trim().toLowerCase();
    if (!nombre) return;

    resultado.innerHTML = '<p>Buscando...</p>';

    try {
        const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${nombre}`
        );

        if (!response.ok) {
            throw new Error(`Error ${response.status}: no se encontró "${nombre}"`);
        }

        const data     = await response.json();
        const tipos    = data.types.map(t => t.type.name).join(', ');

        resultado.innerHTML = `
            <h2>${data.name}</h2>
            <img src="${data.sprites.front_default}" alt="${data.name}">
            <p><strong>Altura:</strong> ${data.height} dm</p>
            <p><strong>Peso:</strong>   ${data.weight} hg</p>
            <p><strong>Tipos:</strong>  ${tipos}</p>
        `;

    } catch (error) {
        resultado.innerHTML = `<p style="color:red">${error.message}</p>`;
    }
}

btnBuscar.addEventListener('click', buscar);
input.addEventListener('keydown', e => e.key === 'Enter' && buscar());
```

Usamos `querySelector` en lugar de `getElementById` porque funciona con cualquier selector CSS — una sola forma de seleccionar elementos para todo.

### Para ir más lejos

- Sustituye `fetch` por `axios` y observa cómo simplifica el código.
- Usa `Promise.all` para buscar tres Pokémon a la vez y mostrarlos en fila.
- Deshabilita el botón mientras se hace la petición para evitar clics múltiples.
- ¿Qué pasa si el usuario busca con el input vacío? ¿Está bien controlado?

En la siguiente unidad guardaremos estos datos para que persistan entre recargas.
