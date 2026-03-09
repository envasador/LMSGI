---
hide:
  - navigation
---

# **Proyecto 2 Integrado Recuperación — HTML5, CSS3 y JavaScript**

**RA2 (Recuperación) \+ RA3**

| *Este proyecto está diseñado para el alumnado que necesita recuperar el RA2 (HTML5 y CSS3) y, a la vez, acreditar el RA3 (JavaScript y manipulación del DOM). Deberás completar las tres fases en orden: primero la estructura HTML, luego el estilo CSS y finalmente las funcionalidades JavaScript.* |
| :---- |

## **Contexto del proyecto**

Una empresa local necesita un sitio web completo y moderno. Tú eres el desarrollador web responsable del proyecto desde cero: desde la estructura del documento hasta la interactividad final.

El cliente espera un trabajo que cumpla con los estándares actuales (HTML5 y CSS3), sea accesible, responsive, válido según el W3C, y que incorpore funcionalidades dinámicas en JavaScript que mejoren la experiencia del usuario.

El proyecto se divide en tres fases. Cada fase debe completarse antes de pasar a la siguiente, ya que se construye sobre el trabajo anterior.

## **Estructura del proyecto**

| Fase | RA evaluado | Objetivo |
| :---- | ----- | :---- |
| **Fase 1** | **RA2** | Estructura HTML5 semántica, válida y accesible. |
| **Fase 2** | **RA2** | Presentación visual con CSS3, Flexbox/Grid y diseño responsive. |
| **Fase 3** | **RA3** | Funcionalidades interactivas con JavaScript y manipulación del DOM. |

## **Fase 1 — Estructura y Semántica HTML5**

En esta primera fase te centrarás exclusivamente en la estructura y el contenido de tu sitio web. Sin estilos, sin colores, sin JavaScript. El objetivo es construir una base sólida con HTML5 semántico, accesible y validado.

### **Objetivo de la fase**

Crear un sitio web de seis páginas con estructura HTML5 correcta, contenido bien organizado y formulario funcional. Todo debe ser válido según el W3C y semánticamente correcto.

### **Requisitos**

#### **1\. Estructura HTML5 semántica**

Seis páginas HTML conectadas entre sí:

* index.html — Página principal (Home).

* servicios.html — Servicios o productos.

* about.html — Sobre el negocio o proyecto.

* blog.html — Blog o sección de noticias.

* contacto.html — Formulario de contacto.

* \[tu elección\].html — Página adicional (galería, FAQ, testimonios, portfolio...).

Cada página debe tener al menos tres secciones de contenido diferenciadas y una estructura única (no una simple plantilla repetida).

#### **2\. Elementos obligatorios en cada página**

* DOCTYPE correcto, charset UTF-8, viewport y metadatos completos (title, description).

* Etiquetas semánticas: header, nav, main, section, article, aside, footer.

* Jerarquía de headings correcta (un solo h1 por página).

* Navegación coherente con enlaces internos funcionales.

#### **3\. Contenido multimedia**

* Imágenes con atributos alt, width y height.

* Al menos un video o audio embebido (puede ser de YouTube o similar).

* Uso correcto de figure y figcaption donde corresponda.

#### **4\. Formulario completo (en contacto.html)**

* Al menos 6 tipos de campos distintos: text, email, tel, select, textarea, radio o checkbox.

* Campos obligatorios con atributo required.

* Labels correctamente asociados con for e id.

* Botón de envío.

#### **5\. Tabla de datos**

Incluye al menos una tabla de datos con estructura semántica (thead, tbody, th con scope) en la página que sea más apropiada.

#### **6\. Validación W3C — Fase 1**

El HTML de todas las páginas debe validar con 0 errores en validator.w3.org. Incluye captura de pantalla de la validación exitosa para cada página en el README.md.

#### **Entregable Fase 1**

* Repositorio en GitHub con las seis páginas HTML.

* Capturas de validación W3C exitosa.

* README.md con descripción del proyecto y decisiones tomadas.

## **Fase 2 — Presentación y Diseño con CSS3**

Con la estructura HTML ya construida y validada, es el momento de darle vida visual. En esta fase aplicarás CSS3 moderno: variables, Flexbox o Grid y diseño responsive. El HTML no debe modificarse para adaptarlo al CSS; si necesitas cambios estructurales, soluciónalo con CSS.

### **Objetivo de la fase**

Aplicar una hoja de estilo CSS3 externa, organizada y moderna, que presente el contenido de forma atractiva y funcione correctamente en dispositivos móviles, tablets y escritorio.

### **Requisitos**

#### **1\. Organización del CSS**

* Archivo CSS externo (styles.css o equivalente en una carpeta css/).

* Sin estilos inline ni etiquetas style en el HTML.

* Reset o normalize al inicio del archivo (\*, box-sizing: border-box como mínimo).

* Variables CSS (--color-primario, \--fuente-principal, \--espaciado...).

* Código organizado por secciones con comentarios.

#### **2\. Layout moderno**

* Uso de Flexbox y/o Grid para la distribución de elementos.

* Sin técnicas obsoletas: no float para layout, no display:inline-block para estructura.

* Diseño visual coherente y profesional en todas las páginas.

#### **3\. Tipografía y estilos visuales**

* Google Fonts o tipografía del sistema, correctamente importada y aplicada.

* Jerarquía tipográfica clara: contraste suficiente, tamaños y pesos diferenciados.

* Transiciones suaves en elementos interactivos (hover, focus). Respetar prefers-reduced-motion.

* Al menos una animación CSS presente.

#### **4\. Dark mode**

* Implementación funcional del modo oscuro mediante variables CSS que cambian según el tema.

* El usuario puede activarlo y desactivarlo. El estado preferido del sistema (prefers-color-scheme) se tiene en cuenta.

#### **5\. Metodología BEM**

* Nomenclatura consistente en todas las clases CSS siguiendo Block\_\_Element--Modifier.

* Sin clases genéricas ni nombres sin semántica (box1, div-red, etc.).

#### **6\. Diseño responsive**

* Enfoque mobile-first: diseño base para móvil con media queries progresivas.

* Menú de navegación adaptado para pantallas pequeñas.

* Imágenes y contenidos adaptados a diferentes anchos.

* Uso de unidades relativas (rem, %, vw, vh).

#### **7\. Validación W3C — Fase 2**

El archivo CSS debe validar con 0 errores en jigsaw.w3.org/css-validator. Incluye captura de pantalla en el README con enlace directo al resultado.

#### **Entregable Fase 2**

* Repositorio actualizado con el archivo CSS externo.

* Capturas de validación W3C del CSS.

* Demo visible en GitHub Pages o similar.

## **Fase 3 — Funcionalidades Interactivas con JavaScript**

El cliente ha quedado satisfecho con el diseño. Ahora quiere que la web sea dinámica. En esta fase añadirás JavaScript moderno (ES6+) para manipular el DOM y ofrecer al usuario una experiencia interactiva.

### **Objetivo de la fase**

Implementar funcionalidades interactivas en la web ya desarrollada, utilizando JavaScript moderno sin librerías externas.

### **Requisitos**

#### **1\. JavaScript moderno (ES6+)**

* Usar let y const en lugar de var.

* Aplicar arrow functions y template literals.

* Desestructuración y spread/rest operators donde sea apropiado.

* Archivo externo js/script.js. Sin onclick="" en el HTML.

* Código sin errores en la consola del navegador.

#### **2\. Manipulación del DOM**

* Seleccionar elementos con querySelector, querySelectorAll, getElementById.

* Crear y añadir elementos dinámicamente con createElement y appendChild.

* Modificar contenido y atributos de elementos existentes.

* Eliminar elementos con removeChild o remove(), verificando su existencia.

* Manipular estilos con classList.add, classList.remove, classList.toggle.

#### **3\. Funcionalidades interactivas obligatorias**

Las tres primeras funcionalidades forman una única feature coherente: un gestor de elementos del propio proyecto. Puede ser un catálogo de productos, un portfolio, una lista de servicios, un blog de entradas... Las tres partes trabajan juntas y son inseparables.

**Gestor de elementos (funcionalidad principal):** una sección donde el usuario añade elementos mediante un formulario con validación en tiempo real, los ve presentados en una galería o cuadrícula, y puede filtrarlos por categoría u otro criterio coherente con el proyecto.

Las tres mecánicas DOM integradas en esta funcionalidad:

* Formulario con validación dinámica: campos obligatorios con mensajes de error o éxito en tiempo real, sin recargar.

* Galería o listado dinámico: cada elemento del formulario se crea en el DOM y puede eliminarse individualmente.

* Sistema de filtros: los elementos pueden filtrarse según uno o varios criterios.

**Flujo libre:** una funcionalidad adicional e independiente (modo oscuro, carrito de compra, valoraciones, acordeón de FAQs, temporizador...).

#### **Entregable Fase 3**

* Repositorio actualizado con js/script.js.

* README.md con documentación de las funcionalidades implementadas.

* Demo funcional accesible en GitHub Pages o similar.

## **Evaluación — RA2**

### **(RA2) Utiliza lenguajes de marcas para la transmisión y presentación de información a través de la web.**

#### **Criterio 2.b — Se ha analizado la estructura de un documento HTML e identificado las secciones que lo componen.**

| Nota | Descripción | Indicador |
| :---: | ----- | ----- |
| **10** Excelente | Ha analizado y estructurado correctamente un documento HTML, identificando de forma clara y detallada las secciones principales (header, main, footer, aside, section, article, etc.) y justificando su uso. Ha aplicado todas las buenas prácticas vistas en clase, incluyendo semántica, indentación y comentarios útiles. | *Documento HTML impecable con uso adecuado de etiquetas semánticas y una estructura clara, organizada y justificada.* |
| **8** Notable | Ha analizado y estructurado correctamente un documento HTML, identificando las secciones principales con un buen uso de etiquetas semánticas. Algunas justificaciones o aspectos de las buenas prácticas podrían mejorarse. | *Estructura lógica y funcional, con pequeñas inconsistencias en la aplicación de semántica o en el cumplimiento de las buenas prácticas.* |
| **6** Aprobado | Ha identificado las secciones principales y las ha estructurado de manera básica, aunque algunas etiquetas están mal empleadas o faltan elementos semánticos importantes. Se han aplicado algunas buenas prácticas, pero no de forma consistente. | *Uso básico de semántica y organización, pero con errores que dificultan la claridad o eficacia de la estructura.* |
| **4** Insuficiente | Ha intentado identificar y estructurar las secciones, pero con errores graves en la semántica o con estructuras desorganizadas y poco claras. Las buenas prácticas vistas en clase no se han seguido correctamente. | *Estructura confusa o incorrecta, con etiquetas mal utilizadas y sin cumplir con estándares básicos.* |
| **2** Deficiente | Ha presentado un trabajo con errores críticos en la estructura del documento HTML, sin diferenciar las secciones principales ni emplear semántica. No hay evidencia de buenas prácticas ni de comprensión del contenido. | *Documento HTML incompleto o incoherente, con una estructura desorganizada y sin valor práctico.* |
| **0** No realizado | No ha realizado ninguna estructura de documento HTML o el uso es inapropiado y sin relación con el criterio evaluado. Tampoco ha seguido ninguna de las buenas prácticas vistas en clase. | *No hay evidencia de comprensión ni de trabajo realizado.* |

**Buenas prácticas a evaluar:**

* Indentación y legibilidad: código correctamente indentado para facilitar la lectura.

* Uso de etiquetas semánticas: uso adecuado de etiquetas según el contenido.

* Comentarios: uso de comentarios útiles para explicar la estructura del documento.

* Organización lógica: estructura jerárquica que refleje la intención del contenido.

* Validación: código que pase las validaciones del W3C sin errores.

#### **Criterio 2.c — Se ha reconocido la funcionalidad de las principales etiquetas y los atributos del lenguaje HTML.**

| Nota | Descripción | Indicador |
| :---: | ----- | ----- |
| **10** Excelente | Ha demostrado un conocimiento exhaustivo de las etiquetas HTML5, utilizando de forma correcta y justificada las etiquetas más apropiadas para cada tipo de contenido. Ha empleado atributos de manera óptima (alt, title, aria-\*, data-\*, etc.) y ha demostrado comprensión de sus funciones específicas. El formulario incluye validación completa con atributos apropiados. | *Uso experto de etiquetas y atributos HTML5, con selección precisa según el contenido. Formulario con validación completa y accesible.* |
| **8** Notable | Ha utilizado correctamente las principales etiquetas HTML5 y sus atributos más comunes. El formulario incluye al menos 6 tipos de campos diferentes con validación básica. Algunas etiquetas o atributos podrían estar mejor optimizados. | *Buen dominio de etiquetas y atributos, con uso funcional y correcto en la mayoría de casos. Formulario completo y validado.* |
| **6** Aprobado | Ha empleado las etiquetas HTML básicas de forma aceptable, aunque con algunas confusiones o usos inadecuados. El formulario cumple con el mínimo de 6 campos, pero la validación es incompleta o básica. | *Uso básico de etiquetas y atributos, suficiente para una funcionalidad mínima pero mejorable. Formulario funcional pero sin validación completa.* |
| **4** Insuficiente | Ha utilizado etiquetas HTML con errores significativos en su funcionalidad o propósito. El formulario no cumple con los requisitos mínimos o carece de validación adecuada. Los atributos están ausentes o mal empleados en varios casos importantes. | *Comprensión limitada de las etiquetas y atributos. Formulario incompleto.* |
| **2** Deficiente | Ha empleado etiquetas HTML de forma incorrecta o inapropiada en la mayoría de casos. El formulario es deficiente o inexistente. No se evidencia comprensión de la funcionalidad de etiquetas y atributos. | *Uso inadecuado generalizado de etiquetas y atributos. No cumple con requisitos básicos.* |
| **0** No realizado | No ha utilizado etiquetas HTML de forma apropiada o el trabajo no demuestra ningún conocimiento de su funcionalidad. No hay formulario o es completamente disfuncional. | *No hay evidencia de comprensión ni de trabajo realizado.* |

**Buenas prácticas a evaluar:**

* Selección semántica: uso de la etiqueta más apropiada según el contenido (nav, article, aside, figure, etc.).

* Atributos de accesibilidad: uso correcto de alt, title, label y demás atributos para la mejora de la accesibilidad.

* Formulario robusto: tipos de input apropiados (email, tel, number, date, url, etc.) con validación mediante atributos (required, pattern, min, max, minlength, maxlength).

* Metadatos completos: charset, viewport, description, author, etc.

* Atributos multimedia: dimensiones en imágenes, controles en video/audio, fuentes alternativas.

#### **Criterio 2.d — Se han establecido las semejanzas y diferencias entre las diferentes versiones de HTML.**

| Nota | Descripción | Indicador |
| :---: | ----- | ----- |
| **10** Excelente | Ha demostrado un conocimiento profundo de la evolución de HTML, utilizando exclusivamente características de HTML5 de forma correcta y justificada. Ha evitado elementos obsoletos y ha documentado en el README las decisiones tomadas basándose en las capacidades modernas de HTML5 frente a versiones anteriores. | *Proyecto que refleja comprensión total de HTML5, sin elementos obsoletos, con justificación clara de las decisiones basadas en el estándar moderno.* |
| **8** Notable | Ha empleado características modernas de HTML5 correctamente y ha evitado la mayoría de elementos obsoletos. Demuestra comprensión de las diferencias principales entre HTML5 y versiones anteriores, aunque la documentación podría ser más detallada. | *Uso correcto de HTML5 moderno con mínima presencia de prácticas obsoletas. Buena comprensión de la evolución del estándar.* |
| **6** Aprobado | Ha utilizado principalmente HTML5, aunque aparecen algunos elementos o prácticas de versiones anteriores. Demuestra conocimiento básico de las diferencias entre versiones, pero sin profundizar en las ventajas del estándar moderno. | *Uso aceptable de HTML5 con algunas prácticas obsoletas. Comprensión básica de las diferencias.* |
| **4** Insuficiente | Ha mezclado características de diferentes versiones de HTML sin criterio claro. Usa elementos obsoletos o desaconsejados de forma frecuente. No demuestra comprensión clara de las diferencias entre versiones. | *Uso inconsistente de HTML5 con presencia significativa de elementos obsoletos.* |
| **2** Deficiente | Ha utilizado principalmente elementos obsoletos o no ha diferenciado entre versiones de HTML. No demuestra conocimiento de HTML5 ni de sus ventajas sobre versiones anteriores. | *Código que no refleja conocimiento de HTML5 ni de estándares modernos.* |
| **0** No realizado | No ha aplicado conocimientos sobre versiones de HTML o el trabajo no permite evaluar este criterio. | *No hay evidencia de comprensión ni de trabajo realizado.* |

**Buenas prácticas a evaluar:**

* Uso de HTML5 puro: ausencia de elementos y atributos obsoletos.

* Elementos semánticos modernos: uso de etiquetas semánticas en lugar de div genéricos.

* DOCTYPE correcto: uso del DOCTYPE simplificado de HTML5.

* Atributos modernos: uso de atributos HTML5 y tipos de input modernos.

#### **Criterio 2.e — Se han utilizado herramientas en la creación de documentos web.**

| Nota | Descripción | Indicador |
| :---: | ----- | ----- |
| **10** Excelente | Ha utilizado de forma experta todas las herramientas requeridas: Git con commits frecuentes y descriptivos, GitHub con repositorio bien estructurado, validadores W3C sin errores, editor de código con configuración profesional. El README está completo y profesional. Ha demostrado dominio del flujo de trabajo con estas herramientas. | *Dominio completo de las herramientas de desarrollo web. Repositorio impecable, commits profesionales, validación perfecta y documentación excelente.* |
| **8** Notable | Ha utilizado correctamente las herramientas principales: Git con buen historial de commits, repositorio GitHub organizado, validación W3C aplicada. El README incluye la información requerida. El flujo de trabajo es adecuado aunque podría optimizarse. | *Buen uso de herramientas con flujo de trabajo correcto. Pequeñas mejoras posibles en organización o documentación.* |
| **6** Aprobado | Ha empleado las herramientas básicas de forma aceptable: repositorio GitHub funcional, algunos commits realizados, validación realizada aunque con algunos errores menores. El README cumple mínimos pero es mejorable. | *Uso básico de herramientas suficiente para cumplir requisitos mínimos. Flujo de trabajo funcional pero básico.* |
| **4** Insuficiente | Ha utilizado las herramientas de forma deficiente: pocos commits o poco descriptivos, repositorio desorganizado, validación incompleta o con errores sin resolver, README insuficiente o ausente. | *Uso inadecuado de herramientas que dificulta la evaluación y mantenimiento del proyecto.* |
| **2** Deficiente | Ha hecho uso mínimo o incorrecto de las herramientas: repositorio mal estructurado o incompleto, ausencia de control de versiones adecuado, sin validación o con errores críticos, documentación ausente o inútil. | *Las herramientas no se han empleado de forma efectiva. Proyecto difícil de evaluar o usar.* |
| **0** No realizado | No ha utilizado las herramientas requeridas o su uso es completamente inadecuado. No hay repositorio, control de versiones, validación ni documentación. | *No hay evidencia de uso de herramientas ni de trabajo realizado.* |

**Buenas prácticas a evaluar:**

* Control de versiones Git: commits frecuentes con mensajes descriptivos y en español.

* Estructura del repositorio: organización clara de carpetas (css/, assets/images/, assets/videos/) según especificaciones.

* Validación W3C: todo el HTML y CSS pasa la validación sin errores. Enlaces a resultados en el README.

* README completo: descripción del proyecto, estructura del sitio, decisiones de diseño, paleta de colores, tipografías y capturas de pantalla.

* Herramientas de desarrollo: uso efectivo del navegador y sus DevTools para depuración y testing responsive.

#### **Criterio 2.f — Se han identificado las ventajas que aporta la utilización de hojas de estilo.**

| Nota | Descripción | Indicador |
| :---: | ----- | ----- |
| **10** Excelente | Ha demostrado comprensión completa de las ventajas de CSS mediante la separación total de contenido y presentación. Ha documentado en el README las ventajas conseguidas (mantenibilidad, consistencia, eficiencia). La Fase 1 no contiene CSS y la Fase 2 implementa un archivo CSS único y eficiente con variables y reutilización óptima. | *Separación perfecta HTML/CSS. Documentación excelente de ventajas. Código CSS altamente mantenible que demuestra todas las ventajas de las hojas de estilo.* |
| **8** Notable | Ha mantenido correctamente la separación entre HTML y CSS. Ha identificado y documentado las principales ventajas de usar hojas de estilo. El CSS está bien organizado y demuestra buena comprensión de reutilización y mantenibilidad. | *Buena separación y documentación de ventajas. CSS organizado que refleja comprensión de los beneficios de las hojas de estilo.* |
| **6** Aprobado | Ha mantenido la separación básica entre HTML y CSS. Menciona algunas ventajas de las hojas de estilo aunque sin profundizar. El CSS cumple su función pero podría aprovecharse mejor la reutilización y organización. | *Separación adecuada con comprensión básica de las ventajas. CSS funcional con oportunidades de mejora.* |
| **4** Insuficiente | La separación entre HTML y CSS es inconsistente o presenta problemas. No ha identificado claramente las ventajas o la documentación es insuficiente. El CSS no demuestra comprensión de reutilización ni eficiencia. | *Separación deficiente con poca evidencia de comprensión de las ventajas de las hojas de estilo.* |
| **2** Deficiente | Ha mezclado estilos inline o internos sin justificación, rompiendo la separación. No identifica ventajas de CSS o las menciona de forma incorrecta. El CSS está desorganizado y sin aprovechar sus capacidades. | *No se evidencia comprensión de las ventajas de CSS. Implementación que contradice los principios de las hojas de estilo.* |
| **0** No realizado | No ha utilizado hojas de estilo externas o su implementación no permite evaluar este criterio. | *No hay evidencia de comprensión ni de trabajo realizado.* |

**Buenas prácticas a evaluar:**

* Separación completa: Fase 1 sin CSS (ni inline, ni interno, ni externo). Fase 2 con un único archivo CSS externo.

* Reutilización mediante variables: variables CSS para colores, tipografías, espaciados y otros valores repetidos.

* Organización modular: CSS estructurado con comentarios por secciones, siguiendo metodología BEM.

* Mantenibilidad: código CSS fácil de mantener gracias a la buena organización y nomenclatura.

* Documentación de ventajas: README que explica las ventajas conseguidas (separación de responsabilidades, consistencia visual, facilidad de cambios globales, etc.).

#### **Criterio 2.g — Se han aplicado hojas de estilo.**

| Nota | Descripción | Indicador |
| :---: | ----- | ----- |
| **10** Excelente | Ha aplicado CSS3 de forma excepcional: diseño responsive impecable 100% adaptable, dark mode completamente funcional, animaciones y transiciones suaves y profesionales, tipografía excelente, metodología BEM aplicada correctamente. El sitio es visualmente atractivo, accesible y funciona perfectamente en cualquier dispositivo. | *CSS profesional y moderno. Diseño responsive perfecto, dark mode funcional, animaciones apropiadas. Excelente experiencia de usuario en todos los dispositivos.* |
| **8** Notable | Ha aplicado CSS3 correctamente: diseño responsive funcional, dark mode implementado, transiciones y al menos una animación presente, buena tipografía y jerarquía visual. Metodología BEM aplicada en su mayoría. El sitio es atractivo y funcional con pequeñas oportunidades de mejora. | *CSS bien aplicado con diseño responsive y dark mode funcionales. Buena experiencia de usuario con margen de mejora.* |
| **6** Aprobado | Ha aplicado CSS básico: diseño que se adapta a diferentes tamaños aunque no de forma óptima, dark mode presente pero básico, algunas transiciones, tipografía aceptable. BEM parcialmente aplicado. El sitio cumple requisitos mínimos pero es mejorable. | *CSS funcional con diseño responsive básico. Cumple requisitos mínimos con oportunidades claras de mejora.* |
| **4** Insuficiente | Ha aplicado CSS con deficiencias: diseño responsive incompleto o con problemas, dark mode ausente o disfuncional, transiciones/animaciones ausentes o inapropiadas, tipografía sin jerarquía clara, sin metodología BEM. | *CSS insuficiente que no cumple requisitos del proyecto. Problemas de usabilidad o visualización.* |
| **2** Deficiente | Ha aplicado CSS de forma inadecuada: sin responsive, sin dark mode, sin transiciones, tipografía problemática, CSS desorganizado. El sitio no es funcional en diferentes dispositivos. | *CSS deficiente que hace el sitio poco funcional o no utilizable en móviles.* |
| **0** No realizado | No ha aplicado CSS o la aplicación es completamente inadecuada e impide el uso del sitio. | *No hay evidencia de trabajo realizado en CSS.* |

**Buenas prácticas a evaluar:**

* Mobile-first y responsive: diseño que comienza para un viewport y se adapta progresivamente mediante media queries bien planificadas.

* Dark mode funcional: implementación con variables CSS que cambian según el tema.

* Transiciones profesionales: transiciones suaves en elementos interactivos (hover, focus) con respeto a prefers-reduced-motion.

* Metodología BEM: nomenclatura consistente siguiendo Block\_\_Element--Modifier en las clases CSS.

* Variables CSS: paleta de colores, tipografías y espaciados definidos como variables reutilizables.

* Jerarquía tipográfica: fuentes web apropiadas con jerarquía visual clara, contraste adecuado y legibilidad optimizada.

#### **Criterio 2.h — Se han validado documentos HTML y CSS.**

| Nota | Descripción | Indicador |
| :---: | ----- | ----- |
| **10** Excelente | Todos los documentos HTML y CSS pasan la validación del W3C sin ningún error ni advertencia. Ha incluido en el README enlaces directos a los resultados de validación de cada página. Ha validado frecuentemente durante el desarrollo y ha corregido todos los problemas encontrados. | *Validación W3C perfecta en todo el HTML y CSS. Documentación completa de resultados. Código que cumple estándares web profesionales.* |
| **8** Notable | Todos los documentos HTML y CSS pasan la validación del W3C sin errores. Puede haber alguna advertencia menor justificada. Ha incluido enlaces a los resultados de validación en el README. | *Validación W3C correcta con posibles advertencias menores. Código que cumple estándares profesionales.* |
| **6** Aprobado | La mayoría de documentos HTML y CSS pasan la validación, aunque algunos presentan errores menores que han sido identificados. Los enlaces de validación están presentes en el README. | *Validación mayormente correcta con algunos errores menores. Cumple estándares básicos.* |
| **4** Insuficiente | Los documentos HTML y CSS presentan errores de validación significativos que no han sido corregidos. La documentación de validación es incompleta. El código no cumple adecuadamente con los estándares. | *Errores de validación significativos sin corregir. No cumple estándares profesionales.* |
| **2** Deficiente | Los documentos HTML y CSS presentan múltiples errores graves de validación. No hay evidencia de haber intentado validar el código o corregir los errores. | *Múltiples errores graves de validación. Código que no cumple estándares web básicos.* |
| **0** No realizado | No se ha realizado validación o el código presenta errores críticos que impiden su validación. No hay documentación de validación. | *No hay evidencia de validación ni de trabajo realizado correctamente.* |

**Buenas prácticas a evaluar:**

* Validación HTML: todas las páginas validadas con W3C Markup Validator sin errores.

* Validación CSS: archivo CSS validado con W3C CSS Validator sin errores.

* Documentación de validación: README con enlaces directos a los resultados de cada página HTML y del CSS.

* Validación durante el desarrollo: evidencia en commits de validación frecuente y corrección de errores.

* Corrección de advertencias: advertencias justificadas o corregidas cuando sea posible.

## **Evaluación — RA3**

### **(RA3) Accede y manipula documentos web utilizando lenguajes de script de cliente.**

#### **Criterio 3.a — Se han identificado y clasificado los lenguajes de script de cliente relacionados con la web y sus diferentes versiones y estándares.**

| Nota | Descripción | Indicador |
| :---: | ----- | ----- |
| **10** Excelente | Ha identificado y clasificado correctamente los lenguajes de script de cliente, explicando sus diferencias, usos y estándares. Ha justificado la evolución de JavaScript y su relación con ECMAScript (ES6+), relacionándolo con las decisiones tomadas en el proyecto. | *Clasificación detallada con referencias a estándares, versiones y aplicación al proyecto.* |
| **8** Notable | Ha identificado y clasificado los lenguajes de script mencionando estándares y versiones, aunque con algunas justificaciones poco detalladas. | *Clasificación correcta, pero con explicaciones mejorables.* |
| **6** Aprobado | Ha identificado los lenguajes de script y sus usos, pero con explicaciones superficiales sobre versiones y estándares. | *Identificación básica sin profundizar en diferencias clave.* |
| **4** Insuficiente | Ha intentado clasificar los lenguajes de script, pero con errores o sin referencia a estándares y versiones. | *Clasificación poco clara o con información incorrecta.* |
| **2** Deficiente | Ha presentado información muy limitada o incorrecta sobre los lenguajes de script. | *Falta de comprensión sobre los lenguajes de script de cliente.* |
| **0** No realizado | No ha presentado ninguna clasificación ni información. | *Sin evidencia de trabajo.* |

**Buenas prácticas a evaluar:**

* Explicación clara de la clasificación de lenguajes de script.

* Identificación de ECMAScript y sus versiones relevantes (ES6+).

* Justificación del uso de JavaScript en el proyecto frente a otras alternativas.

* Uso de ejemplos concretos del propio proyecto para ilustrar la clasificación.

#### **Criterio 3.b — Se ha identificado la sintaxis básica de los lenguajes de script de cliente.**

| Nota | Descripción | Indicador |
| :---: | ----- | ----- |
| **10** Excelente | Aplica correctamente la sintaxis moderna de JavaScript (ES6+) en todo el proyecto: let/const, arrow functions, template literals para generar HTML dinámico, y desestructuración. El código del gestor de elementos y del flujo libre es claro, eficiente y bien estructurado. | *Sintaxis ES6+ coherente y consistente en todas las funcionalidades del proyecto.* |
| **8** Notable | Usa mayoritariamente sintaxis moderna con pequeños errores o incoherencias. La funcionalidad es correcta y el código entendible. | *Código funcional y organizado con pequeños detalles mejorables.* |
| **6** Aprobado | Usa estructuras básicas con errores puntuales. El código funciona, pero no aprovecha las características modernas de ES6+. | *Sintaxis tradicional con escaso uso de características modernas.* |
| **4** Insuficiente | Uso inconsistente o incorrecto de estructuras sintácticas. El código es confuso o poco eficiente. | *Presencia de errores frecuentes o mal uso de la sintaxis.* |
| **2** Deficiente | Sintaxis incorrecta o uso incoherente del lenguaje. El código no se ejecuta correctamente. | *Código no funcional.* |
| **0** No realizado | No ha entregado código relacionado. | *Sin evidencia.* |

**Buenas prácticas a evaluar:**

* Uso adecuado de let y const en lugar de var.

* Template literals para construir el HTML dinámico de los elementos del gestor.

* Arrow functions en callbacks de eventos.

* Código indentado, con nombres de variables descriptivos y comentarios cuando sea necesario.

#### **Criterio 3.c — Se han utilizado métodos para la selección y acceso de los diferentes elementos de un documento web.**

| Nota | Descripción | Indicador |
| :---: | ----- | ----- |
| **10** Excelente | Emplea correctamente querySelector, querySelectorAll, getElementById y similares, adaptando el método al contexto: selección única del formulario, selección múltiple de los elementos del gestor, acceso a los controles de filtro. El código está bien organizado y es eficiente. | *Selección coherente, eficiente y justificada en todas las partes del proyecto.* |
| **8** Notable | Uso correcto de los métodos de selección en las distintas funcionalidades, aunque con algún margen de mejora en organización o eficiencia. | *Selección adecuada con pequeños fallos.* |
| **6** Aprobado | Selecciona elementos correctamente en la mayoría de casos, con algunos errores menores o redundancias. | *Código funcional pero mejorable.* |
| **4** Insuficiente | Métodos mal aplicados o confusos en alguna de las funcionalidades, lo que dificulta la interacción. | *Código inconsistente en la selección de elementos.* |
| **2** Deficiente | Selección errónea o sin relación clara con los elementos que se desean controlar. | *Código no funcional.* |
| **0** No realizado | No se han usado métodos de selección. | *Sin evidencia.* |

**Buenas prácticas a evaluar:**

* Selección específica y clara: no seleccionar más de lo necesario.

* Guardar referencias a elementos de uso frecuente en variables (no seleccionar en cada evento).

* Uso de querySelectorAll para trabajar con el conjunto de elementos del gestor.

* Relación clara y coherente entre los selectores CSS usados en el HTML y los usados en JavaScript.

#### **Criterio 3.d — Se han creado y modificado elementos de documentos web.**

| Nota | Descripción | Indicador |
| :---: | ----- | ----- |
| **10** Excelente | Implementa correctamente la creación dinámica de elementos en el gestor: cada envío del formulario genera un nuevo elemento en el DOM con toda su estructura (imagen, título, descripción, categoría, botón de eliminar...). Usa createElement, appendChild y template literals de forma eficiente. Los elementos creados son visualmente coherentes con el resto del diseño. | *Creación dinámica fluida, estructurada y coherente con el diseño de la página.* |
| **8** Notable | Crea elementos correctamente con detalles menores mejorables en estructura, atributos o reutilización de código. | *Código funcional y bien distribuido.* |
| **6** Aprobado | Creación básica de elementos con organización mejorable o uso parcial de métodos correctos. | *Funcionalidad implementada pero con margen de mejora.* |
| **4** Insuficiente | La creación de elementos presenta errores o no responde correctamente a la interacción con el formulario. | *Estructura poco clara o con fallos en la integración.* |
| **2** Deficiente | Intentos fallidos o inadecuados de crear elementos dinámicos. | *Código con errores graves.* |
| **0** No realizado | No se ha implementado la creación de elementos. | *Sin evidencia.* |

**Buenas prácticas a evaluar:**

* Cada elemento del gestor se genera a partir de los datos del formulario (sin contenido hardcodeado).

* Estructura del elemento creado clara y semántica (article, div con clases BEM, etc.).

* Inclusión del botón de eliminar dentro del elemento generado, con su evento asociado.

* Uso de innerHTML o template literals de forma segura para construir la estructura del elemento.

#### **Criterio 3.e — Se han eliminado elementos de documentos web.**

| Nota | Descripción | Indicador |
| :---: | ----- | ----- |
| **10** Excelente | Implementa correctamente la eliminación individual de elementos del gestor usando remove() o removeChild(). El botón de eliminar está dentro de cada elemento creado, verifica la existencia del nodo y limpia el DOM sin errores. Los filtros también muestran y ocultan elementos de forma controlada. | *Eliminación precisa y controlada, sin errores visuales ni en la consola.* |
| **8** Notable | Elimina elementos correctamente, aunque sin manejar todos los casos posibles (lista vacía, elemento ya eliminado...). | *Código funcional con pequeños casos sin gestionar.* |
| **6** Aprobado | Elimina elementos pero con errores ocasionales o sin validación previa. | *Eliminación parcialmente funcional.* |
| **4** Insuficiente | El código elimina mal los elementos o genera errores visuales o en consola. | *Fallos evidentes en la eliminación.* |
| **2** Deficiente | La funcionalidad de eliminación no es operativa. | *No cumple su función.* |
| **0** No realizado | No se ha implementado la eliminación de elementos. | *Sin evidencia.* |

**Buenas prácticas a evaluar:**

* El botón de eliminar se genera dentro de cada elemento del gestor al crearlo.

* El evento de eliminar usa el contexto del propio elemento (this, closest, parentElement).

* Verificación de que el elemento existe antes de intentar eliminarlo.

* Feedback visual opcional al eliminar (animación, mensaje de confirmación...).

#### **Criterio 3.f — Se han realizado modificaciones sobre los estilos de un documento web.**

| Nota | Descripción | Indicador |
| :---: | ----- | ----- |
| **10** Excelente | Aplica correctamente cambios de estilo desde JavaScript en múltiples contextos: validación del formulario (clases de error/éxito en los campos), filtros (ocultar/mostrar elementos con clases CSS), y el flujo libre. Usa classList.add/remove/toggle de forma eficiente, sin mezclar estilos inline salvo cuando sea imprescindible. | *Manipulación de estilos coherente, eficiente y visualmente integrada en el diseño.* |
| **8** Notable | Modificación correcta de estilos en la mayoría de contextos, con algún margen de mejora en organización o reutilización de clases. | *Funcionamiento adecuado con pequeños detalles.* |
| **6** Aprobado | Estilos modificados correctamente en algunos contextos, pero con estructura CSS poco clara o uso excesivo de estilos inline. | *Código funcional pero con margen de mejora.* |
| **4** Insuficiente | Cambios visuales mal implementados o incoherentes con el diseño de la página. | *Código poco pulido o con inconsistencias visuales.* |
| **2** Deficiente | Estilos aplicados sin sentido o con errores que afectan la presentación. | *Código visualmente confuso o defectuoso.* |
| **0** No realizado | No se han realizado modificaciones de estilos desde JavaScript. | *Sin evidencia.* |

**Buenas prácticas a evaluar:**

* Las clases CSS de estado (error, success, hidden, active...) están definidas en el CSS y se aplican desde JavaScript, no al revés.

* Los filtros ocultan elementos con una clase CSS (hidden, display-none) en lugar de eliminarlos del DOM.

* La validación del formulario aplica clases de error/éxito a los campos de forma individual# @3#

* Uso de classList.toggle para estados binarios (modo oscuro, elemento seleccionado...).
