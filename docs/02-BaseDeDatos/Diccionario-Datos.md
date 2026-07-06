# Diccionario de Datos

## Proyecto
**JAM Studio - Business Intelligence**

Versión: 1.0

Estado: Definitivo

---

# Convenciones

## Tipos de datos

| Tipo | Descripción |
|-------|-------------|
| UUID | Identificador único |
| VARCHAR | Texto corto |
| TEXT | Texto largo |
| BOOLEAN | Verdadero/Falso |
| DECIMAL | Valores monetarios |
| INTEGER | Números enteros |
| TIMESTAMP | Fecha y hora |

---

# MÓDULO COMERCIAL

## Tabla: clientes

Descripción:
Almacena la información de los clientes registrados.

| Campo | Tipo | PK | FK | Nulo | Descripción |
|--------|------|----|----|------|-------------|
| id | UUID | ✓ | | No | Identificador |
| nombre | VARCHAR | | | No | Nombre del cliente |
| telefono | VARCHAR | | | Sí | Teléfono |
| email | VARCHAR | | | Sí | Correo |
| canal_contacto_id | UUID | | ✓ | Sí | Canal por el que llegó |
| observaciones | TEXT | | | Sí | Comentarios |
| created_at | TIMESTAMP | | | No | Fecha de creación |

---

## Tabla: canales_contacto

Descripción:
Origen del cliente.

Ejemplos:

- Instagram
- Facebook
- WhatsApp
- Feria
- Recomendación
- Cliente frecuente

| Campo | Tipo |
|--------|------|
| id | UUID |
| nombre | VARCHAR |

---

## Tabla: estados_pedido

Descripción:
Estado comercial del pedido.

Ejemplos:

- Pendiente
- Confirmado
- Entregado
- Cancelado

| Campo | Tipo |
|--------|------|
| id | UUID |
| nombre | VARCHAR |

---

## Tabla: estados_pago

Descripción:
Estado financiero del pedido.

Ejemplos:

- Pendiente
- Señado
- Pagado

| Campo | Tipo |
|--------|------|
| id | UUID |
| nombre | VARCHAR |

---

## Tabla: pedidos

Descripción:
Cabecera de cada venta.

| Campo | Tipo |
|--------|------|
| id | UUID |
| cliente_id | UUID |
| estado_pedido_id | UUID |
| estado_pago_id | UUID |
| fecha | TIMESTAMP |
| observaciones | TEXT |
| created_at | TIMESTAMP |

---

## Tabla: detalle_pedido

Descripción:
Productos vendidos en un pedido.

| Campo | Tipo |
|--------|------|
| id | UUID |
| pedido_id | UUID |
| variante_id | UUID |
| cantidad | INTEGER |
| precio_unitario | DECIMAL |
| costo_unitario | DECIMAL |
| descuento | DECIMAL |
| subtotal | DECIMAL |

---

# MÓDULO CATÁLOGO

## Tabla: productos

Descripción:
Producto base.

Ejemplo:

- Lámpara
- Chop
- Soporte Notebook

| Campo | Tipo |
|--------|------|
| id | UUID |
| nombre | VARCHAR |
| descripcion | TEXT |
| activo | BOOLEAN |

---

## Tabla: variantes

Descripción:
Versiones de un producto.

Ejemplo:

Lámpara Stitch

Lámpara Goku

Lámpara One Piece

| Campo | Tipo |
|--------|------|
| id | UUID |
| producto_id | UUID |
| nombre | VARCHAR |
| precio_actual | DECIMAL |
| costo_actual | DECIMAL |
| tiempo_produccion_horas | INTEGER |
| activo | BOOLEAN |

---

## Tabla: categorias

Descripción:
Clasificación comercial.

| Campo | Tipo |
|--------|------|
| id | UUID |
| nombre | VARCHAR |

---

## Tabla: producto_categoria

Tabla intermedia N:M.

| Campo | Tipo |
|--------|------|
| producto_id | UUID |
| categoria_id | UUID |

---

## Tabla: colecciones

Descripción:
Agrupa variantes de una misma línea.

Ejemplo:

- Disney
- Anime
- Navidad

| Campo | Tipo |
|--------|------|
| id | UUID |
| nombre | VARCHAR |

---

## Tabla: producto_coleccion

Relación N:M.

| Campo | Tipo |
|--------|------|
| producto_id | UUID |
| coleccion_id | UUID |

---

# MÓDULO PRODUCCIÓN

## Tabla: estados_produccion

Ejemplos:

- Diseño
- Modelado
- Impresión
- Postprocesado
- Armado
- Packaging
- Finalizado

| Campo | Tipo |
|--------|------|
| id | UUID |
| nombre | VARCHAR |
| orden | INTEGER |

---

## Tabla: ordenes_produccion

Descripción:
Orden de fabricación de cada producto vendido.

| Campo | Tipo |
|--------|------|
| id | UUID |
| detalle_pedido_id | UUID |
| estado_actual_id | UUID |
| fecha_inicio | TIMESTAMP |
| fecha_fin | TIMESTAMP |
| observaciones | TEXT |

---

## Tabla: historial_produccion

Descripción:
Historial completo de cambios de estado.

| Campo | Tipo |
|--------|------|
| id | UUID |
| orden_produccion_id | UUID |
| estado_produccion_id | UUID |
| fecha | TIMESTAMP |
| observaciones | TEXT |

---

## Tabla: personalizaciones

Descripción:
Información específica enviada por el cliente.

| Campo | Tipo |
|--------|------|
| id | UUID |
| detalle_pedido_id | UUID |
| descripcion | TEXT |
| archivo | VARCHAR |
| observaciones | TEXT |

---

## Tabla: insumos

Descripción:
Materias primas.

Ejemplos:

- Filamento PLA
- Resina
- LEDs
- Fuente
- Acrílico

| Campo | Tipo |
|--------|------|
| id | UUID |
| nombre | VARCHAR |
| unidad_medida | VARCHAR |
| costo_unitario | DECIMAL |
| stock_actual | DECIMAL |

---

# MÓDULO FINANZAS

## Tabla: transacciones

Descripción:
Movimientos financieros.

| Campo | Tipo |
|--------|------|
| id | UUID |
| pedido_id | UUID |
| financiamiento_id | UUID |
| tipo | VARCHAR |
| metodo_pago | VARCHAR |
| monto | DECIMAL |
| fecha | TIMESTAMP |
| observaciones | TEXT |

---

## Tabla: compras

Descripción:
Registro de compras de insumos.

| Campo | Tipo |
|--------|------|
| id | UUID |
| fecha | TIMESTAMP |
| proveedor | VARCHAR |
| total | DECIMAL |
| observaciones | TEXT |

---

## Tabla: detalle_compra

Detalle de productos comprados.

| Campo | Tipo |
|--------|------|
| id | UUID |
| compra_id | UUID |
| insumo_id | UUID |
| cantidad | DECIMAL |
| costo_unitario | DECIMAL |
| subtotal | DECIMAL |

---

## Tabla: financiamientos

Descripción:
Registro de préstamos, inversiones o ayudas económicas.

| Campo | Tipo |
|--------|------|
| id | UUID |
| nombre | VARCHAR |
| monto | DECIMAL |
| destino | TEXT |
| fecha_inicio | TIMESTAMP |
| fecha_reintegro | TIMESTAMP |
| monto_reintegrado | DECIMAL |
| observaciones | TEXT |

---

# Resumen del modelo

## Total de módulos

- Comercial
- Catálogo
- Producción
- Finanzas

## Total de tablas

21

## Tipo de base de datos

PostgreSQL

## ORM

Sequelize

## Frontend

React

## Backend

Node.js + Express

## Objetivo

Sistema de Business Intelligence para la toma de decisiones de JAM Studio, con trazabilidad completa de clientes, ventas, producción y finanzas.