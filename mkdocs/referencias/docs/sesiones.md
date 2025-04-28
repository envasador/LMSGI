# Planificación de 6 sesiones (12h) - Lenguaje de Marcas

## Enfoque general
- **Total de horas:** 12 (6 sesiones de 2 horas)
- **Metodología:** Teórico-práctica en clase. Proyectos y actividades fuera del aula.
- **Tecnologías y formatos:** JSON (principal), JSON Schema, XML (solo para contexto), MongoDB, conversión entre formatos.
- **IDE recomendado:** WebStorm (JetBrains) con extensiones para JSON y MongoDB.

---

## ⌚️ Sesión 1: Introducción a esquemas y vocabularios
### Objetivos
- Comprender qué son los esquemas y vocabularios.
- Contextualizar XML y JSON.

### Contenidos
- Tecnologías para definir documentos: DTD, XML Schema, JSON Schema.
- Estructura vs sintaxis vs semántica.
- Validación de documentos: ¿por qué y para qué?
- Asociación de documentos y esquemas.

### Práctica
- Validar XML con DTD/XSD (usando [XMLValidation](https://www.xmlvalidation.com/)).
- Comparativa JSON vs XML.

### Herramientas
- Navegador web
- VSCode o WebStorm

---

## ⌚️ Sesión 2: JSON Schema
### Objetivos
- Aprender a crear esquemas en JSON Schema.
- Validar documentos JSON.

### Contenidos
- Tipos de datos en JSON Schema
- Reglas: `required`, `minLength`, `format`, `enum`
- Estructuras anidadas y arrays
- Reutilización: `$ref`

### Práctica
- Diseñar un esquema para un objeto "Receta" o "Alumno".
- Validar documentos con [https://jsonschemalint.com/](https://jsonschemalint.com/)

### Herramientas
- WebStorm (validación integrada)
- JSON Schema Store

---

## ⌚️ Sesión 3: Herramientas de creación y validación
### Objetivos
- Manejar herramientas profesionales para trabajar con esquemas.

### Contenidos
- Validadores online y linters
- Plugins en IDEs (WebStorm: JSON Schema plugin, Mongo plugin)
- JSON en APIs: uso de esquemas para frontend y backend

### Práctica
- Validar varios documentos JSON reales (por ejemplo, desde APIs públicas)
- Crear esquemas que validen peticiones simuladas

### Herramientas
- WebStorm + JSON Schema plugin
- Extensiones de navegador para probar APIs (como Postman o REST Client en VSCode)

---

## ⌚️ Sesión 4: Transformación de documentos
### Objetivos
- Convertir documentos entre distintos formatos.

### Contenidos
- XSLT: introducción y demo (XML)
- Conversión JSON ⇄ XML, JSON ⇄ CSV
- Uso de plantillas de transformación

### Práctica
- Convertir una receta de CSV a JSON y validarla con JSON Schema
- Simular integración con una API que entrega XML

### Herramientas
- [CSV to JSON](https://csvjson.com/csv2json)
- Online XML to JSON converter
- WebStorm

---

## ⌚️ Sesión 5: Almacenamiento de documentos JSON – MongoDB
### Objetivos
- Introducción al almacenamiento de documentos JSON.

### Contenidos
- Qué es MongoDB y para qué sirve
- Documentos, colecciones, bases de datos
- Sentencias básicas: `insertOne`, `find`, operadores
- Estructura flexible de datos

### Práctica
- Insertar un documento JSON en MongoDB
- Realizar consultas sencillas

### Herramientas
- MongoDB Compass (GUI)
- MongoDB Atlas (online)
- WebStorm con Mongo plugin o terminal

---

## ⌚️ Sesión 6: Intercambio de datos y repaso
### Objetivos
- Consolidar conocimientos
- Aprender a importar y exportar documentos

### Contenidos
- Importación/exportación en MongoDB: JSON y CSV
- Manipulación de datos en sistemas externos
- Integración con frontend o APIs REST

### Práctica
- Mini caso guiado: importar CSV, convertir a JSON, validar, almacenar en MongoDB

### Herramientas
- WebStorm
- MongoDB Compass o Atlas
- CSV/JSON online tools

---

## Referencias
- [JSON Schema Docs](https://json-schema.org/)
- [MongoDB University](https://university.mongodb.com/)
- [WebStorm](https://www.jetbrains.com/webstorm/)
- [XML Schema Tutorial](https://www.w3schools.com/xml/schema_intro.asp)
- [JSON Schema Store](https://www.schemastore.org/json/)
- [XSLT Introduction](https://www.w3schools.com/xml/xsl_intro.asp)
- [CSV to JSON](https://csvjson.com/csv2json)

---

Si quieres, puedo transformar este Markdown en presentaciones para cada sesión usando Canva.

