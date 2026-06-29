# Módulo Comercial

| Proyecto | I3D Business Intelligence |
| -------- | ------------------------- |
| Módulo   | Comercial                 |
| Sprint   | 2                         |
| Estado   | En desarrollo             |

# Objetivo

Administrar todo el proceso comercial de JAM Studio, desde el primer contacto con un cliente hasta la finalización del pedido.

Este módulo constituye el núcleo del sistema, ya que todas las áreas de producción, finanzas y análisis parten de un pedido.

---

# Entidad: Pedido

## Descripción

Representa la solicitud realizada por un cliente o potencial cliente.

Un pedido podrá contener uno o varios productos y será el eje central del sistema.

## Responsabilidades

* Registrar nuevos pedidos.
* Asociar clientes (cuando existan).
* Registrar observaciones.
* Relacionar productos.
* Relacionar pagos.
* Relacionar producción.

---

# Entidad: Cliente

## Descripción

Representa una persona o empresa interesada en los productos o servicios de JAM Studio.

El cliente será opcional para permitir ventas rápidas o ventas presenciales.

## Responsabilidades

* Mantener información de contacto.
* Conservar historial comercial.
* Generar estadísticas.

---

# Entidad: CanalContacto

## Descripción

Indica cómo llegó el cliente a la empresa.

Ejemplos:

* Instagram
* Facebook
* WhatsApp
* Recomendación
* Cliente recurrente
* Página Web
* Feria
* Conocido

Este dato alimentará los indicadores comerciales.

---

# Entidad: MetodoPago

## Descripción

Define el medio utilizado para abonar un pedido.

Ejemplos:

* Efectivo
* Transferencia
* Mercado Pago
* Tarjeta

---

# Relaciones

* Un Cliente puede realizar muchos Pedidos.
* Un Pedido puede existir sin Cliente.
* Un Pedido posee uno o varios productos.
* Un Pedido registra uno o varios pagos.
* Cada Cliente posee un Canal de Contacto.
