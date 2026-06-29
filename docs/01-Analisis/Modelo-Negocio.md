# Modelo de Negocio

| Proyecto             | I3D Business Intelligence |
| -------------------- | ------------------------- |
| Versión              | 1.0                       |
| Sprint               | Sprint 1                  |
| Estado               | En desarrollo             |
| Última actualización | 28/06/2026                |
| Responsable          | Stella M. Bernard         |

---

# Objetivo

Documentar el funcionamiento actual de JAM Studio con el fin de comprender sus procesos comerciales, productivos y financieros antes del diseño del sistema.

---

# Información General

## Nombre comercial

JAM Studio

## Cantidad de integrantes

Actualmente la empresa está conformada por dos personas.

## Organización

No existen roles estrictamente definidos.

Ambos integrantes participan en las tareas de:

* Atención al cliente.
* Ventas.
* Diseño.
* Producción.
* Administración.
* Gestión financiera.

El crecimiento de la empresa ha comenzado a generar dificultades para mantener el orden de la información, motivo por el cual surge la necesidad de desarrollar un sistema integral de gestión.

---

# Modelo Comercial

La empresa comercializa productos impresos en 3D tanto de catálogo como desarrollos personalizados.

Las solicitudes de los clientes provienen de múltiples canales, por lo que una venta puede registrarse incluso sin asociar un cliente específico.

Los principales canales de contacto incluyen:

* Redes sociales.
* Recomendaciones.
* Contactos personales.
* Ferias.
* Otros medios.

---

# Categorías de productos

Actualmente la empresa trabaja con las siguientes categorías:

* Diseño de soluciones
* Deco e iluminación
* Cultura y ferias
* Funcionales
* Arte y escultura
* Productos masivos
* Distribución de insumos
* Ingresos internos

Un mismo producto podrá pertenecer a una o varias categorías, ya que algunos desarrollos abarcan diferentes líneas de negocio.

---

# Modelo de Ventas

Cada venta podrá contener uno o varios productos.

El sistema deberá registrar:

* Estado del pago.
* Método de pago.
* Productos vendidos.
* Cantidades.
* Fechas.

Estados iniciales del pago:

* Pendiente
* Señado
* Pagado
* Entregado
* Terminado

Como mejora futura se contempla la posibilidad de incorporar pagos en cuotas.

---

# Producción

Cada producto vendido puede encontrarse en un estado de producción diferente.

Estados actuales:

* Pendiente
* Diseño
* Impresión
* Postprocesado
* Packaging
* Entrega
* Finalizado

Los estados pueden ser modificados por cualquiera de los integrantes de la empresa.

Una misma venta puede contener productos en distintos estados de producción de manera simultánea.

---

# Gestión Financiera

El sistema deberá permitir registrar manualmente:

* Ingresos.
* Egresos.
* Compras de insumos.

En una etapa futura se incorporará la gestión de proveedores.

---

# Necesidades de Business Intelligence

Los indicadores prioritarios definidos por la empresa son:

1. Balance neto mensual comparando los últimos seis meses.
2. Categoría con mayor volumen de ventas durante el mes.
3. Producto con mayor rentabilidad.
4. Estimación del dinero disponible en la cuenta de la empresa considerando ingresos y egresos registrados.

Estos indicadores constituirán la base del Dashboard principal del sistema.

---

# Conclusión

JAM Studio requiere una plataforma centralizada que permita gestionar de forma integrada la información comercial, productiva y financiera de la empresa.

El sistema deberá contemplar la gestión de productos con múltiples variantes, registrar el flujo completo desde la venta hasta la producción y proporcionar indicadores financieros y operativos confiables que apoyen la toma de decisiones estratégicas.

La arquitectura del sistema deberá ser escalable para incorporar futuras funcionalidades, como gestión de proveedores, pagos en cuotas y nuevos módulos administrativos.
