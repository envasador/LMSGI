# Proyecto 1: "Desarrollo con Estándares Web"

**Fase 1: Maquetación**

## ¿De qué va esto?

Tienes un encargo: desarrollar una página web que represente la identidad profesional o comercial de un cliente. Puede ser cualquier producto que cumpla las directrices que a continuación se detallan. Lo importante es que cumpla con los estándares actuales de desarrollo web (HTML5 y CSS3) y que sea accesible, navegable y válida.

No es un ejercicio académico sin sentido. Es un proyecto real que podrías entregar a un cliente de verdad.

## Tu objetivo

Vas a diseñar y maquetar un sitio web con seis páginas conectadas entre sí. Cada página debe tener al menos tres secciones con contenido (y no, `header`, `main` y `footer` no cuentan como secciones de contenido). Aplicarás buenas prácticas de accesibilidad y diseño adaptable.

Piénsalo así: alguien tiene que poder usar tu web sin frustrarse, sin importar el dispositivo que use.

---

## Requisitos

### 1. Estructura HTML5

Tu HTML tiene que respirar semántica y organización:

- **Crea documentos bien estructurados** con las secciones principales claramente definidas.
- **Organiza el contenido de cada página** de forma lógica y accesible, utilizando el marcado más apropiado según el tipo de información.
- **Implementa un formulario funcional** con al menos seis campos diferentes. Asegúrate de validar campos requeridos y de usar los tipos de datos correctos (email, teléfono, fecha...).
- **Las seis páginas deben ser diferentes estructuralmente**. Nada de repetir la misma plantilla cambiando solo el texto. Cada una tiene su propia personalidad.

### 2. Estilos CSS3

Aquí es donde tu web cobra vida visual. Pero hazlo bien desde el principio:

- **Una única hoja de estilos** para todo el sitio, organizada con la **metodología BEM**. Así mantienes todo ordenado y escalable.
- **Usa variables CSS** para colores y tipografías. Si mañana decides cambiar la paleta completa, solo tocas un par de líneas.
- **Diseño responsive** con media queries. Tu web tiene que verse bien en móviles, tablets y escritorios.
- **Incluye soporte básico para Dark Mode**. Es 2025, la gente espera poder elegir.
- **Transiciones y animaciones** que mejoren la experiencia. Nada de animaciones gratuitas: tienen que tener sentido (botones que responden al hover, menús que se despliegan suavemente, etc.).

### 3. Contenido esencial

Tu web necesita estas cosas para funcionar:

- **Menú de navegación funcional** que enlace todas las páginas correctamente.
- **Página con datos relevantes del cliente** (pueden ser ficticios, pero tienen que ser creíbles).
- **Elementos multimedia** que aporten valor visual. Nada de imágenes de relleno.
- **Jerarquía de información clara**. Si alguien entra en tu web, debe entender de un vistazo qué es lo importante.

### 4. Páginas requeridas

Tu sitio web debe tener exactamente estas seis páginas:

1. **Página principal (Home)**: Introducción breve y resumen del sitio. Es la puerta de entrada.
2. **Página de servicios o productos**: Descripción detallada del catálogo o servicios del cliente.
3. **Página "Sobre nosotros" o "About"**: Historia, valores, misión o información sobre el equipo/persona detrás del proyecto.
4. **Página de blog o noticias**: Artículos, actualizaciones o contenido editorial relacionado con la temática.
5. **Página de contacto**: Formulario funcional y enlaces a redes sociales.
6. **Página adicional**: Elige tú según el contexto (galería, testimonios, FAQ, portfolio de trabajos, colaboradores, etc.).

### 5. Validación

Tu código tiene que estar limpio. Tanto el HTML como el CSS deben pasar las validaciones del [W3C Validator](https://validator.w3.org/) sin errores.

Si el validador te saca errores, corrígelos. No los ignores.

---

## Entregable

Sube tu proyecto a **GitHub** con esta estructura:

```
tu-repositorio/
├── index.html
├── servicios.html
├── about.html
├── blog.html
├── contacto.html
├── [tu-pagina-adicional].html
├── css/
│   └── styles.css
├── assets/
│   ├── images/
│   └── videos/
└── README.md
```

El **README.md** debe incluir:
- Descripción del proyecto
- Instrucciones para visualizarlo
- Cualquier detalle relevante (tecnologías usadas, decisiones de diseño, etc.)

---

## Evaluación (RA2)

### Criterio 2.b: Estructura del documento HTML

**¿Qué se evalúa?**  
Tu capacidad para analizar y estructurar correctamente un documento HTML, identificando las secciones que lo componen y justificando su uso.

| Nivel | Descripción | Indicador |
|-------|-------------|-----------|
| **10 (Excelente)** | Has analizado y estructurado perfectamente el documento HTML. Todas las secciones están claramente identificadas y su uso está justificado. Has aplicado todas las buenas prácticas: semántica, indentación, comentarios útiles. | Documento impecable con estructura clara, organizada y justificada. |
| **8 (Notable)** | Estructura correcta con buen uso de etiquetas semánticas. Algunas justificaciones o buenas prácticas podrían mejorar. | Estructura lógica y funcional, con pequeñas inconsistencias. |
| **6 (Aprobado)** | Has identificado las secciones principales de forma básica, aunque algunas etiquetas están mal empleadas o faltan elementos semánticos importantes. | Uso básico de semántica, pero con errores que dificultan la claridad. |
| **4 (Insuficiente)** | Has intentado estructurar, pero con errores graves en la semántica. Las buenas prácticas no se han seguido. | Estructura confusa o incorrecta, con etiquetas mal utilizadas. |
| **2 (Deficiente)** | Errores críticos en la estructura. No hay diferenciación de secciones ni uso de semántica. | Documento incompleto, incoherente y sin valor práctico. |
| **0 (No realizado)** | No has presentado ninguna estructura HTML válida. | No hay evidencia de trabajo realizado. |

**Buenas prácticas a evaluar:**
- Indentación y legibilidad
- Uso correcto de etiquetas semánticas
- Comentarios útiles
- Organización lógica y jerárquica
- Validación W3C sin errores

---

### Criterio 2.c: Funcionalidad de etiquetas y atributos HTML

**¿Qué se evalúa?**  
Tu comprensión y aplicación práctica de las principales etiquetas y atributos HTML.

| Nivel | Descripción | Indicador |
|-------|-------------|-----------|
| **10 (Excelente)** | Has utilizado de manera impecable las principales etiquetas y atributos en tu proyecto. Demuestras entendimiento completo de su funcionalidad. Has seguido todas las buenas prácticas: semántica adecuada, atributos globales bien aplicados, y atributos específicos correctos en imágenes, enlaces, formularios, etc. | Código organizado y funcional que demuestra dominio de etiquetas y atributos. |
| **8 (Notable)** | Buen entendimiento y uso de etiquetas y atributos principales, aunque algunos elementos podrían estar mejor implementados. Buenas prácticas seguidas en su mayoría. | Uso adecuado con cumplimiento mayoritario de buenas prácticas. |
| **6 (Aprobado)** | Has empleado etiquetas y atributos de forma funcional pero limitada, con algunos errores. Conocimiento básico de buenas prácticas. | Uso funcional pero con errores o carencias en implementación. |
| **4 (Insuficiente)** | Intento de usar etiquetas y atributos, pero con errores graves. Las buenas prácticas no se han aplicado correctamente. | Código funcionalmente incorrecto sin aplicar estándares básicos. |
| **2 (Deficiente)** | Conocimiento muy limitado de etiquetas y atributos. Proyecto incompleto o incoherente. | Uso mínimo o erróneo sin estructura práctica coherente. |
| **0 (No realizado)** | No has aplicado etiquetas y atributos HTML de forma práctica. | No hay evidencia de trabajo realizado. |

**Buenas prácticas a evaluar:**
- Uso correcto de etiquetas de imágenes con atributos adecuados
- Uso correcto de etiquetas de enlace con atributos necesarios
- Implementación adecuada de formularios con sus atributos
- Semántica sobre elementos genéricos
- Atributos globales aplicados correctamente
- Validación W3C
- Comentarios y legibilidad

---

### Criterio 2.e: Uso de herramientas en la creación de documentos web

**¿Qué se evalúa?**  
Tu capacidad para usar herramientas profesionales de desarrollo web de forma eficiente.

| Nivel | Descripción | Indicador |
|-------|-------------|-----------|
| **10 (Excelente)** | Has utilizado herramientas como Visual Studio Code o WebStorm de forma profesional. Demuestras conocimiento avanzado: extensiones útiles, linters, atajos de teclado, control de versiones con Git y GitHub. | Uso experto de herramientas con optimización del flujo de trabajo. |
| **8 (Notable)** | Uso adecuado de herramientas básicas y algunas avanzadas. Podrías optimizar más el uso de extensiones o linters. | Conocimiento sólido con uso menos optimizado de funciones avanzadas. |
| **6 (Aprobado)** | Uso funcional de herramientas básicas (editores y validadores), pero con conocimiento limitado de funciones avanzadas. | Uso funcional pero con carencias en aprovechamiento completo. |
| **4 (Insuficiente)** | Uso limitado de herramientas con errores frecuentes que dificultan el desarrollo. | Uso básico e inconsistente que afecta al resultado final. |
| **2 (Deficiente)** | Conocimiento muy básico o erróneo del uso de herramientas. | Uso mínimo o inapropiado con resultados incompletos. |
| **0 (No realizado)** | No has utilizado herramientas adecuadas para el desarrollo web. | No hay evidencia de uso de herramientas. |

**Buenas prácticas a evaluar:**
- Optimización del editor (extensiones como Prettier, linters, Emmet)
- Control de versiones (Git y GitHub)
- Validación (W3C Validator)
- Organización de archivos y carpetas
- Eficiencia en el flujo de trabajo (atajos, terminal integrada)

---

### Criterio 2.f: Ventajas de las hojas de estilo

**¿Qué se evalúa?**  
Tu capacidad para demostrar de forma práctica las ventajas que aportan las hojas de estilo.

| Nivel | Descripción | Indicador |
|-------|-------------|-----------|
| **10 (Excelente)** | Has implementado un proyecto que demuestra claramente las ventajas del CSS: metodología BEM, variables para diseño consistente, diseño responsive, y transiciones/animaciones que mejoran la UX. Todo organizado con buenas prácticas. | Uso impecable de BEM, variables, animaciones y responsive design. |
| **8 (Notable)** | Uso correcto de BEM, variables y diseño responsive. Las transiciones podrían estar mejor implementadas. Mayoría de buenas prácticas seguidas. | Buen uso del CSS con detalles a mejorar. |
| **6 (Aprobado)** | Aplicación básica de ventajas del CSS, pero limitada o con errores en BEM, responsive o animaciones. | Uso básico con cumplimiento parcial de buenas prácticas. |
| **4 (Insuficiente)** | Aplicación incorrecta o muy limitada. Omites elementos importantes como BEM, variables o responsive. | Código desorganizado que dificulta comprensión y mantenimiento. |
| **2 (Deficiente)** | Errores graves en el uso de CSS. Código desorganizado sin aplicar ventajas básicas. | No se identifican intentos de aplicar técnicas modernas. |
| **0 (No realizado)** | No has demostrado las ventajas de las hojas de estilo. | No hay evidencia de conocimientos sobre buenas prácticas CSS. |

**Buenas prácticas a evaluar:**
- Organización del código con comentarios
- Uso de herramientas y validación W3C
- Principio DRY (Don't Repeat Yourself)
- Variables CSS para cambios rápidos
- Claridad y mantenibilidad

---

### Criterio 2.g: Aplicación de hojas de estilo

**¿Qué se evalúa?**  
Tu capacidad para aplicar hojas de estilo correctamente en un proyecto real.

| Nivel | Descripción | Indicador |
|-------|-------------|-----------|
| **10 (Excelente)** | Has aplicado CSS correctamente usando un archivo único y organizado con metodología BEM. Uso avanzado de variables, media queries, transiciones, animaciones y Dark Mode. Código optimizado y consistente. | Uso impecable con técnicas avanzadas y diseño atractivo y funcional. |
| **8 (Notable)** | Aplicación correcta con archivo único y organizado. Algunas técnicas avanzadas implementadas, aunque con áreas de mejora en optimización. | Uso sólido con carencias menores en optimización o consistencia. |
| **6 (Aprobado)** | Uso básico de CSS con enfoque limitado o errores en organización. Implementación de técnicas básicas sin metodología consistente. | Aplicación funcional pero básica con errores o áreas de mejora. |
| **4 (Insuficiente)** | Intento de aplicar CSS, pero con errores graves en organización, funcionalidad o consistencia. | Código desorganizado que afecta negativamente al diseño. |
| **2 (Deficiente)** | Conocimiento muy básico de CSS sin resultados coherentes o funcionales. | Aplicación muy limitada sin estructura clara ni resultados funcionales. |
| **0 (No realizado)** | No has presentado hojas de estilo válidas. | No hay evidencia de trabajo realizado. |

**Buenas prácticas a evaluar:**
- Metodología BEM
- Uso de variables CSS
- Responsive Design con media queries
- Dark Mode
- Transiciones y animaciones
- Organización del archivo CSS
- Validación W3C sin errores

---

### Criterio 2.h: Validación de documentos HTML y CSS

**¿Qué se evalúa?**  
Tu capacidad para validar y corregir documentos HTML y CSS usando herramientas estándar.

| Nivel | Descripción | Indicador |
|-------|-------------|-----------|
| **10 (Excelente)** | Has validado todos los documentos HTML y CSS con el W3C Validator sin errores. Código libre de problemas estructurales. | Documentos validados sin errores, código limpio y correcto. |
| **8 (Notable)** | Validación con pocas advertencias o errores menores. Validación mayoritariamente exitosa. | Documentos pasan la mayoría de validaciones con errores menores. |
| **6 (Aprobado)** | Validación básica completada con algunos errores que afectan estructura o semántica. Documentos funcionales pero no completamente estándar. | Validación básica con errores importantes pero código funcionalmente aceptable. |
| **4 (Insuficiente)** | Intento de validación con varios errores que afectan la estructura. Validación no completada correctamente. | Errores significativos que requieren corrección, documentos no pasan validaciones básicas. |
| **2 (Deficiente)** | No has validado o no has corregido errores detectados. Código con errores graves. | Código no validado o con errores graves que impiden validación. |
| **0 (No realizado)** | No has realizado validación alguna. | No hay evidencia de validación realizada. |

**Buenas prácticas a evaluar:**
- Uso del W3C Validator sin errores
- Validación de estructura semántica HTML
- Optimización del código CSS libre de errores de sintaxis
- Documentación de validación en README.md

---

## Consejos finales

- **Empieza por el contenido y la estructura**, no por los colores y efectos. Primero que funcione, después que brille.
- **Valida temprano y a menudo**. No dejes la validación para el final.
- **Usa Git desde el día 1**. Haz commits pequeños y con mensajes claros.
- **Piensa en móvil primero** (mobile-first). Es más fácil escalar hacia arriba que comprimir hacia abajo.
- **No copies código que no entiendes**. Si usas algo de Internet, asegúrate de entender qué hace y por qué lo necesitas.
