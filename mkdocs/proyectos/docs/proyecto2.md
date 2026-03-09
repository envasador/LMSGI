---
hide:
  - navigation
---

# **Proyecto 2 — Funcionalidades Interactivas con JavaScript**

**RA3 · JavaScript y Manipulación del DOM**

## **Contexto del proyecto**

En el proyecto anterior construiste la base de tu sitio web: la estructura HTML5 y la presentación con CSS3. El cliente ha quedado satisfecho con el resultado visual, pero ahora necesita que la web "cobre vida".

Has recibido una nueva solicitud: incorporar funcionalidades interactivas que mejoren la experiencia del usuario. El cliente quiere que los visitantes puedan interactuar con la página sin necesidad de recargarla: añadir y eliminar elementos, ver respuestas inmediatas al rellenar formularios, filtrar contenido, y disfrutar de una experiencia de compra o gestión dinámica.

Tu trabajo es implementar estas funcionalidades usando JavaScript moderno (ES6+), manipulando el DOM de tu sitio web ya existente.

## **Objetivo**

Añadir interactividad a tu sitio web mediante JavaScript, implementando manipulación dinámica del DOM: creación, modificación y eliminación de elementos, gestión de estilos, y funcionalidades interactivas completas.

## **Requisitos del proyecto**

### **1\. JavaScript moderno (ES6+)**

* Usar let y const en lugar de var.

* Aplicar arrow functions donde sea apropiado.

* Usar template literals para generar HTML dinámico.

* Aplicar desestructuración y spread/rest operators cuando sea necesario.

* El código debe estar bien estructurado, indentado y comentado.

### **2\. Manipulación del DOM**

* Seleccionar elementos con querySelector, querySelectorAll, getElementById y similares.

* Crear y añadir nuevos elementos dinámicamente con createElement y appendChild.

* Modificar contenido y atributos de elementos existentes.

* Eliminar elementos del DOM con removeChild o remove(), verificando su existencia antes.

* Manipular estilos con classList.add, classList.remove y classList.toggle.

### **3\. Funcionalidades interactivas (obligatorias)**

Las tres primeras funcionalidades forman una única feature coherente: un gestor de elementos del propio proyecto. Dependiendo del tipo de sitio web, puede ser un catálogo de productos, un portfolio de trabajos, una lista de servicios, un blog de entradas... El usuario puede añadir elementos mediante un formulario, verlos presentados visualmente y filtrarlos. Las tres partes son inseparables y trabajan juntas.

**Gestor de elementos (funcionalidad principal):** una sección donde el usuario puede añadir nuevos elementos a través de un formulario con validación en tiempo real, ver los elementos añadidos presentados en una galería o cuadrícula, y filtrarlos por categoría, estado u otro criterio que tenga sentido en el contexto del proyecto.

Esta funcionalidad principal debe implementar las tres mecánicas DOM de forma integrada:

* Formulario con validación dinámica: campos obligatorios, mensajes de error o éxito visibles en tiempo real, sin recargar la página.

* Galería o listado dinámico: cada elemento enviado por el formulario se crea y añade al DOM, y puede eliminarse individualmente.

* Sistema de filtros: los elementos mostrados se pueden filtrar según uno o varios criterios (categoría, tipo, estado...).

**Flujo libre:** una funcionalidad adicional e independiente, coherente con el proyecto (modo oscuro, carrito de compra, sistema de valoraciones, contador de visitas, acordeón de FAQs, temporizador...).

### **4\. Buenas prácticas de código**

* El código JavaScript debe estar en un archivo externo js/script.js.

* Separación clara entre HTML, CSS y JavaScript (sin onclick="" en el HTML).

* Sin uso de librerías externas (jQuery u otras). Solo JavaScript nativo.

* El código debe funcionar sin errores en la consola del navegador.

### **Entregable**

Actualizar el repositorio de GitHub con las siguientes incorporaciones:

| Elemento | Descripción |
| :---- | :---- |
| **script.js** | Archivo JavaScript ubicado en la carpeta js/ del proyecto, con todo el código de las funcionalidades. |
| **README.md actualizado** | Documentación de las decisiones técnicas tomadas y ejemplos de manipulación del DOM implementados. |
| **GitHub Pages** | Demo funcional y accesible desde el navegador a través de GitHub Pages o servidor equivalente. |

### **Evaluación — RA3**

#### **(RA3) Accede y manipula documentos web utilizando lenguajes de script de cliente.**

##### **Criterio 3.a — Se han identificado y clasificado los lenguajes de script de cliente relacionados con la web y sus diferentes versiones y estándares.**

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

##### **Criterio 3.b — Se ha identificado la sintaxis básica de los lenguajes de script de cliente.**

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

##### **Criterio 3.c — Se han utilizado métodos para la selección y acceso de los diferentes elementos de un documento web.**

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

##### **Criterio 3.d — Se han creado y modificado elementos de documentos web.**

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

##### **Criterio 3.e — Se han eliminado elementos de documentos web.**

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

##### **Criterio 3.f — Se han realizado modificaciones sobre los estilos de un documento web.**

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

* La validación del formulario aplica clases de error/éxito a los campos de forma individual.

* Uso de classList.toggle para estados binarios (modo oscuro, elemento seleccionado... ).
