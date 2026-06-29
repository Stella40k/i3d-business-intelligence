# Flujos de Negocio

| Proyecto             | I3D Business Intelligence |
| -------------------- | ------------------------- |
| Versión              | 1.0                       |
| Sprint               | Sprint 1                  |
| Estado               | Aprobado                  |
| Última actualización | 29/06/2026                |
| Responsable          | Stella M. Bernard         |

---

# Objetivo

Documentar el flujo operativo de JAM Studio para comprender cómo circula la información dentro de la empresa y diseñar un sistema que acompañe el proceso real de trabajo.

El sistema deberá soportar tanto la venta de productos ya existentes como el desarrollo de productos completamente personalizados.

---

# Flujo General

Todo trabajo realizado por JAM Studio comenzará con un pedido.

Cada pedido podrá contener uno o varios productos y cada producto podrá requerir distintos niveles de personalización.

El pedido continuará su ciclo hasta finalizar la entrega y el cierre financiero.

---

# Flujo 1 - Producto de Catálogo

Corresponde a productos previamente diseñados por JAM Studio.

Ejemplos:

* Lámparas
* Chops cerveceros
* Soportes notebook
* Bases iluminadas

## Proceso

1. Se recibe la consulta del cliente.
2. Se registra el pedido.
3. Se seleccionan los productos.
4. Se agregan personalizaciones si existen.
5. Se registra la forma de pago.
6. Comienza la producción.
7. Se realiza el packaging.
8. Se entrega el producto.
9. Se finaliza el pedido.

---

# Flujo 2 - Producto Personalizado

Corresponde a trabajos desarrollados exclusivamente para un cliente.

Ejemplos:

* Regalos personalizados
* Diseños para empresas
* Esculturas
* Eventos
* Ferias
* Productos únicos

## Proceso

1. Se recibe la consulta.
2. Se analiza la necesidad.
3. Se registra el pedido.
4. Se realiza el diseño.
5. El cliente aprueba el diseño.
6. Se inicia la producción.
7. Se realiza el postprocesado.
8. Se realiza el packaging.
9. Se entrega el producto.
10. Se finaliza el pedido.

---

# Producción

Cada producto de un pedido tendrá un seguimiento independiente.

Estados posibles:

* Pendiente
* Diseño
* Aprobación
* Impresión
* Postprocesado
* Packaging
* Entrega
* Finalizado

Esto permite que distintos productos del mismo pedido se encuentren en diferentes etapas simultáneamente.

---

# Flujo Financiero

Cada pedido podrá generar uno o varios movimientos financieros.

Tipos:

* Seña
* Pago parcial
* Pago total
* Ingreso manual
* Egreso manual
* Compra de insumos
* Financiamiento
* Reintegro

Todos los movimientos deberán impactar automáticamente en los indicadores financieros.

---

# Flujo de Business Intelligence

Toda la información registrada por el sistema alimentará el Dashboard.

No existirán datos cargados manualmente para estadísticas.

Los indicadores serán calculados automáticamente a partir de:

* Pedidos
* Productos
* Producción
* Clientes
* Movimientos financieros
* Compras de insumos

---

# Objetivo Final

El sistema deberá permitir conocer en tiempo real el estado operativo, comercial, productivo y financiero de JAM Studio, brindando información confiable para la toma de decisiones.
