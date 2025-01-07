---
hide:
  - navigation
---

# **Proyecto 2: “Desarrollo con Estándares Web”**

## Fase 1: Maquetación - 20/01/2025 

### Contexto del Proyecto
Hemos recibido el encargo de desarrollar una página web que represente la identidad profesional o comercial de un cliente, ya sea en forma de portfolio personal o tienda online. Este proyecto deberá cumplir con los estándares más actuales en maquetación (HTML5 y CSS3) y garantizar accesibilidad, navegabilidad y validación en todos sus elementos.

### Objetivo
El equipo deberá diseñar y maquetar un sitio web compuesto por **cuatro páginas** interconectadas, **cada una con al menos tres secciones** claras que no incluyan únicamente el `header`, `main` o `footer`, aplicando buenas prácticas de accesibilidad y diseño adaptable.

### Requisitos

#### **1. Estructura HTML5:**
- Crear un documento con las secciones principales.
- Usar etiquetas semánticas para organizar el contenido de cada página.
- Implementar un formulario funcional con al menos seis campos diferentes, asegurando la validación de campos requeridos y tipos de datos adecuados.
- Las cuatro páginas deben tener estructuras distintas, no solamente elementos seguidos en columna.

#### **2. Estilos CSS3:**
- Usar una única hoja de estilos para toda la web, organizada mediante la metodología BEM para mantener consistencia y claridad.
- Usar variables CSS para definir colores y tipografías, permitiendo fácil actualización del diseño.
- Implementar un diseño responsive mediante media queries.
- Incluir un diseño básico con soporte para Dark Mode.
- Crear transiciones y animaciones que mejoren la experiencia del usuario, aplicándolas a elementos clave como botones, menús o imágenes.

#### **3. Contenido Esencial:**
- Crear un menú de navegación funcional que enlace correctamente las páginas.
- Incorporar una página con datos relevantes del cliente (pueden ser ficticios).
- Añadir elementos multimedia que enriquezca la parte visual.
- La jerarquía de la información debe estar clara.

#### **4. Páginas Requeridas:**
- **Página principal:** Breve introducción y resumen del sitio.
- **Página de servicios o productos:** Descripción detallada del catálogo o servicios del cliente.
- **Página de contacto:** Formulario funcional y enlaces a redes sociales.
- **Página adicional:** De libre elección según el contexto (blog, testimonios, galería, etc.).

#### **6. Validación:**
- Garantizar que tanto el HTML como el CSS pasen las validaciones del [W3C Validator](https://validator.w3.org/).

#### Entregable
Un repositorio en GitHub con una estructura correcta de carpetas del proyecto, que incluya:
- Los archivos HTML correspondientes a las páginas desarrolladas ubicados en la carpeta principal del repositorio.
- Carpeta `css/` con la hoja de estilos `styles.css` aplicada a todo el proyecto.
- Carpeta `assets/` con los recursos utilizados (imágenes, videos, etc.).
- Un archivo `README.md` con la descripción del proyecto, instrucciones para visualizarlo y cualquier detalle relevante.

#### Evaluación (RA2)

##### **Criterio de evaluación 2.b**
**b) Se ha analizado la estructura de un documento HTML e identificado las secciones que lo componen.**

| **Nivel de Logro** | **Descripción**                                                                                          | **Indicador**                                                                                       |
|---------------------|------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| **10 (Excelente)**  | Ha analizado y estructurado correctamente un documento HTML, identificando de forma clara y detallada las secciones principales (header, main, footer, aside, section, article, etc.) y justificando su uso. Ha aplicado todas las buenas prácticas vistas en clase, incluyendo semántica, indentación y comentarios útiles. | Documento HTML impecable con uso adecuado de etiquetas semánticas y una estructura clara, organizada y justificada. |
| **8 (Notable)**     | Ha analizado y estructurado correctamente un documento HTML, identificando las secciones principales con un buen uso de etiquetas semánticas. Algunas justificaciones o aspectos de las buenas prácticas podrían mejorarse. | Estructura lógica y funcional, con pequeñas inconsistencias en la aplicación de semántica o en el cumplimiento de las buenas prácticas. |
| **6 (Aprobado)**    | Ha identificado las secciones principales y las ha estructurado de manera básica, aunque algunas etiquetas están mal empleadas o faltan elementos semánticos importantes. Se han aplicado algunas buenas prácticas, pero no de forma consistente. | Uso básico de semántica y organización, pero con errores que dificultan la claridad o eficacia de la estructura. |
| **4 (Insuficiente)**| Ha intentado identificar y estructurar las secciones, pero con errores graves en la semántica o con estructuras desorganizadas y poco claras. Las buenas prácticas vistas en clase no se han seguido correctamente. | Estructura confusa o incorrecta, con etiquetas mal utilizadas y sin cumplir con estándares básicos. |
| **2 (Deficiente)**  | Ha presentado un trabajo con errores críticos en la estructura del documento HTML, sin diferenciar las secciones principales ni emplear semántica. No hay evidencia de buenas prácticas ni de comprensión del contenido. | Documento HTML incompleto o incoherente, con una estructura desorganizada y sin valor práctico. |
| **0 (No realizado)**| No ha realizado ninguna estructura de documento HTML o el uso es inapropiado y sin relación con el criterio evaluado. Tampoco ha seguido ninguna de las buenas prácticas vistas en clase. | No hay evidencia de comprensión ni de trabajo realizado. |

###### **Buenas prácticas a evaluar**

1. **Indentación y legibilidad:** Código correctamente indentado para facilitar la lectura.
2. **Uso de etiquetas semánticas:** Uso adecuado de etiquetas como `<header>`, `<main>`, `<footer>`, `<section>`, `<article>`, entre otras.
3. **Comentarios:** Uso de comentarios útiles para explicar la estructura del documento.
4. **Organización lógica:** Estructura jerárquica y lógica que refleje la intención del contenido del documento.
5. **Validación:** Código que pase las validaciones del W3C sin errores.

---

##### **Criterio de evaluación 2.c**
**c) Se ha reconocido y aplicado de forma práctica la funcionalidad de las principales etiquetas y los atributos del lenguaje HTML.**

| **Nivel de Logro** | **Descripción**                                                                                          | **Indicador**                                                                                       |
|---------------------|------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| **10 (Excelente)**  | Ha utilizado de manera impecable las principales etiquetas y atributos de HTML en un proyecto práctico, demostrando un entendimiento completo de su funcionalidad. Además, ha seguido todas las buenas prácticas vistas en clase, como la semántica adecuada, la aplicación correcta de atributos globales (id, class, style, etc.), y la implementación de atributos específicos en etiquetas como `<img>`, `<a>`, `<form>`, entre otras. | Código organizado y funcional que demuestra un uso excelente de etiquetas y atributos, aplicando correctamente las buenas prácticas. |
| **8 (Notable)**     | Ha demostrado un buen entendimiento y uso de las etiquetas y atributos principales en un proyecto práctico, aunque algunos elementos (como ciertos atributos o etiquetas) podrían estar mejor implementados o justificarse más claramente. Las buenas prácticas se han seguido en su mayoría, con pequeños errores. | Uso adecuado de etiquetas y atributos principales, con un cumplimiento mayoritario de las buenas prácticas vistas en clase. |
| **6 (Aprobado)**    | Ha empleado las etiquetas y atributos principales en un proyecto práctico, pero de forma limitada o con errores en algunos casos. Se observa un conocimiento básico de las buenas prácticas, aunque no siempre se aplican correctamente. | Uso funcional de etiquetas y atributos, pero con errores o carencias en su implementación o justificación. |
| **4 (Insuficiente)**| Ha realizado un intento de usar etiquetas y atributos, pero con errores graves o sin demostrar un conocimiento claro de su funcionalidad. Las buenas prácticas vistas en clase no se han aplicado correctamente. | Código funcionalmente incorrecto o con un uso inadecuado de etiquetas y atributos, sin aplicar estándares básicos. |
| **2 (Deficiente)**  | Ha presentado un trabajo que demuestra un conocimiento muy limitado de las etiquetas y atributos principales. El proyecto está incompleto o es incoherente, y no sigue las buenas prácticas vistas en clase. | Uso mínimo o erróneo de etiquetas y atributos, sin una estructura o funcionalidad práctica coherente. |
| **0 (No realizado)**| No ha realizado ninguna aplicación práctica del uso de etiquetas y atributos de HTML, o el trabajo presentado no tiene relación con el criterio evaluado. | No hay evidencia de comprensión ni de trabajo realizado. |

###### **Buenas prácticas a evaluar**

1. **Uso adecuado de etiquetas clave:** Correcta implementación de etiquetas como `<img>` (con atributos `alt` y `src`), `<a>` (con `href` y `target`), `<form>` (con `action`, `method`, etc.), y otras relevantes.
2. **Semántica:** Uso de etiquetas semánticas como `<header>`, `<section>`, `<footer>` en lugar de `<div>` genéricos.
3. **Atributos globales:** Aplicación de atributos globales como `id`, `class`, `title`, o `style` en los contextos adecuados.
4. **Validación:** Garantizar que el código HTML pase las validaciones del W3C.
5. **Comentarios y legibilidad:** Añadir comentarios útiles y mantener una estructura clara y organizada del código.

---

##### **Criterio de evaluación 2.e**
**e) Se han utilizado herramientas en la creación de documentos web.**

| **Nivel de Logro** | **Descripción**                                                                                          | **Indicador**                                                                                       |
|---------------------|------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| **10 (Excelente)**  | Ha utilizado de forma eficiente y profesional herramientas como Visual Studio Code, WebStorm, editores de diseño o validadores de código. Ha demostrado conocimiento avanzado de funciones como extensiones útiles, linters, atajos de teclado y control de versiones con Git y GitHub. Además, ha seguido todas las buenas prácticas vistas en clase. | Uso experto de las herramientas seleccionadas, con aplicación de buenas prácticas y optimización del flujo de trabajo. |
| **8 (Notable)**     | Ha empleado herramientas como Visual Studio Code, WebStorm y GitHub de manera adecuada, utilizando funciones básicas y algunas avanzadas, aunque podría optimizar más el uso de extensiones o integrar linters. Las buenas prácticas vistas en clase se han aplicado mayoritariamente. | Conocimiento sólido de las herramientas, aunque con un uso menos optimizado de funciones avanzadas o extensiones. |
| **6 (Aprobado)**    | Ha demostrado un uso funcional de las herramientas básicas para la creación de documentos web, como editores de texto y validadores, pero con un conocimiento limitado de funciones más avanzadas o configuraciones personalizadas. Ha seguido algunas buenas prácticas vistas en clase. | Uso funcional de las herramientas, pero con carencias en el aprovechamiento de su potencial completo. |
| **4 (Insuficiente)**| Ha utilizado herramientas de creación web, pero de forma limitada o con errores frecuentes que dificultan el desarrollo del proyecto. Las buenas prácticas vistas en clase no se han seguido correctamente. | Uso básico o inconsistente de las herramientas, con errores que afectan al resultado final. |
| **2 (Deficiente)**  | Ha presentado un trabajo que demuestra un conocimiento muy básico o erróneo del uso de las herramientas. No ha aplicado las buenas prácticas vistas en clase. | Uso mínimo o inapropiado de las herramientas, con resultados incompletos o de baja calidad. |
| **0 (No realizado)**| No ha utilizado ninguna herramienta o no ha presentado evidencia de haber aplicado las herramientas adecuadamente en la creación de documentos web. | No hay evidencia de uso de herramientas ni de trabajo relacionado con el criterio. |


###### **Buenas prácticas a evaluar**

1. **Optimización del editor:** Uso de extensiones, temas, y configuraciones específicas para mejorar la productividad (por ejemplo, Prettier, linters o Emmet).
2. **Control de versiones:** Aplicación de Git para gestionar versiones del proyecto y uso adecuado de GitHub para compartir el trabajo.
3. **Validación:** Uso de validadores como el W3C Validator para HTML y CSS.
4. **Organización de archivos:** Mantener una estructura clara de carpetas y archivos dentro del proyecto.
5. **Eficiencia en el flujo de trabajo:** Uso de atajos de teclado, terminal integrada, y otros recursos para optimizar la creación de documentos web.

---

##### **Criterio de evaluación 2.f**
**f) Se han identificado y demostrado de forma práctica las ventajas que aporta la utilización de hojas de estilo.**

| **Nivel de Logro** | **Descripción**                                                                                          | **Indicador**                                                                                       |
|---------------------|------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| **10 (Excelente)**  | Ha implementado un proyecto web que demuestra de manera clara y completa las ventajas de las hojas de estilo, integrando la metodología BEM, uso de variables para diseño consistente, diseño responsive con media queries, y transiciones y animaciones para mejorar la experiencia del usuario. Además, ha seguido todas las buenas prácticas vistas en clase, incluyendo organización del código, comentarios claros y consistencia en la nomenclatura. | Uso impecable de BEM, variables, animaciones y diseño responsive, acompañado de un código organizado y acorde a las buenas prácticas. |
| **8 (Notable)**     | Ha desarrollado un proyecto web que utiliza correctamente las hojas de estilo, aplicando BEM, variables CSS y diseño responsive, aunque las transiciones o animaciones podrían estar mejor implementadas o justificadas. Ha seguido la mayoría de las buenas prácticas vistas en clase, con pequeños errores o inconsistencias en la estructura del código. | Buen uso de las ventajas del CSS y una aplicación mayoritaria de buenas prácticas, aunque con detalles a mejorar. |
| **6 (Aprobado)**    | Ha creado un proyecto que aplica las ventajas básicas de las hojas de estilo, pero de forma limitada o con errores en la metodología BEM, diseño responsive o transiciones y animaciones. Se ha esforzado en aplicar algunas buenas prácticas vistas en clase, pero con inconsistencias o poca claridad en la organización del código. | Uso básico de CSS y cumplimiento parcial de las buenas prácticas, lo que limita la calidad general del trabajo. |
| **4 (Insuficiente)**| Ha presentado un trabajo con aplicación incorrecta o muy limitada de las hojas de estilo, omitiendo elementos importantes como BEM, variables, transiciones o diseño responsive. Las buenas prácticas vistas en clase no se han aplicado o se han aplicado de forma muy deficiente. | Código desorganizado, sin seguir las normas básicas enseñadas en clase, lo que dificulta su comprensión y mantenimiento. |
| **2 (Deficiente)**  | Ha presentado un trabajo con errores graves en el uso de las hojas de estilo, sin aplicar ventajas como la separación de contenido y presentación, y con código desorganizado que demuestra falta de comprensión de las buenas prácticas. | No se identifican intentos de aplicar BEM, variables, transiciones o diseño responsive; el trabajo es incompleto o incoherente. |
| **0 (No realizado)**| No ha realizado ninguna demostración práctica de las ventajas de las hojas de estilo o el uso es inapropiado. Tampoco ha seguido ninguna de las buenas prácticas vistas en clase. | No hay evidencia de conocimientos sobre buenas prácticas ni de uso práctico de CSS. |


###### **Buenas prácticas a evaluar**
1. **Organización del código:** Separación clara entre secciones del CSS y comentarios explicativos cuando sea necesario.
2. **Uso de herramientas y validación:** Garantizar que el CSS pase las validaciones del W3C y utilizar editores que faciliten el seguimiento de las normas.
3. **Evitar repeticiones:** Aplicación de principios DRY (Don't Repeat Yourself) en la hoja de estilos.
4. **Claridad y mantenimiento:** Uso de variables CSS y estructuras que permitan cambios fáciles y rápidos en el diseño.

---

##### **Criterio de evaluación 2.g**
**g) Se han aplicado hojas de estilo.**

| **Nivel de Logro** | **Descripción**                                                                                          | **Indicador**                                                                                       |
|---------------------|------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| **10 (Excelente)**  | Ha aplicado hojas de estilo correctamente, utilizando un archivo CSS único, organizado y siguiendo las metodologías vistas en clase (por ejemplo, BEM). Ha hecho un uso avanzado de propiedades CSS, como variables, media queries, transiciones, animaciones, y soporte para Dark Mode. Además, ha optimizado el código para mantener consistencia y legibilidad. | Uso impecable de CSS, con técnicas avanzadas, buenas prácticas, y un diseño visualmente atractivo y funcional. |
| **8 (Notable)**     | Ha aplicado hojas de estilo correctamente, utilizando un archivo CSS único y organizado. Ha implementado algunas técnicas avanzadas (como media queries o transiciones), aunque con ciertas áreas que podrían mejorarse en optimización o consistencia. Las buenas prácticas vistas en clase se han aplicado mayoritariamente. | Uso sólido de CSS, con algunas carencias menores en la optimización del código o en la consistencia del diseño. |
| **6 (Aprobado)**    | Ha utilizado hojas de estilo básicas para aplicar estilos, pero con un enfoque limitado o errores en la organización. Se han implementado técnicas de CSS básicas, aunque con un uso inconsistente de metodologías como BEM o buenas prácticas generales. | Aplicación funcional pero básica de CSS, con errores o áreas de mejora en organización o estilo avanzado. |
| **4 (Insuficiente)**| Ha intentado aplicar hojas de estilo, pero con errores graves en la organización, funcionalidad o consistencia del diseño. No se han seguido las buenas prácticas vistas en clase, como el uso de variables o técnicas modernas. | Código CSS desorganizado o incorrecto que afecta negativamente al diseño y funcionalidad. |
| **2 (Deficiente)**  | Ha presentado un trabajo que demuestra un conocimiento muy básico de CSS, sin lograr resultados coherentes o funcionales. Las hojas de estilo no cumplen con los estándares mínimos. | Aplicación muy limitada de CSS, sin estructura clara ni resultados funcionales. |
| **0 (No realizado)**| No ha presentado hojas de estilo o el trabajo presentado no tiene relación con el criterio evaluado. | No hay evidencia de trabajo realizado ni de aplicación de hojas de estilo. |

###### **Buenas prácticas a evaluar**

1. **Metodología BEM:** Organización del CSS utilizando la metodología BEM para facilitar la claridad y la reutilización.
2. **Uso de variables:** Implementación de variables para definir colores, tipografías y otros aspectos repetitivos del diseño.
3. **Responsive Design:** Uso de media queries para garantizar la adaptabilidad del diseño a diferentes dispositivos.
4. **Dark Mode:** Implementación básica de un tema oscuro utilizando CSS variables o clases específicas.
5. **Transiciones y animaciones:** Uso de propiedades como `transition` y `@keyframes` para mejorar la experiencia del usuario.
6. **Organización del archivo CSS:** Estructuración del código en secciones claras y comentadas.
7. **Validación:** Código CSS que pase las validaciones del W3C sin errores.

---

##### **Criterio de evaluación 2.h**
**h) Se han validado documentos HTML y CSS.**

| **Nivel de Logro** | **Descripción**                                                                                          | **Indicador**                                                                                       |
|---------------------|------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| **10 (Excelente)**  | Ha validado correctamente todos los documentos HTML y CSS utilizando herramientas como el W3C Validator, sin errores. Ha seguido las buenas prácticas para garantizar la correcta estructura y semántica del código. | Los documentos HTML y CSS pasan la validación sin errores, y el código está libre de problemas estructurales. |
| **8 (Notable)**     | Ha validado los documentos HTML y CSS con pocas advertencias o errores menores. Aunque no hay errores graves, podría haber realizado una validación más exhaustiva o corregir algunos pequeños detalles. | Los documentos HTML y CSS pasan la mayoría de las validaciones, con algunos errores o advertencias menores. |
| **6 (Aprobado)**    | Ha realizado una validación básica de los documentos HTML y CSS, aunque con algunos errores que afectan a la estructura o semántica. Los documentos son funcionales, pero no cumplen completamente con los estándares de validación. | Validación básica completada con algunos errores o advertencias importantes, pero el código sigue funcionando de forma aceptable. |
| **4 (Insuficiente)**| Ha realizado un intento de validación, pero los documentos HTML y CSS contienen varios errores que afectan la estructura. La validación no se ha llevado a cabo correctamente o se ha ignorado. | Los documentos HTML y CSS tienen errores significativos que requieren corrección, y no pasan las validaciones básicas. |
| **2 (Deficiente)**  | No ha validado los documentos HTML y CSS, o no ha corregido los errores que se detectaron. El código está plagado de errores de validación y no sigue los estándares adecuados. | El código no ha sido validado o tiene errores graves que impiden que los documentos HTML y CSS pasen la validación. |
| **0 (No realizado)**| No ha realizado ninguna validación de los documentos HTML y CSS, o los documentos no son válidos y no cumplen con los requisitos básicos. | No hay evidencia de que se haya realizado ningún tipo de validación. |

### **Buenas prácticas a evaluar**

1. **Uso de W3C Validator:** Validación de los documentos HTML y CSS utilizando las herramientas adecuadas del W3C Validator, sin errores.
2. **Estructura semántica:** Validación de la estructura semántica de las páginas HTML y corrección de errores relacionados con el uso de etiquetas.
3. **Optimización del código:** Validación para asegurarse de que el código CSS esté libre de errores de sintaxis y que el archivo sea eficiente.
4. **Documentación:** Incluir instrucciones de validación en el archivo README.md y una descripción clara de cómo se validó el proyecto.

---
