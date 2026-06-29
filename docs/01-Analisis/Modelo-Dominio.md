# Modelo de Dominio

| Proyecto             | I3D Business Intelligence |
| -------------------- | ------------------------- |
| Versión              | 1.0                       |
| Sprint               | Sprint 1                  |
| Estado               | En desarrollo             |
| Última actualización | 29/06/2026                |
| Responsable          | Stella M. Bernard         |

---

# Objetivo

Identificar las entidades principales del negocio, sus responsabilidades y las relaciones existentes entre ellas, antes de realizar el diseño de la base de datos.

---

# Entidades del dominio

## Cliente

Representa a una persona o empresa interesada en los productos de JAM Studio.

### Responsabilidades

* Registrar información de contacto.
* Conocer el origen del contacto.
* Consultar historial de compras.

---

## Canal de contacto

Representa el medio por el cual llegó un cliente o una venta.

Ejemplos:

* Instagram
* Facebook
* WhatsApp
* Recomendación
* Feria
* Contacto directo

---

## Categoría

Agrupa los productos según la línea de negocio.

Ejemplos:

* Deco e iluminación
* Diseño de soluciones
* Cultura y ferias
* Funcionales
* Arte y escultura
* Productos masivos
* Distribución de insumos
* Ingresos internos

---

## Producto

Representa el producto general que comercializa la empresa.

Ejemplos:

* Lámpara
* Llavero
* Chop cervecero
* Soporte Notebook

---

## Variante

Representa una versión específica de un producto.

Cada variante podrá tener:

* nombre comercial;
* costo;
* precio;
* tiempo estimado de producción;
* materiales;
* stock (si corresponde).

---

## Venta

Representa una operación comercial realizada por la empresa.

Una venta puede existir incluso cuando no se conoce el cliente.

---

## Detalle de venta

Representa cada producto vendido dentro de una venta.

Permite registrar:

* variante vendida;
* cantidad;
* precio aplicado;
* costo histórico.

---

## Producción

Representa el seguimiento del proceso productivo de cada producto vendido.

Estados:

* Pendiente
* Diseño
* Impresión
* Postprocesado
* Packaging
* Entrega
* Finalizado

---

## Movimiento financiero

Representa cualquier movimiento económico.

Puede ser:

* ingreso;
* egreso;
* financiamiento;
* reintegro.

---

## Insumo

Representa los materiales utilizados para fabricar productos.

Ejemplos:

* Filamento PLA
* Resina
* LEDs
* Pintura
* Tornillos

---

## Compra de insumos

Representa la adquisición de materiales para producción.

---

# Relaciones principales

* Un producto posee una o varias variantes.
* Una variante puede pertenecer a varias categorías.
* Una venta posee uno o varios detalles.
* Cada detalle referencia una única variante.
* Cada detalle posee un seguimiento de producción.
* Una venta puede o no estar asociada a un cliente.
* Un cliente puede realizar múltiples compras.
* Un movimiento financiero puede estar relacionado con una venta o registrarse manualmente.
* Una compra de insumos genera uno o varios movimientos financieros.

---

# Observaciones

El dominio fue diseñado para permitir el crecimiento futuro del sistema sin afectar su estructura principal.
