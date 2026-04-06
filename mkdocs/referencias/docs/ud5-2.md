---
hide:
  - navigation
---

# 5.2.0 — Callbacks y asincronía en JavaScript

## JavaScript hace una cosa a la vez

Antes de entrar en APIs y Promises, hay que entender algo fundamental sobre cómo funciona JavaScript: es **single-threaded**. Eso significa que solo puede hacer una cosa a la vez. No dos. No en paralelo. Una.

Cuando ejecutas este código:

```javascript
console.log('uno');
console.log('dos');
console.log('tres');
```

JavaScript ejecuta la primera línea, la termina, ejecuta la segunda, la termina, ejecuta la tercera. En orden, sin interrupciones. A eso se le llama ejecución **síncrona**.

El problema llega cuando una de esas operaciones tarda mucho. Si JavaScript tiene que esperar a que un servidor responda antes de pasar a la siguiente línea, la página entera se congela durante ese tiempo. El usuario no puede hacer clic en nada, el scroll no responde, todo se bloquea. Eso es inaceptable en una aplicación web.

La solución es la **asincronía**: una forma de decirle a JavaScript *"empieza esta operación, y cuando termine ya me avisas — mientras tanto sigo con lo demás"*.

Para entender cómo funciona eso, primero hay que entender el **Event Loop**.

## El Event Loop: cómo JavaScript gestiona el tiempo

Aunque JavaScript es single-threaded, el navegador no lo es. El navegador tiene varios mecanismos que trabajan en paralelo con JavaScript:

- **La pila de llamadas (Call Stack)** — donde se ejecuta el código JavaScript, una función a la vez.
- **Las Web APIs** — funciones que el navegador ejecuta por su cuenta: temporizadores, peticiones de red, eventos del DOM...
- **La cola de tareas (Task Queue)** — donde esperan los callbacks listos para ejecutarse.
- **El Event Loop** — el mecanismo que mueve callbacks de la cola a la pila cuando la pila está vacía.

Veámoslo con un ejemplo simple usando `setTimeout`, que es la forma más básica de asincronía:

```javascript
console.log('inicio');

setTimeout(() => {
    console.log('esto es asíncrono');
}, 2000);

console.log('fin');
```

¿Qué imprime esto y en qué orden?

```
inicio
fin
esto es asíncrono   ← aparece 2 segundos después
```

Lo que ha pasado por dentro:

1. `console.log('inicio')` entra en la pila, se ejecuta, sale.
2. `setTimeout` entra en la pila. JavaScript le pasa el temporizador al navegador y sale de la pila **sin esperar**.
3. `console.log('fin')` entra en la pila, se ejecuta, sale.
4. La pila está vacía. El navegador ha estado contando los 2 segundos en segundo plano.
5. Cuando el temporizador termina, el callback `() => console.log('esto es asíncrono')` pasa a la cola de tareas.
6. El Event Loop ve que la pila está vacía y mueve el callback a la pila.
7. El callback se ejecuta.

Esto explica algo que sorprende al principio: **un `setTimeout` con 0 milisegundos no se ejecuta inmediatamente**:

```javascript
console.log('uno');

setTimeout(() => console.log('dos'), 0);

console.log('tres');

// uno
// tres
// dos
```

Aunque el tiempo es cero, el callback pasa por la cola de tareas y no puede ejecutarse hasta que la pila esté vacía. `'tres'` siempre va antes.

## Callbacks: funciones que se llaman después

Un **callback** es simplemente una función que le pasas a otra función para que la llame cuando termine su trabajo. Es el mecanismo más básico de asincronía en JavaScript y lleva ahí desde el principio.

Ya los has usado sin darte cuenta:

```javascript
// addEventListener recibe un callback
document.querySelector('button').addEventListener('click', () => {
    console.log('botón pulsado');
});

// forEach recibe un callback
[1, 2, 3].forEach(numero => {
    console.log(numero);
});

// setTimeout recibe un callback
setTimeout(() => {
    console.log('han pasado 2 segundos');
}, 2000);
```

En todos estos casos estás pasando una función como argumento. Esa función no se ejecuta ahora — se ejecuta después, cuando ocurre algo: un clic, cada iteración del array, el paso del tiempo.

### Callbacks en operaciones asíncronas

Donde los callbacks se complican es cuando los usas para gestionar operaciones que tardan tiempo, como peticiones de red. El patrón clásico es este:

```javascript
function obtenerUsuario(id, callback) {
    // Simulamos una petición que tarda 1 segundo
    setTimeout(() => {
        const usuario = { id: id, nombre: 'Lucía' };
        callback(usuario);
    }, 1000);
}

obtenerUsuario(1, usuario => {
    console.log('Usuario recibido:', usuario.nombre);
});

console.log('Esta línea se ejecuta antes que el usuario');
```

La función `obtenerUsuario` acepta un `id` y un `callback`. Cuando tiene los datos listos, llama al callback pasándole el resultado. Tú defines qué hacer con esos datos en la función que pasas.

### El problema: Callback Hell

Ahora imagina que necesitas encadenar varias operaciones asíncronas: primero obtienes el usuario, después sus pedidos, después los detalles de cada pedido...

```javascript
obtenerUsuario(1, usuario => {
    obtenerPedidos(usuario.id, pedidos => {
        obtenerDetalles(pedidos[0].id, detalles => {
            obtenerFactura(detalles.facturaId, factura => {
                console.log('Factura:', factura);
                // ¿Necesitas otro paso? Otro nivel más...
            });
        });
    });
});
```

Esto tiene un nombre: **Callback Hell**, o pirámide de la muerte. El código se va indentando hacia la derecha indefinidamente y se vuelve imposible de leer, de mantener y de depurar. Si en algún punto ocurre un error, propagarlo correctamente por todos los niveles es una pesadilla.

Este problema es exactamente la razón por la que se inventaron las Promises.

## Promises: una forma mejor de gestionar el tiempo

Una **Promise** resuelve el Callback Hell ofreciendo una forma de encadenar operaciones asíncronas de forma lineal, en lugar de anidada.

El mismo ejemplo anterior con Promises quedaría así:

```javascript
obtenerUsuario(1)
    .then(usuario => obtenerPedidos(usuario.id))
    .then(pedidos => obtenerDetalles(pedidos[0].id))
    .then(detalles => obtenerFactura(detalles.facturaId))
    .then(factura => console.log('Factura:', factura))
    .catch(error => console.error('Algo falló:', error));
```

Plano, lineal, un solo `.catch()` para todos los errores. Mucho más manejable.

### Cómo funciona una Promise por dentro

Una Promise es un objeto que representa un valor que todavía no existe pero existirá en el futuro — o fallará. Tiene tres estados:

- **Pending** — esperando resultado.
- **Fulfilled** — completada con éxito.
- **Rejected** — falló.

Una vez que pasa de *pending* a cualquiera de los otros dos, **no puede volver atrás ni cambiar de estado**.

Cuando creas una Promise le pasas una función con dos argumentos: `resolve` y `reject`. Llamas a `resolve(valor)` cuando todo va bien, y a `reject(error)` cuando algo falla:

```javascript
function esperar(segundos) {
    return new Promise((resolve, reject) => {
        if (segundos < 0) {
            reject(new Error('Los segundos no pueden ser negativos'));
            return;
        }
        setTimeout(() => {
            resolve(`Han pasado ${segundos} segundos`);
        }, segundos * 1000);
    });
}

esperar(2)
    .then(mensaje => console.log(mensaje))
    .catch(error => console.error(error.message));

esperar(-1)
    .then(mensaje => console.log(mensaje))
    .catch(error => console.error(error.message));
```

### Encadenar Promises

Cada `.then()` puede devolver un valor o una nueva Promise. Si devuelve un valor, el siguiente `.then()` lo recibe directamente. Si devuelve una Promise, el siguiente `.then()` espera a que se resuelva:

```javascript
esperar(1)
    .then(mensaje => {
        console.log(mensaje);       // 'Han pasado 1 segundos'
        return esperar(1);          // Devuelve una nueva Promise
    })
    .then(mensaje => {
        console.log(mensaje);       // 'Han pasado 1 segundos'
        return 'valor directo';     // Devuelve un valor normal
    })
    .then(valor => {
        console.log(valor);         // 'valor directo'
    });
```

---

## async / await: Promises con orden.

`async/await` es la evolución final. Por debajo sigue siendo Promises — el navegador las convierte automáticamente — pero la sintaxis se parece a código síncrono normal, lo que hace el código mucho más fácil de leer y de depurar.

```javascript
// Con Promises y .then()
function cargarDatos() {
    return obtenerUsuario(1)
        .then(usuario => obtenerPedidos(usuario.id))
        .then(pedidos => obtenerDetalles(pedidos[0].id))
        .catch(error => console.error(error));
}

// Con async/await — exactamente lo mismo, pero de forma más organizada
async function cargarDatos() {
    try {
        const usuario  = await obtenerUsuario(1);
        const pedidos  = await obtenerPedidos(usuario.id);
        const detalles = await obtenerDetalles(pedidos[0].id);
        return detalles;
    } catch (error) {
        console.error(error);
    }
}
```

`await` pausa la ejecución de la función `async` en ese punto y espera a que la Promise se resuelva. La función no bloquea el hilo principal — otras cosas pueden seguir ejecutándose mientras espera. Solo esa función está pausada.

### Las funciones async siempre devuelven una Promise

Este es el punto que más confusión genera. Cuando declaras una función con `async`, aunque hagas `return` de un valor normal, JavaScript lo envuelve automáticamente en una Promise:

```javascript
async function obtenerNombre() {
    return 'Lucía'; // Parece que devuelve un string...
}

const nombre = obtenerNombre();
console.log(nombre); // Promise { 'Lucía' } — no es un string, es una Promise
```

Para acceder al valor tienes que esperarla:

```javascript
// Dentro de otra función async
async function main() {
    const nombre = await obtenerNombre();
    console.log(nombre); // 'Lucía'
}

// Fuera de una función async
obtenerNombre().then(nombre => console.log(nombre)); // 'Lucía'
```

Una función `async` no puede "escapar" de ser asíncrona. Si necesitas su valor, tienes que recibirlo de forma asíncrona también.

### Gestión de errores con try/catch

Con `.then()` los errores se capturaban en `.catch()`. Con `async/await` se usa `try/catch`, que es el mecanismo estándar de gestión de errores de JavaScript:

```javascript
async function cargar() {
    try {
        const usuario = await obtenerUsuario(1);
        const pedidos = await obtenerPedidos(usuario.id);
        console.log(pedidos);
    } catch (error) {
        // Captura cualquier error de toda la cadena
        console.error('Algo fue mal:', error.message);
    }
}
```

## El camino completo

Ahora que tienes el contexto completo, tiene sentido ver la evolución resumida:

**1. Callbacks** — el origen. Simples pero se vuelven inmanejables cuando se anidan.

```javascript
obtenerUsuario(1, usuario => {
    obtenerPedidos(usuario.id, pedidos => {
        // pirámide creciente...
    });
});
```

**2. Promises** — resuelven el anidamiento con cadenas planas y un `.catch()` centralizado.

```javascript
obtenerUsuario(1)
    .then(usuario => obtenerPedidos(usuario.id))
    .then(pedidos => console.log(pedidos))
    .catch(error => console.error(error));
```

**3. async/await** — la misma lógica con la legibilidad del código síncrono.

```javascript
async function cargar() {
    try {
        const usuario = await obtenerUsuario(1);
        const pedidos = await obtenerPedidos(usuario.id);
        console.log(pedidos);
    } catch (error) {
        console.error(error);
    }
}
```

Los tres mecanismos conviven en el código real. Los callbacks no han desaparecido — `addEventListener`, `forEach`, `setTimeout` los siguen usando. Las Promises aparecen constantemente en librerías. Y `async/await` es lo que escribes tú cuando creas código nuevo.

## Ejercicios

Practica con `setTimeout` para sentirte con mayor comodidad con la asincronía antes de añadir la complejidad de la red. En la siguiente unidad usarás todo esto con `fetch` y APIs reales.

**Ejercicio 1 — callbacks:**
Escribe una función `esperar(tiempo, callback)` que llame al callback después de `tiempo` milisegundos. Úsala para encadenar tres mensajes con un segundo de diferencia entre cada uno.

**Ejercicio 2 — Promises:**
Convierte la función anterior para que devuelva una Promise en lugar de aceptar un callback. Encadena tres `esperar()` con `.then()`.

**Ejercicio 3 — async/await:**
Reescribe el ejercicio 2 usando `async/await` y `try/catch`. ¿Cuántas líneas menos necesitas?

Cuando los tres ejercicios funcionen y entiendas por qué cada uno funciona como funciona, estás listo para la siguiente unidad.
