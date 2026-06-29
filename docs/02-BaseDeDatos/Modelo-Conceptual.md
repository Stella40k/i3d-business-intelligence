# Modelo Conceptual

| Proyecto             | I3D Business Intelligence |
| -------------------- | ------------------------- |
| Versión              | 1.0                       |
| Sprint               | Sprint 1B                 |
| Estado               | En desarrollo             |
| Última actualización | 29/06/2026                |
| Responsable          | Stella M. Bernard         |

---

# Objetivo

Definir conceptualmente la información que administra el sistema antes de transformarla en un modelo relacional.

El modelo conceptual representa las entidades del negocio y sus relaciones sin considerar aspectos técnicos de implementación como claves primarias, tipos de datos o restricciones de la base de datos.

---

# Dominios del sistema

El sistema se divide en cuatro grandes dominios funcionales.

## Comercial

Responsable de gestionar:

* Clientes
* Ventas
* Detalles de venta
* Métodos de pago
* Canales de contacto

---

## Catálogo

Responsable de administrar:

* Productos
* Variantes
* Categorías

---

## Producción

Responsable de controlar:

* Producción
* Estados de producción
* Insumos
* Compras de insumos

---

## Finanzas

Responsable de registrar:

* Ingresos
* Egresos
* Movimientos financieros
* Financiamientos

---

# Principios del modelo

* La información se registra una única vez.
* Todo dato debe ser trazable.
* Toda venta conserva su historial.
* Los indicadores del Dashboard se calculan a partir de los datos operativos.
* La arquitectura debe permitir incorporar nuevos módulos sin modificar la estructura existente.

---

# Relación entre dominios

El dominio Comercial genera información que alimenta Producción y Finanzas.

Producción consume información del Catálogo para fabricar los productos vendidos.

Finanzas registra el impacto económico generado por las ventas, las compras de insumos y otros movimientos.

El Dashboard integra información proveniente de todos los dominios para generar indicadores estratégicos.
