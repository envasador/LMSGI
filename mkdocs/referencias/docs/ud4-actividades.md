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

// Pista para formatear precios: numero.toFixed(2)
// Pista para alinear texto: string.padStart(10) o string.padEnd(30)

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
