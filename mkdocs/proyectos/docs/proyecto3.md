# Proyecto — Enciclopedia Hyrule: API, esquemas y transformación de datos

**Resultados de aprendizaje evaluados:** RA4 (b,c,d,e,f) · RA5 (c,e,f,g) · RA6 (a,b,d,e)  
**Entrega:** Repositorio Git con README  
**Plazo:** Un mes. Fecha límite de entrega: se comunicará en el aula.

## El encargo

Una startup quiere lanzar una enciclopedia web sobre el universo de The Legend of Zelda. La idea es construir un sitio donde los fans puedan buscar personajes y monstruos de toda la saga, guardar sus favoritos y exportar datos para compartirlos.

El equipo de contenido ya tiene preparado un archivo XML con información básica de los juegos principales de la saga — datos que migrarán al nuevo sistema. Tu trabajo es construir la aplicación web que integre la API externa, gestione el almacenamiento local y procese ese XML heredado.

La API que usaréis es la **Zelda API** ([zelda.fanapis.com](https://zelda.fanapis.com)), completamente gratuita y sin necesidad de registro ni API key.

## Punto de partida

La documentación oficial de la Zelda API está en `https://docs.zelda.fanapis.com`. Léela, explora los endpoints disponibles y entiende qué devuelve cada uno antes de escribir código. Usa Postman o Hoppscotch ([hoppscotch.io](https://hoppscotch.io)) para probar las peticiones directamente y ver la estructura real de las respuestas.

Esa fase de investigación forma parte del trabajo y se espera que quede reflejada en el README: qué endpoints exploraste, cuáles decidiste usar y por qué.

## Lo que tienes que construir

La aplicación tiene tres bloques funcionales que deben estar integrados en una misma interfaz web.

### Bloque 1 — Buscador con la Zelda API y almacenamiento local

La aplicación debe permitir buscar tanto **personajes** como **monstruos** de la saga.

Funcionalidades requeridas:

- Campo de texto para buscar por nombre, con selector para elegir si se busca entre personajes o monstruos.
- Mostrar los resultados en tarjetas con nombre, descripción y, si está disponible, raza y género (en el caso de personajes).
- Guardar en localStorage como caché los resultados de cada búsqueda, evitando peticiones repetidas a la misma consulta.
- Permitir añadir elementos a una lista de favoritos que persista entre recargas.
- Permitir eliminar elementos de favoritos de forma individual y vaciar la lista completa.
- Al cargar la página, mostrar los favoritos guardados sin hacer ninguna petición a la API.

La interfaz debe gestionar correctamente todos los casos posibles que pueda devolver la API.

### Bloque 2 — Importación del catálogo XML

El equipo de contenido te entrega este XML con los juegos principales de la saga. Debe estar incluido en tu repositorio como `juegos.xml`:

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

- Leer el XML y convertirlo a JSON usando JavaScript con `DOMParser`.
- Mostrar el catálogo en la interfaz como una tabla o lista de tarjetas.
- Incluir el atributo `id` de cada juego en la conversión.
- Convertir `anio` y `puntuacion` a números, no dejarlos como strings.
- Permitir exportar el catálogo convertido a un archivo CSV descargable.

### Bloque 3 — Validación con esquemas

Antes de procesar cualquier dato, la aplicación debe validar que tiene la estructura correcta. Tienes que crear y entregar:

**`personaje_schema.json`** — JSON Schema que valide la estructura de un personaje devuelto por la Zelda API. El esquema debe incluir al menos:
- `name`: string, obligatorio.
- `description`: string, obligatorio.
- `gender`: string o null.
- `race`: string o null.
- `appearances`: array, obligatorio.

Marca como `required` los campos que consideres imprescindibles y justifica tu decisión en el README.

**`juegos.xsd`** — XSD que valide el archivo `juegos.xml`. Debe:
- Definir `anio` y `puntuacion` como enteros.
- Definir el resto de campos como strings.
- Reflejar la estructura anidada: `<saga>` contiene uno o más `<juego>`, y cada `<juego>` contiene sus campos.
- Estar enlazado correctamente en el `juegos.xml`.

Incluye en el README evidencia de validación de ambos archivos (capturas o descripción del proceso).

--

## Estructura del repositorio

```
/
├── index.html
├── css/
│   └── styles.css
├── js/
│   ├── api.js          — fetch a la Zelda API y caché
│   ├── storage.js      — funciones de localStorage
│   ├── transform.js    — conversión XML→JSON y JSON→CSV
│   └── ui.js           — manipulación del DOM y render
├── data/
│   ├── juegos.xml
│   └── juegos.xsd
├── schemas/
│   └── personaje_schema.json
└── README.md
```

La organización exacta es flexible, pero la separación entre responsabilidades debe ser clara. No pongas toda la lógica en un único archivo.

## El README

El README es parte evaluable del proyecto. Debe incluir estas secciones:

**Descripción del proyecto** — qué hace la aplicación y para qué sirve.

**Tecnologías y herramientas** — qué has usado y por qué. Menciona las alternativas que consideraste.

**La Zelda API** — explica qué endpoints has utilizado, qué datos devuelven y cómo los has integrado. Incluye un ejemplo real de respuesta de la API y explica qué campos has usado de ella.

**Formatos de datos** — explica con tus propias palabras qué es JSON, XML y CSV, en qué se diferencian y cuándo usarías cada uno. Conéctalo con decisiones concretas del proyecto: *"usé XML para... porque... y JSON para... porque..."*

**Esquemas** — explica qué valida el JSON Schema y qué valida el XSD. Incluye evidencia de validación de ambos.

**Almacenamiento** — sección dedicada a:
- Cómo usas localStorage en el proyecto y qué limitaciones tiene.
- Qué alternativas existen (sessionStorage, cookies, base de datos en servidor) y cuándo usarías cada una.
- Por qué localStorage no sería suficiente para un sistema en producción real.

**Decisiones técnicas** — al menos dos decisiones que tomaste explicando el razonamiento: por qué estructuraste el código así, qué problema encontraste y cómo lo resolviste, por qué elegiste una herramienta sobre otra.

**Instrucciones de uso** — cómo ejecutar el proyecto localmente.

## Criterios de entrega

- El repositorio debe tener al menos **20 commits** con mensajes descriptivos que reflejen el avance real. Un único commit con todo el código no es aceptable.
- El proyecto debe funcionar abriendo `index.html` directamente en un navegador, sin servidor local.
- El código debe usar `async/await` para todas las operaciones asíncronas.
- No se permite el uso de `alert()`, `confirm()` ni `prompt()` para mostrar información al usuario.
- El manejo de errores debe ser visible en la interfaz — si la búsqueda no encuentra resultados o falla la red, el usuario debe verlo, no la consola.

## Rúbrica de evaluación

La calificación de cada criterio sigue la escala: **10** (Excelente) · **8** (Notable) · **6** (Aprobado) · **4** (Insuficiente) · **2** (Deficiente) · **0** (No realizado).

### RA4 — Mecanismos de validación

**4b — Identifica tecnologías relacionadas con la validación (XML, JSON, esquemas)**  
Se evalúa mediante el README.

| Nivel | Descripción |
|-------|-------------|
| 10 | El README explica con precisión qué son XML, JSON, XSD y JSON Schema, diferencia sus propósitos y justifica cuándo usar cada uno con ejemplos concretos del proyecto. |
| 8 | Explica correctamente las tecnologías con alguna imprecisión menor o falta de conexión con el proyecto. |
| 6 | Menciona todas las tecnologías pero las explicaciones son superficiales o copiadas de los apuntes sin reelaboración. |
| 4 | Solo menciona algunas tecnologías o las confunde entre sí. |
| 2 | El README apenas toca este apartado. |
| 0 | No hay información sobre tecnologías de validación en el README. |

**4c — Analiza la estructura y sintaxis de los esquemas**  
Se evalúa mediante `personaje_schema.json` y `juegos.xsd`.

| Nivel | Descripción |
|-------|-------------|
| 10 | Ambos esquemas son correctos y usan tipos adecuados. El XSD usa `xs:sequence`, define `anio` y `puntuacion` como `xs:integer` y refleja la estructura anidada correctamente. El JSON Schema usa `required`, permite `null` en los campos opcionales y está bien estructurado. |
| 8 | Ambos esquemas son correctos con alguna carencia menor (un tipo genérico donde podría ser más específico, o falta permitir `null` explícitamente). |
| 6 | Los esquemas funcionan pero son básicos: tipos correctos pero sin reflejar correctamente la estructura o sin restricciones adicionales. |
| 4 | Uno de los dos esquemas está ausente o tiene errores estructurales que impiden la validación. |
| 2 | Los esquemas existen pero no son funcionales o tienen errores graves de sintaxis. |
| 0 | No hay esquemas en el repositorio. |

**4d — Utiliza herramientas específicas para crear esquemas**  
Se evalúa mediante los archivos entregados y el README.

| Nivel | Descripción |
|-------|-------------|
| 10 | El README menciona las herramientas usadas (VS Code, WebStorm, validadores online). Los esquemas evidencian uso correcto: formato correcto, sin errores de sintaxis, tipado cuidado. |
| 8 | Se mencionan herramientas y los esquemas son correctos, aunque la documentación del proceso es escueta. |
| 6 | Los esquemas son funcionales pero no hay documentación sobre el proceso de creación. |
| 4 | Se mencionan herramientas pero los esquemas tienen errores que contradicen su uso efectivo. |
| 2 | No hay documentación sobre herramientas. |
| 0 | No hay evidencia de uso de herramientas para crear esquemas. |

**4e — Asocia esquemas con documentos XML y JSON**  
Se evalúa mediante el enlace XSD en `juegos.xml` y la referencia al JSON Schema en el README o en el código.

| Nivel | Descripción |
|-------|-------------|
| 10 | `juegos.xml` enlaza correctamente el XSD con `xsi:noNamespaceSchemaLocation`. El README explica cómo se usa el JSON Schema para validar la estructura de los personajes recibidos de la API. |
| 8 | El enlace XML→XSD es correcto. La asociación del JSON Schema está documentada aunque no se valide en runtime. |
| 6 | Solo uno de los dos está correctamente asociado y documentado. |
| 4 | Las asociaciones existen pero tienen errores que impiden la validación. |
| 2 | Los esquemas están en el repositorio pero no están asociados a ningún documento. |
| 0 | No hay asociación entre esquemas y documentos. |

**4f — Utiliza herramientas de validación**  
Se evalúa mediante evidencia en el README.

| Nivel | Descripción |
|-------|-------------|
| 10 | El README incluye evidencia clara de validación de ambos formatos: qué herramienta usó, qué validó y cuál fue el resultado. Capturas o logs de ambas validaciones. |
| 8 | Hay evidencia de validación de ambos formatos aunque la descripción del proceso es incompleta. |
| 6 | Solo se evidencia la validación de uno de los dos formatos. |
| 4 | Hay mención a validación pero sin evidencia concreta. |
| 2 | La validación no está documentada. |
| 0 | No hay evidencia ni mención de validación. |

### RA5 — Conversión de documentos

**5c — Analiza las tecnologías implicadas en la conversión**  
Se evalúa mediante el README.

| Nivel | Descripción |
|-------|-------------|
| 10 | El README explica por qué se usa `DOMParser` para la conversión XML→JSON, menciona `xml2js` como alternativa para Node.js y justifica la elección. Explica también el proceso de exportación a CSV y menciona `PapaParse` como alternativa más robusta. |
| 8 | Explica las tecnologías usadas con alguna omisión en las alternativas o la justificación. |
| 6 | Menciona las tecnologías sin profundizar en la elección. |
| 4 | Solo menciona las tecnologías usadas sin ningún análisis. |
| 2 | El README apenas toca este apartado. |
| 0 | No hay análisis de tecnologías de conversión. |

**5e — Realiza conversiones XML→JSON**  
Se evalúa mediante el Bloque 2 de la aplicación.

| Nivel | Descripción |
|-------|-------------|
| 10 | La conversión funciona correctamente para todos los juegos. El atributo `id` del elemento `<juego>` se incluye en el JSON resultante. `anio` y `puntuacion` se convierten a número. Los datos se muestran correctamente en la interfaz. |
| 8 | La conversión funciona con alguna omisión: el `id` no se incluye, o los tipos numéricos no se convierten. |
| 6 | La conversión funciona pero todos los valores llegan como strings, o no se muestran en la interfaz. |
| 4 | La conversión tiene errores que impiden mostrar algunos juegos correctamente. |
| 2 | Hay código de conversión pero no funciona. |
| 0 | No hay conversión XML→JSON. |

**5f — Identifica herramientas de conversión disponibles**  
Se evalúa mediante el README.

| Nivel | Descripción |
|-------|-------------|
| 10 | El README describe al menos tres herramientas de conversión (`DOMParser`, `xml2js`, `PapaParse`, `fast-xml-parser`) con sus ventajas, limitaciones y cuándo usaría cada una. |
| 8 | Menciona al menos dos herramientas con sus características principales. |
| 6 | Menciona las herramientas usadas en el proyecto pero no compara alternativas. |
| 4 | Solo menciona una herramienta sin contexto. |
| 2 | Apenas hay información sobre herramientas en el README. |
| 0 | No hay mención a herramientas de conversión. |

**5g — Realiza conversiones en distintos formatos**  
Se evalúa mediante la funcionalidad de exportación a CSV.

| Nivel | Descripción |
|-------|-------------|
| 10 | La exportación a CSV funciona: el archivo descargado tiene cabecera con todos los campos, todas las filas del catálogo, y es abriblemente por Excel sin errores. `anio` y `puntuacion` aparecen como números. |
| 8 | La exportación funciona con alguna carencia menor (falta un campo, o los números aparecen como texto). |
| 6 | La exportación genera un CSV básico pero con errores o campos incompletos. |
| 4 | El código de exportación existe pero el archivo generado no es válido o no se puede descargar. |
| 2 | Hay intento de exportación pero no funciona. |
| 0 | No hay exportación a CSV. |

### RA6 — Gestión de información e intercambio de datos

**6a — Identifica ventajas e inconvenientes de almacenar información**  
Se evalúa mediante el README.

| Nivel | Descripción |
|-------|-------------|
| 10 | El README compara localStorage, sessionStorage, cookies y base de datos en servidor. Para cada opción indica cuándo es apropiada, sus limitaciones y un ejemplo de uso real. La reflexión sobre por qué localStorage no es suficiente para producción es precisa y argumentada. |
| 8 | Compara al menos tres opciones con sus ventajas e inconvenientes. La reflexión sobre producción está presente pero es menos elaborada. |
| 6 | Menciona las opciones pero las explicaciones son superficiales. |
| 4 | Solo habla de localStorage sin comparar con alternativas. |
| 2 | Hay una mención breve al almacenamiento pero sin análisis. |
| 0 | No hay sección de almacenamiento en el README. |

**6b — Analiza tecnologías de almacenamiento**  
Se evalúa mediante la implementación de localStorage en el código.

| Nivel | Descripción |
|-------|-------------|
| 10 | El código usa localStorage correctamente: caché de búsquedas a la API con clave descriptiva, lista de favoritos persistente, funciones encapsuladas en `storage.js` para leer/escribir/borrar, y gestión del caso `null` en `getItem`. |
| 8 | El uso de localStorage es correcto para los casos principales con alguna carencia (no se gestiona el `null`, o no está encapsulado). |
| 6 | localStorage funciona para favoritos pero no hay caché de la API, o el código es correcto pero no está organizado. |
| 4 | localStorage se usa pero con errores: `JSON.parse(null)` sin comprobar, pérdida de datos, etc. |
| 2 | Hay intentos de uso de localStorage pero no funciona correctamente. |
| 0 | No se usa localStorage en el proyecto. |


**6d — Identifica lenguajes y herramientas para el tratamiento de APIs REST**  
Se evalúa mediante el README.

| Nivel | Descripción |
|-------|-------------|
| 10 | El README explica qué es una API REST, qué endpoints de la Zelda API usa y por qué, describe `fetch` y menciona Axios como alternativa, explica los parámetros de la API (`limit`, `page`, `name`) y qué son los códigos de estado HTTP con ejemplos del proyecto. |
| 8 | Explica correctamente `fetch` y la API con alguna omisión (no menciona Axios, o los códigos de estado son muy superficiales). |
| 6 | Hay una explicación básica de la API y de `fetch` sin profundidad técnica. |
| 4 | Solo menciona que se usa una API sin explicar cómo ni qué herramientas implica. |
| 2 | El README apenas toca este apartado. |
| 0 | No hay información sobre APIs REST en el README. |

**6e — Utiliza lenguajes de consulta y manipulación de APIs REST**  
Se evalúa mediante el Bloque 1 de la aplicación.

| Nivel | Descripción |
|-------|-------------|
| 10 | El código usa `fetch` con `async/await`, comprueba `response.ok`, gestiona el caso de que `data` llegue vacío, lanza errores con `throw` cuando procede y muestra mensajes útiles al usuario en la interfaz. La caché evita peticiones repetidas a la misma búsqueda. Los resultados múltiples se muestran correctamente. |
| 8 | `fetch` funciona con `async/await` y gestión de errores, pero la caché está ausente o no gestiona correctamente los resultados múltiples. |
| 6 | `fetch` funciona para el caso normal pero no comprueba `response.ok` o no gestiona el caso de array vacío. |
| 4 | `fetch` funciona pero no gestiona errores o se cuelga cuando la búsqueda no devuelve resultados. |
| 2 | Hay código de `fetch` pero tiene errores que impiden su funcionamiento. |
| 0 | No hay consumo de API en el proyecto. |


## Nota sobre el Git

El historial de commits es parte de la entrega. Se valorará un desarrollo progresivo con commits pequeños y descriptivos:

```
✅ feat: búsqueda de personajes con fetch y caché en localStorage
✅ feat: búsqueda de monstruos y selector de tipo
✅ feat: sistema de favoritos persistente
✅ feat: importar juegos.xml y convertir a JSON
✅ feat: exportar catálogo a CSV descargable
✅ feat: crear JSON Schema para personajes de la Zelda API
✅ feat: crear XSD y enlazarlo en juegos.xml
✅ docs: README completo con sección de almacenamiento y esquemas

❌ first commit
❌ subida proyecto
❌ cambios varios
```

Un historial con mensajes genéricos o todo en un único commit contará negativamente en los criterios que evalúan esas partes.
