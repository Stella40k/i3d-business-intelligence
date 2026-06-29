                                DASHBOARD BI
                                       │
        ┌──────────────────────────────┼──────────────────────────────┐
        │                              │                              │
   Comercial                     Producción                     Finanzas
        │                              │                              │
        │                              │                              │
    Pedido ───────────────┬──────── Producción ───────────────┬──────── Movimiento
        │                 │                                   │
        │                 │                                   │
 Cliente            DetallePedido                      Financiamiento
        │                 │
        │                 │
 CanalContacto      ConfiguraciónProducto
                          │
                     Variante
                          │
                      Producto
                          │
                      Colección
                          │
                      Categoría

# Modelo Entidad-Relación

| Proyecto             | I3D Business Intelligence |
| -------------------- | ------------------------- |
| Versión              | 1.0                       |
| Sprint               | Sprint 2                  |
| Estado               | En desarrollo             |
| Última actualización | 29/06/2026                |
| Responsable          | Stella M. Bernard         |

---

# Objetivo

Definir las entidades que formarán parte de la base de datos, describiendo su responsabilidad dentro del sistema y las relaciones que mantendrán con otras entidades.

Este documento servirá como base para la construcción del diagrama Entidad–Relación, el diccionario de datos y la implementación de la base de datos.

---

# Entidad: Pedido

## Descripción

Representa el proceso completo solicitado por un cliente, desde la consulta inicial hasta la entrega del producto y el cierre financiero.

Es la entidad principal del sistema.

## Responsabilidades

* Registrar pedidos.
* Asociar productos.
* Relacionar clientes.
* Iniciar producción.
* Generar movimientos financieros.

## Se relaciona con

* Cliente
* DetallePedido
* MovimientoFinanciero

## Observaciones

Un pedido puede existir sin un cliente registrado.

---

# Entidad: Cliente

## Descripción

Representa una persona o empresa interesada en los productos o servicios de JAM Studio.

## Responsabilidades

* Registrar información de contacto.
* Conservar el historial comercial.
* Permitir estadísticas de clientes.

## Se relaciona con

* Pedido
* CanalContacto

---

# Entidad: Producto

## Descripción

Representa un producto base ofrecido por JAM Studio.

Ejemplos:

* Lámpara
* Chop cervecero
* Soporte notebook

## Responsabilidades

* Agrupar variantes.
* Mantener información general.

## Se relaciona con

* Variante
* Colección

---

# Entidad: Variante

## Descripción

Representa una versión específica de un producto.

Cada variante puede tener un costo, precio y tiempo de producción diferente.

## Se relaciona con

* Producto
* ConfiguraciónProducto
* DetallePedido
