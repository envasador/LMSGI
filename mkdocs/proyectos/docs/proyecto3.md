---
hide:
  - navigation
---

---

## Fase 2: Manipulación de Documentos Web

### Contexto del Proyecto
El cliente ha solicitado que la página web incorpore elementos interactivos y dinámicos para mejorar la experiencia de los usuarios. Por ello, será necesario utilizar JavaScript para manipular el DOM, permitiendo la creación, modificación y eliminación de elementos, así como la manipulación de estilos.

### Objetivo
Implementar funcionalidades interactivas en la página web utilizando JavaScript moderno (ES6), con un enfoque en la manipulación de documentos web, para satisfacer los nuevos requerimientos del cliente.

### Requisitos
#### **1. Uso de JavaScript (ES6):**
- Identificar y clasificar los lenguajes de script de cliente relacionados con la web, destacando las características de JavaScript.
- Aplicar sintaxis moderna de JavaScript, incluyendo variables, funciones y métodos.

#### **2. Manipulación del DOM:**
- Seleccionar y acceder a elementos del documento web utilizando diferentes métodos.
- Crear y añadir nuevos elementos dinámicamente al documento.
- Modificar el contenido y atributos de elementos existentes.
- Eliminar elementos de la página según criterios específicos.
- Manipular estilos directamente desde JavaScript para modificar colores, tamaños o propiedades visuales según la interacción del usuario.

#### **3. Funcionalidades Interactivas:**
- Crear un sistema de galería interactiva donde las imágenes puedan añadirse o eliminarse dinámicamente.
- Diseñar un formulario con validación dinámica que muestre mensajes de error o éxito según la interacción del usuario.
- Implementar un sistema de filtros que permita mostrar u ocultar elementos de la página (por ejemplo, productos o entradas de blog) según criterios seleccionados por el usuario.
- Crear un flujo libre del proyecto. (por ejemplo proceso de incluir productos al carrito de compra.)

### Entregable
Actualizar el repositorio en GitHub con:

- Archivo `script.js` ubicado en una carpeta `js/`, conteniendo todo el código JavaScript.
- Ejemplos documentados de manipulación del DOM en el archivo `README.md`.
- Una demo funcional visible a través de GitHub Pages o similar.

### Evaluación Fase 1 y Fase 2
#### (RA3) Accede y manipula documentos web utilizando lenguajes de script de cliente.
#### Criterios de evaluación

3a) Se han identificado y clasificado los lenguajes de script de cliente relacionados con la web y sus diferentes versiones y estándares.
3b) Se ha identificado la sintaxis básica de los lenguajes de script de cliente.
3c) Se han utilizado métodos para la selección y acceso de los diferentes elementos de un documento web.
3d) Se han creado y modificado elementos de documentos web.
3e) Se han eliminado elementos de documentos web.
3f) Se han realizado modificaciones sobre los estilos de un documento web.

## **Criterio de evaluación 3.a**
### **Se han identificado y clasificado los lenguajes de script de cliente relacionados con la web y sus diferentes versiones y estándares.**

| **Nivel de Logro** | **Descripción** | **Indicador** |
|---------------------|------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| **10 (Excelente)**  | Ha identificado y clasificado correctamente los lenguajes de script de cliente, explicando sus diferencias, usos y estándares. Ha justificado la evolución de JavaScript y su relación con ECMAScript (ES6+). | Clasificación detallada de los lenguajes de script de cliente con referencias a estándares y versiones. |
| **8 (Notable)**     | Ha identificado y clasificado los lenguajes de script de cliente, mencionando estándares y versiones de ECMAScript, aunque con algunas justificaciones poco detalladas. | Clasificación correcta, pero con explicaciones que podrían ser más detalladas o precisas. |
| **6 (Aprobado)**    | Ha identificado los lenguajes de script de cliente y sus usos, pero con explicaciones superficiales sobre versiones y estándares. | Identificación básica de los lenguajes de script sin profundizar en diferencias clave. |
| **4 (Insuficiente)**| Ha intentado clasificar los lenguajes de script, pero con errores o sin referencia a estándares y versiones. | Clasificación poco clara, con información incorrecta o incompleta. |
| **2 (Deficiente)**  | Ha presentado información muy limitada o incorrecta sobre los lenguajes de script. No se evidencian referencias a estándares. | Falta de comprensión sobre los lenguajes de script de cliente. |
| **0 (No realizado)**| No ha presentado ninguna clasificación ni información sobre los lenguajes de script. | No hay evidencia de trabajo realizado. |

### **Buenas prácticas a evaluar**
- Explicación clara y detallada de la clasificación de los lenguajes de script.
- Identificación de ECMAScript y sus versiones relevantes.
- Comparación entre lenguajes de script como JavaScript, TypeScript u otros.
- Uso de ejemplos o referencias para justificar la clasificación.

---

## **Criterio de evaluación 3.b**
### **Se ha identificado la sintaxis básica de los lenguajes de script de cliente.**

| **Nivel de Logro** | **Descripción** | **Indicador** |
|---------------------|------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| **10 (Excelente)**  | Ha identificado y aplicado correctamente la sintaxis moderna de JavaScript (ES6+), incluyendo variables (`let`, `const`), funciones (`arrow functions`), plantillas de cadena (`template literals`) y desestructuración. | Uso adecuado de sintaxis ES6+, con código organizado y buenas prácticas aplicadas. |
| **8 (Notable)**     | Ha aplicado la sintaxis de JavaScript con pocos errores, pero podría mejorar la estructura o el uso de algunas características modernas. | Código funcional con sintaxis moderna, aunque con detalles mejorables en organización o aplicación. |
| **6 (Aprobado)**    | Ha demostrado conocimiento básico de la sintaxis de JavaScript, aunque con errores ocasionales o sin aprovechar características modernas. | Código funcional con errores menores o con una sintaxis algo desactualizada. |
| **4 (Insuficiente)**| Ha intentado aplicar la sintaxis de JavaScript, pero con errores frecuentes o sin usar estructuras adecuadas. | Código con fallos sintácticos que dificultan su ejecución. |
| **2 (Deficiente)**  | Ha presentado un código con múltiples errores y sin un uso adecuado de las estructuras básicas de JavaScript. | Código incorrecto o sin sentido práctico. |
| **0 (No realizado)**| No ha presentado ninguna evidencia de conocimiento sobre la sintaxis de JavaScript. | No hay código entregado o el código no tiene relación con el criterio evaluado. |

### **Buenas prácticas a evaluar**
- Uso adecuado de `let` y `const` en lugar de `var`.
- Aplicación correcta de `arrow functions` y `template literals`.
- Uso de `destructuring` y `spread/rest operators` cuando sea necesario.
- Código bien estructurado, indentado y comentado.

---

## **Criterio de evaluación 3.c**
### **Se han utilizado métodos para la selección y acceso de los diferentes elementos de un documento web.**

| **Nivel de Logro** | **Descripción** | **Indicador** |
|---------------------|------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| **10 (Excelente)**  | Ha utilizado correctamente métodos como `getElementById`, `querySelector`, `querySelectorAll` y `getElementsByClassName`, explicando cuándo es más eficiente cada uno. | Código limpio y bien estructurado con uso eficiente de métodos de selección. |
| **8 (Notable)**     | Ha aplicado correctamente los métodos de selección, aunque podría optimizar su uso en ciertos contextos. | Uso correcto, pero con margen de mejora en eficiencia o claridad. |
| **6 (Aprobado)**    | Ha utilizado los métodos básicos de selección, pero con algunos errores o sin justificar adecuadamente sus elecciones. | Selección de elementos funcional pero con errores menores. |
| **4 (Insuficiente)**| Ha intentado utilizar métodos de selección, pero con errores que impiden su correcta ejecución. | Código con fallos en la selección de elementos. |
| **2 (Deficiente)**  | Ha presentado un código con intentos incorrectos de seleccionar elementos. | Selección de elementos mal implementada o sin sentido práctico. |
| **0 (No realizado)**| No ha intentado aplicar métodos de selección. | No hay evidencia de trabajo realizado. |

### **Buenas prácticas a evaluar**
- Uso adecuado de `querySelector` y `querySelectorAll`.
- Justificación del uso de diferentes métodos según el contexto.
- Código organizado y funcional.

---


## **Criterio de evaluación 3.d**
### **Se han creado y modificado elementos de documentos web.**

| **Nivel de Logro** | **Descripción** | **Indicador** |
|---------------------|------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| **10 (Excelente)**  | Ha creado y modificado elementos dinámicamente utilizando `createElement`, `appendChild`, `innerHTML` y `textContent`, asegurando una estructura clara y manteniendo buenas prácticas. | Uso eficiente y estructurado de la manipulación del DOM para la creación y modificación de elementos. |
| **8 (Notable)**     | Ha implementado la creación y modificación de elementos correctamente, aunque podría optimizar el uso de algunos métodos o mejorar la organización del código. | Código funcional con margen de mejora en la estructura o eficiencia. |
| **6 (Aprobado)**    | Ha aplicado métodos de manipulación del DOM con errores menores o un uso limitado de las funcionalidades disponibles. | Código funcional pero con fallos ocasionales en la manipulación de elementos. |
| **4 (Insuficiente)**| Ha intentado crear o modificar elementos, pero con errores significativos que afectan la funcionalidad o la estructura del documento. | Manipulación del DOM incorrecta o ineficaz, con errores en la implementación. |
| **2 (Deficiente)**  | No ha logrado realizar modificaciones funcionales en el DOM o el código presentado es incoherente. | Código incorrecto, sin funcionalidad práctica o con errores graves en la manipulación del DOM. |
| **0 (No realizado)**| No ha presentado ninguna evidencia de manipulación del DOM. | No hay código entregado o el trabajo no tiene relación con el criterio evaluado. |

### **Buenas prácticas a evaluar**
- Uso adecuado de `createElement`, `appendChild` y `removeChild` para manejar elementos dinámicamente.
- Aplicación de `textContent` o `innerHTML` de manera segura.
- Organización clara del código y mantenimiento de una estructura jerárquica lógica.
- Inclusión de comentarios explicativos cuando sea necesario.

---

## **Criterio de evaluación 3.e**
### **Se han eliminado elementos de documentos web.**

| **Nivel de Logro** | **Descripción** | **Indicador** |
|---------------------|------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| **10 (Excelente)**  | Ha implementado correctamente la eliminación de elementos mediante `removeChild` y `remove`, gestionando correctamente la estructura del DOM y evitando errores. | Código limpio y bien estructurado con una gestión eficiente de la eliminación de elementos. |
| **8 (Notable)**     | Ha utilizado métodos de eliminación de elementos correctamente, aunque podría optimizar algunos procesos o mejorar la claridad del código. | Código funcional con pequeñas áreas de mejora en la implementación o documentación. |
| **6 (Aprobado)**    | Ha aplicado métodos para eliminar elementos, pero con errores menores o sin manejar casos específicos correctamente. | Eliminación de elementos funcional pero con fallos ocasionales. |
| **4 (Insuficiente)**| Ha intentado eliminar elementos, pero con errores significativos que afectan la estructura del documento. | Código con errores graves en la eliminación de elementos, afectando el DOM. |
| **2 (Deficiente)**  | No ha logrado eliminar elementos correctamente o la implementación es ineficaz. | Código incorrecto, sin funcionalidad práctica o con una estructura errónea. |
| **0 (No realizado)**| No ha presentado ninguna evidencia de eliminación de elementos en el DOM. | No hay código entregado o el trabajo no tiene relación con el criterio evaluado. |

### **Buenas prácticas a evaluar**
- Uso correcto de `removeChild` y `remove` para eliminar elementos dinámicamente.
- Gestión eficiente del DOM para evitar errores al eliminar elementos.
- Verificación de la existencia de elementos antes de intentar eliminarlos.
- Código estructurado y organizado con comentarios aclaratorios cuando sea necesario.

---

## **Criterio de evaluación 3.f**
### **Se han realizado modificaciones sobre los estilos de un documento web.**

| **Nivel de Logro** | **Descripción** | **Indicador** |
|---------------------|------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| **10 (Excelente)**  | Ha aplicado correctamente modificaciones de estilo mediante `classList.add`, `classList.remove`, `classList.toggle` y modificación directa de propiedades CSS con `style.property`, asegurando un diseño dinámico y optimizado. | Código limpio y estructurado, con un uso eficiente de la manipulación de estilos en el DOM. |
| **8 (Notable)**     | Ha utilizado correctamente los métodos de modificación de estilos, aunque podría optimizar el código o mejorar la organización de las clases CSS. | Código funcional, con pequeñas áreas de mejora en la implementación o la reutilización de clases. |
| **6 (Aprobado)**    | Ha aplicado modificaciones de estilo desde JavaScript, pero con errores menores o sin una estructura clara. | Código funcional pero con fallos en la gestión de estilos o una implementación poco eficiente. |
| **4 (Insuficiente)**| Ha intentado modificar estilos con JavaScript, pero con errores que afectan la presentación del documento. | Código con problemas en la manipulación de estilos, causando inconsistencias visuales. |
| **2 (Deficiente)**  | No ha logrado modificar estilos correctamente o la implementación es ineficaz. | Código incorrecto o sin sentido práctico en la modificación de estilos. |
| **0 (No realizado)**| No ha presentado ninguna evidencia de modificación de estilos con JavaScript. | No hay código entregado o el trabajo no tiene relación con el criterio evaluado. |

### **Buenas prácticas a evaluar**
- Uso adecuado de `classList.add`, `classList.remove` y `classList.toggle` en lugar de modificar estilos directamente.
- Aplicación eficiente de `style.property` solo cuando sea necesario.
- Organización del código con separación entre lógica y presentación.
- Uso de eventos para modificar estilos dinámicamente según la interacción del usuario.

---

