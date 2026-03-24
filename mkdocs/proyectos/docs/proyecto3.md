# Proyecto — Enciclopedia Hyrule: API, esquemas y almacenamiento

**Resultados de aprendizaje evaluados:** RA4 (b,c,d,e,f) · RA5 (c,e,f,g) · RA6 (a,b,d,e)  
**Entrega:** Repositorio Git con README  
**Plazo:** 26 de abril de 2026

## El encargo

Una startup quiere lanzar una enciclopedia web sobre el universo de The Legend of Zelda. La idea es construir un sitio donde los fans puedan buscar personajes y criaturas de toda la saga, guardar sus favoritos en la nube y exportar datos del catálogo de juegos.

El equipo de contenido ya tiene preparado un archivo XML con información básica de los juegos principales — datos que migrarán al nuevo sistema. Tu trabajo es construir la aplicación web que integre la API externa, gestione el almacenamiento y procese ese XML heredado.

La aplicación usará **dos capas de almacenamiento** con propósitos distintos:

- **localStorage** — para cachear los resultados de búsqueda y evitar peticiones repetidas a la API.
- **Firebase Firestore** — para guardar los favoritos del usuario en la nube, persistentes entre dispositivos y sesiones.

Esa distinción no es arbitraria: tiene que quedar explicada y justificada en el README.

## Punto de partida

**Zelda API:** `https://zelda.fanapis.com` · Documentación: `https://docs.zelda.fanapis.com`

Léela, explora los endpoints disponibles y entiende qué devuelve cada uno antes de escribir código. Usa Postman o Hoppscotch ([hoppscotch.io](https://hoppscotch.io)) para probar las peticiones y ver la estructura real de las respuestas.

**Firebase:** `https://firebase.google.com`

Usa una cuenta de Google, accede a la consola de Firebase y crea un proyecto nuevo. Dentro del proyecto, activa **Cloud Firestore** en modo test. Registra una aplicación web y copia la configuración — la necesitarás para conectar tu código.

Ambas fases de investigación forman parte del trabajo y deben quedar reflejadas en el README.

## Lo que tienes que construir

La aplicación tiene cuatro bloques funcionales integrados en una misma interfaz web.

### Bloque 1 — Buscador con la Zelda API

El buscador permite explorar el universo de Zelda consultando la API en tiempo real:

- La búsqueda se lanza automáticamente mientras el usuario escribe, sin botón. Para no saturar la API con cada pulsación, implementa un **debounce**: espera a que el usuario deje de escribir un momento antes de lanzar la petición.
- Un selector permite elegir el **tipo de entidad** a buscar. Explora la documentación y decide qué endpoints incluyes — como mínimo dos tipos diferentes.
- Los resultados se muestran en tarjetas con la información relevante. Qué campos mostrar depende del tipo: cada endpoint devuelve una estructura diferente y tendrás que adaptarte.
- Cada búsqueda se guarda en **localStorage como caché**, usando una clave que combine el tipo y el término buscado. Si el usuario repite la misma búsqueda, se devuelve el dato local sin petición a la API.
- La interfaz debe gestionar correctamente todos los estados posibles: cargando, sin resultados, error de red.

### Bloque 2 — Gestor de favoritos con Firebase

Los favoritos se almacenan en **Firebase Firestore**, no en localStorage. Eso significa que si el usuario abre la aplicación desde otro dispositivo, sus favoritos estarán ahí.

- Cualquier resultado del buscador puede añadirse a favoritos con un clic. Si ya está guardado, el mismo botón lo elimina.
- Al cargar la página, los favoritos se recuperan desde Firestore y se muestran en la interfaz.
- La lista puede **ordenarse** por nombre (A-Z, Z-A) y por fecha de adición (más reciente, más antiguo).
- La lista puede **filtrarse** por tipo de entidad sin borrar los demás favoritos.
- Cada favorito puede eliminarse individualmente. También existe opción de vaciar toda la lista.
- Las operaciones con Firestore — leer, añadir, eliminar — usan `async/await` y gestionan los errores correctamente.

Para conectar Firebase desde el navegador sin servidor, incluye el SDK desde CDN:

```html
<script type="module">
    import { initializeApp }
        from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
    import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc }
        from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";

    const firebaseConfig = {
        // Tu configuración aquí — obtenla en la consola de Firebase
    };

    const app = initializeApp(firebaseConfig);
    const db  = getFirestore(app);
</script>
```

> **Sobre las reglas de seguridad:** Firestore en modo test permite lectura y escritura sin autenticación durante 30 días, suficiente para el proyecto. En el README debes explicar qué implica eso y cómo se gestionaría la seguridad en un sistema real.

### Bloque 3 — Importación del catálogo XML

El equipo de contenido te entrega este XML. Inclúyelo en tu repositorio como `juegos.xml`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<saga nombre="The Legend of Zelda">
    <juego id="001">
        <titulo>The Legend of Zelda: Ocarina of Time</titulo>
        <desarrolladora>Nintendo EAD</desarrolladora>
        <publicadora>Nintendo</publicadora>
        <plataforma>Nintendo 64</plataforma>
        <anio>1998</anio>
        <puntuacion>99</puntuacion>
    </juego>
    <juego id="002">
        <titulo>The Legend of Zelda: Breath of the Wild</titulo>
        <desarrolladora>Nintendo EPD</desarrolladora>
        <publicadora>Nintendo</publicadora>
        <plataforma>Nintendo Switch</plataforma>
        <anio>2017</anio>
        <puntuacion>97</puntuacion>
    </juego>
    <juego id="003">
        <titulo>The Legend of Zelda: Majora's Mask</titulo>
        <desarrolladora>Nintendo EAD</desarrolladora>
        <publicadora>Nintendo</publicadora>
        <plataforma>Nintendo 64</plataforma>
        <anio>2000</anio>
        <puntuacion>95</puntuacion>
    </juego>
    <juego id="004">
        <titulo>The Legend of Zelda: A Link to the Past</titulo>
        <desarrolladora>Nintendo EAD</desarrolladora>
        <publicadora>Nintendo</publicadora>
        <plataforma>Super Nintendo</plataforma>
        <anio>1991</anio>
        <puntuacion>95</puntuacion>
    </juego>
    <juego id="005">
        <titulo>The Legend of Zelda: Tears of the Kingdom</titulo>
        <desarrolladora>Nintendo EPD</desarrolladora>
        <publicadora>Nintendo</publicadora>
        <plataforma>Nintendo Switch</plataforma>
        <anio>2023</anio>
        <puntuacion>96</puntuacion>
    </juego>
</saga>
```

La aplicación debe:

- Leer el XML y convertirlo a JSON usando `DOMParser`.
- Mostrar el catálogo en la interfaz como tabla o tarjetas.
- Incluir el atributo `id` de cada `<juego>` en el JSON resultante.
- Convertir `anio` y `puntuacion` a número, no dejarlos como strings.
- Permitir exportar el catálogo a un archivo CSV descargable.

### Bloque 4 — Validación con esquemas

Tienes que crear y entregar:

**`entidad_schema.json`** — JSON Schema que valide la estructura de una entidad devuelta por la Zelda API. Define al menos los campos comunes a los endpoints que uses (`name`, `description`, `id`) con sus tipos, e indica cuáles son obligatorios. Justifica en el README los campos marcados como `required`.

**`juegos.xsd`** — XSD que valide `juegos.xml`. Debe:
- Reflejar la estructura: `<saga>` contiene uno o más `<juego>`, y cada `<juego>` sus campos.
- Definir `anio` y `puntuacion` como entero y el resto como string.
- Estar enlazado en el `juegos.xml` con `xsi:noNamespaceSchemaLocation`.

Incluye en el README evidencia de validación de ambos: una captura de pantalla o la salida del validador es suficiente.

## Estructura del repositorio

```
/
├── index.html
├── css/
│   └── styles.css
├── js/
│   ├── api.js          — fetch a la Zelda API y caché en localStorage
│   ├── firebase.js     — configuración e interacción con Firestore
│   ├── transform.js    — conversión XML→JSON y JSON→CSV
│   └── ui.js           — manipulación del DOM y render
├── data/
│   ├── juegos.xml
│   └── juegos.xsd
├── schemas/
│   └── entidad_schema.json
└── README.md
```

La lógica de Firebase debe estar separada del resto del código. No mezcles las operaciones de Firestore con la manipulación del DOM.

## El README

El README es parte evaluable del proyecto. Debe incluir:

**Descripción del proyecto** — qué hace la aplicación y para qué sirve.

**Tecnologías y herramientas** — qué has usado y por qué. Menciona alternativas consideradas.

**La Zelda API** — qué endpoints usas, qué devuelven y cómo los has integrado. Incluye un ejemplo real de respuesta y explica qué campos usas.

**Formatos de datos** — explica con tus palabras qué es JSON, XML y CSV, en qué se diferencian y cuándo usarías cada uno. Conéctalo con decisiones concretas del proyecto.

**Esquemas** — qué valida el JSON Schema y qué valida el XSD. Evidencia de validación de ambos.

**Almacenamiento** — explica:
- Por qué usas localStorage para la caché y Firestore para los favoritos. Qué ventaja aporta cada uno en su caso de uso concreto.
- Qué limitaciones tiene localStorage que lo hacen inadecuado para los favoritos.
- Qué son las reglas de seguridad de Firestore y cómo se gestionarían en producción.
- Qué otras alternativas de almacenamiento existen y cuándo usarías cada una.

**Decisiones técnicas** — al menos dos decisiones justificadas.

**Instrucciones de uso** — cómo ejecutar el proyecto, incluyendo cómo configurar Firebase.

## Criterios de entrega

- Al menos **15 commits** con mensajes descriptivos que reflejen avance progresivo.
- El proyecto funciona abriendo `index.html` en el navegador. Las operaciones con Firebase requieren conexión a internet.
- Todo el código asíncrono usa `async/await`.
- No se permite `alert()`, `confirm()` ni `prompt()`.
- Los errores deben ser visibles en la interfaz, no solo en consola.
- La configuración de Firebase debe estar en el repositorio — es un proyecto educativo con base de datos en modo test.


## Rúbrica de evaluación

La calificación sigue la escala: **10** (Excelente) · **8** (Notable) · **6** (Aprobado) · **4** (Insuficiente) · **2** (Deficiente) · **0** (No realizado).

### RA4 — Mecanismos de validación

**4b — Identifica tecnologías relacionadas con la validación**  
Se evalúa mediante el README.

| Nivel | Descripción |
|-------|-------------|
| 10 | El README explica con precisión qué son XML, JSON, XSD y JSON Schema, diferencia sus propósitos y justifica cuándo usar cada uno con ejemplos concretos del proyecto. |
| 8 | Explica correctamente las tecnologías con alguna imprecisión menor o falta de conexión con el proyecto. |
| 6 | Menciona todas las tecnologías pero las explicaciones son superficiales o copiadas sin reelaboración. |
| 4 | Solo menciona algunas o las confunde entre sí. |
| 2 | El README apenas toca este apartado. |
| 0 | No hay información sobre tecnologías de validación. |

**4c — Analiza la estructura y sintaxis de los esquemas**  
Se evalúa mediante `entidad_schema.json` y `juegos.xsd`.

| Nivel | Descripción |
|-------|-------------|
| 10 | El XSD refleja la estructura anidada correctamente, define `anio` y `puntuacion` como `xs:integer` y está bien formado. El JSON Schema define tipos correctos, usa `required` y está justificado en el README. |
| 8 | Ambos esquemas son correctos con alguna carencia menor. |
| 6 | Los esquemas funcionan pero son básicos: estructura correcta sin tipos específicos, o uno de los dos tiene errores menores. |
| 4 | Uno de los dos está ausente o tiene errores que impiden la validación. |
| 2 | Los esquemas existen pero no son funcionales. |
| 0 | No hay esquemas en el repositorio. |

**4d — Utiliza herramientas específicas para crear esquemas**  
Se evalúa mediante los archivos entregados y el README.

| Nivel | Descripción |
|-------|-------------|
| 10 | El README menciona las herramientas usadas. Los archivos lo evidencian: formato correcto, sin errores de sintaxis. |
| 8 | Se mencionan herramientas y los esquemas son correctos, aunque la documentación es escueta. |
| 6 | Los esquemas son funcionales pero no hay documentación del proceso. |
| 4 | Se mencionan herramientas pero los esquemas tienen errores que contradicen su uso. |
| 2 | No hay documentación sobre herramientas. |
| 0 | No hay evidencia de uso de herramientas. |

**4e — Asocia esquemas con documentos XML y JSON**  
Se evalúa mediante el enlace XSD en `juegos.xml` y la documentación del JSON Schema.

| Nivel | Descripción |
|-------|-------------|
| 10 | `juegos.xml` enlaza el XSD con `xsi:noNamespaceSchemaLocation`. El README explica cómo y para qué se usa el JSON Schema. |
| 8 | El enlace XML→XSD es correcto. El JSON Schema está documentado aunque no se valide en runtime. |
| 6 | Solo uno de los dos está correctamente asociado y documentado. |
| 4 | Las asociaciones existen pero tienen errores que impiden la validación. |
| 2 | Los esquemas están pero sin asociar a ningún documento. |
| 0 | No hay asociación entre esquemas y documentos. |

**4f — Utiliza herramientas de validación**  
Se evalúa mediante evidencia en el README.

| Nivel | Descripción |
|-------|-------------|
| 10 | Evidencia de validación de ambos formatos: herramienta usada, qué se validó y resultado. Capturas o logs de ambas. |
| 8 | Hay evidencia de ambos formatos aunque la descripción es incompleta. |
| 6 | Solo se evidencia la validación de uno de los dos formatos. |
| 4 | Hay mención a validación pero sin evidencia. |
| 2 | La validación no está documentada. |
| 0 | No hay evidencia ni mención. |

### RA5 — Conversión de documentos

**5c — Analiza las tecnologías implicadas en la conversión**  
Se evalúa mediante el README.

| Nivel | Descripción |
|-------|-------------|
| 10 | Explica por qué usa `DOMParser` para XML→JSON, menciona `xml2js` como alternativa para Node.js y justifica la elección. Explica el proceso JSON→CSV y menciona `PapaParse` como alternativa más robusta. |
| 8 | Explica las tecnologías con alguna omisión en alternativas o justificación. |
| 6 | Menciona las tecnologías sin profundizar en la elección. |
| 4 | Solo menciona las tecnologías sin análisis. |
| 2 | El README apenas toca este apartado. |
| 0 | No hay análisis de tecnologías de conversión. |

**5e — Realiza conversiones XML→JSON**  
Se evalúa mediante el Bloque 3.

| Nivel | Descripción |
|-------|-------------|
| 10 | La conversión funciona para todos los juegos. El atributo `id` se incluye. `anio` y `puntuacion` son números. Los datos se muestran en la interfaz. |
| 8 | La conversión funciona con alguna omisión: el `id` no se incluye, o los tipos no se convierten. |
| 6 | La conversión funciona pero todos los valores llegan como strings, o no se muestran en la interfaz. |
| 4 | Errores que impiden mostrar algunos juegos. |
| 2 | Hay código pero no funciona. |
| 0 | No hay conversión XML→JSON. |

**5f — Identifica herramientas de conversión disponibles**  
Se evalúa mediante el README.

| Nivel | Descripción |
|-------|-------------|
| 10 | Describe al menos tres herramientas (`DOMParser`, `xml2js`, `PapaParse`, `fast-xml-parser`) con ventajas, limitaciones y cuándo usaría cada una. |
| 8 | Menciona al menos dos con sus características principales. |
| 6 | Menciona las herramientas usadas pero no compara alternativas. |
| 4 | Solo menciona una herramienta sin contexto. |
| 2 | Apenas hay información sobre herramientas. |
| 0 | No hay mención a herramientas de conversión. |

**5g — Realiza conversiones en distintos formatos**  
Se evalúa mediante la exportación a CSV.

| Nivel | Descripción |
|-------|-------------|
| 10 | El CSV tiene cabecera con todos los campos, todas las filas del catálogo y es abrible en Excel. `anio` y `puntuacion` son números. |
| 8 | Funciona con alguna carencia menor. |
| 6 | Genera un CSV básico con errores o campos incompletos. |
| 4 | El código existe pero el archivo no es válido o no se puede descargar. |
| 2 | Hay intento pero no funciona. |
| 0 | No hay exportación a CSV. |

### RA6 — Gestión de información e intercambio de datos

**6a — Identifica ventajas e inconvenientes de almacenar información**  
Se evalúa mediante el README.

| Nivel | Descripción |
|-------|-------------|
| 10 | El README justifica por qué localStorage sirve para caché y Firestore para favoritos, comparando sus características. Analiza sessionStorage, cookies y base de datos en servidor. Explica las implicaciones de las reglas de seguridad de Firestore en modo test frente a producción. |
| 8 | Justifica correctamente las dos tecnologías y compara al menos dos alternativas más, con alguna omisión en la parte de seguridad. |
| 6 | Menciona las tecnologías usadas pero la justificación es superficial o no compara alternativas. |
| 4 | Solo habla de una de las dos sin comparar. |
| 2 | Mención breve sin análisis. |
| 0 | No hay sección de almacenamiento. |

**6b — Analiza tecnologías de almacenamiento**  
Se evalúa mediante la implementación de localStorage y Firebase en el código.

| Nivel | Descripción |
|-------|-------------|
| 10 | localStorage se usa como caché con clave compuesta (tipo + término) y gestión del `null`. Firestore gestiona los favoritos: lectura al cargar, escritura al añadir, eliminación al quitar — todo con `async/await` y gestión de errores. Cada tecnología está encapsulada en su propio archivo. |
| 8 | Ambas tecnologías funcionan correctamente con alguna carencia: clave de caché simple, o errores de Firestore no reflejados en la interfaz. |
| 6 | localStorage y Firebase funcionan, pero el código no está organizado o falta gestión de errores. |
| 4 | Solo una de las dos tecnologías funciona correctamente. |
| 2 | Hay intentos de uso de ambas pero ninguna funciona bien. |
| 0 | No se usa ni localStorage ni Firebase. |

**6d — Identifica lenguajes y herramientas para el tratamiento de APIs REST**  
Se evalúa mediante el README.

| Nivel | Descripción |
|-------|-------------|
| 10 | Explica qué es una API REST, qué endpoints de la Zelda API usa y por qué, describe `fetch` y menciona Axios como alternativa, y explica los códigos de estado HTTP con ejemplos del proyecto. |
| 8 | Explica correctamente `fetch` y la API con alguna omisión. |
| 6 | Explicación básica de la API y `fetch` sin profundidad técnica. |
| 4 | Solo menciona que se usa una API. |
| 2 | El README apenas toca este apartado. |
| 0 | No hay información sobre APIs REST. |

**6e — Utiliza lenguajes de consulta y manipulación en entornos de intercambio**  
Se evalúa mediante los Bloques 1 y 2.

| Nivel | Descripción |
|-------|-------------|
| 10 | El buscador funciona en tiempo real con debounce, soporta al menos dos tipos de entidad y cachea en localStorage con clave compuesta. Los favoritos se guardan en Firestore, se ordenan por nombre y fecha, se filtran por tipo y todos los errores están gestionados en la interfaz. |
| 8 | El buscador con debounce y la caché funcionan. Los favoritos en Firestore también, pero falta el filtro por tipo o la ordenación es parcial. |
| 6 | El buscador funciona sin debounce o la caché no usa clave compuesta. Los favoritos se guardan en Firestore pero sin ordenación ni filtrado. |
| 4 | El buscador funciona solo con botón. Los favoritos están en localStorage en lugar de Firestore. |
| 2 | Hay código de búsqueda y favoritos pero con errores que impiden su funcionamiento. |
| 0 | No hay consumo de API ni gestión de favoritos. |
