---
hide:
  - navigation
---

# UT5 — Esquemas y vocabularios en lenguajes de marcas

## ¿Qué vamos a aprender aquí?

En esta unidad vamos a entender qué son los esquemas y los vocabularios, para qué sirven y cómo se usan en la práctica. No se trata solo de conocer la teoría: al final de este tema serás capaz de crear tus propios esquemas y validar documentos XML y JSON con ellos.

## 1. El problema que resuelven los esquemas

Imagina que estás desarrollando una aplicación que recibe datos de un videojuego desde un servidor externo. Esperas recibir algo así:

```json
{
  "nombre": "Halo",
  "pegi": 18,
  "genero": "Acción"
}
```

Pero el servidor te manda esto:

```json
{
  "nombre": "Halo",
  "pegi": "dieciocho",
  "genero": "Acción"
}
```

Tu aplicación intenta hacer una comparación numérica con `pegi` y falla porque es un texto, no un número. Ese tipo de errores son muy comunes cuando dos sistemas intercambian datos sin haber acordado antes cómo deben estar estructurados.

Ahí es donde entran los **esquemas**.

Un esquema es un documento que define exactamente cómo debe estar organizado otro documento: qué campos tiene, de qué tipo son, cuáles son obligatorios y qué restricciones deben cumplir. Es como un contrato entre quien produce los datos y quien los consume.

Y un **vocabulario** es el conjunto de etiquetas, campos y estructuras que se usan para describir un tipo concreto de información. Si defines un vocabulario para "videojuegos", decides que existe un campo `nombre`, un campo `pegi`, un campo `genero`, etc. El vocabulario da nombre a las cosas; el esquema garantiza que se usan bien.

## 2. XML y XSD

### Repaso rápido de XML

Ya conoces XML de unidades anteriores. Es un lenguaje de marcas que representa información de forma jerárquica usando etiquetas de apertura y cierre:

```xml
<videojuego>
  <titulo>The Legend of Zelda</titulo>
  <estudio>Nintendo</estudio>
  <genero>Aventura</genero>
  <pegi>12</pegi>
  <arte>Pixel</arte>
</videojuego>
```

El problema de XML sin esquema es que cualquier cosa es válida sintácticamente. Nadie impide escribir `<pegi>doce</pegi>` o eliminar el campo `estudio`. El documento está bien formado, pero los datos son incorrectos o incompletos.

### Aquí entra XSD

**XSD** (XML Schema Definition) es el lenguaje que usamos para describir cómo debe estar estructurado un XML. Con un archivo XSD puedes comprobar automáticamente que:

- Aparecen todos los elementos obligatorios.
- Los elementos están en el orden correcto.
- Cada valor es del tipo adecuado: texto, número, fecha...
- Se cumplen restricciones específicas.

El esquema se escribe en un archivo separado, por ejemplo `videojuego.xsd`, y se enlaza desde el XML así:

```xml
<videojuego xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
            xsi:noNamespaceSchemaLocation="videojuego.xsd">
  <titulo>The Legend of Zelda</titulo>
  <estudio>Nintendo</estudio>
  <genero>Aventura</genero>
  <pegi>12</pegi>
  <arte>Pixel</arte>
</videojuego>
```

Y el archivo XSD correspondiente quedaría así:

```xml
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">
  <xs:element name="videojuego">
    <xs:complexType>
      <xs:sequence>
        <xs:element name="titulo"  type="xs:string"/>
        <xs:element name="estudio" type="xs:string"/>
        <xs:element name="genero"  type="xs:string"/>
        <xs:element name="pegi"    type="xs:integer"/>
        <xs:element name="arte"    type="xs:string"/>
      </xs:sequence>
    </xs:complexType>
  </xs:element>
</xs:schema>
```

Fíjate en lo que está pasando aquí. `videojuego` se declara como un tipo complejo (`complexType`) formado por una secuencia de cinco elementos. La secuencia significa que deben aparecer en ese orden exacto. Cada elemento tiene un tipo: `xs:string` para texto y `xs:integer` para números enteros.

Si alguien envía `<pegi>doce</pegi>`, la validación falla. Si alguien omite `<estudio>`, también falla. El esquema actúa como un guardián que comprueba la calidad de los datos antes de que lleguen a tu código.

## 3. JSON y JSON Schema

### JSON, el formato que ya conoces

JSON es el formato más usado hoy en día para intercambiar datos en aplicaciones web, especialmente en APIs. Es más ligero que XML y más fácil de leer:

```json
{
  "nombre": "Halo",
  "estudio": "343 Industries",
  "genero": "Acción",
  "pegi": 18,
  "arte": "3D"
}
```

### Y su esquema: JSON Schema

**JSON Schema** hace exactamente lo mismo que XSD pero para JSON. Te permite definir qué propiedades debe tener el objeto, de qué tipo son, cuáles son obligatorias y qué valores están permitidos.

Una diferencia importante respecto a XML: en JSON no hay forma de enlazar el esquema directamente desde el documento. El esquema vive en un archivo separado —por ejemplo `videojuego_schema.json`— y la validación se hace desde herramientas externas o desde tu editor de código.

El esquema para el JSON de arriba quedaría así:

```json
{
  "type": "object",
  "properties": {
    "nombre":  { "type": "string" },
    "estudio": { "type": "string" },
    "genero":  { "type": "string" },
    "pegi":    { "type": "integer", "minimum": 3, "maximum": 18 },
    "arte":    { "type": "string" }
  },
  "required": ["nombre", "estudio", "genero", "pegi"]
}
```

Aquí hay dos cosas interesantes. Primero, el campo `pegi` tiene restricciones de valor: tiene que ser un entero entre 3 y 18. Si alguien manda `"pegi": 99`, la validación fallará. Segundo, el campo `arte` está definido pero no está en `required`, lo que significa que es opcional. Si no viene en el JSON, el documento sigue siendo válido.

## 4. Cómo validar en la práctica

El proceso es siempre el mismo: primero creas el esquema, después lo usas para validar el documento. Para empezar puedes usar herramientas online sin instalar nada:

- **Validar JSON contra JSON Schema**: [jsonschemavalidator.net](https://jsonschemavalidator.net)
- **Validar XML contra XSD**: [freeformatter.com/xml-validator-xsd.html](https://www.freeformatter.com/xml-validator-xsd.html)

Cuando trabajes en local con **Visual Studio Code**, puedes asociar tu JSON Schema a un archivo y el editor te mostrará los errores en tiempo real mientras escribes. Para XML, la extensión *XML Language Support* hace lo mismo con XSD.

En **WebStorm** el soporte es nativo. Para JSON, ve a `Settings → Languages & Frameworks → Schemas and DTDs → JSON Schema Mappings` y añade tu esquema. Para XML, con enlazar el XSD en la etiqueta raíz ya tienes validación automática, autocompletado y resaltado de errores mientras editas.

## 5. Actividad

Crea un documento JSON que represente un catálogo de productos. Cada producto debe tener:

- `nombre`: texto.
- `precio`: número mayor que 0.
- `stock`: entero positivo.
- `categoria`: solo puede ser `"libros"`, `"ropa"` o `"informatica"`.

Crea también el JSON Schema con todas las restricciones anteriores y valídalo con la herramienta online. Después prueba a meter un precio negativo o una categoría inventada y observa qué error te da el validador.
