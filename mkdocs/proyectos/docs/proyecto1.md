---
hide:
  - navigation
---

# **Proyecto 1: "Desarrollo con Estándares Web"**

## **Contexto del proyecto**

Has recibido un encargo: desarrollar un sitio web que represente la identidad profesional o comercial de un cliente. Puede ser una empresa local, un profesional independiente, una ONG, una startup o cualquier proyecto que elijas, siempre que sea creíble y profesional.

No es un ejercicio académico sin sentido. Es un proyecto real que podrías entregar a un cliente de verdad. El cliente espera un trabajo que cumpla con los estándares actuales de desarrollo web (HTML5 y CSS3) y que sea accesible, navegable y válido.

---

## **El encargo**

**Necesidad**: Sitio web completo de 6 páginas

**Requisitos del cliente**:
- Compatible con estándares web actuales.
- Accesible para todos los usuarios (principalmente las cosas vistas en clase).
- Funcional en móviles, tablets y ordenadores.
- Código limpio y mantenible.
- Que tengas todas las buenas prácticas vistas en clase.

**Metodología**: El proyecto se desarrollará en dos fases diferenciadas para garantizar calidad en cada etapa.

---

## **FASE 1: Estructura y Semántica HTML5**

### **¿De qué va esta fase?**

En esta primera fase te centrarás exclusivamente en la **estructura y el contenido** de tu sitio web. Nada de colores, diseños bonitos ni efectos visuales todavía. Aquí lo importante es construir una base sólida con HTML5 semántico, accesible y bien organizado.

Piénsalo como construir los cimientos y las paredes de una casa antes de pintarla.

---

### **Tu objetivo en esta fase**

Crear un sitio web de **seis páginas** con estructura HTML5 correcta, contenido bien organizado y un formulario funcional. Todo debe ser válido, semántico y accesible.

---

### **Requisitos de la Fase 1**

#### **1. Estructura HTML5 semántica**

- **Seis páginas HTML** con estructura clara y diferenciada:
    1. **index.html** - Página principal (Home)
    2. **servicios.html** - Servicios o productos
    3. **about.html** - Sobre nosotros
    4. **blog.html** - Blog o noticias
    5. **contacto.html** - Página de contacto con formulario
    6. **[tu-elección].html** - Página adicional (galería, FAQ, testimonios, portfolio, etc.)

- **Cada página debe tener**:
    - Al menos **tres secciones de contenido** con significado propio (elementos estructurales principales no cuentan)
    - Estructura diferenciada: cada página debe ser única estructuralmente, no una plantilla repetida

#### **2. Principios estructurales obligatorios**

- **Semántica correcta**: usa el elemento HTML más apropiado según el significado del contenido, no por su apariencia visual
- **Jerarquía lógica**: organiza la información de forma que refleje su importancia y relación
- **Accesibilidad desde el marcado**: estructura que funcione con tecnologías asistivas
- **Metadatos completos**: información necesaria en el encabezado del documento
- **Navegación coherente**: sistema de enlaces que conecte todas las páginas de forma intuitiva

#### **3. Contenido multimedia**

- **Imágenes**: con alternativas textuales descriptivas y dimensiones especificadas
- **Figuras con contexto**: cuando uses contenido visual relevante, proporciona contexto y descripción

#### **4. Formulario completo (en contacto.html)**

Debe incluir **al menos 6 campos diferentes** que demuestren:
- Tipos de entrada variados y apropiados al dato solicitado
- Validación del lado del cliente
- Asociación correcta entre etiquetas y controles
- Campos obligatorios y opcionales bien diferenciados
- Organización lógica de la información solicitada

#### **5. Representación de datos**

Incluye al menos una **estructura tabular de datos** donde sea semánticamente apropiado (comparativas, horarios, precios, estadísticas, etc.)

---

### **Entregable Fase 1**

Repositorio en GitHub con esta estructura:

```
tu-repositorio/
├── index.html
├── servicios.html
├── about.html
├── blog.html
├── contacto.html
├── [tu-pagina-adicional].html
├── assets/
│   └── images/
└── README.md
```

El **README.md** debe incluir:
- Descripción del proyecto y temática elegida
- Estructura del sitio (qué contiene cada página)
- Decisiones de diseño estructural tomadas

---

### **A tener en cuenta en la Fase 1**

- **NO uses CSS** en esta fase (ni inline, ni interno, ni externo)
- **NO te preocupes por el diseño visual** todavía
- **Céntrate en la estructura y la semántica**
- **Asegúrate de que todo valida en el W3C Validator**
- Empieza por el contenido real o realista, no uses "Lorem ipsum" genérico
- Piensa en la jerarquía de información antes de escribir código
- Valida cada página con el [W3C Validator](https://validator.w3.org/) antes de continuar
- Haz commits frecuentes en Git con mensajes descriptivos
- Revisa la accesibilidad: ¿tiene sentido tu estructura si alguien usa un lector de pantalla?

---

## **FASE 2: Estilos CSS3 y Validación Final**

### **¿De qué va esta fase?**

Ahora sí, es momento de darle vida visual a tu proyecto. En esta fase aplicarás CSS3 moderno, diseño responsive, y pulirás todo hasta que sea un producto profesional.

---

### **Tu objetivo en esta fase**

Aplicar una hoja de estilos única y bien organizada que haga tu sitio visualmente atractivo, accesible y funcional en cualquier dispositivo.

---

### **Requisitos de la Fase 2**

#### **1. Hoja de estilos única y organizada**

- **Un solo archivo CSS** para todo el sitio
- Organización con **metodología BEM** (Block Element Modifier)
- Código comentado y estructurado por secciones
- **Variables CSS** para:
    - Paleta de colores
    - Tipografías
    - Espaciados y tamaños comunes
    - Otros valores reutilizables

#### **2. Diseño responsive**

- **Resposive Design**
- **Media queries** para diferentes rangos de dispositivos
- Sistema de layout flexible y adaptable
- Contenido multimedia que se adapte al viewport

#### **3. Dark Mode**

- Soporte básico para modo oscuro
- Uso de características de detección de preferencias del sistema
- Variables CSS que faciliten el cambio de tema

#### **4. Transiciones y animaciones**

- **Transiciones suaves** en elementos interactivos
- Al menos **una animación** que aporte valor a la experiencia de usuario
- Respeto por las preferencias de movimiento reducido del usuario

#### **5. Tipografía y jerarquía visual**

- Uso de fuentes web apropiadas
- Jerarquía visual clara y consistente
- Legibilidad optimizada (espaciado, contraste, tamaño)

---

### **Entregable Fase 2**

Actualiza tu repositorio con:

```
tu-repositorio/
├── index.html
├── servicios.html
├── about.html
├── blog.html
├── contacto.html
├── [tu-pagina-adicional].html
├── css/
│   └── styles.css        ← NUEVO
├── assets/
│   ├── images/
│   └── videos/
└── README.md             ← ACTUALIZADO
```

**Actualiza el README.md** añadiendo:
- Decisiones de diseño visual
- Paleta de colores usada
- Tipografías elegidas
- Capturas de pantalla del sitio
- Resultados de validación (enlaces a W3C Validator)

---

## Fase 3: Presentación del Proyecto (Videotutorial)

### Objetivo

En esta fase final vais a presentar vuestro trabajo explicando las decisiones de diseño y desarrollo que habéis tomado, además de demostrar que habéis seguido las buenas prácticas de validación del código.

### Puntos a tener en cuenta

**1. Presentación del proyecto**

Debéis preparar una presentación oral de vuestro proyecto en la que expliquéis las decisiones de diseño tomadas, como el wireframe inicial, la estructura HTML que habéis implementado y los estilos CSS aplicados. También es importante que comentéis las soluciones técnicas que habéis desarrollado para resolver los diferentes retos del proyecto.

**Producto**: Una presentación clara y bien estructurada que resuma el trabajo realizado y justifique las decisiones tomadas.

**2. Demostración de la validación y mejoras**

Durante el videotutorial debéis mostrar cómo habéis validado vuestro código HTML y CSS. Es importante que expliquéis qué errores encontrasteis (si los hubo) y cómo los solucionasteis para mejorar la calidad del código.

**Producto**: Evidencia de la validación realizada y las mejoras aplicadas, todo ello explicado durante la presentación.

### Entrega

Para la entrega del videotutorial, cada estudiante debe realizar una presentación clara y detallada de todo el proceso de desarrollo del proyecto. El vídeo debe incluir desde la fase inicial de análisis y planificación hasta la implementación final de la interfaz web. Es fundamental que expliquéis las decisiones de diseño tomadas, las herramientas utilizadas, la maquetación con HTML5 y CSS3, así como los aspectos destacables del proyecto como puede ser la arquitectura del mismo.

El videotutorial debe tener una duración máxima de 7 minutos y seguir un orden lógico que permita entender fácilmente cada paso del proyecto, destacando los problemas encontrados y las soluciones aplicadas. Además, se recomienda incluir una breve conclusión sobre el resultado final y posibles mejoras futuras.

**Muy importante**: tened en cuenta los criterios de evaluación en vuestra explicación, debe quedar claro que habéis cumplido con cada uno de ellos.

## Evaluación

# Rúbrica de Evaluación - Proyecto 1: "Desarrollo con Estándares Web"

## Evaluación (RA2)

---

### **Criterio de evaluación 2.b**
**b) Se ha analizado la estructura de un documento HTML e identificado las secciones que lo componen.**

| **Nivel de Logro** | **Descripción**                                                                                          | **Indicador**                                                                                       |
|---------------------|------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| **10 (Excelente)**  | Ha analizado y estructurado correctamente un documento HTML, identificando de forma clara y detallada las secciones principales (header, main, footer, aside, section, article, etc.) y justificando su uso. Ha aplicado todas las buenas prácticas vistas en clase, incluyendo semántica, indentación y comentarios útiles. | Documento HTML impecable con uso adecuado de etiquetas semánticas y una estructura clara, organizada y justificada. |
| **8 (Notable)**     | Ha analizado y estructurado correctamente un documento HTML, identificando las secciones principales con un buen uso de etiquetas semánticas. Algunas justificaciones o aspectos de las buenas prácticas podrían mejorarse. | Estructura lógica y funcional, con pequeñas inconsistencias en la aplicación de semántica o en el cumplimiento de las buenas prácticas. |
| **6 (Aprobado)**    | Ha identificado las secciones principales y las ha estructurado de manera básica, aunque algunas etiquetas están mal empleadas o faltan elementos semánticos importantes. Se han aplicado algunas buenas prácticas, pero no de forma consistente. | Uso básico de semántica y organización, pero con errores que dificultan la claridad o eficacia de la estructura. |
| **4 (Insuficiente)**| Ha intentado identificar y estructurar las secciones, pero con errores graves en la semántica o con estructuras desorganizadas y poco claras. Las buenas prácticas vistas en clase no se han seguido correctamente. | Estructura confusa o incorrecta, con etiquetas mal utilizadas y sin cumplir con estándares básicos. |
| **2 (Deficiente)**  | Ha presentado un trabajo con errores críticos en la estructura del documento HTML, sin diferenciar las secciones principales ni emplear semántica. No hay evidencia de buenas prácticas ni de comprensión del contenido. | Documento HTML incompleto o incoherente, con una estructura desorganizada y sin valor práctico. |
| **0 (No realizado)**| No ha realizado ninguna estructura de documento HTML o el uso es inapropiado y sin relación con el criterio evaluado. Tampoco ha seguido ninguna de las buenas prácticas vistas en clase. | No hay evidencia de comprensión ni de trabajo realizado. |

#### **Buenas prácticas a evaluar**

1. **Indentación y legibilidad:** Código correctamente indentado para facilitar la lectura.
2. **Uso de etiquetas semánticas:** Uso adecuado de etiquetas.
3. **Comentarios:** Uso de comentarios útiles para explicar la estructura del documento.
4. **Organización lógica:** Estructura jerárquica y lógica que refleje la intención del contenido del documento.
5. **Validación:** Código que pase las validaciones del W3C sin errores.

---

### **Criterio de evaluación 2.c**
**c) Se ha reconocido la funcionalidad de las principales etiquetas y los atributos del lenguaje HTML.**

| **Nivel de Logro** | **Descripción**                                                                                          | **Indicador**                                                                                       |
|---------------------|------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| **10 (Excelente)**  | Ha demostrado un conocimiento exhaustivo de las etiquetas HTML5, utilizando de forma correcta y justificada las etiquetas más apropiadas para cada tipo de contenido. Ha empleado atributos de manera óptima (alt, title, aria-*, data-*, etc.) y ha demostrado comprensión de sus funciones específicas. El formulario incluye validación completa con atributos apropiados. | Uso experto de etiquetas y atributos HTML5, con selección precisa según el contenido y funcionalidad requerida. Formulario con validación completa y accesible. |
| **8 (Notable)**     | Ha utilizado correctamente las principales etiquetas HTML5 y sus atributos más comunes. El formulario incluye al menos 6 tipos de campos diferentes con validación básica. Algunas etiquetas o atributos podrían estar mejor optimizados o ser más específicos. | Buen dominio de etiquetas y atributos, con uso funcional y correcto en la mayoría de casos. Formulario completo y validado. |
| **6 (Aprobado)**    | Ha empleado las etiquetas HTML básicas de forma aceptable, aunque con algunas confusiones o usos inadecuados. El formulario cumple con el mínimo de 6 campos, pero la validación es incompleta o básica. Los atributos están presentes pero no siempre son los más apropiados. | Uso básico de etiquetas y atributos, suficiente para una funcionalidad mínima pero mejorable. Formulario funcional pero sin validación completa. |
| **4 (Insuficiente)**| Ha utilizado etiquetas HTML con errores significativos en su funcionalidad o propósito. El formulario no cumple con los requisitos mínimos o carece de validación adecuada. Los atributos están ausentes o mal empleados en varios casos importantes. | Comprensión limitada de las etiquetas y atributos, con errores que afectan a la funcionalidad del sitio. Formulario incompleto. |
| **2 (Deficiente)**  | Ha empleado etiquetas HTML de forma incorrecta o inapropiada en la mayoría de casos. El formulario es deficiente o inexistente. No se evidencia comprensión de la funcionalidad de etiquetas y atributos. | Uso inadecuado generalizado de etiquetas y atributos. No cumple con requisitos básicos del proyecto. |
| **0 (No realizado)**| No ha utilizado etiquetas HTML de forma apropiada o el trabajo no demuestra ningún conocimiento de su funcionalidad. No hay formulario o es completamente disfuncional. | No hay evidencia de comprensión ni de trabajo realizado. |

#### **Buenas prácticas a evaluar**

1. **Selección semántica:** Uso de la etiqueta más apropiada según el contenido (nav, article, aside, figure, etc.).
2. **Atributos de accesibilidad:** Uso correcto de alt, title, label, y demás campos para la mejora de la accesibilidad.
3. **Formulario robusto:** Uso de tipos de input apropiados (email, tel, number, date, url, etc.) con validación mediante atributos (required, pattern, min, max, minlength, maxlength).
4. **Metadatos completos:** Inclusión de charset, viewport, description, author, etc.
5. **Atributos multimedia:** Dimensiones especificadas en imágenes, controles en video/audio, fuentes alternativas.

---

### **Criterio de evaluación 2.d**
**d) Se han establecido las semejanzas y diferencias entre las diferentes versiones de HTML.**

| **Nivel de Logro** | **Descripción**                                                                                          | **Indicador**                                                                                       |
|---------------------|------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| **10 (Excelente)**  | Ha demostrado un conocimiento profundo de la evolución de HTML, utilizando exclusivamente características de HTML5 de forma correcta y justificada. Ha evitado elementos obsoletos y ha documentado en el README las decisiones tomadas basándose en las capacidades modernas de HTML5 frente a versiones anteriores. | Proyecto que refleja comprensión total de HTML5, sin elementos obsoletos, con justificación clara de las decisiones basadas en las capacidades del estándar moderno. |
| **8 (Notable)**     | Ha empleado características modernas de HTML5 correctamente y ha evitado la mayoría de elementos obsoletos. Demuestra comprensión de las diferencias principales entre HTML5 y versiones anteriores, aunque la documentación podría ser más detallada. | Uso correcto de HTML5 moderno con mínima presencia de prácticas obsoletas. Buena comprensión de la evolución del estándar. |
| **6 (Aprobado)**    | Ha utilizado principalmente HTML5, aunque aparecen algunos elementos o prácticas de versiones anteriores. Demuestra conocimiento básico de las diferencias entre versiones, pero sin profundizar en las ventajas del estándar moderno. | Uso aceptable de HTML5 con algunas prácticas obsoletas. Comprensión básica de las diferencias entre versiones. |
| **4 (Insuficiente)**| Ha mezclado características de diferentes versiones de HTML sin criterio claro. Usa elementos obsoletos o desaconsejados de forma frecuente. No demuestra comprensión clara de las diferencias entre versiones. | Uso inconsistente de HTML5 con presencia significativa de elementos obsoletos. Confusión sobre estándares modernos. |
| **2 (Deficiente)**  | Ha utilizado principalmente elementos obsoletos o no ha diferenciado entre versiones de HTML. No demuestra conocimiento de HTML5 ni de sus ventajas sobre versiones anteriores. | Código que no refleja conocimiento de HTML5 ni de estándares modernos. Uso extensivo de elementos obsoletos. |
| **0 (No realizado)**| No ha aplicado conocimientos sobre versiones de HTML o el trabajo no permite evaluar este criterio. | No hay evidencia de comprensión ni de trabajo realizado. |

#### **Buenas prácticas a evaluar**

1. **Uso de HTML5 puro:** Ausencia de elementos y atributos obsoletos, atributos.
2. **Elementos semánticos modernos:** Uso de etiquetas semánticas en lugar de `<div>` genéricos.
3. **DOCTYPE correcto:** Uso del DOCTYPE simplificado de HTML5.
4. **Atributos modernos:** Uso de atributos HTML5 para la mejora de tipos de input modernos.
---

### **Criterio de evaluación 2.e**
**e) Se han utilizado herramientas en la creación de documentos web.**

| **Nivel de Logro** | **Descripción**                                                                                          | **Indicador**                                                                                       |
|---------------------|------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| **10 (Excelente)**  | Ha utilizado de forma experta todas las herramientas requeridas: Git con commits frecuentes y descriptivos, GitHub con repositorio bien estructurado, validadores W3C sin errores, editor de código con configuración profesional. El README está completo y profesional. Ha demostrado dominio del flujo de trabajo con estas herramientas. | Dominio completo de las herramientas de desarrollo web. Repositorio impecable, commits profesionales, validación perfecta y documentación excelente. |
| **8 (Notable)**     | Ha utilizado correctamente las herramientas principales: Git con buen historial de commits, repositorio GitHub organizado, validación W3C aplicada. El README incluye la información requerida. El flujo de trabajo es adecuado aunque podría optimizarse. | Buen uso de herramientas con flujo de trabajo correcto. Pequeñas mejoras posibles en organización o documentación. |
| **6 (Aprobado)**    | Ha empleado las herramientas básicas de forma aceptable: repositorio GitHub funcional, algunos commits realizados, validación realizada aunque con algunos errores menores. El README cumple mínimos pero es mejorable. | Uso básico de herramientas suficiente para cumplir requisitos mínimos. Flujo de trabajo funcional pero básico. |
| **4 (Insuficiente)**| Ha utilizado las herramientas de forma deficiente: pocos commits o poco descriptivos, repositorio desorganizado, validación incompleta o con errores sin resolver, README insuficiente o ausente. | Uso inadecuado de herramientas que dificulta la evaluación y mantenimiento del proyecto. |
| **2 (Deficiente)**  | Ha hecho uso mínimo o incorrecto de las herramientas: repositorio mal estructurado o incompleto, ausencia de control de versiones adecuado, sin validación o con errores críticos, documentación ausente o inútil. | Las herramientas no se han empleado de forma efectiva. Proyecto difícil de evaluar o usar. |
| **0 (No realizado)**| No ha utilizado las herramientas requeridas o su uso es completamente inadecuado. No hay repositorio, control de versiones, validación ni documentación. | No hay evidencia de uso de herramientas ni de trabajo realizado. |

#### **Buenas prácticas a evaluar**

1. **Control de versiones Git:** Commits frecuentes (uno por funcionalidad o cambio significativo) con mensajes descriptivos y en español.
2. **Estructura del repositorio:** Organización clara de carpetas (css/, assets/images/, assets/videos/) según especificaciones del proyecto.
3. **Validación W3C:** Todo el HTML y CSS pasa la validación sin errores. Enlaces a los resultados de validación en el README.
4. **README completo:** Incluye descripción del proyecto, estructura del sitio, decisiones de diseño, paleta de colores, tipografías y capturas de pantalla.
5. **Herramientas de desarrollo:** Uso efectivo del navegador y sus herramientas de desarrollo para depuración y testing responsive.

---

### **Criterio de evaluación 2.f**
**f) Se han identificado las ventajas que aporta la utilización de hojas de estilo.**

| **Nivel de Logro** | **Descripción**                                                                                          | **Indicador**                                                                                       |
|---------------------|------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| **10 (Excelente)**  | Ha demostrado comprensión completa de las ventajas de CSS mediante la separación total de contenido y presentación. Ha documentado en el README las ventajas conseguidas (mantenibilidad, consistencia, eficiencia). La Fase 1 no contiene CSS y la Fase 2 implementa un archivo CSS único y eficiente con variables y reutilización óptima. | Separación perfecta HTML/CSS. Documentación excelente de ventajas. Código CSS altamente mantenible y eficiente que demuestra todas las ventajas de las hojas de estilo. |
| **8 (Notable)**     | Ha mantenido correctamente la separación entre HTML y CSS. Ha identificado y documentado las principales ventajas de usar hojas de estilo. El CSS está bien organizado y demuestra buena comprensión de reutilización y mantenibilidad. | Buena separación y documentación de ventajas. CSS organizado que refleja comprensión de los beneficios de las hojas de estilo. |
| **6 (Aprobado)**    | Ha mantenido la separación básica entre HTML y CSS. Menciona algunas ventajas de las hojas de estilo aunque sin profundizar. El CSS cumple su función pero podría aprovecharse mejor la reutilización y organización. | Separación adecuada con comprensión básica de las ventajas. CSS funcional pero con oportunidades de mejora en eficiencia. |
| **4 (Insuficiente)**| La separación entre HTML y CSS es inconsistente o presenta problemas. No ha identificado claramente las ventajas o la documentación es insuficiente. El CSS no demuestra comprensión de reutilización ni eficiencia. | Separación deficiente con poca evidencia de comprensión de las ventajas de las hojas de estilo. |
| **2 (Deficiente)**  | Ha mezclado estilos inline o internos sin justificación, rompiendo la separación. No identifica ventajas de CSS o las menciona de forma incorrecta. El CSS está desorganizado y sin aprovechar sus capacidades. | No se evidencia comprensión de las ventajas de CSS. Implementación que contradice los principios de las hojas de estilo. |
| **0 (No realizado)**| No ha utilizado hojas de estilo externas o su implementación no permite evaluar este criterio. No hay documentación ni evidencia de comprensión. | No hay evidencia de comprensión ni de trabajo realizado. |

#### **Buenas prácticas a evaluar**

1. **Separación completa:** Fase 1 sin CSS (ni inline, ni interno, ni externo). Fase 2 con un único archivo CSS externo.
2. **Reutilización mediante variables:** Uso de variables CSS para colores, tipografías, espaciados y otros valores repetidos.
3. **Organización modular:** CSS estructurado con comentarios por secciones, siguiendo metodología BEM.
4. **Mantenibilidad:** Código CSS fácil de mantener y modificar gracias a la buena organización y nomenclatura.
5. **Documentación de ventajas:** README que explica las ventajas conseguidas (separación de responsabilidades, consistencia visual, facilidad de cambios globales, etc.).

---

### **Criterio de evaluación 2.g**
**g) Se han aplicado hojas de estilo.**

| **Nivel de Logro** | **Descripción**                                                                                                                                                                                                                                                                                                                        | **Indicador**                                                                                       |
|---------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| **10 (Excelente)**  | Ha aplicado CSS3 de forma excepcional: diseño responsive impecable 100% adaptable, dark mode completamente funcional, animaciones y transiciones suaves y profesionales, tipografía excelente, metodología BEM aplicada correctamente. El sitio es visualmente atractivo, accesible y funciona perfectamente en cualquier dispositivo. | CSS profesional y moderno. Diseño responsive perfecto, dark mode funcional, animaciones apropiadas. Excelente experiencia de usuario en todos los dispositivos. |
| **8 (Notable)**     | Ha aplicado CSS3 correctamente: diseño responsive funcional, dark mode implementado, transiciones y al menos una animación presente, buena tipografía y jerarquía visual. Metodología BEM aplicada en su mayoría. El sitio es atractivo y funcional con pequeñas oportunidades de mejora.                                              | CSS bien aplicado con diseño responsive y dark mode funcionales. Buena experiencia de usuario con margen de mejora. |
| **6 (Aprobado)**    | Ha aplicado CSS básico: diseño que se adapta a diferentes tamaños de pantalla aunque no de forma óptima, dark mode presente pero básico, algunas transiciones, tipografía aceptable. BEM parcialmente aplicado. El sitio cumple requisitos mínimos pero es mejorable.                                                                  | CSS funcional con diseño responsive básico. Cumple requisitos mínimos pero con oportunidades claras de mejora. |
| **4 (Insuficiente)**| Ha aplicado CSS con deficiencias: diseño responsive incompleto o con problemas, dark mode ausente o disfuncional, transiciones/animaciones ausentes o inapropiadas, tipografía sin jerarquía clara, sin metodología BEM.                                                                                                               | CSS insuficiente que no cumple requisitos del proyecto. Problemas de usabilidad o visualización. |
| **2 (Deficiente)**  | Ha aplicado CSS de forma inadecuada: sin responsive, sin dark mode, sin transiciones, tipografía problemática, CSS desorganizado. El sitio no es funcional en diferentes dispositivos.                                                                                                                                                 | CSS deficiente que hace el sitio poco funcional o no utilizable en dispositivos móviles. |
| **0 (No realizado)**| No ha aplicado CSS o la aplicación es completamente inadecuada e impide el uso del sitio.                                                                                                                                                                                                                                              | No hay evidencia de trabajo realizado en CSS. |

#### **Buenas prácticas a evaluar**

1. **Mobile-first y responsive:** Diseño que comienza para un viewport y se adapta progresivamente mediante media queries bien planificadas.
2. **Dark mode funcional:** Implementación con variables CSS que cambian según el tema.
3. **Transiciones profesionales:** Transiciones suaves en elementos interactivos (hover, focus) con respeto a `prefers-reduced-motion`.
4. **Metodología BEM:** Nomenclatura consistente siguiendo Block__Element--Modifier en las clases CSS.
5. **Variables CSS:** Paleta de colores, tipografías y espaciados definidos como variables CSS reutilizables.
6. **Jerarquía tipográfica:** Fuentes web apropiadas con jerarquía visual clara, contraste adecuado y legibilidad optimizada.

---

### **Criterio de evaluación 2.h**
**h) Se han validado documentos HTML y CSS.**

| **Nivel de Logro** | **Descripción**                                                                                          | **Indicador**                                                                                       |
|---------------------|------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| **10 (Excelente)**  | Todos los documentos HTML y CSS pasan la validación del W3C sin ningún error ni advertencia. Ha incluido en el README enlaces directos a los resultados de validación de cada página. Ha validado frecuentemente durante el desarrollo y ha corregido todos los problemas encontrados. El código cumple completamente con los estándares web. | Validación W3C perfecta en todo el HTML y CSS. Documentación completa de resultados. Código que cumple estándares web profesionales. |
| **8 (Notable)**     | Todos los documentos HTML y CSS pasan la validación del W3C sin errores. Puede haber alguna advertencia menor justificada. Ha incluido enlaces a los resultados de validación en el README. El código cumple con los estándares web actuales. | Validación W3C correcta con posibles advertencias menores. Código que cumple estándares profesionales. |
| **6 (Aprobado)**    | La mayoría de documentos HTML y CSS pasan la validación, aunque algunos presentan errores menores que han sido identificados. Los enlaces de validación están presentes en el README. El código cumple requisitos mínimos de estándares. | Validación mayormente correcta con algunos errores menores. Cumple estándares básicos. |
| **4 (Insuficiente)**| Los documentos HTML y CSS presentan errores de validación significativos que no han sido corregidos. La documentación de validación es incompleta. El código no cumple adecuadamente con los estándares. | Errores de validación significativos sin corregir. No cumple estándares profesionales. |
| **2 (Deficiente)**  | Los documentos HTML y CSS presentan múltiples errores graves de validación. No hay evidencia de haber intentado validar el código o corregir los errores. El código no cumple con estándares básicos. | Múltiples errores graves de validación. Código que no cumple estándares web básicos. |
| **0 (No realizado)**| No se ha realizado validación o el código presenta errores críticos que impiden su validación. No hay documentación de validación. | No hay evidencia de validación ni de trabajo realizado correctamente. |

#### **Buenas prácticas a evaluar**

1. **Validación HTML:** Todas las páginas HTML validadas con [W3C Markup Validator](https://validator.w3.org/) sin errores.
2. **Validación CSS:** Archivo CSS validado con [W3C CSS Validator](https://jigsaw.w3.org/css-validator/) sin errores.
3. **Documentación de validación:** README incluye enlaces directos a los resultados de validación de cada página HTML y del archivo CSS.
4. **Validación durante desarrollo:** Evidencia en commits de validación frecuente y corrección de errores encontrados.
5. **Corrección de advertencias:** Advertencias justificadas o corregidas cuando sea posible sin comprometer funcionalidad.

---

## Notas finales

- La evaluación de cada criterio es **independiente** pero debe considerarse en el **contexto global del proyecto**.
- La **profesionalidad** y **atención al detalle** son factores transversales que influyen en todos los criterios.
- Se valorará especialmente la **coherencia** entre todas las páginas del sitio y la aplicación consistente de las buenas prácticas.
