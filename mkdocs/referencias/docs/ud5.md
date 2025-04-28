---
hide:
  - navigation
---

# UT5 Definición de esquemas y vocabularios en lenguajes de marcas. Introducción
## Objetivos de aprendizaje

El objetivo principal de este tema es que el alumnado comprenda y aplique los conceptos de esquemas y vocabularios en el contexto de los lenguajes de marcas, centrándose en su utilidad para describir, validar y asegurar la integridad de los datos estructurados. Se busca que el estudiante no solo conozca las tecnologías, sino que también sepa utilizarlas con sentido práctico.

## 1. Introducción: ¿Qué son los esquemas y vocabularios?

### 1.1 Lenguajes de marcas

Dentro de los lenguajes de marcas, XML (eXtensible Markup Language) y JSON (JavaScript Object Notation) son los ejemplos más utilizados para el intercambio de datos. Estos lenguajes permiten representar información estructurada de forma jerárquica y comprensible tanto para personas como para máquinas.

Por ejemplo, un archivo XML puede representar los datos de un libro:
```xml
<libro>
  <titulo>1984</titulo>
  <autor>George Orwell</autor>
</libro>
```
Y en JSON sería:
```json
{
  "titulo": "1984",
  "autor": "George Orwell"
}
```

Ambos documentos contienen la misma información, pero están representados con diferentes estructuras y sintaxis.

### 1.2 ¿Qué es un esquema?
Un **esquema** es un documento que define cómo debe estar estructurado otro documento. Sirve como guía o patrón para asegurar que los datos sean correctos y cumplan unas normas mínimas. Sin un esquema, podríamos tener documentos incompletos, con datos mal formateados o erróneos.

### 1.3 ¿Qué es un vocabulario?
En el contexto de los lenguajes de marcas, un **vocabulario** es el conjunto de etiquetas, atributos, tipos de datos y estructuras predefinidas que se utilizan para describir un tipo de información. Por ejemplo, un vocabulario de “libros” incluiría etiquetas como `<titulo>`, `<autor>`, `<paginas>` y reglas sobre cómo deben organizarse.

---

## 2. Tecnologías para definir esquemas: XML y JSON

### 2.1 XML y XSD
- **XML** es el lenguaje de marcas que se utiliza para representar datos.
- **XSD** (XML Schema Definition) es el lenguaje que se utiliza para definir la estructura válida que debe tener un documento XML.

#### ¿Para qué se usa XSD?
XSD permite validar un documento XML contra una estructura predefinida. Es decir, asegura que el documento XML:
- Contiene los elementos esperados.
- Los elementos aparecen en el orden correcto.
- Los datos son del tipo adecuado (texto, números, fechas, etc.).
- Se cumplen restricciones como valores mínimos, formatos o presencia obligatoria.

Es especialmente útil cuando se intercambian datos entre sistemas distintos o se automatiza el procesamiento de información. En estos casos, saber con certeza que los datos cumplen una estructura es clave para evitar errores.

#### ¿Dónde se define el XSD?
El XSD se escribe como un archivo independiente (por ejemplo, `videojuego.xsd`) y se enlaza en el documento XML mediante atributos en la etiqueta raíz:
```xml
<videojuego xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
            xsi:noNamespaceSchemaLocation="videojuego.xsd">
```
Esto indica que el XML debe validarse con el esquema indicado.

#### Ejemplo de XML:
```xml
<videojuego>
  <titulo>The Legend of Zelda</titulo>
  <estudio>Nintendo</estudio>
  <genero>Aventura</genero>
  <pegi>12</pegi>
  <arte>Pixel</arte>
</videojuego>
```

### Ejemplo de XSD correspondiente:
```xml
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">
  <xs:element name="videojuego">
    <xs:complexType>
      <xs:sequence>
        <xs:element name="titulo" type="xs:string"/>
        <xs:element name="estudio" type="xs:string"/>
        <xs:element name="genero" type="xs:string"/>
        <xs:element name="pegi" type="xs:integer"/>
        <xs:element name="arte" type="xs:string"/>
      </xs:sequence>
    </xs:complexType>
  </xs:element>
</xs:schema>
```

### 2.2 JSON y JSON Schema
- **JSON** es un formato ligero para el intercambio de datos, muy usado en desarrollo web y APIs.
- **JSON Schema** es el equivalente a XSD, pero para describir y validar la estructura de un archivo JSON.

#### ¿Para qué se usa JSON Schema?
JSON Schema permite:
- Validar que un documento JSON tenga los campos esperados.
- Comprobar que los datos son del tipo correcto.
- Establecer restricciones (valores mínimos, longitud de cadenas, formato de correos, etc.).

Se usa ampliamente en:
- APIs REST (por ejemplo, para validar peticiones y respuestas).
- Formularios web.
- Configuraciones y archivos de intercambio de datos.

#### ¿Dónde se define?
El esquema JSON suele estar en un archivo separado (por ejemplo, `videojuego_schema.json`) y se utiliza en herramientas o entornos que soportan validación automática. A diferencia de XML, no se suele enlazar directamente desde el JSON.

#### Ejemplo de JSON:
```json
{
  "nombre": "Halo",
  "estudio": "343 Industries",
  "genero": "Acción",
  "pegi": 18,
  "arte": "3D"
}
```

#### Ejemplo de JSON Schema correspondiente:
```json
{
  "type": "object",
  "properties": {
    "nombre": { "type": "string" },
    "estudio": { "type": "string" },
    "genero": { "type": "string" },
    "pegi": { "type": "integer", "minimum": 3, "maximum": 18 },
    "arte": { "type": "string" }
  },
  "required": ["nombre", "estudio", "genero", "pegi"]
}
```
## 3. Creación y validación de descripciones de documentos

Uno de los usos más relevantes de los esquemas es garantizar que los documentos de datos (ya sean XML o JSON) cumplan una estructura predefinida. Esto asegura la calidad de los datos y facilita su tratamiento automático.

Los esquemas permiten definir tanto los tipos de datos (por ejemplo, texto, número o fecha) como restricciones específicas, como el número mínimo o máximo, el formato (correo electrónico, URI, etc.), longitud o valores obligatorios.

Una vez creado un esquema, se puede usar para **validar** si un documento cumple lo que define. Esta validación puede hacerse manualmente o mediante herramientas automáticas, como:

- [https://jsonschemavalidator.net](https://jsonschemavalidator.net) para validar JSON.
- [https://www.freeformatter.com/xml-validator-xsd.html](https://www.freeformatter.com/xml-validator-xsd.html) para validar XML contra XSD.
- Editores como **Visual Studio Code**, que permiten cargar el esquema y mostrar errores de validación en tiempo real.

**Ejemplo de validación de JSON:**

Documento JSON:
```json
{
  "curso": "1º DAW",
  "asignatura": "Lenguajes de Marcas",
  "horas": 96
}
```

Esquema JSON correspondiente:
```json
{
  "type": "object",
  "properties": {
    "curso": { "type": "string" },
    "asignatura": { "type": "string" },
    "horas": { "type": "integer", "minimum": 1 }
  },
  "required": ["curso", "asignatura", "horas"]
}
```

---

## 4. Herramientas de creación y validación

### Para XML y XSD:

- **Freeformatter XML Validator**: permite validar archivos XML contra su XSD desde el navegador.
- **Oxygen XML Editor**: entorno profesional con soporte para edición, validación, esquemas y transformaciones.
- **Visual Studio Code**: con extensiones como XML Language Support, permite validar mientras se edita.

### Para JSON y JSON Schema:

- **JSONLint**: comprueba la validez de la sintaxis JSON.
- **JSON Schema Validator**: herramienta online para validar estructura contra un esquema.
- **Visual Studio Code**: con JSON Schema Store u otras extensiones, ofrece autocompletado y validación en tiempo real.

### En WebStorm

WebStorm tiene soporte nativo para trabajar con archivos JSON, XML y sus esquemas (JSON Schema y XSD). Aunque no usa tantas extensiones como Visual Studio Code, muchas funciones ya están integradas.

#### Para JSON y JSON Schema

##### Validación automática con JSON Schema

WebStorm detecta muchos esquemas de forma automática (como los de TypeScript, ESLint, etc.), pero puedes usar tus propios esquemas así:

1. Ve a `Preferences` (o `Settings`) → `Languages & Frameworks` → `Schemas and DTDs` → `JSON Schema Mappings`.
2. Haz clic en `+` para añadir tu esquema JSON.
3. Asocia tu esquema a archivos concretos o patrones como `*.json`.
4. WebStorm validará, autocompletará y marcará errores en tiempo real al editar tus JSON.

##### Otras funciones útiles

- Autocompletado basado en el esquema.
- Advertencias y errores de validación en el editor.
- Navegación rápida por el esquema.

---

#### Para XML y XSD

##### Soporte nativo de XML y esquemas XSD

WebStorm reconoce archivos `.xml` y `.xsd`. Si enlazas el esquema correctamente, se activa la validación automática.

###### Ejemplo de enlace a esquema:
```xml
<documento xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
           xsi:noNamespaceSchemaLocation="archivo.xsd">
```
##### Funcionalidades

- Validación automática de estructura y tipos. 
- Autocompletado de etiquetas y atributos definidos en el XSD. 
- Resaltado de errores en directo.

##### Mapeo de esquemas manual

- Ve a Preferences → Languages & Frameworks → Schemas and DTDs → XML Catalog. 
- Puedes añadir rutas a archivos .xsd y asociarlos a archivos XML específicos o a un patrón.

---
#### Plugins útiles (opcional)

Aunque muchas funciones vienen integradas, puedes explorar estos plugins desde Settings > Plugins:

- JSON Viewer 
- Tools 
- thView + XSLT Support
---

## 5. Actividad para practicar

**Enunciado:**
Crea un documento JSON que represente un catálogo de productos. Cada producto debe tener:

- `nombre`: string
- `precio`: número mayor que 0
- `stock`: entero positivo
- `categoría`: uno de "libros", "ropa", "informática"

Después, crea su JSON Schema y valida con una herramienta online.

---

