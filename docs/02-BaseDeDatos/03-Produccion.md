# Módulo Producción

| Proyecto | I3D Business Intelligence |
| -------- | ------------------------- |
| Módulo   | Producción                |
| Sprint   | 2                         |
| Estado   | En desarrollo             |

# Objetivo

Controlar el proceso de fabricación de cada producto solicitado dentro de un pedido.

---

# Entidad: Producción

Representa el seguimiento de fabricación de un producto.

Cada producto del pedido tendrá una producción independiente.

Esto permitirá que distintos productos del mismo pedido avancen en tiempos diferentes.

---

# Entidad: EstadoProducción

Estados definidos:

* Pendiente
* Diseño
* Aprobación
* Impresión
* Postprocesado
* Packaging
* Entregado
* Finalizado

---

# Entidad: ConfiguraciónProducto

Representa todas las personalizaciones elegidas por el cliente.

Podrá almacenar:

* color;
* tamaño;
* material;
* acabado;
* texto personalizado;
* imagen de referencia;
* observaciones.

---

# Entidad: Insumo

Representa los materiales utilizados para fabricar productos.

Ejemplos:

* Filamento PLA
* Filamento PETG
* Resina
* LEDs
* Madera
* Acrílico

---

# Relaciones

Pedido → DetallePedido

DetallePedido → Producción

Producción → EstadoProducción

DetallePedido → ConfiguraciónProducto
