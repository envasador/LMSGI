---
hide:
  - navigation
---

# 5.4— Persistencia, caché y almacenamiento en la nube

## El problema de la memoria efímera

Una variable existe mientras el script está en ejecución. En el momento en que el usuario cierra la pestaña o recarga la página, desaparece. Para la mayoría de las operaciones eso no importa, pero hay datos que una aplicación necesita recordar entre sesiones: qué tiene el usuario en su lista, qué buscó ayer, qué configuración eligió la semana pasada.

Resolver ese problema es lo que se llama **persistencia**: la capacidad de un sistema para conservar datos más allá del tiempo de ejecución del programa que los creó.

En el desarrollo web, la persistencia puede resolverse en distintas capas. Algunas viven en el navegador del usuario; otras, en un servidor remoto. Entender qué resuelve cada una —y qué no resuelve— es la base para tomar decisiones de diseño fundadas.

## localStorage: persistencia en el navegador

`localStorage` es un mecanismo de almacenamiento que los navegadores ponen a disposición de las aplicaciones web. A diferencia de una variable, su contenido no desaparece al cerrar la pestaña ni al apagar el ordenador. Los datos permanecen asociados al dominio que los escribió hasta que se eliminan explícitamente, ya sea desde el código o desde las herramientas del navegador.

Su modelo de datos es deliberadamente simple: pares clave-valor donde tanto la clave como el valor son siempre texto. No hay tipos, no hay estructuras, no hay relaciones. Para guardar un objeto hay que convertirlo a string antes de escribirlo, y convertirlo de vuelta al leerlo:

```javascript
// Guardar
localStorage.setItem('usuario', JSON.stringify({ nombre: 'Ana', tema: 'oscuro' }));

// Leer
const datos = localStorage.getItem('usuario');
const usuario = datos ? JSON.parse(datos) : null;
```

Esa conversión es siempre necesaria. Y la comprobación de `null` también: si la clave no existe, `getItem` devuelve `null`, y hacer `JSON.parse(null)` lanza un error.

La contrapartida de su simplicidad es la velocidad: es instantáneo, síncrono y no requiere conexión a ningún servidor. El límite de almacenamiento es de aproximadamente 5 MB por dominio, lo que lo hace adecuado para datos ligeros pero completamente inadecuado para ficheros, imágenes o volúmenes grandes de información.

### sessionStorage: la variante temporal

Existe una variante llamada `sessionStorage` con el mismo modelo de datos y la misma API, pero con un alcance temporal más reducido: sus datos desaparecen al cerrar la pestaña. Es útil cuando se necesita mantener estado durante una sesión de navegación —un formulario en varios pasos, por ejemplo— sin que esos datos persistan más allá.

### Cookies: almacenamiento con caducidad

Las cookies son otro mecanismo del navegador, más antiguo, con características distintas. Tienen fecha de caducidad configurable, su tamaño es muy reducido (unos 4 KB) y, a diferencia de localStorage, viajan automáticamente con cada petición HTTP al servidor. Eso las hace útiles para gestión de sesiones de autenticación, pero poco prácticas para guardar datos de aplicación de cualquier volumen.

## El patrón de caché

Uno de los usos más comunes de localStorage no es guardar datos del usuario sino guardar **respuestas de una API**. La idea es sencilla: si ya has pedido un dato al servidor una vez y ese dato no va a cambiar, tiene sentido guardarlo localmente para no tener que pedirlo de nuevo.

Ese patrón se llama **caché**. La lógica siempre sigue la misma estructura:

```javascript
async function obtenerDato(id) {
    const cacheKey = `dato_${id}`;
    const cached   = localStorage.getItem(cacheKey);

    if (cached) return JSON.parse(cached);          // devuelvo lo que tengo

    const data = await fetch(`/api/datos/${id}`)    // si no, lo pido
                       .then(r => r.json());

    localStorage.setItem(cacheKey, JSON.stringify(data)); // lo guardo
    return data;
}
```

Cuando el usuario solicita algo, la aplicación comprueba primero si ya tiene la respuesta guardada. Si la tiene, la devuelve directamente sin hacer ninguna petición a la red. Si no la tiene, la pide al servidor, la devuelve al usuario y la guarda para la próxima vez.

La caché reduce el tiempo de respuesta —leer de localStorage es instantáneo comparado con una petición de red— y reduce el número de llamadas al servidor, lo que puede ser importante cuando la API tiene límites de uso.

Pero también tiene un riesgo: si los datos de la API cambian, la caché puede servir información desactualizada. Gestionar esa caducidad —decidir cuándo un dato en caché sigue siendo válido y cuándo hay que volver a pedirlo— es uno de los problemas clásicos de la informática. No hay una solución universal: depende de con qué frecuencia cambian los datos y de cuánto importa que estén actualizados.

## Las limitaciones de localStorage

localStorage resuelve bien la persistencia local, pero tiene un límite estructural: los datos viven en el dispositivo del usuario y solo en ese dispositivo.

Si el mismo usuario abre la aplicación desde su móvil, no verá los datos que guardó desde el ordenador. Si dos usuarios quieren acceder a la misma información, es imposible. Si el usuario limpia el caché del navegador o cambia de navegador, los datos desaparecen.

Esas limitaciones no son fallos de diseño de localStorage —es exactamente lo que promete ser: almacenamiento local. El problema es cuando se intenta usar para casos de uso que necesitan algo más. Cuando los datos tienen que estar disponibles en cualquier dispositivo, en cualquier sesión, para cualquier usuario con acceso, el almacenamiento local ya no es la herramienta adecuada. Se necesita un servidor.

## Almacenamiento en la nube: bases de datos remotas

Una base de datos remota resuelve todos los problemas que localStorage no puede resolver. Los datos viven en un servidor accesible desde internet: el mismo dato está disponible desde cualquier dispositivo, para cualquier usuario autorizado, en cualquier momento. No depende del navegador ni del historial de caché de nadie.

La contrapartida es que toda operación —leer, escribir, borrar— implica una comunicación de red. Las operaciones son asíncronas: no se sabe de antemano cuánto tardarán, pueden fallar por problemas de conectividad y hay que gestionarlas de forma diferente al código síncrono.

Existen muchos tipos de bases de datos remotas. Las **relacionales** organizan los datos en tablas con esquemas fijos y relaciones entre ellas. Las **documentales** organizan los datos en colecciones de documentos con estructura flexible. Las **en tiempo real** sincronizan los cambios automáticamente entre todos los clientes conectados. Cada modelo tiene sus casos de uso; ninguno es universalmente mejor que los demás.

## Firebase Firestore

Firebase es una plataforma de servicios de backend mantenida por Google, orientada a facilitar el desarrollo de aplicaciones web y móviles sin necesidad de gestionar infraestructura propia. Uno de sus servicios principales es **Firestore**: una base de datos documental en la nube.

Firestore organiza los datos en **colecciones** de **documentos**. Una colección es un contenedor con nombre; un documento es un objeto con campos y valores, identificado por un ID único. La estructura es flexible: dos documentos de la misma colección pueden tener campos distintos.

Las operaciones básicas —añadir, leer, eliminar— son asíncronas y se trabajan con `async/await`. Un ejemplo mínimo de lectura:

```javascript
const snapshot = await getDocs(collection(db, 'favoritos'));
const favoritos = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
```

Hay un detalle importante en ese código: el `id` del documento no viene dentro de `doc.data()`. Firestore los separa, y hay que extraerlo aparte. Ese `id` es lo que necesitarás después para poder eliminar o actualizar ese documento concreto.

Las operaciones con Firestore pueden fallar —por problemas de red, por reglas de seguridad, por IDs inexistentes— y todos esos casos deben gestionarse con `try/catch`. Un error que no se muestra al usuario es como si la operación no tuviera feedback: la persona no sabe si el dato se ha guardado o no, y eso es un fallo de la aplicación.

### Reglas de seguridad

El acceso a una base de datos remota necesita control. Firestore gestiona eso mediante **reglas de seguridad**: condiciones configurables que determinan quién puede leer o escribir qué datos. Sin reglas, cualquier persona con acceso a la configuración del proyecto podría leer y modificar todos los datos.

Durante el desarrollo, Firestore ofrece un modo de acceso abierto que permite trabajar sin configurar autenticación. Ese modo es temporal y no es adecuado para una aplicación en producción. En un sistema real, las reglas se definen para que cada usuario solo pueda acceder a sus propios datos, lo que requiere combinar Firestore con un sistema de autenticación.

## localStorage y Firestore: no son alternativas, son capas distintas

Una confusión habitual es pensar que hay que elegir entre uno u otro. En la mayoría de las aplicaciones reales, ambos tienen su lugar con propósitos distintos.

localStorage es adecuado para datos que tienen sentido que sean locales: preferencias de interfaz, caché de respuestas de API, estado temporal de una sesión. Son datos donde no importa que no viajen entre dispositivos —de hecho, a veces es deseable que no lo hagan.

Firestore es adecuado para datos que pertenecen al usuario más allá del dispositivo: listas que quiere consultar desde cualquier sitio, historial que debe persistir, información que podría necesitar compartir. Son datos donde la localidad es un problema, no una ventaja.

La pregunta que hay que hacerse no es «¿cuál es mejor?» sino «¿qué naturaleza tienen estos datos y dónde tiene sentido que vivan?». Esa pregunta tiene respuestas distintas para cada tipo de dato dentro de la misma aplicación, y saber argumentarla es parte del trabajo de cualquier desarrollador.
