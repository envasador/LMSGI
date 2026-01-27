# Actividades Prácticas: Fundamentos de JavaScript

## Módulo: Lenguajes de Marcas y Sistemas de Gestión de la Información (LMSGI)
### Ciclo: Desarrollo de Aplicaciones Web (DAW)

---

# ACTIVIDAD 1: Carrito de Compra Online

## Nivel: Básico
## Conceptos trabajados: Variables, tipos de datos, operadores, condicionales, arrays básicos, template literals

### Contexto

Una tienda online necesita un sistema básico de carrito de compra. Los clientes pueden añadir productos, ver el resumen de su pedido con todos los cálculos de descuentos, impuestos y gastos de envío.

### Catálogo de productos

```javascript
// Catálogo de productos disponibles
const catalogo = [
    { id: 1, nombre: "Camiseta básica", precio: 15.99, categoria: "ropa" },
    { id: 2, nombre: "Pantalón vaquero", precio: 39.99, categoria: "ropa" },
    { id: 3, nombre: "Zapatillas running", precio: 89.99, categoria: "calzado" },
    { id: 4, nombre: "Sudadera con capucha", precio: 45.00, categoria: "ropa" },
    { id: 5, nombre: "Gorra deportiva", precio: 12.50, categoria: "accesorios" },
    { id: 6, nombre: "Mochila urbana", precio: 35.00, categoria: "accesorios" },
    { id: 7, nombre: "Calcetines pack 3", precio: 9.99, categoria: "ropa" },
    { id: 8, nombre: "Chanclas playa", precio: 14.99, categoria: "calzado" }
];
```

### Requisitos funcionales

El sistema debe:

1. **Gestionar el carrito** con los siguientes datos por cada producto añadido:
    - ID del producto
    - Nombre del producto
    - Precio unitario
    - Cantidad
    - Subtotal (precio × cantidad)

2. **Calcular descuentos** según estas reglas:
    - Si el subtotal supera 100€: **10% de descuento**
    - Si el subtotal supera 200€: **15% de descuento** (no acumulable con el anterior)
    - Código promocional `DESCUENTO20`: **20% de descuento** adicional (sí acumulable)

3. **Calcular gastos de envío**:
    - Pedidos menores de 50€: **4.99€**
    - Pedidos entre 50€ y 100€: **2.99€**
    - Pedidos mayores de 100€: **GRATIS**

4. **Calcular impuestos**:
    - IVA del 21% (aplicado después de descuentos, antes de envío)

5. **Mostrar el ticket de compra** formateado por consola.

### Ejemplo de carrito para probar

```javascript
// Carrito del cliente (productos añadidos con sus cantidades)
const carrito = [
    { productoId: 1, cantidad: 3 },   // 3 camisetas
    { productoId: 3, cantidad: 1 },   // 1 zapatillas
    { productoId: 5, cantidad: 2 },   // 2 gorras
    { productoId: 7, cantidad: 4 }    // 4 packs calcetines
];

const codigoPromocional = "DESCUENTO20";  // Puede ser "" si no hay código
const esClientePremium = true;  // Los clientes premium tienen envío gratis siempre
```

### Ejemplo de salida esperada

```
╔═══════════════════════════════════════════════════════════════╗
║                    🛒 TICKET DE COMPRA                        ║
║                      FashionStore                             ║
╠═══════════════════════════════════════════════════════════════╣

  Cliente: Premium ⭐
  Fecha: 15/01/2025

───────────────────────────────────────────────────────────────
  PRODUCTOS
───────────────────────────────────────────────────────────────

  Camiseta básica
    3 x 15.99€                                          47.97€

  Zapatillas running
    1 x 89.99€                                          89.99€

  Gorra deportiva
    2 x 12.50€                                          25.00€

  Calcetines pack 3
    4 x 9.99€                                           39.96€

───────────────────────────────────────────────────────────────
  RESUMEN
───────────────────────────────────────────────────────────────

  Subtotal (10 artículos):                             202.92€
  
  Descuento por compra > 200€ (15%):                   -30.44€
  Código DESCUENTO20 (20%):                            -34.50€
                                                      ────────
  Total con descuentos:                                138.98€
  
  IVA (21%):                                            29.19€
                                                      ────────
  Total con IVA:                                       168.17€
  
  Gastos de envío:                              GRATIS (Premium)

═══════════════════════════════════════════════════════════════
  💰 TOTAL A PAGAR:                                    168.17€
═══════════════════════════════════════════════════════════════
  
  💡 ¡Te has ahorrado 64.94€ en este pedido!

  Gracias por tu compra. ¡Vuelve pronto!
```

### Estructura sugerida del código

```javascript
"use strict";

// ============================================
// DATOS (catálogo, carrito, configuración)
// ============================================

const catalogo = [
    // ... (copiar el catálogo de arriba)
];

const carrito = [
    // ... (copiar el carrito de ejemplo)
];

const codigoPromocional = "DESCUENTO20";
const esClientePremium = true;

// ============================================
// CONSTANTES DE CONFIGURACIÓN
// ============================================

const IVA = 0.21;
const UMBRAL_DESCUENTO_10 = 100;
const UMBRAL_DESCUENTO_15 = 200;
const UMBRAL_ENVIO_GRATIS = 100;
const UMBRAL_ENVIO_REDUCIDO = 50;
// ... añade más constantes según necesites

// ============================================
// PASO 1: Construir el carrito detallado
// ============================================

// TODO: Recorre el carrito y para cada item:
// - Busca el producto en el catálogo por su ID
// - Crea un objeto con: id, nombre, precioUnitario, cantidad, subtotal

// Pista: Puedes usar un bucle for...of o el método find()


// ============================================
// PASO 2: Calcular el subtotal del carrito
// ============================================

// TODO: Suma todos los subtotales de los productos


// ============================================
// PASO 3: Calcular descuentos
// ============================================

// TODO: Determina qué descuento por volumen aplica (10% o 15%)


// TODO: Comprueba si el código promocional es válido


// TODO: Calcula el total después de descuentos


// ============================================
// PASO 4: Calcular IVA
// ============================================

// TODO: Calcula el IVA sobre el precio con descuentos


// ============================================
// PASO 5: Calcular gastos de envío
// ============================================

// TODO: Determina los gastos de envío según el total y si es premium


// ============================================
// PASO 6: Calcular total final
// ============================================

// TODO: Suma todo: precio con descuentos + IVA + envío


// ============================================
// PASO 7: Calcular ahorro total
// ============================================

// TODO: Calcula cuánto se ha ahorrado el cliente
// (subtotal original + envío normal) - total final


// ============================================
// PASO 8: Mostrar el ticket
// ============================================

// TODO: Usa console.log() con template literals para mostrar
// el ticket formateado como en el ejemplo


```

### Ampliaciones opcionales

1. **Validación del carrito**:
    - Comprobar que los IDs de producto existen en el catálogo
    - Comprobar que las cantidades son números positivos
    - Mostrar mensaje de error si algo es inválido

2. **Múltiples códigos promocionales**:
   ```javascript
   const codigosValidos = {
       "DESCUENTO20": { tipo: "porcentaje", valor: 20 },
       "ENVIOGRATIS": { tipo: "envio", valor: 0 },
       "5EUROS": { tipo: "fijo", valor: 5 }
   };
   ```

3. **Descuento por categoría**: Si compras 3+ productos de la misma categoría, 5% extra en esa categoría.

4. **Sistema de puntos**: El cliente premium acumula 1 punto por cada euro gastado. Mostrar puntos ganados.

5. **Productos agotados**: Añadir campo `stock` al catálogo y comprobar disponibilidad.



# ACTIVIDAD 2: Gestor de Inventario de Tienda

## Nivel: Intermedio
## Conceptos trabajados: Arrays, objetos, métodos de array (map, filter, find, reduce), funciones, JSON

### Contexto

Una pequeña tienda de electrónica necesita un sistema para gestionar su inventario. El sistema debe permitir realizar diversas operaciones sobre los productos: buscar, filtrar, actualizar stock, calcular estadísticas, etc.

### Datos iniciales

```javascript
const inventario = [
    {
        id: 1,
        nombre: "Laptop HP Pavilion",
        categoria: "portatiles",
        precio: 699.99,
        stock: 15,
        caracteristicas: {
            procesador: "Intel i5",
            ram: "8GB",
            almacenamiento: "512GB SSD"
        },
        activo: true
    },
    {
        id: 2,
        nombre: "Monitor Samsung 27\"",
        categoria: "monitores",
        precio: 249.99,
        stock: 23,
        caracteristicas: {
            resolucion: "2560x1440",
            panel: "IPS",
            tasaRefresco: "75Hz"
        },
        activo: true
    },
    {
        id: 3,
        nombre: "Teclado Mecánico Logitech",
        categoria: "perifericos",
        precio: 89.99,
        stock: 45,
        caracteristicas: {
            tipo: "mecánico",
            switches: "Cherry MX Red",
            retroiluminacion: true
        },
        activo: true
    },
    {
        id: 4,
        nombre: "Ratón Inalámbrico Logitech",
        categoria: "perifericos",
        precio: 34.99,
        stock: 0,
        caracteristicas: {
            tipo: "inalámbrico",
            dpi: 4000,
            botones: 6
        },
        activo: false
    },
    {
        id: 5,
        nombre: "Laptop Dell XPS 15",
        categoria: "portatiles",
        precio: 1299.99,
        stock: 8,
        caracteristicas: {
            procesador: "Intel i7",
            ram: "16GB",
            almacenamiento: "1TB SSD"
        },
        activo: true
    },
    {
        id: 6,
        nombre: "Webcam HD Logitech",
        categoria: "perifericos",
        precio: 59.99,
        stock: 32,
        caracteristicas: {
            resolucion: "1080p",
            fps: 30,
            microfono: true
        },
        activo: true
    },
    {
        id: 7,
        nombre: "Monitor LG UltraWide 34\"",
        categoria: "monitores",
        precio: 449.99,
        stock: 5,
        caracteristicas: {
            resolucion: "3440x1440",
            panel: "IPS",
            tasaRefresco: "144Hz"
        },
        activo: true
    },
    {
        id: 8,
        nombre: "Auriculares Gaming HyperX",
        categoria: "audio",
        precio: 79.99,
        stock: 28,
        caracteristicas: {
            tipo: "over-ear",
            microfono: true,
            conexion: "USB/Jack 3.5mm"
        },
        activo: true
    }
];
```

### Requisitos funcionales

Debes implementar las siguientes funciones:

#### Funciones de búsqueda y filtrado

```javascript
// 1. Buscar producto por ID
// Devuelve el producto o null si no existe
function buscarProductoPorId(id) {
    // TODO
}

// 2. Buscar productos por nombre (búsqueda parcial, sin distinguir mayúsculas)
// Devuelve array de productos que coincidan
function buscarProductosPorNombre(termino) {
    // TODO
}

// 3. Filtrar productos por categoría
// Devuelve array de productos de esa categoría
function filtrarPorCategoria(categoria) {
    // TODO
}

// 4. Filtrar productos por rango de precio
// Devuelve productos con precio entre min y max (inclusive)
function filtrarPorRangoPrecio(precioMin, precioMax) {
    // TODO
}

// 5. Obtener productos con stock bajo (menos de X unidades)
function productosStockBajo(umbral = 10) {
    // TODO
}

// 6. Obtener solo productos activos
function productosActivos() {
    // TODO
}
```

#### Funciones de transformación

```javascript
// 7. Obtener lista simplificada de productos
// Devuelve array de objetos con solo: id, nombre, precio, disponible (stock > 0)
function listaSimplificada() {
    // TODO
}

// 8. Aplicar descuento a una categoría
// Devuelve nuevo array con los precios modificados (no modifica el original)
function aplicarDescuento(categoria, porcentaje) {
    // TODO
}

// 9. Obtener nombres de productos formateados
// Devuelve array de strings: "NOMBRE - PRECIO€"
function nombresFormateados() {
    // TODO
}
```

#### Funciones de estadísticas (usar reduce)

```javascript
// 10. Calcular valor total del inventario (precio × stock de cada producto)
function valorTotalInventario() {
    // TODO
}

// 11. Calcular precio promedio de productos
function precioPromedio() {
    // TODO
}

// 12. Contar productos por categoría
// Devuelve objeto: { portatiles: 2, monitores: 2, perifericos: 3, audio: 1 }
function contarPorCategoria() {
    // TODO
}

// 13. Obtener resumen del inventario
// Devuelve objeto con: totalProductos, productosActivos, valorTotal, 
// productoMasCaro, productoMasBarato, stockTotal
function resumenInventario() {
    // TODO
}
```

#### Funciones de modificación

```javascript
// 14. Actualizar stock de un producto
// Devuelve true si se actualizó, false si no se encontró el producto
function actualizarStock(id, nuevoStock) {
    // TODO
}

// 15. Registrar venta (reducir stock)
// Devuelve objeto con: exito (boolean), mensaje, nuevoStock
function registrarVenta(id, cantidad) {
    // TODO
}

// 16. Añadir nuevo producto
// Genera ID automáticamente (máximo ID actual + 1)
// Devuelve el producto creado
function agregarProducto(nombre, categoria, precio, stock, caracteristicas) {
    // TODO
}
```

#### Funciones de exportación

```javascript
// 17. Exportar inventario a JSON
// Devuelve string JSON formateado
function exportarJSON() {
    // TODO
}

// 18. Generar informe de texto
// Devuelve string con informe formateado del inventario
function generarInforme() {
    // TODO
}
```

### Ejemplo de uso y salida esperada

```javascript
// Pruebas de las funciones
console.log("=== PRUEBAS DEL GESTOR DE INVENTARIO ===\n");

// Búsquedas
console.log("1. Buscar producto ID 3:");
console.log(buscarProductoPorId(3));
// { id: 3, nombre: "Teclado Mecánico Logitech", ... }

console.log("\n2. Buscar productos con 'logitech':");
console.log(buscarProductosPorNombre("logitech"));
// [{ id: 3, ... }, { id: 4, ... }, { id: 6, ... }]

console.log("\n3. Productos de la categoría 'monitores':");
console.log(filtrarPorCategoria("monitores"));
// [{ id: 2, ... }, { id: 7, ... }]

console.log("\n4. Productos entre 50€ y 100€:");
console.log(filtrarPorRangoPrecio(50, 100));
// [{ id: 3, ... }, { id: 6, ... }, { id: 8, ... }]

console.log("\n5. Productos con stock bajo (menos de 10):");
console.log(productosStockBajo(10));
// [{ id: 4, ... }, { id: 5, ... }, { id: 7, ... }]

// Estadísticas
console.log("\n6. Valor total del inventario:");
console.log(valorTotalInventario());
// 45000.00 (aproximadamente)

console.log("\n7. Productos por categoría:");
console.log(contarPorCategoria());
// { portatiles: 2, monitores: 2, perifericos: 3, audio: 1 }

console.log("\n8. Resumen completo:");
console.log(resumenInventario());
/*
{
    totalProductos: 8,
    productosActivos: 7,
    valorTotal: 45000.00,
    productoMasCaro: { id: 5, nombre: "Laptop Dell XPS 15", precio: 1299.99 },
    productoMasBarato: { id: 4, nombre: "Ratón Inalámbrico Logitech", precio: 34.99 },
    stockTotal: 156
}
*/

// Transformaciones
console.log("\n9. Lista simplificada:");
console.log(listaSimplificada());
/*
[
    { id: 1, nombre: "Laptop HP Pavilion", precio: 699.99, disponible: true },
    { id: 2, nombre: "Monitor Samsung 27\"", precio: 249.99, disponible: true },
    ...
]
*/

console.log("\n10. Aplicar 15% descuento a periféricos:");
const conDescuento = aplicarDescuento("perifericos", 15);
console.log(conDescuento.filter(p => p.categoria === "perifericos"));
// Los periféricos ahora tienen precio reducido un 15%

// Modificaciones
console.log("\n11. Registrar venta:");
console.log(registrarVenta(3, 5));
// { exito: true, mensaje: "Venta registrada", nuevoStock: 40 }

console.log(registrarVenta(4, 2));
// { exito: false, mensaje: "Stock insuficiente (disponible: 0)", nuevoStock: 0 }

// Informe
console.log("\n12. Informe del inventario:");
console.log(generarInforme());
```

### Ejemplo de informe generado

```
╔══════════════════════════════════════════════════════════════╗
║           INFORME DE INVENTARIO - TechStore                  ║
║                  Fecha: 15/01/2025                           ║
╠══════════════════════════════════════════════════════════════╣

📊 RESUMEN GENERAL
─────────────────────────────────────────────────────
Total de productos:     8
Productos activos:      7
Productos sin stock:    1
Valor total inventario: 45,234.50€
Stock total unidades:   156

💰 ANÁLISIS DE PRECIOS
─────────────────────────────────────────────────────
Precio promedio:        369.99€
Producto más caro:      Laptop Dell XPS 15 (1,299.99€)
Producto más barato:    Ratón Inalámbrico Logitech (34.99€)

📦 PRODUCTOS POR CATEGORÍA
─────────────────────────────────────────────────────
  • Portátiles:    2 productos
  • Monitores:     2 productos
  • Periféricos:   3 productos
  • Audio:         1 producto

⚠️  ALERTAS DE STOCK (menos de 10 unidades)
─────────────────────────────────────────────────────
  ⚠ Ratón Inalámbrico Logitech - Stock: 0 (SIN STOCK)
  ⚠ Laptop Dell XPS 15 - Stock: 8
  ⚠ Monitor LG UltraWide 34" - Stock: 5

📋 LISTADO COMPLETO
─────────────────────────────────────────────────────
ID  | Nombre                        | Precio    | Stock | Estado
────┼───────────────────────────────┼───────────┼───────┼─────────
1   | Laptop HP Pavilion            | 699.99€   | 15    | ✓ Activo
2   | Monitor Samsung 27"           | 249.99€   | 23    | ✓ Activo
3   | Teclado Mecánico Logitech     | 89.99€    | 45    | ✓ Activo
4   | Ratón Inalámbrico Logitech    | 34.99€    | 0     | ✗ Inactivo
5   | Laptop Dell XPS 15            | 1299.99€  | 8     | ✓ Activo
6   | Webcam HD Logitech            | 59.99€    | 32    | ✓ Activo
7   | Monitor LG UltraWide 34"      | 449.99€   | 5     | ✓ Activo
8   | Auriculares Gaming HyperX     | 79.99€    | 28    | ✓ Activo

╚══════════════════════════════════════════════════════════════╝
```

### Ampliaciones opcionales

1. **Sistema de categorías dinámico**: Permitir crear nuevas categorías y asignar productos.

2. **Historial de cambios**: Registrar todas las modificaciones de stock con fecha y motivo.

3. **Sistema de alertas**: Configurar alertas automáticas cuando el stock baje de cierto umbral.

4. **Búsqueda avanzada**: Permitir buscar por múltiples criterios combinados (categoría + rango de precio + en stock).

5. **Ordenación**: Implementar funciones para ordenar por precio, nombre, stock, etc.



# Actividad 3: Sistema de Gestión de Tareas

## Módulo: Lenguajes de Marcas y Sistemas de Gestión de la Información (LMSGI)
### Ciclo: Desarrollo de Aplicaciones Web (DAW)

---

## Contexto

Una empresa de desarrollo de software necesita un sistema para gestionar las tareas de sus empleados. El sistema debe permitir crear tareas, asignarles prioridades, añadir subtareas, filtrar por diferentes criterios y generar estadísticas.

Tu trabajo es desarrollar las funciones JavaScript que gestionen este sistema.

---

## Modelo de datos

Cada tarea tiene la siguiente estructura:

```javascript
const ejemploTarea = {
    id: 1,
    titulo: "Completar ejercicio de JavaScript",
    descripcion: "Terminar la actividad 3 del módulo LMSGI",
    prioridad: "alta",        // "baja", "media", "alta"
    estado: "pendiente",      // "pendiente", "en-progreso", "completada"
    fechaCreacion: "2025-01-15T10:30:00",
    fechaLimite: "2025-01-20T23:59:59",
    etiquetas: ["estudios", "javascript"],
    subtareas: [
        { id: 1, titulo: "Leer enunciado", completada: true },
        { id: 2, titulo: "Implementar funciones", completada: false },
        { id: 3, titulo: "Probar código", completada: false }
    ]
};
```

---

## Datos de prueba

Utiliza estos datos para probar tu código:

```javascript
const tareas = [
    {
        id: 1,
        titulo: "Preparar presentación del proyecto",
        descripcion: "Crear slides para la presentación del viernes",
        prioridad: "alta",
        estado: "en-progreso",
        fechaCreacion: "2025-01-10T09:00:00",
        fechaLimite: "2025-01-17T18:00:00",
        etiquetas: ["trabajo", "presentacion"],
        subtareas: [
            { id: 1, titulo: "Recopilar datos", completada: true },
            { id: 2, titulo: "Diseñar slides", completada: true },
            { id: 3, titulo: "Añadir gráficos", completada: false },
            { id: 4, titulo: "Revisar ortografía", completada: false }
        ]
    },
    {
        id: 2,
        titulo: "Estudiar para examen de LMSGI",
        descripcion: "Repasar temas de JavaScript y JSON",
        prioridad: "alta",
        estado: "pendiente",
        fechaCreacion: "2025-01-12T14:30:00",
        fechaLimite: "2025-01-22T09:00:00",
        etiquetas: ["estudios", "javascript"],
        subtareas: [
            { id: 1, titulo: "Repasar variables y tipos", completada: false },
            { id: 2, titulo: "Practicar arrays", completada: false },
            { id: 3, titulo: "Practicar objetos", completada: false }
        ]
    },
    {
        id: 3,
        titulo: "Comprar regalo de cumpleaños",
        descripcion: "Buscar regalo para el cumpleaños de María",
        prioridad: "media",
        estado: "pendiente",
        fechaCreacion: "2025-01-14T11:00:00",
        fechaLimite: "2025-01-25T20:00:00",
        etiquetas: ["personal", "compras"],
        subtareas: []
    },
    {
        id: 4,
        titulo: "Actualizar portfolio",
        descripcion: "Añadir los últimos proyectos al portfolio online",
        prioridad: "baja",
        estado: "pendiente",
        fechaCreacion: "2025-01-08T16:00:00",
        fechaLimite: "2025-01-30T23:59:59",
        etiquetas: ["trabajo", "portfolio"],
        subtareas: [
            { id: 1, titulo: "Seleccionar proyectos", completada: true },
            { id: 2, titulo: "Escribir descripciones", completada: false },
            { id: 3, titulo: "Subir capturas", completada: false }
        ]
    },
    {
        id: 5,
        titulo: "Revisar código del sprint",
        descripcion: "Code review de las PRs pendientes",
        prioridad: "alta",
        estado: "completada",
        fechaCreacion: "2025-01-05T10:00:00",
        fechaLimite: "2025-01-12T18:00:00",
        etiquetas: ["trabajo", "codigo"],
        subtareas: [
            { id: 1, titulo: "PR #123", completada: true },
            { id: 2, titulo: "PR #124", completada: true },
            { id: 3, titulo: "PR #125", completada: true }
        ]
    },
    {
        id: 6,
        titulo: "Leer libro de clean code",
        descripcion: "Terminar el libro Clean Code de Robert Martin",
        prioridad: "baja",
        estado: "en-progreso",
        fechaCreacion: "2025-01-01T00:00:00",
        fechaLimite: "2025-02-28T23:59:59",
        etiquetas: ["estudios", "lectura"],
        subtareas: [
            { id: 1, titulo: "Capítulos 1-5", completada: true },
            { id: 2, titulo: "Capítulos 6-10", completada: true },
            { id: 3, titulo: "Capítulos 11-15", completada: false },
            { id: 4, titulo: "Capítulos 16-17", completada: false }
        ]
    }
];
```

---

## Requisitos

### PARTE 1: Gestión de tareas 

Implementa las siguientes funciones:

```javascript
/**
 * Crea una nueva tarea y la añade al array de tareas
 * El ID se genera automáticamente (máximo ID existente + 1)
 * La fecha de creación es la fecha actual
 * El estado inicial es "pendiente"
 * Las subtareas iniciales es un array vacío
 * 
 * @param {string} titulo - Título de la tarea
 * @param {string} descripcion - Descripción de la tarea
 * @param {string} prioridad - "baja", "media" o "alta"
 * @param {string} fechaLimite - Fecha límite en formato ISO
 * @param {array} etiquetas - Array de etiquetas (opcional, por defecto [])
 * @returns {object} - La tarea creada
 */
function crearTarea(titulo, descripcion, prioridad, fechaLimite, etiquetas) {
    // TODO
}


/**
 * Busca y devuelve una tarea por su ID
 * 
 * @param {number} id - ID de la tarea a buscar
 * @returns {object|null} - La tarea encontrada o null si no existe
 */
function obtenerTarea(id) {
    // TODO
}


/**
 * Actualiza una tarea existente con los cambios proporcionados
 * Solo actualiza las propiedades que vengan en el objeto cambios
 * 
 * @param {number} id - ID de la tarea a actualizar
 * @param {object} cambios - Objeto con las propiedades a cambiar
 * @returns {object|null} - La tarea actualizada o null si no existe
 * 
 * Ejemplo de uso:
 * actualizarTarea(1, { titulo: "Nuevo título", prioridad: "baja" })
 */
function actualizarTarea(id, cambios) {
    // TODO
}


/**
 * Elimina una tarea del array
 * 
 * @param {number} id - ID de la tarea a eliminar
 * @returns {boolean} - true si se eliminó, false si no existía
 */
function eliminarTarea(id) {
    // TODO
}


/**
 * Cambia el estado de una tarea
 * 
 * @param {number} id - ID de la tarea
 * @param {string} nuevoEstado - "pendiente", "en-progreso" o "completada"
 * @returns {object|null} - La tarea actualizada o null si no existe
 */
function cambiarEstado(id, nuevoEstado) {
    // TODO
}
```

---

### PARTE 2: Gestión de subtareas

```javascript
/**
 * Añade una subtarea a una tarea existente
 * El ID de la subtarea se genera automáticamente
 * 
 * @param {number} tareaId - ID de la tarea padre
 * @param {string} titulo - Título de la subtarea
 * @returns {object|null} - La subtarea creada o null si la tarea no existe
 */
function agregarSubtarea(tareaId, titulo) {
    // TODO
}


/**
 * Cambia el estado de una subtarea (completada <-> pendiente)
 * 
 * @param {number} tareaId - ID de la tarea padre
 * @param {number} subtareaId - ID de la subtarea
 * @returns {object|null} - La subtarea actualizada o null si no existe
 */
function toggleSubtarea(tareaId, subtareaId) {
    // TODO
}


/**
 * Calcula el porcentaje de progreso de una tarea
 * basándose en sus subtareas completadas
 * Si no tiene subtareas, devuelve 0
 * 
 * @param {number} tareaId - ID de la tarea
 * @returns {number} - Porcentaje de 0 a 100
 */
function calcularProgreso(tareaId) {
    // TODO
}
```

---

### PARTE 3: Filtros y búsquedas

```javascript
/**
 * Filtra las tareas por estado
 * 
 * @param {string} estado - "pendiente", "en-progreso" o "completada"
 * @returns {array} - Array de tareas que coinciden
 */
function filtrarPorEstado(estado) {
    // TODO
}


/**
 * Filtra las tareas por prioridad
 * 
 * @param {string} prioridad - "baja", "media" o "alta"
 * @returns {array} - Array de tareas que coinciden
 */
function filtrarPorPrioridad(prioridad) {
    // TODO
}


/**
 * Filtra las tareas que contengan una etiqueta específica
 * 
 * @param {string} etiqueta - Etiqueta a buscar
 * @returns {array} - Array de tareas que contienen la etiqueta
 */
function filtrarPorEtiqueta(etiqueta) {
    // TODO
}


/**
 * Busca tareas que contengan el término en el título o descripción
 * La búsqueda no distingue mayúsculas/minúsculas
 * 
 * @param {string} termino - Término a buscar
 * @returns {array} - Array de tareas que coinciden
 */
function buscarTareas(termino) {
    // TODO
}


/**
 * Devuelve las tareas vencidas (fecha límite pasada y no completadas)
 * 
 * @returns {array} - Array de tareas vencidas
 */
function tareasVencidas() {
    // TODO
}


/**
 * Devuelve las tareas que vencen en los próximos X días
 * 
 * @param {number} dias - Número de días (por defecto 7)
 * @returns {array} - Array de tareas próximas a vencer
 */
function tareasProximas(dias) {
    // TODO
}
```

---

### PARTE 4: Estadísticas

```javascript
/**
 * Genera un objeto con estadísticas del sistema
 * 
 * @returns {object} - Objeto con las estadísticas:
 *   - totalTareas: número total de tareas
 *   - porEstado: { pendiente: X, "en-progreso": Y, completada: Z }
 *   - porPrioridad: { baja: X, media: Y, alta: Z }
 *   - tareasVencidas: número de tareas vencidas
 *   - progresoPromedio: media del progreso de todas las tareas
 */
function obtenerEstadisticas() {
    // TODO
}
```

---

### PARTE 5: Generar informe

```javascript
/**
 * Genera un informe de texto formateado con el estado de las tareas
 * 
 * @returns {string} - Informe formateado
 */
function generarInforme() {
    // TODO
}
```

El informe debe mostrar algo similar a esto:

```
============================================================
           INFORME DE TAREAS - TaskManager
              Fecha: 16/01/2025
============================================================

RESUMEN GENERAL
------------------------------------------------------------
Total de tareas:        6
  - Pendientes:         3 (50%)
  - En progreso:        2 (33%)
  - Completadas:        1 (17%)

Por prioridad:
  - Alta:               3 tareas
  - Media:              1 tarea
  - Baja:               2 tareas

Progreso promedio:      45%

TAREAS VENCIDAS
------------------------------------------------------------
  (ninguna)

TAREAS PROXIMAS (7 dias)
------------------------------------------------------------
  [ALTA] Preparar presentación del proyecto
    Vence: 17/01/2025 - Progreso: 50%

  [ALTA] Estudiar para examen de LMSGI
    Vence: 22/01/2025 - Progreso: 0%

LISTADO COMPLETO
------------------------------------------------------------

PRIORIDAD ALTA:
  [EN-PROGRESO] Preparar presentación del proyecto
    Progreso: 50% (2/4 subtareas)
    Etiquetas: trabajo, presentacion

  [PENDIENTE] Estudiar para examen de LMSGI
    Progreso: 0% (0/3 subtareas)
    Etiquetas: estudios, javascript

  [COMPLETADA] Revisar código del sprint
    Progreso: 100% (3/3 subtareas)
    Etiquetas: trabajo, codigo

PRIORIDAD MEDIA:
  [PENDIENTE] Comprar regalo de cumpleaños
    Sin subtareas
    Etiquetas: personal, compras

PRIORIDAD BAJA:
  [PENDIENTE] Actualizar portfolio
    Progreso: 33% (1/3 subtareas)
    Etiquetas: trabajo, portfolio

  [EN-PROGRESO] Leer libro de clean code
    Progreso: 50% (2/4 subtareas)
    Etiquetas: estudios, lectura

============================================================
```

---

## Código base

Usa esta estructura para tu archivo JavaScript:

```javascript
"use strict";

// ============================================
// DATOS
// ============================================

const tareas = [
    // ... (copia aquí los datos de prueba)
];


// ============================================
// PARTE 1: GESTIÓN DE TAREAS
// ============================================

function crearTarea(titulo, descripcion, prioridad, fechaLimite, etiquetas) {
    // TODO
}

function obtenerTarea(id) {
    // TODO
}

function actualizarTarea(id, cambios) {
    // TODO
}

function eliminarTarea(id) {
    // TODO
}

function cambiarEstado(id, nuevoEstado) {
    // TODO
}


// ============================================
// PARTE 2: GESTIÓN DE SUBTAREAS
// ============================================

function agregarSubtarea(tareaId, titulo) {
    // TODO
}

function toggleSubtarea(tareaId, subtareaId) {
    // TODO
}

function calcularProgreso(tareaId) {
    // TODO
}


// ============================================
// PARTE 3: FILTROS Y BÚSQUEDAS
// ============================================

function filtrarPorEstado(estado) {
    // TODO
}

function filtrarPorPrioridad(prioridad) {
    // TODO
}

function filtrarPorEtiqueta(etiqueta) {
    // TODO
}

function buscarTareas(termino) {
    // TODO
}

function tareasVencidas() {
    // TODO
}

function tareasProximas(dias = 7) {
    // TODO
}


// ============================================
// PARTE 4: ESTADÍSTICAS
// ============================================

function obtenerEstadisticas() {
    // TODO
}


// ============================================
// PARTE 5: GENERAR INFORME
// ============================================

function generarInforme() {
    // TODO
}


// ============================================
// PRUEBAS
// ============================================

// Descomenta estas líneas para probar tus funciones:

// console.log("=== PRUEBA: Obtener tarea ===");
// console.log(obtenerTarea(1));

// console.log("=== PRUEBA: Filtrar por estado ===");
// console.log(filtrarPorEstado("pendiente"));

// console.log("=== PRUEBA: Calcular progreso ===");
// console.log(calcularProgreso(1));

// console.log("=== PRUEBA: Estadísticas ===");
// console.log(obtenerEstadisticas());

// console.log("=== PRUEBA: Informe ===");
// console.log(generarInforme());
```

## Consejos

- **Empieza por las funciones más sencillas** (obtenerTarea, filtrarPorEstado)
- **Prueba cada función** antes de pasar a la siguiente
- **Usa console.log()** para depurar
- Recuerda que **find()** devuelve un elemento y **filter()** devuelve un array
- Para trabajar con fechas, puedes usar `new Date(fechaString)` para convertir strings a fechas
- Para comparar fechas: `fecha1 < fecha2` funciona directamente con objetos Date

---

## Ampliaciones opcionales

Si terminas antes de tiempo, puedes implementar:

1. **Filtro combinado**: Función que permita filtrar por varios criterios a la vez
   ```javascript
   filtrarTareas({ estado: "pendiente", prioridad: "alta", etiqueta: "trabajo" })
   ```

2. **Ordenación**: Función para ordenar tareas por diferentes campos
   ```javascript
   ordenarTareas(tareas, "fechaLimite", "asc")
   ordenarTareas(tareas, "prioridad", "desc")
   ```

3. **Exportar/Importar JSON**: Funciones para exportar las tareas a JSON e importar desde JSON

4. **Validación**: Añadir validación a las funciones (comprobar que la prioridad es válida, que las fechas son correctas, etc.)

---

