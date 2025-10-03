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
- Compatible con estándares web actuales
- Accesible para todos los usuarios
- Funcional en móviles, tablets y ordenadores
- Código limpio y mantenible

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
- **Contenido audiovisual**: al menos un elemento de audio o video embebido
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
│   ├── images/
│   └── videos/
└── README.md
```

El **README.md** debe incluir:
- Descripción del proyecto y temática elegida
- Estructura del sitio (qué contiene cada página)
- Decisiones de diseño estructural tomadas

---

### **Restricciones importantes de la Fase 1**

- ❌ **NO uses CSS** en esta fase (ni inline, ni interno, ni externo)
- ❌ **NO te preocupes por el diseño visual** todavía
- ✅ **Céntrate en la estructura y la semántica**
- ✅ **Asegúrate de que todo valida en el W3C Validator**

---

### **Consejos para esta fase**

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

- **Mobile-first approach**: diseña primero para móviles, luego adapta
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

### **Consejos para esta fase**

- Empieza definiendo tus variables CSS antes de escribir cualquier estilo
- Diseña primero para móvil, luego adapta a pantallas más grandes
- Usa herramientas del navegador para probar responsive
- No abuses de las animaciones: menos es más
- Valida tu CSS frecuentemente con el [W3C CSS Validator](https://jigsaw.w3.org/css-validator/)
- Prueba tu Dark Mode en diferentes navegadores

---

## **Ventajas de esta estructura en dos fases**

✅ **Separación de responsabilidades**: HTML primero, CSS después  
✅ **Aprendizaje progresivo**: dominas la estructura antes de la presentación  
✅ **Mejor validación**: puedes validar HTML sin interferencias de CSS  
✅ **Más tiempo de calidad**: te enfocas en hacer bien cada cosa  
✅ **Facilita la corrección**: evaluación por fases independientes
