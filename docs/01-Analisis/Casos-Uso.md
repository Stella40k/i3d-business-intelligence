# Casos de Uso

| Proyecto             | I3D Business Intelligence |
| -------------------- | ------------------------- |
| Versión              | 1.0                       |
| Sprint               | Sprint 1                  |
| Estado               | En desarrollo             |
| Última actualización | 29/06/2026                |
| Responsable          | Stella M. Bernard         |

---

# Objetivo

Documentar las principales interacciones que los usuarios podrán realizar dentro del sistema.

---

# Actor principal

Administrador de JAM Studio.

---

# CU-001 - Registrar una venta

## Objetivo

Registrar una nueva venta con uno o varios productos.

### Flujo principal

1. El usuario inicia una nueva venta.
2. Selecciona un cliente existente o continúa sin cliente.
3. Agrega una o más variantes de productos.
4. Define cantidades.
5. Selecciona el método de pago.
6. Define el estado del pago.
7. Confirma la venta.
8. El sistema registra la venta.
9. Se crean automáticamente los procesos de producción correspondientes.

---

# CU-002 - Actualizar producción

## Objetivo

Actualizar el estado de producción de cada producto vendido.

### Flujo principal

1. El usuario abre la producción.
2. Selecciona un producto.
3. Cambia su estado.
4. El sistema guarda el cambio.

---

# CU-003 - Registrar ingreso o egreso

## Objetivo

Registrar un movimiento financiero.

### Flujo principal

1. El usuario crea un movimiento.
2. Selecciona ingreso o egreso.
3. Ingresa concepto.
4. Ingresa monto.
5. Guarda.

---

# CU-004 - Registrar un cliente

## Objetivo

Registrar un cliente para futuras ventas.

---

# CU-005 - Consultar Dashboard

## Objetivo

Visualizar indicadores de la empresa.

El Dashboard deberá mostrar inicialmente:

* Balance neto de los últimos seis meses.
* Categoría más vendida.
* Producto más rentable.
* Estimación del dinero disponible.
* Producción en curso.
