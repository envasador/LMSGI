---
hide:
  - navigation
---

# **UT1 Introducción a los Lenguajes de Marcas**

## 1. ¿Qué es un lenguaje de marcas y para qué sirve?

Los **lenguajes de marcas** son sistemas que utilizan etiquetas (**marcas**) para estructurar, organizar o describir contenido dentro de un documento. Estas marcas no son visibles en la salida final, sino que proporcionan instrucciones sobre cómo presentar o procesar la información. Su propósito es permitir la separación del contenido de su estructura o presentación, facilitando la manipulación y el intercambio de datos entre diferentes sistemas.

### **Ejemplos de aplicaciones**:
- **HTML** (HyperText Markup Language) estructura páginas web.
- **XML** (eXtensible Markup Language) intercambia y almacena datos entre sistemas.
- **Markdown** simplifica la escritura de texto estructurado para generar documentos o páginas web.

## 2. Breve historia de los lenguajes de marcas

La evolución de los lenguajes de marcas comenzó con el **GML** (Generalized Markup Language) creado en los años 60 por IBM. Este lenguaje fue precursor de muchos otros:

- **GML (Generalized Markup Language)**: Creado por IBM en los años 60, permitía a los usuarios etiquetar el contenido de un documento para diferentes propósitos.
- **SGML (Standard Generalized Markup Language)**: Aprobado como estándar en 1986, fue una evolución del GML y estableció las bases de muchos lenguajes posteriores.
- **HTML (HyperText Markup Language)**: Basado en SGML, fue desarrollado en los 90 para estructurar documentos web. Marcó el auge de la Web.
- **XML (eXtensible Markup Language)**: Introducido en 1998, ofrece un formato más simple y flexible que SGML y se utiliza ampliamente para el intercambio de datos entre sistemas.
- Otros lenguajes, como **Markdown**, **LaTeX** y **JSON**, surgieron para resolver problemas específicos en cuanto a la presentación o manipulación de información.

## 3. Tipos de lenguajes de marcas con ejemplos y ampliación

### **3.1. GML (Generalized Markup Language)**

**GML** fue desarrollado por IBM en la década de los 60. Se considera uno de los primeros lenguajes de marcas y sentó las bases de lo que más tarde se convertiría en SGML. Su principal objetivo era permitir a los autores etiquetar documentos para su procesamiento y presentación, pero fue reemplazado por lenguajes más avanzados debido a su simplicidad.

- **Uso típico**: Documentación técnica en sistemas antiguos.
- **Ventaja**: Marcó el inicio de los lenguajes de marcas.
- **Desventaja**: Limitado en términos de flexibilidad y capacidad para definir estructuras complejas.

```text
:title.General Markup Language
:author.John Doe
:section.Starting GML
This is a paragraph in GML.
```

### **3.2. SGML (Standard Generalized Markup Language)**

**SGML** fue desarrollado en los años 80 como una evolución de GML, con el propósito de ser un meta-lenguaje, es decir, un lenguaje para definir otros lenguajes de marcas. SGML es muy flexible, pero también bastante complejo, lo que llevó a la creación de lenguajes más específicos y sencillos como HTML y XML.

- **Uso típico**: Documentación técnica y sistemas de publicación.
- **Ventaja**: Extremadamente flexible, permite definir cualquier tipo de documento.
- **Desventaja**: Complejo de implementar, y poco adecuado para entornos web.

```html
<!DOCTYPE example SYSTEM "example.dtd">
<document>
  <title>This is SGML</title>
  <body>
    <p>SGML example content</p>
  </body>
</document>
```

### **3.3. HTML (HyperText Markup Language)**

**HTML** es el estándar para crear páginas web. Se desarrolló en los años 90 y está basado en SGML, aunque simplificado para facilitar su uso en la Web. A lo largo de los años, HTML ha evolucionado, con HTML5 siendo la versión más reciente, que incluye soporte para multimedia, gráficos y aplicaciones interactivas.

- **Uso típico**: Estructuración de contenido web.
- **Ventaja**: Amplio soporte en navegadores, fácil de aprender.
- **Desventaja**: Limitado para el manejo de datos complejos; dependiente de CSS y JavaScript para la presentación y funcionalidad avanzada.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>HTML Example</title>
  </head>
  <body>
    <h1>Hello, World!</h1>
    <p>This is a paragraph in HTML.</p>
  </body>
</html>
```

### **3.4. XML (eXtensible Markup Language)**

**XML** es una versión simplificada de SGML, diseñada para ser tanto legible por humanos como por máquinas. Su propósito principal es estructurar datos para intercambiarlos entre sistemas heterogéneos, sin atarse a la presentación visual. XML no tiene etiquetas predefinidas, lo que permite a los usuarios definir sus propias estructuras.

- **Uso típico**: Intercambio y almacenamiento de datos en aplicaciones web y empresariales.
- **Ventaja**: Flexible y extensible; puede ser interpretado por muchos sistemas.
- **Desventaja**: La sintaxis es verbosa y puede ser difícil de manejar en documentos muy grandes.

```xml
<book>
  <title>XML Developer's Guide</title>
  <author>Jane Doe</author>
  <price>44.95</price>
</book>
```

### **3.5. Markdown**

**Markdown** es un lenguaje de marcas ligero creado para ser fácil de leer y escribir. Está diseñado para ser convertido rápidamente a HTML u otros formatos, lo que lo hace ideal para la redacción de textos simples con formato. Es comúnmente usado en documentación de software, blogs y foros.

- **Uso típico**: Blogs, documentación técnica, generación de HTML simple.
- **Ventaja**: Sencillo y rápido de escribir, alta legibilidad.
- **Desventaja**: No es adecuado para documentos complejos o con muchos estilos avanzados.

```markdown
# This is a title
This is a paragraph with **bold** and *italic* text.
```

### **3.6. LaTeX**

**LaTeX** es un sistema de composición tipográfica utilizado principalmente en entornos académicos y científicos. Es ideal para crear documentos con fórmulas matemáticas complejas, bibliografías y tablas de contenido automatizadas. Aunque tiene una curva de aprendizaje más pronunciada, ofrece un control fino sobre la presentación de los documentos.

- **Uso típico**: Publicaciones académicas, libros, informes científicos.
- **Ventaja**: Excelente para documentos científicos y matemáticos.
- **Desventaja**: Curva de aprendizaje pronunciada; requiere compilación.

```latex
\documentclass{article}
\title{LaTeX Example}
\author{John Doe}
\begin{document}
\maketitle
\section{Introduction}
This is a paragraph in LaTeX.
\end{document}
```

### **3.7. JSON (JavaScript Object Notation)**

**JSON** es un formato ligero para el intercambio de datos entre servidores y aplicaciones web. Su estructura es sencilla, basada en pares de clave-valor, y está ampliamente utilizado en APIs y aplicaciones web debido a su compatibilidad con JavaScript.

- **Uso típico**: Intercambio de datos entre servidores y aplicaciones web.
- **Ventaja**: Ligero, fácil de interpretar por máquinas y legible para humanos.
- **Desventaja**: No es adecuado para documentos muy complejos o con relaciones jerárquicas profundas.

```json
{
  "title": "JSON Example",
  "author": "John Doe",
  "published": true
}
```

---

## 4. Cuadro resumen comparativo

| Lenguaje  | Propósito                         | Basado en  | Ámbito de uso                | Sintaxis          | Ejemplo                         | Ventajas                                            | Desventajas                                        |
|-----------|-----------------------------------|------------|------------------------------|-------------------|----------------------------------|----------------------------------------------------|----------------------------------------------------|
| GML       | Estructurar documentos            | IBM        | Documentación técnica         | Básico            | `:title.General Markup`           | Simple, pionero de los lenguajes de marcas          | Limitado en flexibilidad y uso moderno             |
| SGML      | Definir otros lenguajes de marcas | GML        | Documentación compleja        | Complejo          | `<document><title>SGML`           | Extremadamente flexible                             | Complejo y difícil de implementar                  |
| HTML      | Estructurar páginas web           | SGML       | Web                           | Etiquetas predef. | `<html><body><h1>`                | Soporte universal en navegadores                   | Necesita CSS y JavaScript para ser funcional       |
| XML       | Estructurar e intercambiar datos  | SGML       | Almacenamiento, intercambio   | Flexible          | `<book><title>XML Guide</title>` | Extensible, universal para datos                    | Verboso y difícil de manejar en documentos grandes |
| Markdown  | Escritura de texto con formato    | Independ.  | Documentación, blogs          | Ligero            | `# Title`                        | Simple, legible, fácil de convertir a HTML          | Limitado para documentos complejos                 |
| LaTeX     | Composición de documentos         | TEX        | Publicaciones científicas     | Rígido            | `\section{Introduction}`         | Excelente para matemáticas y publicaciones formales | Curva de aprendizaje pronunciada                   |
| JSON      | Intercambio de datos              | Independ.  | Aplicaciones web, APIs        | Clave-valor       | `{ "title": "JSON" }`             | Ligero, fácil de interpretar                        | No apto para datos complejos con muchas relaciones |
```
