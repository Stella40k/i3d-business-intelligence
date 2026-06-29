# Reglas de Negocio

| Proyecto             | I3D Business Intelligence |
| -------------------- | ------------------------- |
| Versión              | 1.0                       |
| Sprint               | Sprint 1                  |
| Estado               | En desarrollo             |
| Última actualización | 29/06/2026                |
| Responsable          | Stella M. Bernard         |

---

# Objetivo

Definir las reglas funcionales que deberá respetar el sistema para representar correctamente la operatoria de JAM Studio.

Las reglas aquí definidas serán utilizadas posteriormente para el diseño de la base de datos, las validaciones del backend y las restricciones del sistema.

---

# Productos

### RN-001

Todo producto deberá estar activo o inactivo.

Los productos inactivos no podrán venderse, pero conservarán su historial.

---

### RN-002

Un producto podrá tener una o varias variantes.

---

### RN-003

Una variante pertenecerá a un único producto.

---

### RN-004

Una variante podrá asociarse a una o varias categorías.

---

### RN-005

Cada variante tendrá su propio:

* costo de producción;
* precio de venta;
* tiempo estimado de producción;
* stock disponible (si corresponde).

---

# Ventas

### RN-006

Toda venta deberá contener al menos un detalle de venta.

---

### RN-007

Una venta podrá registrarse sin asociar un cliente específico.

---

### RN-008

Una venta podrá contener una o varias variantes de productos.

---

### RN-009

Cada detalle de venta almacenará el precio y costo vigentes al momento de la venta para preservar el historial financiero.

---

### RN-010

El precio actual de una variante no modificará ventas ya registradas.

---

### RN-011

Toda venta registrará un método de pago.

---

### RN-012

El estado inicial de una venta será "Pendiente", salvo que el usuario indique otro estado válido.

---

# Producción

### RN-013

Cada detalle de venta tendrá un único proceso de producción independiente.

---

### RN-014

Los estados de producción seguirán el siguiente flujo:

Pendiente

↓

Diseño

↓

Impresión

↓

Postprocesado

↓

Packaging

↓

Entrega

↓

Finalizado

---

### RN-015

Distintos productos pertenecientes a una misma venta podrán encontrarse en estados de producción diferentes.

---

# Finanzas

### RN-016

Todo ingreso o egreso deberá registrarse con fecha, concepto y monto.

---

### RN-017

Las compras de insumos generarán automáticamente un egreso financiero.

---

### RN-018

Los movimientos financieros manuales no requerirán estar asociados a una venta.

---

### RN-019

Los financiamientos deberán registrar:

* monto recibido;
* destino;
* fecha;
* reintegros realizados;
* saldo pendiente.

---

# Clientes

### RN-020

Cuando exista un cliente registrado, podrá realizar múltiples compras.

---

### RN-021

El canal de contacto deberá conservarse para fines estadísticos.

---

# Dashboard

### RN-022

Toda la información visualizada en el Dashboard será calculada a partir de los datos operativos registrados.

No se almacenarán estadísticas manualmente.

---

### RN-023

Los indicadores deberán actualizarse automáticamente al registrarse nuevas ventas, movimientos financieros o cambios en producción.
