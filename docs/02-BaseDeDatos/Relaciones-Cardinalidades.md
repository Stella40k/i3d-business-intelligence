# Relaciones y Cardinalidades

| Proyecto    | I3D Business Intelligence   |
| ----------- | --------------------------- |
| Documento   | Relaciones y Cardinalidades |
| Sprint      | Sprint 2                    |
| Versión     | 1.0                         |
| Estado      | En desarrollo               |
| Responsable | Stella M. Bernard           |

---

# Objetivo

Definir las relaciones existentes entre las entidades del sistema, indicando la cardinalidad y las reglas de negocio asociadas.

Este documento servirá como base para la construcción del Modelo Entidad-Relación (MER) y la implementación de la base de datos.

---

# Convenciones

## Cardinalidades

* 1:1 → Uno a uno
* 1:N → Uno a muchos
* N:M → Muchos a muchos

## Obligatoriedad

* Obligatoria: la entidad no puede existir sin la otra.
* Opcional: la entidad puede existir de forma independiente.

---

# Relaciones

| Entidad A        | Entidad B             | Cardinalidad | Obligatoria | Justificación                                                                                                   |
| ---------------- | --------------------- | ------------ | ----------- | --------------------------------------------------------------------------------------------------------------- |
| Cliente          | Pedido                | 1:N          | No          | Un cliente puede realizar varios pedidos, pero un pedido también puede registrarse sin un cliente identificado. |
| CanalContacto    | Cliente               | 1:N          | Sí          | Un canal puede estar asociado a muchos clientes. Cada cliente registrado tendrá un canal de contacto.           |
| Pedido           | DetallePedido         | 1:N          | Sí          | Todo pedido debe contener al menos un producto.                                                                 |
| Producto         | DetallePedido         | 1:N          | Sí          | Un producto puede venderse muchas veces.                                                                        |
| Variante         | DetallePedido         | 1:N          | No          | Si el producto posee variantes, cada detalle utilizará una de ellas.                                            |
| DetallePedido    | ConfiguracionProducto | 1:1          | No          | Solo existirá cuando el producto requiera personalización.                                                      |
| DetallePedido    | Produccion            | 1:1          | Sí          | Cada producto vendido tendrá un seguimiento de producción independiente.                                        |
| EstadoProduccion | Produccion            | 1:N          | Sí          | Un estado podrá utilizarse en muchas producciones.                                                              |
| MetodoPago       | MovimientoFinanciero  | 1:N          | Sí          | Un método de pago podrá utilizarse en muchos movimientos.                                                       |
| Pedido           | MovimientoFinanciero  | 1:N          | Sí          | Un pedido podrá generar varios ingresos o pagos.                                                                |
| Financiamiento   | MovimientoFinanciero  | 1:N          | No          | Un financiamiento podrá registrar varios reintegros.                                                            |
| CompraInsumo     | MovimientoFinanciero  | 1:1          | Sí          | Toda compra genera un egreso financiero.                                                                        |
| Insumo           | CompraInsumo          | N:M          | Sí          | Una compra puede contener muchos insumos y un insumo puede comprarse muchas veces.                              |
| Categoria        | Producto              | N:M          | Sí          | Un producto puede pertenecer a varias categorías y una categoría contiene muchos productos.                     |
| Coleccion        | Producto              | N:M          | No          | Un producto puede pertenecer a varias colecciones y una colección puede contener muchos productos.              |

---

# Tablas Intermedias

Las siguientes relaciones N:M requerirán tablas puente.

## ProductoCategoria

Relacionará productos con categorías.

## ProductoColeccion

Relacionará productos con colecciones.

## CompraDetalle

Relacionará compras con insumos indicando:

* cantidad;
* precio unitario;
* subtotal.

---

# Relaciones Opcionales

Las siguientes relaciones podrán no existir dependiendo del tipo de pedido:

* Cliente → Pedido
* Variante → DetallePedido
* ConfiguracionProducto → DetallePedido
* Financiamiento → MovimientoFinanciero
* Coleccion → Producto

---

# Decisiones de Diseño

## Pedido como entidad principal

Toda la información del sistema girará alrededor del Pedido.

No se utilizará la entidad Venta como eje del sistema, ya que el pedido representa el proceso completo desde la solicitud del cliente hasta la entrega y el cierre financiero.

---

## Producción independiente

Cada producto de un pedido tendrá su propia producción.

Esto permitirá que un mismo pedido tenga productos en diferentes etapas simultáneamente.

---

## Personalización desacoplada

Las personalizaciones se almacenarán en ConfiguracionProducto y no directamente en DetallePedido.

Esto permitirá agregar nuevas opciones de personalización sin modificar la estructura principal de la base de datos.

---

## Relaciones N:M

Las relaciones muchos a muchos nunca se implementarán directamente.

Siempre se resolverán mediante tablas intermedias para mantener la integridad referencial y facilitar futuras ampliaciones del sistema.
